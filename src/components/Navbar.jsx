import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#about", label: "About Us" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      {/* Full-width bar, brand truly left, links truly right */}
      <div className="w-full h-16 flex items-center px-4 sm:px-6 lg:px-8">
        {/* Brand (left edge) */}
        <a
          href="#home"
          className="shrink-0 flex items-center gap-2 font-semibold text-slate-900"
        >
          <img
            src="src/assets/logo.png"
            alt="ExpireSense"
            className="w-8 h-8 object-contain"
            loading="eager"
          />
          <span className="text-lg">ExpireSense</span>
        </a>

        {/* Spacer pushes nav items to the far right */}
        <div className="flex-1" />

        {/* Desktop links (right edge) */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-700 hover:text-brand-700"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-brand px-3 py-2 text-sm">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile toggle (right edge) */}
        <button
          className="md:hidden inline-flex flex-col gap-1.5 p-2 rounded hover:bg-slate-100 ml-3"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="h-0.5 w-6 bg-slate-900" />
          <span className="h-0.5 w-6 bg-slate-900" />
          <span className="h-0.5 w-6 bg-slate-900" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <ul className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded px-3 py-2 text-slate-800 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block rounded px-3 py-2 text-center btn-brand"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
