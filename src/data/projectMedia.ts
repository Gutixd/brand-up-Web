// Media plan per project — drives the gallery on each project detail page.
// `ratio`: wide = 16/9 (desktop screenshot), tall = 3/4 (mobile/vertical photo),
// reel = 9/16 (vertical video), square = 1/1 (logo / product / asset).
// Each slot renders as an elegant placeholder until a real file is added:
// set `src` (photo, imported from src/assets) or `videoSrc` (video, a
// path under public/) and it swaps in automatically.
import type { ImageMetadata } from 'astro';
import type { L } from './services';

import jdcargoDesktop from '../assets/projects/gallery/jdcargo-desktop.webp';
import jdcargoMobile from '../assets/projects/gallery/jdcargo-mobile.webp';
import jdcargoDetail from '../assets/projects/gallery/jdcargo-detail.webp';
import musclecarHome from '../assets/projects/gallery/musclecarchile-home.webp';
import musclecarDetail from '../assets/projects/gallery/musclecarchile-detail.webp';
import aracnidaHome from '../assets/projects/gallery/aracnida-home.webp';
import aracnidaMobile from '../assets/projects/gallery/aracnida-mobile.webp';
import aracnidaProduct from '../assets/projects/gallery/aracnida-product.webp';
import superlunchPackaging from '../assets/projects/gallery/superlunch-packaging.webp';
import superlunchIcon from '../assets/projects/gallery/superlunch-icon.webp';
import altitudeDesktop from '../assets/projects/gallery/altitude-desktop.webp';
import altitudeDns from '../assets/projects/gallery/altitude-dns.webp';
import chachaInstagram from '../assets/projects/gallery/chachapollo-instagram.webp';
import bell1 from '../assets/projects/gallery/bellcollege-1.webp';
import bell2 from '../assets/projects/gallery/bellcollege-2.webp';
import bell3 from '../assets/projects/gallery/bellcollege-3.webp';
import bell4 from '../assets/projects/gallery/bellcollege-4.webp';
import micro1 from '../assets/projects/gallery/microterapias-1.webp';
import micro2 from '../assets/projects/gallery/microterapias-2.webp';
import microInstagram from '../assets/projects/gallery/microterapias-instagram.webp';
import duocInstagram from '../assets/projects/gallery/duocuc-instagram.webp';
import duocAdmision from '../assets/projects/gallery/duocuc-admision.webp';
import duoc3 from '../assets/projects/gallery/duocuc-3.webp';
import bschool1 from '../assets/projects/gallery/bschool-1.webp';
import bschool2 from '../assets/projects/gallery/bschool-2.webp';
import bschool3 from '../assets/projects/gallery/bschool-3.webp';
import bschool4 from '../assets/projects/gallery/bschool-4.webp';

export type MediaKind = 'photo' | 'video';
export type MediaRatio = 'wide' | 'tall' | 'reel' | 'square';

export interface MediaSlot {
  kind: MediaKind;
  ratio: MediaRatio;
  label: L;
  src?: ImageMetadata;
  videoSrc?: string;
}

export const PROJECT_MEDIA: Record<string, MediaSlot[]> = {
  'el-chacha-pollo': [
    { kind: 'video', ratio: 'reel', label: { es: 'Reel destacado', en: 'Featured reel' }, videoSrc: '/videos/chachapollo-reel1.mp4' },
    { kind: 'video', ratio: 'reel', label: { es: 'Reel de año nuevo', en: 'New Year reel' }, videoSrc: '/videos/chachapollo-reel2.mp4' },
    { kind: 'photo', ratio: 'tall', label: { es: 'Cuenta de Instagram', en: 'Instagram account' }, src: chachaInstagram },
  ],
  'jd-cargo-logistics': [
    { kind: 'photo', ratio: 'wide', label: { es: 'Home del sitio (desktop)', en: 'Homepage (desktop)' }, src: jdcargoDesktop },
    { kind: 'photo', ratio: 'tall', label: { es: 'Vista móvil', en: 'Mobile view' }, src: jdcargoMobile },
    { kind: 'photo', ratio: 'square', label: { es: 'Detalle del puerto', en: 'Port detail' }, src: jdcargoDetail },
    { kind: 'video', ratio: 'wide', label: { es: 'Recorrido del sitio', en: 'Site walkthrough' }, videoSrc: '/videos/jdcargo-tour.mp4' },
  ],
  'altitude': [
    { kind: 'photo', ratio: 'wide', label: { es: 'Sitio migrado (desktop)', en: 'Migrated site (desktop)' }, src: altitudeDesktop },
    { kind: 'photo', ratio: 'tall', label: { es: 'Vista móvil', en: 'Mobile view' } },
    { kind: 'photo', ratio: 'square', label: { es: 'Panel / DNS', en: 'Dashboard / DNS' }, src: altitudeDns },
  ],
  'musclecarchile': [
    { kind: 'photo', ratio: 'wide', label: { es: 'Tienda (desktop)', en: 'Store (desktop)' }, src: musclecarHome },
    { kind: 'photo', ratio: 'wide', label: { es: 'Detalle de producto', en: 'Product detail' }, src: musclecarDetail },
  ],
  'aseocool': [
    { kind: 'photo', ratio: 'wide', label: { es: 'Sitio (desktop)', en: 'Site (desktop)' } },
    { kind: 'photo', ratio: 'square', label: { es: 'Logo / identidad', en: 'Logo / identity' } },
    { kind: 'photo', ratio: 'tall', label: { es: 'Vista móvil', en: 'Mobile view' } },
    { kind: 'photo', ratio: 'wide', label: { es: 'Aplicaciones de marca', en: 'Brand applications' } },
  ],
  'aracnida-store': [
    { kind: 'photo', ratio: 'wide', label: { es: 'Home de la tienda', en: 'Store homepage' }, src: aracnidaHome },
    { kind: 'photo', ratio: 'tall', label: { es: 'Ficha de producto (móvil)', en: 'Product page (mobile)' }, src: aracnidaMobile },
    { kind: 'photo', ratio: 'square', label: { es: 'Producto destacado', en: 'Featured product' }, src: aracnidaProduct },
    { kind: 'video', ratio: 'wide', label: { es: 'Proceso de compra', en: 'Checkout flow' }, videoSrc: '/videos/aracnida-compra.mp4' },
  ],
  'templo-votivo-maipu': [
    { kind: 'photo', ratio: 'wide', label: { es: 'Afiche principal', en: 'Main poster' } },
    { kind: 'photo', ratio: 'square', label: { es: 'Pieza para redes 1', en: 'Social asset 1' } },
    { kind: 'photo', ratio: 'square', label: { es: 'Pieza para redes 2', en: 'Social asset 2' } },
    { kind: 'photo', ratio: 'tall', label: { es: 'Material impreso', en: 'Printed material' } },
  ],
  'bell-college': [
    { kind: 'photo', ratio: 'tall', label: { es: 'Afiche de admisión 2026', en: '2026 admissions poster' }, src: bell1 },
    { kind: 'photo', ratio: 'tall', label: { es: 'Pieza institucional 1', en: 'Institutional asset 1' }, src: bell2 },
    { kind: 'photo', ratio: 'tall', label: { es: 'Pieza institucional 2', en: 'Institutional asset 2' }, src: bell3 },
    { kind: 'photo', ratio: 'tall', label: { es: 'Pieza institucional 3', en: 'Institutional asset 3' }, src: bell4 },
  ],
  'superlunch': [
    { kind: 'photo', ratio: 'wide', label: { es: 'Packaging aplicado', en: 'Applied packaging' }, src: superlunchPackaging },
    { kind: 'photo', ratio: 'square', label: { es: 'Ícono de marca', en: 'Brand icon' }, src: superlunchIcon },
  ],
  'microterapias': [
    { kind: 'photo', ratio: 'tall', label: { es: 'Pieza educativa 1', en: 'Educational asset 1' }, src: micro1 },
    { kind: 'photo', ratio: 'tall', label: { es: 'Pieza educativa 2', en: 'Educational asset 2' }, src: micro2 },
    { kind: 'photo', ratio: 'tall', label: { es: 'Cuenta de Instagram', en: 'Instagram account' }, src: microInstagram },
    { kind: 'video', ratio: 'reel', label: { es: 'Contenido en video', en: 'Video content' }, videoSrc: '/videos/microterapias-reel.mp4' },
  ],
  'duoc-uc': [
    { kind: 'photo', ratio: 'tall', label: { es: 'Cuenta oficial @duocuc_cl', en: '@duocuc_cl official account' }, src: duocInstagram },
    { kind: 'photo', ratio: 'tall', label: { es: 'Cuenta de admisión', en: 'Admissions account' }, src: duocAdmision },
    { kind: 'photo', ratio: 'tall', label: { es: 'Comunidad Hub House Maipú', en: 'Hub House Maipú community' }, src: duoc3 },
    { kind: 'video', ratio: 'reel', label: { es: 'Tour de campus', en: 'Campus tour' }, videoSrc: '/videos/duocuc-reel1.mp4' },
    { kind: 'video', ratio: 'reel', label: { es: 'Cuenta anual', en: 'Annual showcase' }, videoSrc: '/videos/duocuc-reel2.mp4' },
  ],
  'bschool': [
    { kind: 'photo', ratio: 'tall', label: { es: 'Admisión 2026', en: '2026 admissions' }, src: bschool1 },
    { kind: 'photo', ratio: 'tall', label: { es: 'Programa NEE-TEA', en: 'NEE-TEA program' }, src: bschool2 },
    { kind: 'photo', ratio: 'tall', label: { es: 'Pieza de marca 1', en: 'Brand asset 1' }, src: bschool3 },
    { kind: 'photo', ratio: 'tall', label: { es: 'Pieza de marca 2', en: 'Brand asset 2' }, src: bschool4 },
  ],
};
