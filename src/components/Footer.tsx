import { siteContent, Language } from '../data/content';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export function Footer({ currentLang }: FooterProps) {
  const content = siteContent[currentLang].footer;
  const nav = siteContent[currentLang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090c] border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Brand & Studio Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white flex items-center"
            >
              <span>Kinetik</span>
              <span className="text-blue-500 font-black">.</span>
            </a>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              {content.about}
            </p>
            <div className="text-neutral-400 text-[11px]">
              {content.location}
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {currentLang === 'id' ? 'Navigasi' : 'Navigation'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  {nav.services}
                </a>
              </li>
              <li>
                <a href="#karya" className="hover:text-white transition-colors">
                  {nav.work}
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-white transition-colors">
                  {nav.estimator}
                </a>
              </li>
              <li>
                <a href="#klien" className="hover:text-white transition-colors">
                  {nav.testimonials}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Standards */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {currentLang === 'id' ? 'Komitmen Mutu & Legal' : 'Standards & Terms'}
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>100% Kepemilikan Kode Sumber &amp; Repository Git</li>
              <li>Perjanjian Kerahasiaan (Non-Disclosure Agreement)</li>
              <li>Standar Aksesibilitas WCAG AA &amp; Core Web Vitals 95+</li>
              <li>Garansi Bebas Bug 60 Hari Pasca-Peluncuran</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-neutral-500 text-[11px]">
            {content.copyright}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{currentLang === 'id' ? 'Kembali ke Atas' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
