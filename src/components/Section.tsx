import type { ReactNode } from 'react';

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

/** Common wrapper for every page section (same spacing and heading style). */
export default function Section({ id, eyebrow, title, subtitle, children }: Props) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="container-page">
        <header className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-teal-400">
            <span className="text-slate-500">// </span>
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-slate-400">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
