import { useState } from 'react';
import { profile } from '../data/profile';
import Section from './Section';

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="contact"
      title="Let's work together"
      subtitle="Have a project, an opportunity or just want to say hi? Reach me by WhatsApp, email or LinkedIn."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 [&>*]:min-w-0">
        <ContactCard
          icon="bi-whatsapp"
          title="WhatsApp"
          value={profile.whatsapp.display}
          href={profile.whatsapp.url}
          action="Send a message"
          accent="from-emerald-400/25 to-emerald-600/10 text-emerald-300"
        />
        <ContactCard
          icon="bi-envelope-fill"
          title="Email"
          value={profile.email}
          href={`mailto:${profile.email}`}
          action="Write an email"
          accent="from-teal-400/25 to-navy-500/20 text-teal-300"
          copyValue={profile.email}
        />
        <ContactCard
          icon="bi-linkedin"
          title="LinkedIn"
          value="José Ruiz"
          href={profile.linkedin}
          action="View profile"
          accent="from-sky-400/25 to-navy-500/20 text-sky-300"
        />
      </div>
    </Section>
  );
}

interface CardProps {
  icon: string;
  title: string;
  value: string;
  href: string;
  action: string;
  accent: string;
  copyValue?: string;
}

function ContactCard({ icon, title, value, href, action, accent, copyValue }: CardProps) {
  const [copied, setCopied] = useState(false);
  const external = !href.startsWith('mailto:');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue!);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <div className="card flex items-center gap-4 p-5 transition hover:border-teal-400/40">
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl ${accent}`}>
        <i className={`bi ${icon}`} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-slate-400">{title}</p>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel="noreferrer"
          className="block truncate font-semibold text-white hover:text-teal-300"
          title={action}
        >
          {value}
        </a>
      </div>
      {copyValue && (
        <button
          onClick={copy}
          title={copied ? 'Copied!' : 'Copy'}
          aria-label={`Copy ${title}`}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
        >
          <i className={`bi ${copied ? 'bi-check2 text-teal-400' : 'bi-copy'}`} />
        </button>
      )}
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel="noreferrer"
        aria-label={action}
        title={action}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
      >
        <i className="bi bi-arrow-up-right" />
      </a>
    </div>
  );
}
