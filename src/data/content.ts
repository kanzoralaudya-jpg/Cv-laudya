export type Language = 'id' | 'en';

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  year: string;
  category: 'saas' | 'ecommerce' | 'fintech';
  categoryLabel: { id: string; en: string };
  metrics: { value: string; label: { id: string; en: string } }[];
  summary: { id: string; en: string };
  challenge: { id: string; en: string };
  solution: { id: string; en: string };
  technologies: string[];
  image: string;
  linkText?: { id: string; en: string };
}

export interface ServiceItem {
  number: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  deliverables: { id: string[]; en: string[] };
  techStack: string[];
  highlightMetric: { value: string; label: { id: string; en: string } };
}

export const siteContent = {
  id: {
    nav: {
      services: 'Layanan',
      work: 'Studi Kasus',
      estimator: 'Kalkulator Biaya',
      testimonials: 'Klien',
      faq: 'FAQ',
      cta: 'Konsultasi Proyek',
    },
    hero: {
      badge: 'Studio Desain & Rekayasa Digital Berstandar Global',
      headlineStart: 'Membangun Produk Digital',
      headlineAccent: 'Presisi & Berdaya Saing',
      headlineEnd: 'untuk Pertumbuhan Nyata.',
      subhead:
        'Kami merancang antarmuka mutakhir, arsitektur web berperforma tinggi, dan sistem SaaS yang mempercepat bisnis Anda tanpa kompromi.',
      primaryCta: 'Hitung Estimasi Proyek',
      secondaryCta: 'Eksplorasi Studi Kasus',
      stats: [
        { value: '48+', label: 'Produk Digital Dirilis' },
        { value: '99.4%', label: 'Kepuasan & Retensi Klien' },
        { value: '< 1.1s', label: 'Rata-rata Waktu Muat' },
        { value: 'Rp 140M+', label: 'Valuasi & Nilai Transaksi' },
      ],
    },
    services: {
      kicker: 'Kapabilitas & Rekayasa',
      title: 'Layanan Spesialis dengan Standar Rekayasa Tinggi',
      subtitle:
        'Dari arsitektur kode bersih hingga desain interaktif berbasis sistem, kami menghadirkan produk yang siap diuji pasar.',
    },
    estimator: {
      kicker: 'Transparansi Penuh',
      title: 'Kalkulator Lingkup & Estimasi Investasi',
      subtitle:
        'Simulasikan spesifikasi proyek Anda secara interaktif untuk mendapatkan perkiraan anggaran, durasi pengerjaan, dan rekomendasi teknologi.',
    },
    work: {
      kicker: 'Bukti Kinerja Nyata',
      title: 'Studi Kasus & Transformasi Produk',
      subtitle:
        'Setiap karya dibangun dengan metrik terukur: peningkatan konversi, efisiensi operasional, dan kepuasan pengguna akhir.',
      filterAll: 'Semua Proyek',
      viewDetails: 'Lihat Analisis Kasus',
    },
    testimonials: {
      kicker: 'Testimoni & Pengakuan',
      title: 'Dipercaya oleh Pemimpin Industri & Founder Startup',
      subtitle:
        'Pengalaman nyata kolaborasi bersama tim rekayasa kami.',
    },
    faq: {
      kicker: 'Pertanyaan Umum',
      title: 'Semua yang Perlu Anda Ketahui',
      subtitle:
        'Jawaban transparan mengenai proses kerja, biaya, kepemilikan kode, dan pemeliharaan.',
    },
    contact: {
      kicker: 'Mulai Kolaborasi',
      title: 'Diskusikan Visi Produk Anda Bersama Kami',
      subtitle:
        'Tim arsitek solusi kami akan meninjau kebutuhan Anda dan mengirimkan proposal teknis dalam 24 jam kerja.',
      formName: 'Nama Lengkap',
      formEmail: 'Alamat Email Kerja',
      formPhone: 'Nomor WhatsApp / Kontak',
      formType: 'Kategori Proyek',
      formBudget: 'Alokasi Anggaran',
      formMessage: 'Ceritakan Visi atau Kebutuhan Proyek Anda',
      submitBtn: 'Kirim Permintaan Konsultasi',
      submitting: 'Mengirimkan Permintaan...',
      successTitle: 'Permintaan Berhasil Terkirim!',
      successDesc:
        'Terima kasih. Solution Lead kami akan menghubungi Anda via email atau WhatsApp dalam 24 jam.',
      resetBtn: 'Kirim Permintaan Lain',
    },
    footer: {
      about:
        'Kinetik adalah studio rekayasa produk digital independen yang berfokus pada arsitektur web modern, sistem desain berstandar tinggi, dan perangkat lunak bisnis berkemampuan tinggi.',
      location: 'Jakarta & Bandung, Indonesia · Beroperasi Global',
      copyright: '© 2026 Kinetik Studio. Seluruh Hak Cipta Dilindungi.',
      builtWith: 'Dirancang dengan presisi & integritas rekayasa.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      work: 'Case Studies',
      estimator: 'Cost Estimator',
      testimonials: 'Clients',
      faq: 'FAQ',
      cta: 'Schedule Project Call',
    },
    hero: {
      badge: 'Global-Grade Digital Experience & Software Engineering',
      headlineStart: 'Architecting Digital Products with',
      headlineAccent: 'Uncompromising Precision',
      headlineEnd: 'for Enduring Growth.',
      subhead:
        'We engineer cutting-edge user interfaces, high-throughput web applications, and resilient SaaS systems built to scale with clarity.',
      primaryCta: 'Estimate Your Project',
      secondaryCta: 'Explore Case Studies',
      stats: [
        { value: '48+', label: 'Digital Products Deployed' },
        { value: '99.4%', label: 'Client Satisfaction Rate' },
        { value: '< 1.1s', label: 'Average Core Web Vitals' },
        { value: '$12.5M+', label: 'Transaction Value Handled' },
      ],
    },
    services: {
      kicker: 'Core Capabilities',
      title: 'High-Integrity Engineering & Product Craft',
      subtitle:
        'From rigorous backend architectures to fluid micro-interactions, we engineer market-defining software.',
    },
    estimator: {
      kicker: 'Radical Transparency',
      title: 'Interactive Scope & Investment Estimator',
      subtitle:
        'Select your product specifications to calculate real-time budget ranges, turnaround timelines, and recommended tech stacks.',
    },
    work: {
      kicker: 'Proven Impact',
      title: 'Case Studies & Quantified Results',
      subtitle:
        'Every project is measured against concrete outcomes: conversion lifts, operational throughput, and user adoption.',
      filterAll: 'All Projects',
      viewDetails: 'View Case Breakdown',
    },
    testimonials: {
      kicker: 'Client Endorsements',
      title: 'Trusted by Venture-Backed Founders & Enterprise Leaders',
      subtitle:
        'Authentic accounts from product leaders who partnered with our studio.',
    },
    faq: {
      kicker: 'Common Inquiries',
      title: 'Everything You Need to Know',
      subtitle:
        'Transparent answers regarding our collaboration process, pricing, IP ownership, and post-launch maintenance.',
    },
    contact: {
      kicker: 'Start a Project',
      title: 'Discuss Your Product Vision With Our Principals',
      subtitle:
        'Our solution architects review your brief and supply a technical roadmap within 24 business hours.',
      formName: 'Full Name',
      formEmail: 'Work Email Address',
      formPhone: 'Phone / WhatsApp',
      formType: 'Project Category',
      formBudget: 'Budget Range',
      formMessage: 'Tell us about your project vision or specifications',
      submitBtn: 'Send Consultation Request',
      submitting: 'Submitting Brief...',
      successTitle: 'Brief Received Successfully!',
      successDesc:
        'Thank you. Our Solutions Lead will reach out via email or phone within 24 hours with an actionable roadmap.',
      resetBtn: 'Submit Another Brief',
    },
    footer: {
      about:
        'Kinetik is an independent digital product engineering studio focused on modern web architectures, enterprise design systems, and high-performance commercial software.',
      location: 'Jakarta & Bandung, Indonesia · Serving Clients Worldwide',
      copyright: '© 2026 Kinetik Studio. All Rights Reserved.',
      builtWith: 'Engineered with design integrity and zero compromise.',
    },
  },
};

export const caseStudiesList: CaseStudy[] = [
  {
    id: 'nusantara-logistics',
    title: 'Nusantara Logistics Command Center',
    client: 'PT Nusantara Trans Global',
    year: '2025',
    category: 'saas',
    categoryLabel: { id: 'SaaS & Analitik', en: 'SaaS & Analytics' },
    metrics: [
      { value: '+140%', label: { id: 'Efisiensi Rute Armada', en: 'Fleet Route Efficiency' } },
      { value: '14.2 Hari', label: { id: 'Rata-rata Waktu Siklus', en: 'Average Lead Time' } },
      { value: '99.98%', label: { id: 'Ketersediaan Sistem', en: 'System Availability' } },
    ],
    summary: {
      id: 'Platform komando terpadu untuk monitoring 12.000+ armada kargo maritim dan darat secara real-time di seluruh Indonesia.',
      en: 'A unified mission-control dashboard monitoring 12,000+ freight units across maritime and land networks with zero telemetry lag.',
    },
    challenge: {
      id: 'Sistem warisan (legacy) mengalami latensi hingga 8 detik per kueri dan kegagalan sinkronisasi saat pelacakan armada di daerah dengan koneksi terbatas.',
      en: 'Legacy systems suffered 8-second query latency and frequent state divergence when synchronizing vessel coordinates across remote archipelagic routes.',
    },
    solution: {
      id: 'Kami merancang arsitektur event-driven dengan caching multi-tier, visualisasi peta WebGL teroptimasi, dan mekanisme sinkronisasi offline-first.',
      en: 'We architected an event-driven edge pipeline with WebGL geospatial vector tiles and an offline-resilient sync engine for harsh maritime conditions.',
    },
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebGL Mapbox', 'Redis Edge Cache'],
    image: '/src/assets/images/showcase_saas_logistics_1792985088910.jpg',
  },
  {
    id: 'kalandra-living',
    title: 'Kalandra Architectural Furniture',
    client: 'Kalandra Living Studio',
    year: '2025',
    category: 'ecommerce',
    categoryLabel: { id: 'E-Commerce & Brand', en: 'E-Commerce & Brand' },
    metrics: [
      { value: '+310%', label: { id: 'Konversi Penjualan Direct', en: 'Direct Sales Conversion' } },
      { value: '1.2s', label: { id: 'Kecepatan Muat Katalog', en: 'Catalog Page Load' } },
      { value: 'Rp 18.5M', label: { id: 'GMV Tahun Pertama', en: 'First-Year Direct GMV' } },
    ],
    summary: {
      id: 'Pengalaman belanja digital imersif untuk jenama furnitur arsitektural mewah dengan konfigurator material 3D interaktif.',
      en: 'An immersive commerce experience for high-end bespoke architectural furniture featuring photorealistic tactile configurators.',
    },
    challenge: {
      id: 'Toko sebelumnya lambat dan tidak mampu merefleksikan nilai estetika produk premium bernilai puluhan juta rupiah, menyebabkan rasio pentalan tinggi (74%).',
      en: 'The previous storefront was clunky and failed to evoke the tactile luxury of custom furniture pieces, resulting in a 74% bounce rate on catalog pages.',
    },
    solution: {
      id: 'Membangun storefront headless dengan transisi halus, tipografi berkarakter editorial, dan konfigurasi bahan real-time dengan checkout instan.',
      en: 'Engineered a headless storefront with editorial layout pacing, instant micro-interactions, responsive image pipelines, and friction-free payment flows.',
    },
    technologies: ['React', 'Tailwind CSS', 'Shopify Storefront API', 'Midtrans Gateway', 'Motion Engine'],
    image: '/src/assets/images/showcase_luxury_brand_1792985089346.jpg',
  },
  {
    id: 'zenith-finance',
    title: 'Zenith Enterprise Mobile Web & Hub',
    client: 'Zenith Financial Tech',
    year: '2026',
    category: 'fintech',
    categoryLabel: { id: 'Fintech & Perbankan', en: 'Fintech & Banking' },
    metrics: [
      { value: '4.9 / 5', label: { id: 'Rating Kepuasan UI/UX', en: 'User Experience Score' } },
      { value: '< 200ms', label: { id: 'Latensi Transaksi', en: 'Transaction Settling' } },
      { value: '50.000+', label: { id: 'Pengguna Bisnis Aktif', en: 'Active Enterprise Users' } },
    ],
    summary: {
      id: 'Aplikasi web perbankan korporat dengan manajemen multi-rekening, approval workflow berlapis, dan keamanan setara perbankan tier-1.',
      en: 'Enterprise-grade mobile web treasury platform with multi-signature authorization workflows and sub-second payment settlement.',
    },
    challenge: {
      id: 'Pelaku usaha korporat memerlukan akses approval transaksi finansial instan di perangkat mobile tanpa kompromi pada audit trail dan keamanan ketat.',
      en: 'Corporate treasurers needed instant mobile authorization for multi-million transfers while upholding strict SOC2 audit standards and biometric verification.',
    },
    solution: {
      id: 'Pengembangan antarmuka responsive touch-optimized dengan enkripsi ujung-ke-ujung, data tabular angka presisi tinggi, dan validasi biometrik web.',
      en: 'Engineered a touch-first progressive web interface with strict tabular number alignment, WebAuthn integration, and automated audit trails.',
    },
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'WebAuthn API', 'REST & GraphQL', 'Vitest'],
    image: '/src/assets/images/showcase_fintech_app_1792985089706.jpg',
  },
];

export const servicesList: ServiceItem[] = [
  {
    number: '01',
    title: {
      id: 'Arsitektur Web Modern & Rekayasa SaaS',
      en: 'Modern Web Architecture & SaaS Engineering',
    },
    description: {
      id: 'Membangun aplikasi web mutakhir dengan skalabilitas tinggi, struktur kode modular yang mudah dirawat, dan performa Core Web Vitals kelas dunia.',
      en: 'Engineering scalable, maintainable web applications and enterprise portals with flawless Core Web Vitals and bulletproof reliability.',
    },
    deliverables: {
      id: [
        'Aplikasi Web Single Page & Multi Page Berkinerja Tinggi',
        'Arsitektur Backend REST & GraphQL Berkecepatan Tinggi',
        'Optimasi Core Web Vitals (LCP < 1.2s, CLS 0)',
        'Integrasi Database Relasional & Edge Cache',
      ],
      en: [
        'High-Performance Single Page & Multi-Tier Web Apps',
        'Scalable REST & GraphQL API Micro-architectures',
        'Core Web Vitals Optimization (LCP < 1.2s, CLS 0)',
        'Relational Database Engineering & Edge Caching',
      ],
    },
    techStack: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    highlightMetric: { value: '99.9%', label: { id: 'Jaminan Uptime', en: 'Target Availability' } },
  },
  {
    number: '02',
    title: {
      id: 'Sistem Desain & Rekayasa Antarmuka (UI/UX)',
      en: 'Design Systems & Interface Engineering (UI/UX)',
    },
    description: {
      id: 'Mengembangkan sistem antarmuka yang konsisten, berkarakter, dan ramah aksesibilitas untuk mempercepat siklus rilis produk tim Anda.',
      en: 'Creating cohesive, distinctive, and fully accessible design systems with design tokens that streamline your multi-team product velocity.',
    },
    deliverables: {
      id: [
        'Design Tokens & Perpustakaan Komponen Figma',
        'Komponen Kode Siap Pakai dengan Standar WCAG AA',
        'Micro-interactions & Animasi Halus Responsif',
        'Dokumentasi Panduan Gaya & Storybook',
      ],
      en: [
        'Figma Design Tokens & Reusable Component Libraries',
        'WCAG AA Compliant Production Code Components',
        'Fluid Responsive Micro-interactions & Motion Curves',
        'Living Style Guides & Interactive Storybook Demos',
      ],
    },
    techStack: ['Figma Tokens', 'Tailwind', 'Motion', 'Radix UI', 'Storybook'],
    highlightMetric: { value: '3.4x', label: { id: 'Kecepatan Rilis Tim', en: 'Faster Team Velocity' } },
  },
  {
    number: '03',
    title: {
      id: 'E-Commerce Performa Tinggi & Mesin Konversi',
      en: 'High-Performance E-Commerce & Growth Engines',
    },
    description: {
      id: 'Solusi toko daring berkecepatan tinggi dengan alur pembayaran yang disesuaikan untuk pasar Indonesia dan global (Midtrans, Xendit, Stripe).',
      en: 'High-converting custom storefronts optimized for instant checkouts with seamless domestic and international payment orchestration.',
    },
    deliverables: {
      id: [
        'Storefront Headless Cepat & Responsif',
        'Integrasi Payment Gateway Terpadu (QRIS, VA, Kartu)',
        'Sistem Manajemen Stok & Inventaris Real-Time',
        'Optimasi Checkout & Minimalisasi Abandoned Cart',
      ],
      en: [
        'Headless Lightning-Fast Storefronts',
        'Unified Payment Gateway Orchestration (QRIS, VA, Cards)',
        'Real-Time Stock & Warehouse Inventory Synchronization',
        'Frictionless Checkout Flows with Cart Recovery',
      ],
    },
    techStack: ['Next.js', 'React', 'Midtrans / Xendit', 'Stripe', 'Redis'],
    highlightMetric: { value: '+42%', label: { id: 'Rata-rata Konversi', en: 'Average Checkout Lift' } },
  },
  {
    number: '04',
    title: {
      id: 'Integrasi AI & Otomasi Alur Kerja Kustom',
      en: 'Custom AI Integration & Workflow Automation',
    },
    description: {
      id: 'Menghubungkan model kecerdasan buatan dan otomatisasi proses bisnis ke dalam aplikasi Anda tanpa kerumitan teknis.',
      en: 'Embedding state-of-the-art AI capabilities and automated operational pipelines directly into your existing enterprise software workflows.',
    },
    deliverables: {
      id: [
        'Integrasi API Model Generatif & Pencarian Cerdas',
        'Otomasi Pemrosesan Dokumen & Ekstraksi Data',
        'Dashboard Analitik Prediktif Kustom',
        'Keamanan Data & Privasi Tingkat Perusahaan',
      ],
      en: [
        'Generative Model & Semantic Search Implementations',
        'Automated Document Ingestion & Structured Extraction',
        'Custom Predictive Analytics Command Dashboards',
        'Enterprise-Grade Data Privacy & Token Safeguards',
      ],
    },
    techStack: ['Gemini API', 'Python / Node', 'Vector DB', 'LangChain', 'Docker'],
    highlightMetric: { value: '70%', label: { id: 'Hemat Jam Operasional', en: 'Manual Hours Saved' } },
  },
];

export const clientReviews = [
  {
    quote: {
      id: 'Kinetik mengubah total cara operasional logistik kami bekerja. Waktu muat sistem turun dari 8 detik menjadi instan, dan tim operasional di pelabuhan dapat bekerja tanpa hambatan.',
      en: 'Kinetik completely revolutionized how our logistics operations function. System query times dropped from 8 seconds to instantaneous, allowing field officers to track vessels without lag.',
    },
    author: 'Bambang Triatmojo',
    role: { id: 'Chief Technology Officer', en: 'Chief Technology Officer' },
    company: 'PT Nusantara Trans Global',
    initials: 'BT',
    verifiedOutcome: { id: 'Peningkatan 140% Efisiensi Rute', en: '140% Efficiency Increase' },
  },
  {
    quote: {
      id: 'Kualitas desain dan eksekusi teknisnya sangat memukau. Toko online kami kini terasa seperti galeri seni mewah internasional, dan konversi checkout melonjak tiga kali lipat.',
      en: 'The level of design refinement and technical execution is exceptional. Our store now feels like an international luxury architectural gallery, tripling our direct conversions.',
    },
    author: 'Astrid Danaputri',
    role: { id: 'Managing Director & Founder', en: 'Managing Director & Founder' },
    company: 'Kalandra Living Studio',
    initials: 'AD',
    verifiedOutcome: { id: '+310% Konversi Penjualan Direct', en: '+310% Direct Sales Lift' },
  },
  {
    quote: {
      id: 'Bekerja dengan Kinetik terasa seperti memiliki tim engineer senior internal di Silicon Valley. Transparan, disiplin kode yang sangat ketat, dan selalu selesai tepat waktu.',
      en: 'Working with Kinetik felt like having an elite senior engineering team in Silicon Valley. Transparent communication, impeccable code standards, and always delivered on schedule.',
    },
    author: 'Reza Hendrawan',
    role: { id: 'VP of Product Engineering', en: 'VP of Product Engineering' },
    company: 'Zenith Financial Tech',
    initials: 'RH',
    verifiedOutcome: { id: 'Adopsi 50.000+ Bisnis Aktif', en: '50,000+ Active Enterprises' },
  },
];

export const faqItems = [
  {
    question: {
      id: 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu proyek?',
      en: 'What is the typical turnaround timeline for a project?',
    },
    answer: {
      id: 'Tergantung kompleksitas. Untuk website korporat berstandar tinggi membutuhkan 3-4 minggu. Untuk aplikasi web atau SaaS MVP terintegrasi membutuhkan 6-10 minggu. Kami selalu menyepakati jadwal terperinci per sprint sebelum pengerjaan dimulai.',
      en: 'Turnaround depends on scope complexity. A high-end corporate web experience typically takes 3-4 weeks. A full-stack SaaS MVP takes 6-10 weeks. We establish a clear sprint-based delivery schedule prior to kickoff.',
    },
  },
  {
    question: {
      id: 'Siapa pemilik hak cipta dan kode sumber setelah proyek selesai?',
      en: 'Who owns the intellectual property and source code upon completion?',
    },
    answer: {
      id: '100% hak milik intelektual dan kode sumber menjadi milik Anda sepenuhnya setelah pelunasan akhir. Kami menyediakan dokumentasi lengkap, repository Git yang bersih, dan pelatihan serah terima ke tim Anda.',
      en: '100% of intellectual property, design assets, and clean source code belong entirely to your company upon final milestone payment. We provide comprehensive documentation and handover walkthroughs.',
    },
  },
  {
    question: {
      id: 'Bagaimana model pembayaran dan garansi pengerjaan?',
      en: 'What is the payment structure and post-launch guarantee policy?',
    },
    answer: {
      id: 'Sistem pembayaran bertahap berbasis pencapaian (misal 40% uang muka, 30% penyelesaian tahap pengembangan utama, 30% serah terima final). Kami memberikan garansi bebas bug selama 60 hari penuh dan opsi kontrak pemeliharaan berkelanjutan.',
      en: 'We operate on milestone-based disbursements (e.g. 40% initiation, 30% core architecture deployment, 30% final sign-off). All deliverables include a 60-day bug-free warranty and continuous support retainer options.',
    },
  },
  {
    question: {
      id: 'Teknologi apa saja yang menjadi spesialisasi Kinetik?',
      en: 'What core technology stack does Kinetik specialize in?',
    },
    answer: {
      id: 'Kami berfokus pada ekosistem modern teruji: React 19, TypeScript, Next.js, Node.js/Express, Tailwind CSS, PostgreSQL, Redis, Docker, serta integrasi gateway lokal (Midtrans/Xendit) dan global (Stripe).',
      en: 'We specialize in battle-tested modern web engineering: React 19, TypeScript, Next.js, Node.js, Tailwind CSS, PostgreSQL, Redis, Docker, alongside verified payment gateways (Midtrans, Xendit, Stripe).',
    },
  },
];
