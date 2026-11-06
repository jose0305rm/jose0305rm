import { projects, type Project } from '../data/projects';
import Section from './Section';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="projects"
      title="Featured work"
      subtitle="Projects I have built to apply and strengthen my skills."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 [&>*]:min-w-0">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <p className="mt-12 text-center text-slate-400">
        More projects coming soon. Meanwhile, check my{' '}
        <a href="https://github.com/jose0305rm" target="_blank" rel="noreferrer" className="font-medium text-teal-400 hover:underline">
          GitHub <i className="bi bi-arrow-up-right" />
        </a>
      </p>
    </Section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article
      className={`card group overflow-hidden transition hover:border-teal-400/40 ${
        p.featured ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.25fr_1fr]' : 'flex flex-col'
      }`}
    >
      <a
        href={p.demoUrl ?? p.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="relative block overflow-hidden bg-navy-900"
        aria-label={`Open ${p.title}`}
      >
        <img
          src={p.image}
          alt={`Screenshot of ${p.title}`}
          loading="lazy"
          className="aspect-[16/10] h-full w-full object-cover object-left-top transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-1000/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-1000/30" />
      </a>

      <div className="flex flex-1 flex-col p-7 lg:p-8">
        {p.featured && (
          <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300">
            <i className="bi bi-star-fill" /> Featured project
          </span>
        )}
        <h3 className="text-2xl font-bold text-white">{p.title}</h3>
        <p className="mt-3 leading-relaxed text-slate-400">{p.description}</p>

        {p.highlights.length > 0 && (
          <ul className="mt-5 space-y-2 text-sm text-slate-300">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <i className="bi bi-check2-circle mt-0.5 text-teal-400" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-md bg-navy-800/80 px-2.5 py-1 font-mono text-xs text-navy-100">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          {p.demoUrl && (
            <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <i className="bi bi-box-arrow-up-right" /> Live demo
            </a>
          )}
          {p.repoUrl && (
            <a href={p.repoUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              <i className="bi bi-github" /> Source code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
