import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'interests', label: 'Interests' },
  { id: 'awards', label: 'Awards' },
  { id: 'projects', label: 'Projects' },
];

export default function SideNav() {
  const [active, setActive] = useState('about');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + 140;
      let current = LINKS[0].id;
      LINKS.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= marker) current = link.id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const y = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${y}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, y);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className="sidenav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className={`sidenav-backdrop ${open ? 'visible' : ''}`}
        onClick={close}
        hidden={!open}
      />
      <aside className={`sidenav ${open ? 'open' : ''}`}>
        <nav aria-label="Section">
          <ul className="sidenav-links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? 'active' : ''}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={() => {
                    setActive(link.id);
                    close();
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
