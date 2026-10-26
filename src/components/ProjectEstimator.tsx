import { useState } from 'react';
import { Calculator, Check, ArrowRight, RefreshCw, Zap } from 'lucide-react';
import { siteContent, Language } from '../data/content';

export interface EstimatorResult {
  projectType: string;
  selectedFeatures: string[];
  timeline: string;
  priceRange: string;
  durationWeeks: number;
}

interface ProjectEstimatorProps {
  currentLang: Language;
  onSendToContact: (result: EstimatorResult) => void;
}

export function ProjectEstimator({ currentLang, onSendToContact }: ProjectEstimatorProps) {
  const content = siteContent[currentLang].estimator;
  const [currency, setCurrency] = useState<'idr' | 'usd'>('idr');

  // Project Types
  const projectTypes = [
    {
      id: 'corporate',
      name: currentLang === 'id' ? 'Website Korporat & Brand Showcase' : 'Corporate Brand & Showcase',
      basePriceIdr: 18000000,
      basePriceUsd: 1200,
      baseWeeks: 3,
      desc: currentLang === 'id' ? 'Desain eksklusif, animasi halus, SEO & Core Web Vitals optimal.' : 'Bespoke design, fluid transitions, elite SEO & Web Vitals.',
    },
    {
      id: 'saas',
      name: currentLang === 'id' ? 'Aplikasi Web & SaaS MVP' : 'Web Application & SaaS MVP',
      basePriceIdr: 45000000,
      basePriceUsd: 3000,
      baseWeeks: 6,
      desc: currentLang === 'id' ? 'Dashboard, autentikasi multi-role, database relasional, API terpadu.' : 'Dashboards, multi-role auth, relational schema, scalable APIs.',
    },
    {
      id: 'ecommerce',
      name: currentLang === 'id' ? 'Storefront E-Commerce Performa Tinggi' : 'High-Speed Headless E-Commerce',
      basePriceIdr: 35000000,
      basePriceUsd: 2400,
      baseWeeks: 5,
      desc: currentLang === 'id' ? 'Katalog cepat, keranjang belanja instan, gateway Midtrans/Stripe.' : 'Instant catalog search, quick checkout, payment orchestration.',
    },
    {
      id: 'enterprise',
      name: currentLang === 'id' ? 'Sistem Internal & Portal Bisnis' : 'Enterprise Portal & Internal Tool',
      basePriceIdr: 60000000,
      basePriceUsd: 4000,
      baseWeeks: 8,
      desc: currentLang === 'id' ? 'Manajemen alur kerja tim, audit trail, sinkronisasi ERP/CRM.' : 'Workflow automation, SOC2 audit trails, CRM/ERP synchronization.',
    },
  ];

  const [selectedType, setSelectedType] = useState<string>('saas');

  // Add-on Features
  const featuresList = [
    {
      id: 'auth_roles',
      name: currentLang === 'id' ? 'Autentikasi & Multi-Role Permissions' : 'Authentication & Role-Based Access',
      priceIdr: 6000000,
      priceUsd: 400,
      weeks: 1,
    },
    {
      id: 'payments',
      name: currentLang === 'id' ? 'Payment Gateway (QRIS, VA, Kartu Kredit)' : 'Payment Orchestration (QRIS, VA, Cards)',
      priceIdr: 8000000,
      priceUsd: 550,
      weeks: 1,
    },
    {
      id: 'ai_engine',
      name: currentLang === 'id' ? 'Integrasi AI & Semantic Search / Gemini' : 'AI Capabilities & Semantic Search',
      priceIdr: 12000000,
      priceUsd: 800,
      weeks: 1.5,
    },
    {
      id: 'cms_panel',
      name: currentLang === 'id' ? 'Custom Admin CMS & Content Management' : 'Custom Admin CMS & Editorial Panel',
      priceIdr: 9000000,
      priceUsd: 600,
      weeks: 1,
    },
    {
      id: 'multilang',
      name: currentLang === 'id' ? 'Dukungan Multi-Bahasa Terintegrasi' : 'Integrated Multi-Language Architecture',
      priceIdr: 4500000,
      priceUsd: 300,
      weeks: 0.5,
    },
    {
      id: 'analytics',
      name: currentLang === 'id' ? 'Dashboard Analitik & Pelaporan CSV/PDF' : 'Analytics Reporting & Export Engines',
      priceIdr: 7000000,
      priceUsd: 480,
      weeks: 1,
    },
  ];

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth_roles', 'payments']);

  // Timeline speed multipliers
  const timelineOptions = [
    {
      id: 'standard',
      name: currentLang === 'id' ? 'Standar Terencana (Disarankan)' : 'Standard Sprint Pace (Recommended)',
      multiplier: 1.0,
      labelWeeks: currentLang === 'id' ? 'Sesuai kalkulasi normal' : 'Normal estimated pace',
    },
    {
      id: 'express',
      name: currentLang === 'id' ? 'Sprint Kilat (Prioritas Khusus)' : 'Express Fast-Track (High Priority)',
      multiplier: 1.25,
      labelWeeks: currentLang === 'id' ? '30% lebih cepat (alokasi 2 lead engineer)' : '30% faster with dedicated pair leads',
    },
  ];

  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const currentTypeObj = projectTypes.find((p) => p.id === selectedType) || projectTypes[0];
  const timelineObj = timelineOptions.find((t) => t.id === selectedTimeline) || timelineOptions[0];

  const basePrice = currency === 'idr' ? currentTypeObj.basePriceIdr : currentTypeObj.basePriceUsd;
  const featuresPrice = selectedFeatures.reduce((acc, featId) => {
    const feat = featuresList.find((f) => f.id === featId);
    if (!feat) return acc;
    return acc + (currency === 'idr' ? feat.priceIdr : feat.priceUsd);
  }, 0);

  const subtotal = (basePrice + featuresPrice) * timelineObj.multiplier;
  const lowerRange = Math.round(subtotal * 0.95);
  const upperRange = Math.round(subtotal * 1.15);

  const totalWeeks = Math.max(
    2,
    Math.round(
      (currentTypeObj.baseWeeks +
        selectedFeatures.reduce((acc, featId) => {
          const feat = featuresList.find((f) => f.id === featId);
          return acc + (feat ? feat.weeks : 0);
        }, 0)) *
        (selectedTimeline === 'express' ? 0.7 : 1.0)
    )
  );

  const formatPrice = (val: number) => {
    if (currency === 'idr') {
      return `Rp ${(val).toLocaleString('id-ID')}`;
    }
    return `$${(val).toLocaleString('en-US')}`;
  };

  const handleApplyToForm = () => {
    const result: EstimatorResult = {
      projectType: currentTypeObj.name,
      selectedFeatures: selectedFeatures
        .map((fId) => featuresList.find((f) => f.id === fId)?.name || '')
        .filter(Boolean),
      timeline: timelineObj.name,
      priceRange: `${formatPrice(lowerRange)} - ${formatPrice(upperRange)}`,
      durationWeeks: totalWeeks,
    };
    onSendToContact(result);
  };

  return (
    <section id="kalkulator" className="py-20 md:py-28 bg-[#0c0e12] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
              {content.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {content.title}
            </h2>
            <p className="mt-4 text-base text-neutral-300 leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-neutral-900 border border-neutral-800 p-1.5 rounded-xl">
            <span className="text-xs text-neutral-400 font-medium px-2">
              {currentLang === 'id' ? 'Mata Uang:' : 'Currency:'}
            </span>
            <button
              type="button"
              onClick={() => setCurrency('idr')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                currency === 'idr'
                  ? 'bg-blue-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              IDR (Rp)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('usd')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                currency === 'usd'
                  ? 'bg-blue-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* 2-Column Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Scope Configurator */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                {currentLang === 'id' ? '1. Pilih Model & Jenis Produk' : '1. Select Product Architecture'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-blue-500 bg-blue-950/20 shadow-sm shadow-blue-500/10'
                          : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-bold text-white">{type.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-blue-400 shrink-0 ml-1" />}
                      </div>
                      <p className="text-xs text-neutral-400 leading-normal">{type.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Capabilities & Modules */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                  {currentLang === 'id' ? '2. Modul & Integrasi Spesifik' : '2. Key Modules & Integrations'}
                </label>
                <span className="text-xs text-neutral-400">
                  {selectedFeatures.length} {currentLang === 'id' ? 'modul dipilih' : 'modules chosen'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featuresList.map((feature) => {
                  const isChecked = selectedFeatures.includes(feature.id);
                  const priceStr =
                    currency === 'idr'
                      ? `+Rp ${(feature.priceIdr / 1000000).toFixed(1)} jt`
                      : `+$${feature.priceUsd}`;
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3 rounded-lg text-left border flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                        isChecked
                          ? 'border-blue-500/70 bg-blue-950/20 text-white'
                          : 'border-neutral-800 bg-neutral-900/30 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                            isChecked
                              ? 'bg-blue-600 border-blue-500 text-white'
                              : 'border-neutral-700 bg-neutral-950'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-medium truncate">{feature.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-400 shrink-0 tabular-nums">
                        {priceStr}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Sprint Delivery Speed */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                {currentLang === 'id' ? '3. Kecepatan Peluncuran' : '3. Delivery Urgency & Pace'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {timelineOptions.map((opt) => {
                  const isSelected = selectedTimeline === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedTimeline(opt.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-blue-500 bg-blue-950/20'
                          : 'border-neutral-800 bg-neutral-900/30 hover:border-neutral-700'
                      }`}
                    >
                      <div className="text-xs font-bold text-white mb-1 flex items-center justify-between">
                        <span>{opt.name}</span>
                        {isSelected && <Zap className="w-3.5 h-3.5 text-blue-400" />}
                      </div>
                      <p className="text-[11px] text-neutral-400">{opt.labelWeeks}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Calculation Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {currentLang === 'id' ? 'Ringkasan Estimasi Real-Time' : 'Live Scope Estimation'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedType('saas');
                    setSelectedFeatures(['auth_roles', 'payments']);
                    setSelectedTimeline('standard');
                  }}
                  className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  title="Reset kalkulasi"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Price Range Display */}
              <div className="space-y-1">
                <div className="text-xs text-neutral-400 font-medium">
                  {currentLang === 'id' ? 'Perkiraan Rentang Investasi' : 'Estimated Investment Range'}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight tabular-nums">
                  {formatPrice(lowerRange)}{' '}
                  <span className="text-neutral-500 text-lg font-normal">–</span>{' '}
                  {formatPrice(upperRange)}
                </div>
                <p className="text-[11px] text-neutral-500">
                  {currentLang === 'id'
                    ? '*Termasuk desain sistem, QA lintas perangkat, garansi bug 60 hari.'
                    : '*Includes custom UI system, cross-device QA, and 60-day warranty.'}
                </p>
              </div>

              {/* Timeline duration & delivery badge */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800/80">
                <div>
                  <div className="text-xs text-neutral-400 font-medium mb-1">
                    {currentLang === 'id' ? 'Durasi Pengerjaan' : 'Estimated Timeline'}
                  </div>
                  <div className="text-lg font-bold text-blue-400 tabular-nums">
                    {totalWeeks} {currentLang === 'id' ? 'Minggu Sprint' : 'Sprint Weeks'}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium mb-1">
                    {currentLang === 'id' ? 'Model Rilis' : 'Release Model'}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {currentLang === 'id' ? 'Milestone Berjenjang' : 'Phased Milestones'}
                  </div>
                </div>
              </div>

              {/* Selected summary */}
              <div className="pt-4 border-t border-neutral-800/80 space-y-2 text-xs">
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">{currentLang === 'id' ? 'Tipe Produk:' : 'Base Product:'}</span>
                  <span className="font-semibold text-right max-w-[200px] truncate">{currentTypeObj.name}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">{currentLang === 'id' ? 'Modul Pilihan:' : 'Add-on Features:'}</span>
                  <span className="font-semibold">{selectedFeatures.length} {currentLang === 'id' ? 'modul' : 'modules'}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">{currentLang === 'id' ? 'Hak Intelektual:' : 'IP Rights:'}</span>
                  <span className="text-emerald-400 font-semibold">{currentLang === 'id' ? '100% Milik Klien' : '100% Client Owned'}</span>
                </div>
              </div>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={handleApplyToForm}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
              >
                <span>{currentLang === 'id' ? 'Gunakan Estimasi Ini untuk Konsultasi' : 'Apply Scope to Consultation Brief'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
