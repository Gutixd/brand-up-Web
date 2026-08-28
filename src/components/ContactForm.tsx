import { useState, type FormEvent } from 'react';
import { SITE } from '../data/site';

// Mini formulario profesional: chips clickeables para servicio/presupuesto,
// campos esenciales y envío real vía WhatsApp con el mensaje armado.

export interface FormLabels {
  name: string;
  email: string;
  company: string;
  service: string;
  servicePlaceholder: string;
  serviceOptions: string[];
  budget: string;
  budgetPlaceholder: string;
  budgetOptions: string[];
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  required: string;
  invalidEmail: string;
  phone?: string;
  serviceChips?: string;
  note?: string;
}

interface Props {
  labels: FormLabels;
  /** 'quote' shows budget chips too; 'contact' is the short version */
  variant?: 'contact' | 'quote';
  /** Idioma del mensaje que se arma para WhatsApp */
  locale?: 'es' | 'en';
}

// Rótulos del mensaje que llega al WhatsApp de la agencia. Antes estaban
// fijos en español, así que una consulta desde /en llegaba mezclada.
const WA_LABELS = {
  es: {
    head: 'Nueva solicitud desde brandup.cl',
    name: 'Nombre', email: 'Email', phone: 'Teléfono',
    service: 'Servicio', budget: 'Presupuesto', project: 'Proyecto',
  },
  en: {
    head: 'New enquiry from brandup.cl',
    name: 'Name', email: 'Email', phone: 'Phone',
    service: 'Service', budget: 'Budget', project: 'Project',
  },
} as const;

const input =
  'w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm text-paper placeholder:text-gray/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15 transition-all';

// 12px en celular para que la etiqueta se lea; 11px desde md como estaba.
const label = 'mb-1.5 block text-[12px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-gray';

export default function ContactForm({ labels, variant = 'contact', locale = 'es' }: Props) {
  const L = WA_LABELS[locale];
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const errs: Record<string, string> = {};
    if (!data.get('name')) errs.name = labels.required;
    const email = String(data.get('email') ?? '');
    if (!email) errs.email = labels.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = labels.invalidEmail;
    if (!data.get('message')) errs.message = labels.required;
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus('sending');
    try {
      data.set('service', service);
      data.set('budget', budget);
      data.set('_subject', L.head);
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('formspree error');

      // Conversión para Meta Ads (si el píxel está activo — ver Base.astro).
      const fbq = (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq;
      fbq?.('track', 'Lead');

      setStatus('ok');
      form.reset();
      setService('');
      setBudget('');
    } catch {
      setStatus('error');
    }
  }

  // ── Estado de éxito: el mensaje "despega" como la flecha del logo ──
  if (status === 'ok') {
    return (
      <div className="relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.06] px-8 py-14 text-center">
        {/* Flechas eco que suben de fondo (estilo B↑ del logo) */}
        <span className="bu-echo bu-echo--1" aria-hidden="true">↑</span>
        <span className="bu-echo bu-echo--2" aria-hidden="true">↑</span>
        <span className="bu-echo bu-echo--3" aria-hidden="true">↑</span>

        {/* Flecha principal del logo despegando */}
        <span className="bu-launch flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-[0_14px_40px_rgba(240,94,35,0.45)]">
          <svg width="34" height="38" viewBox="0 0 24 28" fill="none" aria-hidden="true" className="bu-launch__arrow">
            <path d="M12 25 V7" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
            <path d="M5 13 12 5.5 19 13" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </span>

        <p className="relative max-w-[38ch] font-display text-lg font-bold leading-snug text-paper">{labels.success}</p>
        <button
          onClick={() => setStatus('idle')}
          className="relative text-sm font-semibold text-gray underline underline-offset-4 transition-colors hover:text-accent"
        >
          {labels.name === 'Nombre' ? 'Enviar otro mensaje' : 'Send another message'}
        </button>

        <style>{`
          @keyframes buLaunchPop {
            0%   { transform: translateY(70px) scale(0.4); opacity: 0; }
            55%  { transform: translateY(-12px) scale(1.12); opacity: 1; }
            75%  { transform: translateY(4px) scale(0.97); }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
          @keyframes buArrowPulse {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-4px); }
          }
          @keyframes buEchoRise {
            0%   { transform: translateY(30px); opacity: 0; }
            25%  { opacity: 0.55; }
            100% { transform: translateY(-120px); opacity: 0; }
          }
          .bu-launch { animation: buLaunchPop 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
          .bu-launch__arrow { animation: buArrowPulse 1.6s ease-in-out 1s infinite; }
          .bu-echo {
            position: absolute;
            bottom: 8%;
            font-size: 26px;
            font-weight: 800;
            color: rgba(240, 94, 35, 0.5);
            pointer-events: none;
            animation: buEchoRise 2.2s ease-out infinite;
          }
          .bu-echo--1 { left: 18%; animation-delay: 0.4s; }
          .bu-echo--2 { left: 50%; font-size: 20px; animation-delay: 1.1s; }
          .bu-echo--3 { left: 78%; font-size: 30px; animation-delay: 1.7s; }
          @media (prefers-reduced-motion: reduce) {
            .bu-launch, .bu-launch__arrow, .bu-echo { animation: none; }
            .bu-echo { display: none; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Chips de servicio — selección con un clic */}
      <div>
        <span className={label}>{labels.serviceChips ?? labels.service}</span>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={labels.service}>
          {labels.serviceOptions.map((o) => {
            const active = service === o;
            return (
              <button
                key={o}
                type="button"
                aria-pressed={active}
                onClick={() => setService(active ? '' : o)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 md:py-2 text-[13px] font-semibold transition-all duration-200 ${
                  active
                    ? 'border-accent bg-accent text-white shadow-[0_8px_20px_rgba(240,94,35,0.35)]'
                    : 'border-line bg-white text-gray hover:border-accent/50 hover:text-paper'
                }`}
              >
                {active && <span className="bu-chip-up" aria-hidden="true">↑</span>}
                {o}
              </button>
            );
          })}
        </div>
      </div>

      {/* Presupuesto estimado — visible en contacto y cotización */}
      <div>
        <span className={label}>{labels.budget}</span>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={labels.budget}>
          {labels.budgetOptions.map((o) => {
            const active = budget === o;
            return (
              <button
                key={o}
                type="button"
                aria-pressed={active}
                onClick={() => setBudget(active ? '' : o)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 md:py-2 text-[13px] font-semibold transition-all duration-200 ${
                  active
                    ? 'border-paper bg-paper text-ink shadow-[0_8px_20px_rgba(35,35,35,0.28)]'
                    : 'border-line bg-white text-gray hover:border-paper/50 hover:text-paper'
                }`}
              >
                {active && <span className="bu-chip-up" aria-hidden="true">↑</span>}
                {o}
              </button>
            );
          })}
        </div>
      </div>

      {/* Datos de contacto */}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={label} htmlFor="f-name">{labels.name} *</label>
          <input id="f-name" name="name" className={input} autoComplete="name" />
          {errors.name && <p className="mt-1.5 text-xs font-semibold text-accent">{errors.name}</p>}
        </div>
        <div>
          <label className={label} htmlFor="f-email">{labels.email} *</label>
          <input id="f-email" name="email" type="email" className={input} autoComplete="email" />
          {errors.email && <p className="mt-1.5 text-xs font-semibold text-accent">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="f-phone">{labels.phone ?? labels.company}</label>
        <input id="f-phone" name="phone" type="tel" className={input} autoComplete="tel" placeholder="+56 9 …" />
      </div>

      <div>
        <label className={label} htmlFor="f-message">{labels.message} *</label>
        <textarea id="f-message" name="message" rows={4} className={input} />
        {errors.message && <p className="mt-1.5 text-xs font-semibold text-accent">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-[15px] font-bold text-white shadow-[0_14px_36px_rgba(240,94,35,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(240,94,35,0.42)] disabled:opacity-60"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5zm2.2.3 7.05 5.64a1.2 1.2 0 0 0 1.5 0L19.8 6.8a1 1 0 0 0-.62-.3H4.82a1 1 0 0 0-.62.3M4 8.6v8.9c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V8.6l-6.5 5.2a3.2 3.2 0 0 1-4 0z"/></svg>
          {status === 'sending' ? labels.sending : labels.submit}
          <span
            aria-hidden="true"
            className="bu-btn-up inline-block text-lg leading-none transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5"
          >
            ↑
          </span>
        </button>
        {labels.note && (
          <p className="flex items-center justify-center gap-2 text-center text-xs text-gray">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true"></span>
            {labels.note}
          </p>
        )}
      </div>

      {status === 'error' && <p className="text-sm font-semibold text-red-500" role="alert">{labels.error}</p>}

      <style>{`
        @keyframes buChipPop {
          0%   { transform: translateY(8px) scale(0); opacity: 0; }
          60%  { transform: translateY(-3px) scale(1.35); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes buBtnFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        .bu-chip-up {
          display: inline-block;
          font-weight: 800;
          line-height: 1;
          animation: buChipPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .bu-btn-up { animation: buBtnFloat 1.8s ease-in-out infinite; }
        .group:hover .bu-btn-up { animation: none; }
        @media (prefers-reduced-motion: reduce) {
          .bu-chip-up, .bu-btn-up { animation: none; }
        }
      `}</style>
    </form>
  );
}
