import { useState } from 'react';
import { useActiveSection } from './ScrollFX.jsx';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header>
      <nav className="wrap">
        <a href="#top" className="brand">Sahithya <em>Kaduduri</em></a>
        <button className="navtoggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button>
        <ul className={`navlinks${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
