import { profile } from '../data/profile';

const socials = [
  { label: 'GitHub', icon: 'bi-github', href: profile.github },
  { label: 'LinkedIn', icon: 'bi-linkedin', href: profile.linkedin },
  { label: 'WhatsApp', icon: 'bi-whatsapp', href: profile.whatsapp.url },
  { label: 'Email', icon: 'bi-envelope-fill', href: `mailto:${profile.email}` },
];

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target={s.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={s.label}
            title={s.label}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-300 transition hover:-translate-y-0.5 hover:border-teal-400/60 hover:text-teal-300"
          >
            <i className={`bi ${s.icon}`} />
          </a>
        </li>
      ))}
    </ul>
  );
}
