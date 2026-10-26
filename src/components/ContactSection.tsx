import { useState, useEffect } from 'react';
import { siteContent, Language } from '../data/content';
import { EstimatorResult } from './ProjectEstimator';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Copy, Check } from 'lucide-react';

interface ContactProps {
  currentLang: Language;
  prefillEstimator?: EstimatorResult | null;
}

export function ContactSection({ currentLang, prefillEstimator }: ContactProps) {
  const content = siteContent[currentLang].contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Application / SaaS MVP',
    budget: 'Rp 30.000.000 - Rp 60.000.000',
    message: '',
  });

  const [attachedEstimator, setAttachedEstimator] = useState<EstimatorResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update when prefill is passed
  useEffect(() => {
    if (prefillEstimator) {
      setAttachedEstimator(prefillEstimator);
      setFormData((prev) => ({
        ...prev,
        projectType: prefillEstimator.projectType,
        budget: prefillEstimator.priceRange,
        message:
          prev.message ||
          (currentLang === 'id'
            ? `Halo tim Kinetik, saya ingin berkonsultasi mengenai proyek ${prefillEstimator.projectType} dengan estimasi durasi ${prefillEstimator.durationWeeks} minggu dan estimasi budget ${prefillEstimator.priceRange}. Fitur yang dibutuhkan: ${prefillEstimator.selectedFeatures.join(', ')}.`
            : `Hello Kinetik team, I'd like to consult on an upcoming ${prefillEstimator.projectType} project with an estimated ${prefillEstimator.durationWeeks}-week sprint and budget range ${prefillEstimator.priceRange}. Selected features: ${prefillEstimator.selectedFeatures.join(', ')}.`),
      }));
    }
  }, [prefillEstimator, currentLang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!formData.name.trim()) {
      setErrorMsg(currentLang === 'id' ? 'Nama lengkap wajib diisi.' : 'Full name is required.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg(currentLang === 'id' ? 'Email kerja tidak valid.' : 'Valid work email is required.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg(currentLang === 'id' ? 'Nomor telepon/WhatsApp wajib diisi.' : 'Phone number is required.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real brief dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleCopySummary = () => {
    const summaryText = `[KINETIK STUDIO INQUIRY]\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nType: ${formData.projectType}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setAttachedEstimator(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Web Application / SaaS MVP',
      budget: 'Rp 30.000.000 - Rp 60.000.000',
      message: '',
    });
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-[#0c0e12] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Information & Direct channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
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

            {/* Direct Channel Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Email Resmi &amp; Proposal</div>
                  <div className="text-sm font-bold text-white">hello@kinetikstudio.id</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Respons tercepat dalam 4 jam kerja</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">WhatsApp Priority Line</div>
                  <div className="text-sm font-bold text-white">+62 812-8899-7700</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Senin - Jumat, 09:00 - 18:00 WIB</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Studio &amp; Kantor Rekayasa</div>
                  <div className="text-sm font-bold text-white">SCBD District 8, Senopati</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Jakarta Selatan 12190, Indonesia</div>
                </div>
              </div>
            </div>

            {/* Turnaround Commitment */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 flex items-center gap-3 text-xs text-blue-200">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                {currentLang === 'id'
                  ? 'Kami menandatangani NDA resmi sebelum meninjau detail teknis proyek Anda.'
                  : 'We sign mutual NDAs prior to reviewing proprietary product roadmaps.'}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl">
              {isSubmitted ? (
                /* Success State */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      {content.successTitle}
                    </h3>
                    <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                      {content.successDesc}
                    </p>
                  </div>

                  {/* Summary of submitted brief */}
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left max-w-lg mx-auto text-xs space-y-2">
                    <div className="font-bold text-neutral-300 border-b border-neutral-800 pb-2 flex justify-between items-center">
                      <span>Ringkasan Pengajuan:</span>
                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                      >
                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copied ? 'Tersalin' : 'Salin'}</span>
                      </button>
                    </div>
                    <div><span className="text-neutral-500">Nama:</span> <span className="text-white font-medium">{formData.name}</span></div>
                    <div><span className="text-neutral-500">Email:</span> <span className="text-white font-medium">{formData.email}</span></div>
                    <div><span className="text-neutral-500">Kategori:</span> <span className="text-white font-medium">{formData.projectType}</span></div>
                    <div><span className="text-neutral-500">Estimasi Budget:</span> <span className="text-blue-400 font-mono">{formData.budget}</span></div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer"
                    >
                      {content.resetBtn}
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Attached Estimator Banner if prefilled */}
                  {attachedEstimator && (
                    <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/40 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-blue-300 block">
                          Estimasi Terlampir: {attachedEstimator.projectType}
                        </span>
                        <span className="text-neutral-400">
                          {attachedEstimator.priceRange} · {attachedEstimator.durationWeeks} minggu sprint
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setAttachedEstimator(null)}
                        className="text-neutral-400 hover:text-white text-xs underline cursor-pointer"
                      >
                        Lepas
                      </button>
                    </div>
                  )}

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/40 text-xs text-red-300">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                        {content.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Raden Danuarta"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                        {content.formEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@perusahaan.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                        {content.formPhone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812 3456 7890"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                        {content.formType}
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="Website Korporat & Brand Showcase">Website Korporat &amp; Brand Showcase</option>
                        <option value="Web Application / SaaS MVP">Aplikasi Web / SaaS MVP</option>
                        <option value="Storefront E-Commerce Performa Tinggi">Storefront E-Commerce</option>
                        <option value="Sistem Internal & Portal Bisnis">Sistem Internal &amp; Portal</option>
                        <option value="Konsultasi & Redesain Sistem">Audit &amp; Desain Sistem UI/UX</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      {content.formBudget}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Rp 20.000.000 - Rp 35.000.000">Rp 20.000.000 - Rp 35.000.000 (~$1.5k - $2.5k)</option>
                      <option value="Rp 35.000.000 - Rp 70.000.000">Rp 35.000.000 - Rp 70.000.000 (~$2.5k - $5k)</option>
                      <option value="Rp 70.000.000 - Rp 150.000.000">Rp 70.000.000 - Rp 150.000.000 (~$5k - $10k)</option>
                      <option value="Di atas Rp 150.000.000">Di atas Rp 150.000.000 ($10k+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      {content.formMessage}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan gambaran produk, target peluncuran, atau tautan referensi yang Anda miliki..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 rounded-xl transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
                  >
                    <span>{isSubmitting ? content.submitting : content.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
