import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight the link of the section currently on screen
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-navy-1000/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-white" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-navy-500 text-sm font-extrabold text-navy-1000">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  active === l.id ? 'text-teal-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href={profile.whatsapp.url} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2">
              <i className="bi bi-whatsapp" /> Let's talk
            </a>
          </li>
        </ul>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} />
        </button>
      </nav>

      {open && (
        <ul className="container-page flex flex-col gap-1 pb-5 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a href={profile.whatsapp.url} target="_blank" rel="noreferrer" className="btn-primary w-full">
              <i className="bi bi-whatsapp" /> Let's talk
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
