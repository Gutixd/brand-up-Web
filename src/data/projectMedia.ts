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
    { kind: 'video', ratio: 'reel', label: { es: 'Reel destacado', en: 'Featured reel' } },
    { kind: 'video', ratio: 'reel', label: { es: 'Segundo reel', en: 'Second reel' } },
    { kind: 'photo', ratio: 'square', label: { es: 'Foto del producto', en: 'Product shot' } },
    { kind: 'photo', ratio: 'wide', label: { es: 'Ambiente del local', en: 'In-store atmosphere' } },
  ],
  'jd-cargo-logistics': [
    { kind: 'photo', ratio: 'wide', label: { es: 'Home del sitio (desktop)', en: 'Homepage (desktop)' }, src: jdcargoDesktop },
    { kind: 'photo', ratio: 'tall', label: { es: 'Vista móvil', en: 'Mobile view' }, src: jdcargoMobile },
    { kind: 'photo', ratio: 'square', label: { es: 'Detalle del puerto', en: 'Port detail' }, src: jdcargoDetail },
    { kind: 'video', ratio: 'wide', label: { es: 'Recorrido del sitio', en: 'Site walkthrough' }, videoSrc: '/videos/jdcargo-tour.mp4' },
  ],
  'altitude': [
    { kind: 'photo', ratio: 'wide', label: { es: 'Sitio migrado (desktop)', en: 'Migrated site (desktop)' } },
    { kind: 'photo', ratio: 'tall', label: { es: 'Vista móvil', en: 'Mobile view' } },
    { kind: 'photo', ratio: 'square', label: { es: 'Panel / DNS', en: 'Dashboard / DNS' } },
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
    { kind: 'video', ratio: 'reel', label: { es: 'Reel institucional 1', en: 'Institutional reel 1' } },
    { kind: 'video', ratio: 'reel', label: { es: 'Reel institucional 2', en: 'Institutional reel 2' } },
    { kind: 'photo', ratio: 'wide', label: { es: 'Detrás de cámara', en: 'Behind the scenes' } },
  ],
  'superlunch': [
    { kind: 'photo', ratio: 'wide', label: { es: 'Identidad aplicada', en: 'Identity applied' } },
    { kind: 'photo', ratio: 'square', label: { es: 'Logo', en: 'Logo' } },
    { kind: 'photo', ratio: 'square', label: { es: 'Menú / pieza gráfica', en: 'Menu / graphic asset' } },
  ],
};
