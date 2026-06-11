import { useState, type FormEvent } from 'react';

// TODO: crear el formulario en https://formspree.io y pegar aquí el endpoint
// (ej: 'https://formspree.io/f/abcdwxyz'). Hasta entonces el envío mostrará error.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TODO_REEMPLAZAR';

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
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('send failed');
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
        className="w-full rounded-full bg-accent px-8 py-4 font-semibold text-ink transition-transform hover:scale-[1.02] disabled:opacity-60 md:w-auto"
      >
        {status === 'sending' ? labels.sending : labels.submit}
      </button>

      {status === 'ok' && <p className="text-sm text-accent" role="status">{labels.success}</p>}
      {status === 'error' && <p className="text-sm text-red-400" role="alert">{labels.error}</p>}
    </form>
  );
}
