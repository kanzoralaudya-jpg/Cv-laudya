import { useState } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { siteContent, Language } from '../data/content';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenConsultation: () => void;
}

export function Navbar({ currentLang, onToggleLang, onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = siteContent[currentLang].nav;

  const navLinks = [
    { label: t.services, href: '#layanan' },
    { label: t.work, href: '#karya' },
    { label: t.estimator, href: '#kalkulator' },
    { label: t.testimonials, href: '#klien' },
    { label: t.faq, href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0c0e12]/85 border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Exactly 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-blue-400 transition-colors flex items-center"
          >
            <span>Kinetik</span>
            <span className="text-blue-500 font-black">.</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action + Language Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-900/90 p-1 text-xs">
              <button
                type="button"
                onClick={() => onToggleLang('id')}
                className={`px-2 py-1 rounded transition-colors font-medium ${
                  currentLang === 'id'
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-2 py-1 rounded transition-colors font-medium ${
                  currentLang === 'en'
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 active:bg-blue-700 transition-all duration-150 shadow-sm hover:shadow-blue-500/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{t.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#0e1117] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              <span>{t.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
