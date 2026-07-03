import { useState, type FormEvent } from 'react';
import { SITE } from '../data/site';

// Envío real vía WhatsApp: arma el mensaje con los datos del formulario y
// abre el chat de la agencia con todo pre-escrito. Cero dependencias externas.

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
}

interface Props {
  labels: FormLabels;
  /** 'quote' shows service + budget selectors; 'contact' is the short version */
  variant?: 'contact' | 'quote';
}

const input =
  'w-full rounded-lg border border-line bg-ink-2 px-4 py-3 text-sm text-paper placeholder:text-gray focus:border-accent focus:outline-none transition-colors';

export default function ContactForm({ labels, variant = 'contact' }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

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
      if (get('company')) lines.push(`*Empresa:* ${get('company')}`);
      if (get('service')) lines.push(`*Servicio:* ${get('service')}`);
      if (get('budget')) lines.push(`*Presupuesto:* ${get('budget')}`);
      lines.push('', '*Proyecto:*', get('message'));

      const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
      const win = window.open(url, '_blank', 'noopener');
      if (!win) window.location.href = url;
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm text-gray" htmlFor="f-name">{labels.name} *</label>
          <input id="f-name" name="name" className={input} autoComplete="name" />
          {errors.name && <p className="mt-1 text-xs text-accent">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-gray" htmlFor="f-email">{labels.email} *</label>
          <input id="f-email" name="email" type="email" className={input} autoComplete="email" />
          {errors.email && <p className="mt-1 text-xs text-accent">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-gray" htmlFor="f-company">{labels.company}</label>
        <input id="f-company" name="company" className={input} autoComplete="organization" />
      </div>

      {variant === 'quote' && (
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm text-gray" htmlFor="f-service">{labels.service}</label>
            <select id="f-service" name="service" className={input} defaultValue="">
              <option value="" disabled>{labels.servicePlaceholder}</option>
              {labels.serviceOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-gray" htmlFor="f-budget">{labels.budget}</label>
            <select id="f-budget" name="budget" className={input} defaultValue="">
              <option value="" disabled>{labels.budgetPlaceholder}</option>
              {labels.budgetOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
      )}

      <div>
        <label className="mb-1.5 block text-sm text-gray" htmlFor="f-message">{labels.message} *</label>
        <textarea id="f-message" name="message" rows={5} className={input} />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 font-semibold text-ink transition-transform hover:scale-[1.02] disabled:opacity-60 md:w-auto"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.43-9.88 9.9-9.88a9.82 9.82 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.9 7 9.9 9.9 0 0 1-9.9 9.87m8.42-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.4"/></svg>
        {status === 'sending' ? labels.sending : labels.submit}
      </button>

      {status === 'ok' && <p className="text-sm font-semibold text-accent" role="status">{labels.success}</p>}
      {status === 'error' && <p className="text-sm text-red-400" role="alert">{labels.error}</p>}
    </form>
  );
}
