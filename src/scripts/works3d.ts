// WebGL layer for /trabajos — Three.js planes synced to each project's
// DOM media panel. Each plane bends with scroll velocity and reacts to
// hover (color/RGB shift + swap to a looping video texture for featured
// projects). Degrades gracefully: if WebGL is unavailable, reduced
// motion is requested, or anything throws, the DOM images stay visible.
import * as THREE from 'three';

interface Item {
  el: HTMLElement;          // .wrow__media (the DOM target rect)
  mesh: THREE.Mesh;
  mat: THREE.ShaderMaterial;
  baseTex: THREE.Texture;
  videoSrc: string;
  video: HTMLVideoElement | null;
  videoTex: THREE.VideoTexture | null;
  hover: number;            // eased 0..1
  hoverTarget: number;
}

let raf = 0;
let renderer: THREE.WebGLRenderer | null = null;
let cleanup: (() => void) | null = null;

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

const VERT = /* glsl */`
  uniform float uVelocity;   // scroll velocity (px/frame, clamped)
  uniform float uHover;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    // Curva el plano según la velocidad de scroll (efecto "papel al viento")
    float bend = sin(uv.x * 3.14159) * uVelocity * 0.9;
    p.z += bend;
    // Al hover, un leve abombado hacia el usuario
    p.z += sin(uv.x * 3.14159) * sin(uv.y * 3.14159) * uHover * 12.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const FRAG = /* glsl */`
  precision highp float;
  uniform sampler2D uTex;
  uniform float uHover;
  uniform float uVelocity;
  varying vec2 vUv;

  void main() {
    // Zoom sutil al hover
    vec2 uv = (vUv - 0.5) * (1.0 - uHover * 0.06) + 0.5;
    // Aberración cromática guiada por hover + velocidad
    float shift = (uHover * 0.006) + abs(uVelocity) * 0.004;
    float r = texture2D(uTex, uv + vec2(shift, 0.0)).r;
    float g = texture2D(uTex, uv).g;
    float b = texture2D(uTex, uv - vec2(shift, 0.0)).b;
    vec3 col = vec3(r, g, b);
    // En reposo: desaturado y oscurecido; al hover: color pleno
    float gray = dot(col, vec3(0.299, 0.587, 0.114));
    vec3 rest = mix(vec3(gray), col, 0.55) * 0.72;
    col = mix(rest, col, uHover);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function initWorks3D() {
  destroyWorks3D();

  const section = document.getElementById('works3d');
  const canvas = document.getElementById('works3d-canvas') as HTMLCanvasElement | null;
  if (!section || !canvas) return;
  if (reducedMotion() || !hasWebGL()) return;

  const panels = Array.from(section.querySelectorAll<HTMLElement>('[data-webgl-media]'));
  if (!panels.length) return;

  let W = window.innerWidth;
  let H = window.innerHeight;

  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch {
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H, false);

  const scene = new THREE.Scene();
  // Cámara ortográfica en espacio de píxeles: 1 unidad = 1px, origen centro.
  const camera = new THREE.OrthographicCamera(-W / 2, W / 2, H / 2, -H / 2, 1, 1000);
  camera.position.z = 100;

  const loader = new THREE.TextureLoader();
  loader.crossOrigin = 'anonymous';
  const geo = new THREE.PlaneGeometry(1, 1, 24, 24);
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const items: Item[] = panels.map((el) => {
    const texUrl = el.dataset.texture || '';
    const mode = el.dataset.mode || 'cover';
    const gradient = el.dataset.gradient || '#222';

    // Textura base: si es "cover" cargamos la imagen; si es "logo",
    // pintamos gradiente + logo en un canvas 2D para tener una textura
    // uniforme y bonita.
    let baseTex: THREE.Texture;
    if (mode === 'cover' && texUrl) {
      baseTex = loader.load(texUrl);
      baseTex.colorSpace = THREE.SRGBColorSpace;
    } else {
      baseTex = makeLogoTexture(gradient, texUrl);
    }

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTex: { value: baseTex },
        uHover: { value: 0 },
        uVelocity: { value: 0 },
      },
      vertexShader: VERT,
      fragmentShader: FRAG,
    });

    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const item: Item = {
      el, mesh, mat, baseTex,
      videoSrc: el.dataset.videoSrc || '',
      video: null, videoTex: null,
      hover: 0, hoverTarget: 0,
    };

    if (canHover) {
      el.addEventListener('mouseenter', () => {
        item.hoverTarget = 1;
        if (item.videoSrc) ensureVideo(item);
      });
      el.addEventListener('mouseleave', () => {
        item.hoverTarget = 0;
        item.video?.pause();
      });
    }

    return item;
  });

  function ensureVideo(item: Item) {
    if (item.video) { item.video.play().catch(() => {}); return; }
    const v = document.createElement('video');
    v.src = item.videoSrc;
    v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'auto';
    v.crossOrigin = 'anonymous';
    item.video = v;
    const vt = new THREE.VideoTexture(v);
    vt.colorSpace = THREE.SRGBColorSpace;
    item.videoTex = vt;
    v.play().then(() => { item.mat.uniforms.uTex.value = vt; }).catch(() => {});
  }

  // ── Posicionar cada plano sobre el rect de su panel DOM ───────────
  function layout(item: Item) {
    const r = item.el.getBoundingClientRect();
    // Panel oculto (filtro) o fuera de tamaño → escondemos el plano
    if (r.width < 2 || r.height < 2 || item.el.offsetParent === null) {
      item.mesh.visible = false;
      return;
    }
    item.mesh.visible = true;
    item.mesh.scale.set(r.width, r.height, 1);
    // rect → coords de cámara (origen centro, Y hacia arriba)
    item.mesh.position.x = r.left + r.width / 2 - W / 2;
    item.mesh.position.y = -(r.top + r.height / 2 - H / 2);
  }

  // Velocidad de scroll suavizada
  let lastScroll = window.scrollY;
  let velocity = 0;
  let painted = false;

  function frame() {
    const cur = window.scrollY;
    const raw = cur - lastScroll;
    lastScroll = cur;
    // clamp y suavizado
    velocity += (Math.max(-40, Math.min(40, raw)) - velocity) * 0.12;
    const velNorm = velocity / 40; // -1..1 aprox

    for (const item of items) {
      layout(item);
      if (!item.mesh.visible) continue;
      item.hover += (item.hoverTarget - item.hover) * 0.12;
      item.mat.uniforms.uHover.value = item.hover;
      item.mat.uniforms.uVelocity.value = velNorm;
      if (item.videoTex) item.videoTex.needsUpdate = true;
    }
    renderer!.render(scene, camera);
    // Recién cuando el primer frame ya se pintó, ocultamos las imágenes
    // del DOM y revelamos el canvas: nunca hay un flash de paneles vacíos.
    if (!painted) {
      painted = true;
      document.documentElement.classList.add('webgl-on');
      canvas.style.opacity = '1';
    }
    raf = requestAnimationFrame(frame);
  }

  function onResize() {
    W = window.innerWidth; H = window.innerHeight;
    renderer!.setSize(W, H, false);
    camera.left = -W / 2; camera.right = W / 2;
    camera.top = H / 2; camera.bottom = -H / 2;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', onResize, { passive: true });

  raf = requestAnimationFrame(frame);

  cleanup = () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', onResize);
    document.documentElement.classList.remove('webgl-on');
    items.forEach((it) => {
      it.video?.pause();
      it.baseTex.dispose();
      it.videoTex?.dispose();
      it.mat.dispose();
    });
    geo.dispose();
    renderer?.dispose();
    renderer = null;
  };
}

export function destroyWorks3D() {
  if (cleanup) { cleanup(); cleanup = null; }
}

// Pinta un gradiente + logo centrado en un canvas 2D → textura Three.
function makeLogoTexture(color: string, logoUrl: string): THREE.Texture {
  const size = 1024;
  const c = document.createElement('canvas');
  c.width = size; c.height = Math.round(size * 0.75);
  const ctx = c.getContext('2d')!;
  // Fondo: color de marca del proyecto con un leve degradado diagonal
  const grad = ctx.createLinearGradient(0, 0, c.width, c.height);
  grad.addColorStop(0, color);
  grad.addColorStop(1, shade(color, -18));
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, c.width, c.height);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;

  if (logoUrl) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const maxW = c.width * 0.5;
      const maxH = c.height * 0.42;
      const ratio = Math.min(maxW / img.width, maxH / img.height);
      const w = img.width * ratio;
      const h = img.height * ratio;
      ctx.drawImage(img, (c.width - w) / 2, (c.height - h) / 2, w, h);
      tex.needsUpdate = true;
    };
    img.src = logoUrl;
  }
  return tex;
}

// Aclara/oscurece un color hex por un porcentaje.
function shade(hex: string, pct: number): string {
  const m = hex.replace('#', '');
  const full = m.length === 3 ? m.split('').map((x) => x + x).join('') : m;
  const num = parseInt(full, 16);
  const amt = Math.round(2.55 * pct);
  const r = Math.max(0, Math.min(255, (num >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + amt));
  const b = Math.max(0, Math.min(255, (num & 0xff) + amt));
  return `rgb(${r}, ${g}, ${b})`;
}
