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
}

const input =
  'w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm text-paper placeholder:text-gray/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15 transition-all';

const label = 'mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-gray';

export default function ContactForm({ labels, variant = 'contact' }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
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
      const get = (k: string) => String(data.get(k) ?? '').trim();
      const lines: string[] = ['*Nueva solicitud desde brandup.cl*', ''];
      lines.push(`*Nombre:* ${get('name')}`);
      lines.push(`*Email:* ${get('email')}`);
      if (get('phone')) lines.push(`*Teléfono:* ${get('phone')}`);
      if (service) lines.push(`*Servicio:* ${service}`);
      if (budget) lines.push(`*Presupuesto:* ${budget}`);
      lines.push('', '*Proyecto:*', get('message'));

      const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
      const win = window.open(url, '_blank', 'noopener');
      if (!win) window.location.href = url;
      setStatus('ok');
      form.reset();
      setService('');
      setBudget('');
    } catch {
      setStatus('error');
    }
  }

  // ── Estado de éxito: tarjeta con check ─────────────────────────────
  if (status === 'ok') {
    return (
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-accent/25 bg-accent/[0.06] px-8 py-14 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-[0_14px_36px_rgba(240,94,35,0.4)]">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4.5 12.5 10 18 19.5 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="max-w-[38ch] font-display text-lg font-bold leading-snug text-paper">{labels.success}</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-gray underline underline-offset-4 transition-colors hover:text-accent"
        >
          {labels.name === 'Nombre' ? 'Enviar otro mensaje' : 'Send another message'}
        </button>
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
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  active
                    ? 'border-accent bg-accent text-white shadow-[0_8px_20px_rgba(240,94,35,0.35)]'
                    : 'border-line bg-white text-gray hover:border-accent/50 hover:text-paper'
                }`}
              >
                {o}
              </button>
            );
          })}
        </div>
      </div>

      {/* Presupuesto (solo cotización) */}
      {variant === 'quote' && (
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
                  className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                    active
                      ? 'border-paper bg-paper text-ink'
                      : 'border-line bg-white text-gray hover:border-paper/50 hover:text-paper'
                  }`}
                >
                  {o}
                </button>
              );
            })}
          </div>
        </div>
      )}

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
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-[15px] font-bold text-white shadow-[0_14px_36px_rgba(240,94,35,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(240,94,35,0.42)] disabled:opacity-60"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.43-9.88 9.9-9.88a9.82 9.82 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.9 7 9.9 9.9 0 0 1-9.9 9.87m8.42-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.4"/></svg>
          {status === 'sending' ? labels.sending : labels.submit}
        </button>
        {labels.note && (
          <p className="flex items-center justify-center gap-2 text-center text-xs text-gray">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true"></span>
            {labels.note}
          </p>
        )}
      </div>

      {status === 'error' && <p className="text-sm font-semibold text-red-500" role="alert">{labels.error}</p>}
    </form>
  );
}
