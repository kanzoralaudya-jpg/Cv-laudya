import { useState } from 'react';
import { servicesList, siteContent, Language } from '../data/content';
import { CheckCircle2, Code2, Cpu, ShieldCheck, Database, LayoutTemplate, Layers } from 'lucide-react';

interface ServicesProps {
  currentLang: Language;
}

export function Services({ currentLang }: ServicesProps) {
  const content = siteContent[currentLang].services;
  const [activeArchTab, setActiveArchTab] = useState<'frontend' | 'backend' | 'infra' | 'quality'>('frontend');

  const architectureLayers = {
    frontend: {
      title: currentLang === 'id' ? 'Arsitektur Frontend Modern' : 'Modern Frontend Architecture',
      subtitle: currentLang === 'id' ? 'Interaksi tanpa latensi & Core Web Vitals optimal' : 'Zero-latency interactions & pristine Web Vitals',
      items: [
        { name: 'React 19 & TypeScript', desc: currentLang === 'id' ? 'Type-safety ketat, concurrent features, server components ready' : 'Strict type-safety, concurrent features, server components ready' },
        { name: 'Tailwind CSS Engine', desc: currentLang === 'id' ? 'Zero-runtime overhead, sistem desain terstandarisasi, responsif' : 'Zero runtime overhead, standardized design tokens, responsive' },
        { name: 'Fluid Motion Curves', desc: currentLang === 'id' ? 'Animasi terakselerasi GPU di bawah 200ms latency budget' : 'GPU-composited animations strictly adhering to 200ms latency budgets' },
        { name: 'WCAG AA Accessibility', desc: currentLang === 'id' ? 'Kontras rasio 4.5:1+, navigasi keyboard lengkap, semantik ARIA' : '4.5:1+ contrast ratios, full keyboard focus rings, semantic ARIA' },
      ],
    },
    backend: {
      title: currentLang === 'id' ? 'Rekayasa Backend & API' : 'Backend & API Engineering',
      subtitle: currentLang === 'id' ? 'Kecepatan kueri sub-100ms & keamanan data terisolasi' : 'Sub-100ms query throughput & hardened data boundaries',
      items: [
        { name: 'Node.js & Express / Fastify', desc: currentLang === 'id' ? 'Arsitektur mikro atau modular monolit dengan throughput tinggi' : 'High-throughput microservices or modular clean monoliths' },
        { name: 'PostgreSQL Relational DB', desc: currentLang === 'id' ? 'Indeks teroptimasi, integritas transaksi ACID, schema migration otomatis' : 'Indexed execution plans, ACID transactional integrity, automated migrations' },
        { name: 'Redis Edge In-Memory Cache', desc: currentLang === 'id' ? 'Reduksi beban kueri hingga 92% untuk endpoint dengan trafik masif' : 'Reduces database load by up to 92% on high-concurrency read endpoints' },
        { name: 'Payment Orchestration', desc: currentLang === 'id' ? 'Integrasi Midtrans / Xendit / Stripe dengan webhook idempotency' : 'Production webhook verification with idempotent dispute handling' },
      ],
    },
    infra: {
      title: currentLang === 'id' ? 'Cloud & Infrastruktur Terdistribusi' : 'Cloud & Edge Infrastructure',
      subtitle: currentLang === 'id' ? 'Ketersediaan tinggi dengan redundansi multi-region' : 'High availability with automated multi-zone failovers',
      items: [
        { name: 'Dockerized Containers', desc: currentLang === 'id' ? 'Build terisolasi, reproducible builds, dan zero-drift staging' : 'Isolated container builds with zero-drift environment parity' },
        { name: 'Edge CDN & Asset Pipeline', desc: currentLang === 'id' ? 'Penyajian aset gambar teroptimasi WebP/AVIF dengan kompresi cerdas' : 'Smart responsive WebP/AVIF asset delivery from nearest edge nodes' },
        { name: 'SSL & Cloudflare Armor', desc: currentLang === 'id' ? 'Proteksi DDoS tingkat enterprise, TLS 1.3, rate limiting ketat' : 'Enterprise DDoS mitigations, strict TLS 1.3, and token rate limiting' },
        { name: 'Automated CI/CD Workflows', desc: currentLang === 'id' ? 'Pengecekan linter dan uji coba otomatis sebelum deploy ke produksi' : 'Automated test matrices and smoke tests prior to zero-downtime rollouts' },
      ],
    },
    quality: {
      title: currentLang === 'id' ? 'Standar Kualitas & Pengujian' : 'Quality Assurance & Standards',
      subtitle: currentLang === 'id' ? 'Jaminan bebas regresi sebelum serah terima' : 'Zero-regression guarantees prior to final sign-off',
      items: [
        { name: 'Automated Test Suites', desc: currentLang === 'id' ? 'Unit test & integration test untuk alur logika bisnis krusial' : 'Comprehensive unit & integration coverage for critical financial logic' },
        { name: 'Cross-Device Verification', desc: currentLang === 'id' ? 'Pengujian di 12+ variasi viewport desktop, tablet, dan smartphone' : 'Rigorous QA across 12+ viewport combinations and mobile browsers' },
        { name: 'Core Web Vitals Audit', desc: currentLang === 'id' ? 'Skor Lighthouse konsisten 95+ untuk performa, SEO, dan aksesibilitas' : 'Consistent 95+ Lighthouse scores across Performance, SEO, and Best Practices' },
        { name: 'Dokumentasi Kode Lengkap', desc: currentLang === 'id' ? 'README terstruktur, panduan setup lokal, dan serah terima tim' : 'Structured architectural blueprints, local setup guides, and developer handoff' },
      ],
    },
  };

  return (
    <section id="layanan" className="py-20 md:py-28 bg-[#0a0c10] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
            {content.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {content.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Bento Grid: 4 Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {servicesList.map((service) => (
            <div
              key={service.number}
              className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Numbered Editorial Index */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-blue-400 tabular-nums">
                    {service.number}.
                  </span>
                  <div className="text-right">
                    <span className="text-base font-bold text-white tabular-nums">
                      {service.highlightMetric.value}
                    </span>
                    <span className="text-xs text-neutral-400 block">
                      {service.highlightMetric.label[currentLang]}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title[currentLang]}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {service.description[currentLang]}
                </p>

                {/* Deliverables list */}
                <ul className="space-y-2 mb-6">
                  {service.deliverables[currentLang].map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <span className="text-blue-400 shrink-0 mt-0.5">•</span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies unboxed tags */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-mono text-[11px] text-neutral-500">Tech Stack:</span>
                <span className="font-mono text-[11px] text-neutral-300">
                  {service.techStack.join(' · ')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Inspector Panel */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>{currentLang === 'id' ? 'Inspektur Standar Rekayasa' : 'Engineering Standard Inspector'}</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                {currentLang === 'id' ? 'Spesifikasi Arsitektur Produksi Kinetik' : 'Kinetik Production Architecture Blueprint'}
              </h4>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveArchTab('frontend')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeArchTab === 'frontend'
                    ? 'bg-blue-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Frontend
              </button>
              <button
                type="button"
                onClick={() => setActiveArchTab('backend')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeArchTab === 'backend'
                    ? 'bg-blue-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Backend
              </button>
              <button
                type="button"
                onClick={() => setActiveArchTab('infra')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeArchTab === 'infra'
                    ? 'bg-blue-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Cloud &amp; Infra
              </button>
              <button
                type="button"
                onClick={() => setActiveArchTab('quality')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeArchTab === 'quality'
                    ? 'bg-blue-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                QA &amp; Audit
              </button>
            </div>
          </div>

          {/* Active Blueprint View */}
          <div className="mt-6">
            <div className="mb-4">
              <h5 className="text-sm font-bold text-blue-400">
                {architectureLayers[activeArchTab].title}
              </h5>
              <p className="text-xs text-neutral-400">
                {architectureLayers[activeArchTab].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {architectureLayers[activeArchTab].items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-1.5 hover:border-neutral-700 transition-colors"
                >
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{item.name}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
