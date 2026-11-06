import { profile } from '../data/profile';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} · Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400 text-lg text-navy-1000 transition hover:-translate-y-0.5 hover:bg-teal-300"
          >
            <i className="bi bi-arrow-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}
