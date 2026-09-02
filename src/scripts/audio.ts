// ═══════════════════════════════════════════════════════════════════
// AudioManager — sistema de sonido de interfaz de BrandUp.
//
// Filosofía: 80% silencio / 20% sonido. El audio existe para dar peso a
// una interacción, nunca para decorar. Si un sonido no aporta significado,
// no va.
//
// Todo se SINTETIZA con Web Audio API en vez de cargar archivos:
//   · 0 KB de assets, 0 requests, nada que precargar ni que falle en 404
//   · control real de pitch/volumen/envolvente por evento
//   · variación sutil en cada repetición (no suena mecánico)
// Aun así el sistema acepta samples: `register()` permite añadir un mp3
// más adelante sin tocar los puntos de llamada (ver README en /sounds).
//
// Un único AudioContext para toda la sesión, creado recién en el primer
// gesto del usuario (política de autoplay de los navegadores).
// ═══════════════════════════════════════════════════════════════════

export type SoundName =
  | 'hoverSoft'
  | 'hoverProject'
  | 'click'
  | 'transition'
  | 'menuOpen'
  | 'menuClose'
  | 'counterTick'
  | 'counterDone'
  | 'signature'
  | 'scrollCue';

/** Slugs reales de services.ts — cada servicio tiene su timbre. */
export type ServiceSlug =
  | 'diseno-web'
  | 'ecommerce'
  | 'branding'
  | 'contenido-reels'
  | 'publicidad-digital'
  | 'automatizaciones-ia'
  | 'marketing-growth';

const STORAGE_KEY = 'brandup:sound';

/** Sonidos "de ambiente" que se silencian con prefers-reduced-motion. */
const AMBIENT: ReadonlySet<string> = new Set([
  'hoverSoft', 'hoverProject', 'scrollCue', 'counterTick', 'counterDone',
]);

interface ToneOpts {
  freq: number;
  freqTo?: number;
  type?: OscillatorType;
  dur?: number;
  gain?: number;
  attack?: number;
  /** Corte del lowpass; sin esto los armónicos altos suenan "baratos". */
  cutoff?: number;
  cutoffTo?: number;
  q?: number;
  delay?: number;
  pan?: number;
}

interface NoiseOpts {
  dur?: number;
  gain?: number;
  band: number;
  bandTo?: number;
  q?: number;
  delay?: number;
  pan?: number;
}

class AudioManager {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;

  private enabled = false;
  private reduced = false;
  private coarsePointer = false;

  /** Anti-spam: último disparo por clave de sonido. */
  private lastPlayed = new Map<string, number>();
  /** Límite de voces simultáneas — evita el caos al barrer el cursor. */
  private voices = 0;
  private static readonly MAX_VOICES = 4;

  private listeners = new Set<(on: boolean) => void>();
  private samples = new Map<string, AudioBuffer>();

  constructor() {
    if (typeof window === 'undefined') return;

    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.coarsePointer = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // La preferencia manda por sobre todo, pero nunca se auto-activa:
    // el AudioContext solo nace tras un gesto real del usuario.
    try {
      this.enabled = localStorage.getItem(STORAGE_KEY) === 'on';
    } catch {
      this.enabled = false;
    }
  }

  // ── Estado ────────────────────────────────────────────────────────
  isEnabled() { return this.enabled; }
  /** En mobile no hay hover: el sistema existe pero es mucho más callado. */
  isCoarsePointer() { return this.coarsePointer; }
  prefersReduced() { return this.reduced; }

  onChange(cb: (on: boolean) => void) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private emit() {
    this.listeners.forEach((cb) => cb(this.enabled));
  }

  enable() {
    this.enabled = true;
    try { localStorage.setItem(STORAGE_KEY, 'on'); } catch { /* modo privado */ }
    this.ensureContext();
    this.ctx?.resume().catch(() => {});
    this.emit();
  }

  disable() {
    this.enabled = false;
    try { localStorage.setItem(STORAGE_KEY, 'off'); } catch { /* modo privado */ }
    // Corta lo que esté sonando con un fade corto (nunca un corte seco).
    if (this.ctx && this.master) {
      const now = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setValueAtTime(this.master.gain.value, now);
      this.master.gain.linearRampToValueAtTime(0, now + 0.06);
      window.setTimeout(() => {
        if (!this.enabled) this.ctx?.suspend().catch(() => {});
      }, 120);
    }
    this.emit();
  }

  toggle() {
    if (this.enabled) this.disable();
    else this.enable();
    return this.enabled;
  }

  // ── Contexto ──────────────────────────────────────────────────────
  private ensureContext(): AudioContext | null {
    if (this.ctx) return this.ctx;
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    try {
      this.ctx = new Ctor();
      this.master = this.ctx.createGain();
      this.master.gain.value = 1;
      this.master.connect(this.ctx.destination);
    } catch {
      this.ctx = null;
    }
    return this.ctx;
  }

  /** Ruido blanco reutilizable (1s) para whooshes y snaps. */
  private getNoise(ctx: AudioContext): AudioBuffer {
    if (this.noiseBuffer) return this.noiseBuffer;
    const len = ctx.sampleRate;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buf;
    return buf;
  }

  /**
   * ¿Se puede sonar ahora? Chequea preferencia, contexto, reduced-motion,
   * límite de voces y anti-spam por sonido.
   */
  private canPlay(key: string, throttleMs: number, ambient: boolean): AudioContext | null {
    if (!this.enabled) return null;
    if (ambient && this.reduced) return null;
    if (this.voices >= AudioManager.MAX_VOICES) return null;

    const now = performance.now();
    const last = this.lastPlayed.get(key) ?? -Infinity;
    if (now - last < throttleMs) return null;

    const ctx = this.ensureContext();
    if (!ctx) return null;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});

    this.lastPlayed.set(key, now);
    return ctx;
  }

  private trackVoice(node: AudioScheduledSourceNode) {
    this.voices++;
    node.addEventListener('ended', () => { this.voices = Math.max(0, this.voices - 1); }, { once: true });
  }

  private out(ctx: AudioContext, pan?: number): AudioNode {
    if (!this.master) return ctx.destination;
    if (pan === undefined || typeof ctx.createStereoPanner !== 'function') return this.master;
    const p = ctx.createStereoPanner();
    p.pan.value = Math.max(-1, Math.min(1, pan));
    p.connect(this.master);
    return p;
  }

  // ── Voces base ────────────────────────────────────────────────────
  private tone(ctx: AudioContext, o: ToneOpts) {
    const {
      freq, freqTo, type = 'sine', dur = 0.08, gain = 0.08,
      attack = 0.004, cutoff, cutoffTo, q = 0.7, delay = 0, pan,
    } = o;

    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    osc.type = type;
    // ±8 cents de variación: dos repeticiones nunca son idénticas.
    osc.detune.value = (Math.random() - 0.5) * 16;
    osc.frequency.setValueAtTime(freq, t0);
    if (freqTo !== undefined) osc.frequency.exponentialRampToValueAtTime(Math.max(1, freqTo), t0 + dur);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

    let node: AudioNode = osc;
    if (cutoff !== undefined) {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.Q.value = q;
      f.frequency.setValueAtTime(cutoff, t0);
      if (cutoffTo !== undefined) f.frequency.exponentialRampToValueAtTime(Math.max(80, cutoffTo), t0 + dur);
      osc.connect(f);
      node = f;
    }
    node.connect(g);
    g.connect(this.out(ctx, pan));

    this.trackVoice(osc);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  private noise(ctx: AudioContext, o: NoiseOpts) {
    const { dur = 0.12, gain = 0.06, band, bandTo, q = 1.1, delay = 0, pan } = o;
    const t0 = ctx.currentTime + delay;

    const src = ctx.createBufferSource();
    src.buffer = this.getNoise(ctx);
    src.loop = true;

    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.Q.value = q;
    f.frequency.setValueAtTime(band, t0);
    if (bandTo !== undefined) f.frequency.exponentialRampToValueAtTime(Math.max(60, bandTo), t0 + dur);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + Math.min(0.02, dur * 0.3));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

    src.connect(f); f.connect(g); g.connect(this.out(ctx, pan));
    this.trackVoice(src);
    src.start(t0);
    src.stop(t0 + dur + 0.02);
  }

  /** Permite sustituir cualquier sonido sintetizado por un sample real. */
  async register(key: string, url: string) {
    const ctx = this.ensureContext();
    if (!ctx) return;
    try {
      const res = await fetch(url);
      const buf = await ctx.decodeAudioData(await res.arrayBuffer());
      this.samples.set(key, buf);
    } catch { /* si falla, sigue sonando el sintetizado */ }
  }

  private playSample(ctx: AudioContext, key: string, gain: number, pan?: number): boolean {
    const buf = this.samples.get(key);
    if (!buf) return false;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const g = ctx.createGain();
    g.gain.value = gain;
    src.connect(g); g.connect(this.out(ctx, pan));
    this.trackVoice(src);
    src.start();
    return true;
  }

  // ── Sonidos de interfaz ───────────────────────────────────────────
  play(name: SoundName, opts: { pan?: number } = {}) {
    const ambient = AMBIENT.has(name);
    // Los hover se pisan más seguido que un click, por eso el throttle
    // no es uno solo para todo.
    const throttle = name === 'counterTick' ? 60 : ambient ? 170 : 90;
    const ctx = this.canPlay(name, throttle, ambient);
    if (!ctx) return;

    if (this.playSample(ctx, name, 0.9, opts.pan)) return;

    switch (name) {
      case 'hoverSoft':
        this.tone(ctx, { freq: 1760, type: 'sine', dur: 0.05, gain: 0.05, cutoff: 4200, pan: opts.pan });
        break;

      case 'hoverProject':
        // Whoosh direccional: el barrido de frecuencia y el paneo siguen
        // el lado por donde entró el cursor.
        this.noise(ctx, {
          dur: 0.16, gain: 0.055, band: 700, bandTo: 2100, q: 0.9, pan: opts.pan,
        });
        break;

      case 'click':
        this.tone(ctx, { freq: 620, freqTo: 480, type: 'triangle', dur: 0.07, gain: 0.11, cutoff: 3200 });
        this.tone(ctx, { freq: 1240, type: 'sine', dur: 0.045, gain: 0.045, cutoff: 5200 });
        break;

      case 'transition':
        this.noise(ctx, { dur: 0.3, gain: 0.085, band: 1600, bandTo: 320, q: 0.8 });
        this.tone(ctx, { freq: 300, freqTo: 180, type: 'sine', dur: 0.26, gain: 0.05, cutoff: 1200 });
        break;

      case 'menuOpen':
        this.tone(ctx, { freq: 420, type: 'square', dur: 0.05, gain: 0.045, cutoff: 1500 });
        this.tone(ctx, { freq: 660, type: 'triangle', dur: 0.1, gain: 0.07, cutoff: 2600, delay: 0.045 });
        break;

      case 'menuClose':
        this.noise(ctx, { dur: 0.2, gain: 0.06, band: 1500, bandTo: 400, q: 0.9 });
        break;

      case 'counterTick':
        this.tone(ctx, { freq: 2100, type: 'sine', dur: 0.025, gain: 0.03, cutoff: 6000 });
        break;

      case 'counterDone':
        this.tone(ctx, { freq: 880, type: 'sine', dur: 0.1, gain: 0.08, cutoff: 4000 });
        this.tone(ctx, { freq: 1320, type: 'sine', dur: 0.14, gain: 0.05, cutoff: 5000, delay: 0.03 });
        break;

      case 'scrollCue':
        this.noise(ctx, { dur: 0.22, gain: 0.045, band: 500, bandTo: 1400, q: 0.7 });
        break;

      case 'signature':
        this.signature(ctx);
        break;
    }
  }

  /**
   * BrandUp Signature — tres armónicos en Re, escalonados, con ataque
   * suave y cola corta. Es el único sonido que se permite "cantar":
   * aparece solo en el CTA final, para que siga sintiéndose especial.
   */
  private signature(ctx: AudioContext) {
    const notes = [587.33, 880, 1174.66]; // D5 · A5 · D6
    notes.forEach((freq, i) => {
      this.tone(ctx, {
        freq,
        type: 'sine',
        dur: 0.55 - i * 0.08,
        gain: i === 0 ? 0.1 : 0.065,
        attack: 0.02,
        cutoff: 5200,
        delay: i * 0.075,
      });
    });
    // Aire de fondo, casi inaudible: le da cuerpo sin ensuciar.
    this.noise(ctx, { dur: 0.5, gain: 0.022, band: 2400, bandTo: 900, q: 0.6, delay: 0.02 });
  }

  /**
   * Un timbre por servicio, todos de la misma familia: misma envolvente
   * corta y filtrada, distinta intención. El objetivo es que se sientan
   * "interfaz de estudio", no efectos de aplicación.
   */
  playService(slug: ServiceSlug | string) {
    const ctx = this.canPlay(`svc:${slug}`, 190, true);
    if (!ctx) return;
    if (this.playSample(ctx, `svc:${slug}`, 0.9)) return;

    switch (slug) {
      case 'diseno-web': // UI digital, limpio y técnico
        this.tone(ctx, { freq: 1320, type: 'square', dur: 0.035, gain: 0.038, cutoff: 2600 });
        this.tone(ctx, { freq: 2640, type: 'sine', dur: 0.05, gain: 0.03, cutoff: 6000, delay: 0.012 });
        break;

      case 'ecommerce': // metálico elegante — intercambio, no caja registradora
        this.tone(ctx, { freq: 784, type: 'triangle', dur: 0.13, gain: 0.06, cutoff: 3600 });
        this.tone(ctx, { freq: 1176, type: 'triangle', dur: 0.1, gain: 0.035, cutoff: 4800, delay: 0.018 });
        break;

      case 'branding': // tono musical cálido
        this.tone(ctx, { freq: 659.25, type: 'sine', dur: 0.24, gain: 0.07, attack: 0.014, cutoff: 3400 });
        this.tone(ctx, { freq: 987.77, type: 'sine', dur: 0.18, gain: 0.035, attack: 0.016, cutoff: 4200, delay: 0.02 });
        break;

      case 'contenido-reels': // snap de obturador, muy corto
        this.noise(ctx, { dur: 0.045, gain: 0.075, band: 3200, bandTo: 1500, q: 1.6 });
        this.tone(ctx, { freq: 1900, type: 'sine', dur: 0.03, gain: 0.03, cutoff: 6000 });
        break;

      case 'publicidad-digital': // tono ascendente
        this.tone(ctx, { freq: 520, freqTo: 900, type: 'triangle', dur: 0.15, gain: 0.06, cutoff: 3200, cutoffTo: 5000 });
        break;

      case 'automatizaciones-ia': // pulsos electrónicos, sin cliché robótico
        [1400, 1750, 2100].forEach((f, i) =>
          this.tone(ctx, { freq: f, type: 'square', dur: 0.028, gain: 0.026, cutoff: 3000, delay: i * 0.032 }),
        );
        break;

      case 'marketing-growth': // progreso: sube y se asienta
        this.tone(ctx, { freq: 440, freqTo: 740, type: 'triangle', dur: 0.22, gain: 0.06, attack: 0.01, cutoff: 2800, cutoffTo: 4600 });
        this.tone(ctx, { freq: 1480, type: 'sine', dur: 0.12, gain: 0.025, cutoff: 5200, delay: 0.12 });
        break;

      default:
        this.tone(ctx, { freq: 1500, type: 'sine', dur: 0.05, gain: 0.045, cutoff: 4200 });
    }
  }
}

export const audio = new AudioManager();
