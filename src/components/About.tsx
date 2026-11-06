import { profile } from '../data/profile';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" eyebrow="about me" title="Passionate about building for the web">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] [&>*]:min-w-0">
        <div className="space-y-5 text-lg leading-relaxed text-slate-300">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {profile.highlights.map((h) => (
            <li key={h.title} className="card p-5 transition hover:border-teal-400/40">
              <i className={`bi ${h.icon} text-2xl text-teal-400`} />
              <h3 className="mt-3 font-semibold text-white">{h.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{h.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
