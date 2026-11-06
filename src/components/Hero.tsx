import { profile } from '../data/profile';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-16">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-fade-up min-w-0">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-sm text-teal-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            Available for new opportunities
          </p>

          <h1 className="text-[2.5rem] break-words leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-teal-300 via-teal-400 to-navy-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="mt-4 font-mono text-lg text-slate-400">
            {profile.role} <span className="text-teal-400">·</span> React <span className="text-teal-400">·</span>{' '}
            TypeScript
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              <i className="bi bi-grid-1x2" /> View projects
            </a>
            <a href="#contact" className="btn-ghost">
              <i className="bi bi-envelope" /> Contact me
            </a>
          </div>

          <SocialLinks className="mt-10" />
        </div>

        <CodeCard />
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-2xl text-slate-500 hover:text-teal-400 sm:block"
      >
        <i className="bi bi-chevron-double-down" />
      </a>
    </section>
  );
}

/** Decorative "code editor" card describing the developer. */
function CodeCard() {
  const k = 'text-pink-400';
  const s = 'text-teal-300';
  const p = 'text-sky-300';

  return (
    <div className="animate-fade-up relative min-w-0 [animation-delay:150ms]">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-400/20 to-navy-500/20 blur-2xl" />
      <div className="card relative overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">developer.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
          <code>
            <span className={k}>const</span> <span className="text-white">developer</span> = {'{'}
            {'\n'}  <span className={p}>name</span>: <span className={s}>'{profile.shortName}'</span>,
            {'\n'}  <span className={p}>role</span>: <span className={s}>'{profile.role}'</span>,
            {'\n'}  <span className={p}>location</span>: <span className={s}>'{profile.location}'</span>,
            {'\n'}  <span className={p}>stack</span>: [<span className={s}>'React'</span>, <span className={s}>'TypeScript'</span>,
            {'\n'}          <span className={s}>'Tailwind'</span>, <span className={s}>'Node.js'</span>],
            {'\n'}  <span className={p}>english</span>: <span className={s}>'C1'</span>,
            {'\n'}  <span className={p}>learning</span>: <span className="text-amber-300">true</span>,
            {'\n'}  <span className={p}>hire</span>: () =&gt; <span className={s}>"Let's build something great!"</span>,
            {'\n'}
            {'}'};
          </code>
        </pre>
      </div>
    </div>
  );
}
