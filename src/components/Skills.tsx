import { skillAreas, technologies } from '../data/skills';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="My technical knowledge" subtitle="Tools and areas I work with every day.">
      <div className="grid gap-5 md:grid-cols-3">
        {skillAreas.map((area) => (
          <article key={area.title} className="card group p-7 transition hover:-translate-y-1 hover:border-teal-400/40">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/20 to-navy-500/30 text-2xl text-teal-300 transition group-hover:scale-110">
              <i className={`bi ${area.icon}`} />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-white">{area.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-400">{area.text}</p>
          </article>
        ))}
      </div>

      <ul className="mt-10 flex flex-wrap gap-3">
        {technologies.map((t) => (
          <li
            key={t.name}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-teal-400/50 hover:text-teal-300"
          >
            <i className={`bi ${t.icon} text-teal-400`} />
            {t.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
