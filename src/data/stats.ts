// Cifras de la banda "En números" (inicio y nosotros).
//
// Solo datos comprobables: los conteos salen del propio sitio y el millón de
// views está confirmado por el equipo. No agregar porcentajes de resultado
// ("+300% engagement", "100 performance") sin una medición que los respalde.
import { PROJECTS } from './projects';
import { SERVICES } from './services';
import type { Locale } from '../i18n';

export interface Stat { val: string; suffix: string; prefix: string; lbl: string; }

export function siteStats(locale: Locale): Stat[] {
  const es = locale === 'es';
  const industries = new Set(PROJECTS.map((p) => p.industry)).size;
  return [
    { val: String(PROJECTS.length), suffix: '', prefix: '', lbl: es ? 'Proyectos en el portafolio' : 'Projects in the portfolio' },
    { val: '1', suffix: 'M+', prefix: '', lbl: es ? 'Views generadas para clientes' : 'Views generated for clients' },
    { val: String(SERVICES.length), suffix: '', prefix: '', lbl: es ? 'Áreas de servicio' : 'Service areas' },
    { val: String(industries), suffix: '', prefix: '', lbl: es ? 'Industrias atendidas' : 'Industries served' },
  ];
}
