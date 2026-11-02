export type Language = 'id' | 'en';

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  year: string;
  category: 'systems' | 'web' | 'uiux';
  categoryLabel: { id: string; en: string };
  metrics: { value: string; label: { id: string; en: string } }[];
  summary: { id: string; en: string };
  challenge: { id: string; en: string };
  solution: { id: string; en: string };
  technologies: string[];
  image: string;
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
      about: 'Tentang',
      services: 'Kompetensi',
      work: 'Proyek',
      estimator: 'Kalkulator Proyek',
      testimonials: 'Testimoni',
      faq: 'FAQ',
      cta: 'Hubungi Saya',
    },
    hero: {
      badge: 'Mahasiswa Program Studi Sistem Informasi',
      name: 'Laudya Salbech Kanzora',
      role: 'Systems Analyst & Full-Stack Web Developer',
      headlineStart: 'Membangun Sistem Informasi',
      headlineAccent: 'Presisi & Berdaya Guna',
      headlineEnd: 'dari Analisis hingga Implementasi.',
      subhead:
        'Halo! Saya Laudya Salbech Kanzora, mahasiswa aktif Program Studi Sistem Informasi. Saya berdedikasi memadukan metodologi analisis kebutuhan bisnis, arsitektur basis data terstruktur, dan rekayasa web modern untuk menciptakan produk digital yang solutif.',
      primaryCta: 'Konsultasi Proyek / Kolaborasi',
      secondaryCta: 'Lihat Portofolio Proyek',
      stats: [
        { value: '3.91', label: 'Indeks Prestasi Kumulatif (IPK)' },
        { value: '18+', label: 'Proyek Sistem & Web Diselesaikan' },
        { value: '5+', label: 'Sertifikasi Kompetensi & Keahlian' },
        { value: '100%', label: 'Komitmen Kualitas & Ketepatan Waktu' },
      ],
    },
    services: {
      kicker: 'Keahlian Utama',
      title: 'Kompetensi Spesialis Bidang Sistem Informasi',
      subtitle:
        'Menggabungkan pola pikir analitis dalam proses bisnis dengan keahlian teknis coding untuk menghadirkan solusi teknologi yang tepat sasaran.',
    },
    estimator: {
      kicker: 'Kalkulator Kolaborasi',
      title: 'Simulasi Lingkup & Estimasi Kerjasama Proyek',
      subtitle:
        'Rencanakan kebutuhan proyek web, desain sistem informasi, atau konsultasi digital Anda untuk melihat estimasi waktu dan alokasi sumber daya.',
    },
    work: {
      kicker: 'Studi Kasus & Portofolio',
      title: 'Karya Nyata & Solusi Sistem Digital',
      subtitle:
        'Rangkaian proyek akademik, magang, dan freelance yang berorientasi pada penyelesaian masalah nyata dengan metrik terukur.',
      filterAll: 'Semua Proyek',
      viewDetails: 'Lihat Analisis Proyek',
    },
    testimonials: {
      kicker: 'Dukungan & Evaluasi',
      title: 'Rekomendasi dari Dosen, Mentor, dan Rekan Kerja',
      subtitle:
        'Pengalaman nyata kolaborasi bersama Laudya Salbech Kanzora dalam pengerjaan sistem dan rekayasa perangkat lunak.',
    },
    faq: {
      kicker: 'Pertanyaan Umum',
      title: 'Informasi Lebih Lanjut',
      subtitle:
        'Jawaban mengenai latar belakang studi, ketersediaan magang/proyek, dan alur kolaborasi.',
    },
    contact: {
      kicker: 'Mari Terhubung',
      title: 'Diskusikan Peluang Kolaborasi atau Proyek',
      subtitle:
        'Terbuka untuk peluang magang (internship), proyek freelance sistem informasi, atau kolaborasi penelitian akademik.',
      formName: 'Nama Lengkap',
      formEmail: 'Alamat Email',
      formPhone: 'Nomor WhatsApp',
      formType: 'Kategori Kebutuhan',
      formBudget: 'Perkiraan Anggaran / Bentuk Kerjasama',
      formMessage: 'Pesan / Rincian Kebutuhan Proyek',
      submitBtn: 'Kirim Pesan ke Laudya',
      submitting: 'Mengirimkan Pesan...',
      successTitle: 'Pesan Berhasil Terkirim!',
      successDesc:
        'Terima kasih telah menghubungi. Saya akan membalas pesan Anda via email atau WhatsApp secepatnya.',
      resetBtn: 'Kirim Pesan Lain',
    },
    footer: {
      about:
        'Laudya Salbech Kanzora adalah mahasiswa Program Studi Sistem Informasi yang berfokus pada analisis sistem bisnis, UI/UX design, dan rekayasa aplikasi web modern berkinerja tinggi.',
      location: 'Indonesia · Terbuka untuk Kerja Jarak Jauh (Remote) & On-Site',
      copyright: '© 2026 Laudya Salbech Kanzora. Hak Cipta Dilindungi.',
      builtWith: 'Dibuat dengan React 19, TypeScript, dan Tailwind CSS.',
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Competencies',
      work: 'Projects',
      estimator: 'Project Estimator',
      testimonials: 'Endorsements',
      faq: 'FAQ',
      cta: 'Contact Me',
    },
    hero: {
      badge: 'Information Systems Undergraduate Student',
      name: 'Laudya Salbech Kanzora',
      role: 'Systems Analyst & Full-Stack Web Developer',
      headlineStart: 'Engineering Information Systems with',
      headlineAccent: 'Analytical Rigor',
      headlineEnd: 'from Requirements to Deployment.',
      subhead:
        'Hi! I am Laudya Salbech Kanzora, an Information Systems undergraduate student. I specialize in bridging business process modeling, robust database architecture, and modern web technologies to create intuitive digital solutions.',
      primaryCta: 'Consult / Collaborate',
      secondaryCta: 'Explore Featured Projects',
      stats: [
        { value: '3.91', label: 'Cumulative GPA' },
        { value: '18+', label: 'Systems & Web Projects Built' },
        { value: '5+', label: 'Certifications & Competencies' },
        { value: '100%', label: 'Commitment to Quality & Delivery' },
      ],
    },
    services: {
      kicker: 'Core Capabilities',
      title: 'Information Systems Core Competencies',
      subtitle:
        'Combining structured business process engineering with clean code craftsmanship to deliver high-impact technology solutions.',
    },
    estimator: {
      kicker: 'Collaboration Calculator',
      title: 'Interactive Scope & Project Estimator',
      subtitle:
        'Configure your upcoming web development, system modeling, or UI/UX project to see realistic timelines and scope allocations.',
    },
    work: {
      kicker: 'Case Studies & Portfolio',
      title: 'Featured Works & System Implementations',
      subtitle:
        'A collection of capstone, internship, and freelance initiatives solving concrete operational challenges.',
      filterAll: 'All Projects',
      viewDetails: 'View Project Details',
    },
    testimonials: {
      kicker: 'Recommendations',
      title: 'Endorsements from Professors, Mentors & Clients',
      subtitle:
        'Direct feedback on Laudya Salbech Kanzora’s work ethic, technical diligence, and collaborative capabilities.',
    },
    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Everything You Need to Know',
      subtitle:
        'Clear information on my study background, internship availability, and collaboration workflow.',
    },
    contact: {
      kicker: 'Get in Touch',
      title: 'Let’s Discuss an Opportunity or Project',
      subtitle:
        'Available for internship roles, freelance systems development, and academic research collaborations.',
      formName: 'Your Full Name',
      formEmail: 'Email Address',
      formPhone: 'Phone / WhatsApp',
      formType: 'Inquiry Category',
      formBudget: 'Budget or Engagement Type',
      formMessage: 'Message or Project Brief',
      submitBtn: 'Send Message to Laudya',
      submitting: 'Sending Message...',
      successTitle: 'Message Dispatched!',
      successDesc:
        'Thank you for reaching out. I will get back to you via email or WhatsApp promptly.',
      resetBtn: 'Send Another Message',
    },
    footer: {
      about:
        'Laudya Salbech Kanzora is an Information Systems student focused on enterprise systems analysis, UI/UX design systems, and modern web application development.',
      location: 'Indonesia · Open for Remote & On-Site Opportunities',
      copyright: '© 2026 Laudya Salbech Kanzora. All Rights Reserved.',
      builtWith: 'Crafted with React 19, TypeScript, and Tailwind CSS.',
    },
  },
};

export const caseStudiesList: CaseStudy[] = [
  {
    id: 'sim-akademik',
    title: 'Sistem Informasi Manajemen Tugas Akhir & Bimbingan Kampus',
    client: 'Proyek Skripsi & Riset Sistem Informasi',
    year: '2025',
    category: 'systems',
    categoryLabel: { id: 'Sistem Informasi Kampus', en: 'Campus Information System' },
    metrics: [
      { value: '85%', label: { id: 'Pengurangan Waktu Verifikasi Berkas', en: 'Document Verification Reduction' } },
      { value: '1.200+', label: { id: 'Mahasiswa & Dosen Terlayani', en: 'Students & Faculty Served' } },
      { value: '100%', label: { id: 'Audit Trail Transparan', en: 'Audit Trail Compliance' } },
    ],
    summary: {
      id: 'Aplikasi berbasis web untuk otomasi alur pendaftaran, penentuan dosen pembimbing, review naskah bertahap, dan penjadwalan sidang skripsi terpadu.',
      en: 'A web-based system automating thesis submission workflows, advisor matching, staged draft reviews, and integrated oral defense scheduling.',
    },
    challenge: {
      id: 'Sebelumnya proses pengajuan judul dan persetujuan berkas skripsi dilakukan manual menggunakan dokumen fisik dan spreadsheet, menimbulkan risiko hilangnya riwayat revisi dan keterlambatan sidang hingga berbulan-bulan.',
      en: 'Previously, title approvals and thesis draft iterations relied on physical paper trails and scattered spreadsheets, causing lost revision logs and months of defense delays.',
    },
    solution: {
      id: 'Laudya memodelkan BPMN alur kerja akademik, merancang skema basis data PostgreSQL yang ternormalisasi (3NF), dan mengimplementasikan antarmuka berbasis React 19 dengan role-based access control (Mahasiswa, Dosen, Koordinator).',
      en: 'Laudya modeled the end-to-end BPMN workflow, designed a 3NF normalized PostgreSQL schema, and built a responsive React 19 interface with multi-tier role permissions.',
    },
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'BPMN 2.0'],
    image: '/src/assets/images/showcase_saas_logistics_1792985088910.jpg',
  },
  {
    id: 'umkm-pos-inventory',
    title: 'Platform Point of Sale & Manajemen Inventaris UMKM',
    client: 'Kemitraan UMKM Retail Lokal',
    year: '2025',
    category: 'web',
    categoryLabel: { id: 'Web App & Database', en: 'Web App & Database' },
    metrics: [
      { value: '+45%', label: { id: 'Efisiensi Stok & Re-order', en: 'Inventory Restock Efficiency' } },
      { value: '< 1 detik', label: { id: 'Kecepatan Cetak & Transaksi', en: 'Transaction Checkout Speed' } },
      { value: 'Rp 240 Jt', label: { id: 'Omzet Bulanan Terdata', en: 'Monthly GMV Recorded' } },
    ],
    summary: {
      id: 'Sistem POS berbasis web yang terintegrasi langsung dengan pembaruan stok real-time, pencatatan kas masuk/keluar, dan laporan laba rugi otomatis.',
      en: 'A cloud-based POS system synchronized with real-time warehouse inventory, petty cash ledger, and automated P&L statement generation.',
    },
    challenge: {
      id: 'Toko retail UMKM sering mengalami selisih stok antara gudang dan etalase toko karena pencatatan manual di buku kasir, serta kesulitan menghitung margin keuntungan harian.',
      en: 'Local retailers suffered stock discrepancies between stockrooms and sales counters due to manual paper ledgers, making daily margin analysis tedious.',
    },
    solution: {
      id: 'Membangun aplikasi web responsif dengan fitur scanner barcode kamera HP, peringatan stok menipis otomatis, dan dashboard visualisasi performa penjualan harian.',
      en: 'Engineered a touch-friendly web app featuring smartphone barcode scanning, automatic low-stock notifications, and real-time revenue analytics.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'REST API', 'IndexedDB Offline Cache'],
    image: '/src/assets/images/showcase_luxury_brand_1792985089346.jpg',
  },
  {
    id: 'klinik-rekam-medis',
    title: 'UI/UX Redesign & Portal Rekam Medis Pasien Digital',
    client: 'Klinik Pratama Sehat Mandiri',
    year: '2026',
    category: 'uiux',
    categoryLabel: { id: 'UI/UX & Desain Sistem', en: 'UI/UX & Design Systems' },
    metrics: [
      { value: '92 / 100', label: { id: 'Skor Usability (SUS Score)', en: 'System Usability Scale (SUS)' } },
      { value: '-60%', label: { id: 'Waktu Registrasi Pasien Baru', en: 'Patient Onboarding Time' } },
      { value: '100%', label: { id: 'Kepatuhan Standar Aksesibilitas', en: 'WCAG AA Accessibility' } },
    ],
    summary: {
      id: 'Rancangan desain antarmuka komprehensif dan prototipe interaktif untuk sistem pendaftaran klinik, antrean digital, dan rekam medis elektronik.',
      en: 'A human-centered UI/UX overhaul and design system for a digital clinic portal, queue management, and electronic medical record lookup.',
    },
    challenge: {
      id: 'Staf klinik dan dokter mengeluhkan software lama yang terlalu rumit, font terlalu kecil, serta butuh 12 klik hanya untuk membuat satu resep obat.',
      en: 'Healthcare staff complained that the legacy EHR software was cluttered and required 12 clicks to prescribe standard medication, slowing patient intake.',
    },
    solution: {
      id: 'Melakukan riset pengguna (in-depth interview), menyusun design tokens terstandarisasi di Figma, dan menguji prototipe interaktif hingga mencapai SUS score 92.',
      en: 'Conducted user journey mapping, created an accessible Figma token system, and iterated high-fidelity prototypes validated with real clinic staff.',
    },
    technologies: ['Figma', 'Design Systems', 'User Research', 'React UI Components', 'Tailwind'],
    image: '/src/assets/images/showcase_fintech_app_1792985089706.jpg',
  },
];

export const servicesList: ServiceItem[] = [
  {
    number: '01',
    title: {
      id: 'Analisis & Perancangan Sistem Informasi',
      en: 'Systems Analysis & Requirements Engineering',
    },
    description: {
      id: 'Menganalisis proses bisnis, memetakan diagram alur (BPMN/DFD), menyusun dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL/SRS), dan merancang arsitektur sistem.',
      en: 'Modeling business workflows, producing formal SRS specifications, drafting BPMN/UML diagrams, and defining architectural boundaries for enterprise applications.',
    },
    deliverables: {
      id: [
        'Diagram Alur Kerja Bisnis (BPMN 2.0 & DFD Tingkat 0-2)',
        'Spesifikasi Kebutuhan Fungsional & Non-Fungsional (SRS)',
        'Diagram UML Lengkap (Use Case, Activity, Sequence, Class)',
        'Studi Kelayakan Sistem & Analisis Kesenjangan (Gap Analysis)',
      ],
      en: [
        'Business Process Modeling (BPMN 2.0 & Multi-level DFD)',
        'Functional & Non-Functional Software Requirements (SRS)',
        'Comprehensive UML Artifacts (Use Case, Sequence, Class)',
        'System Feasibility Study & Gap Analysis Report',
      ],
    },
    techStack: ['BPMN 2.0', 'UML', 'Miro', 'Draw.io', 'Enterprise Architect'],
    highlightMetric: { value: '100%', label: { id: 'Kesesuaian Spesifikasi', en: 'Requirements Traceability' } },
  },
  {
    number: '02',
    title: {
      id: 'Rekayasa Web Modern (Frontend & Full-Stack)',
      en: 'Modern Web Engineering (Frontend & Full-Stack)',
    },
    description: {
      id: 'Mengembangkan aplikasi web responsif dan cepat menggunakan React 19, TypeScript, dan Tailwind CSS dengan standar clean code dan arsitektur modular.',
      en: 'Engineering responsive, accessible, and high-performance web applications using modern React, TypeScript, and Tailwind CSS with modular best practices.',
    },
    deliverables: {
      id: [
        'Aplikasi Web Responsif (Mobile, Tablet, Desktop)',
        'Manajemen State Efisien & Type-Safety Ketat',
        'Integrasi REST API & Autentikasi Pengguna Aman',
        'Optimasi Kecepatan Muat & Core Web Vitals',
      ],
      en: [
        'Responsive Web Applications Across All Devices',
        'Strict Type-Safety & Predictable State Management',
        'Secure REST API Integration & Role Authentication',
        'Core Web Vitals Optimization (< 1.2s Load Times)',
      ],
    },
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    highlightMetric: { value: '< 1.1s', label: { id: 'Kecepatan Muat Rata-rata', en: 'Average Load Time' } },
  },
  {
    number: '03',
    title: {
      id: 'Desain Antarmuka (UI/UX) & Sistem Desain',
      en: 'UI/UX Interface Design & Design Systems',
    },
    description: {
      id: 'Merancang antarmuka digital yang memanjakan mata sekaligus intuitif bagi pengguna, didasarkan pada riset kebutuhan pengguna dan standar aksesibilitas WCAG AA.',
      en: 'Crafting aesthetic, intuitive, and accessible user interfaces grounded in user-centered research, component tokens, and WCAG AA guidelines.',
    },
    deliverables: {
      id: [
        'Wireframe, User Journey Map & User Persona',
        'Prototipe Interaktif Resolusi Tinggi di Figma',
        'Sistem Desain (Warna, Tipografi, Komponen Reusable)',
        'Usability Testing & Evaluasi Heuristik',
      ],
      en: [
        'Wireframing, User Journey Maps & Personas',
        'Interactive High-Fidelity Figma Prototypes',
        'Design Tokens & Reusable UI Component Libraries',
        'Usability Testing & Heuristic Evaluation Reports',
      ],
    },
    techStack: ['Figma', 'Design Tokens', 'FigJam', 'WCAG AA', 'Prototyping'],
    highlightMetric: { value: '92/100', label: { id: 'Skor Usability (SUS)', en: 'Usability Score' } },
  },
  {
    number: '04',
    title: {
      id: 'Manajemen Basis Data & Integrasi Data',
      en: 'Database Management & Data Modeling',
    },
    description: {
      id: 'Merancang skema database relasional yang ternormalisasi (ERD), kueri teroptimasi, serta dashboard visualisasi analitik data bisnis.',
      en: 'Designing normalized relational database schemas (ERDs), optimizing SQL query execution plans, and configuring interactive analytics dashboards.',
    },
    deliverables: {
      id: [
        'Perancangan Skema Database Konseptual & Fisik (ERD)',
        'Normalisasi Database (1NF sampai 3NF / BCNF)',
        'Optimasi Kueri SQL & Indexing Kinerja Tinggi',
        'Dashboard Visualisasi Metrik & Laporan Bisnis',
      ],
      en: [
        'Conceptual, Logical & Physical Data Models (ERD)',
        'Relational Database Normalization (1NF to 3NF)',
        'SQL Query Optimization & Indexing Strategies',
        'Business Metrics & Analytics Dashboarding',
      ],
    },
    techStack: ['PostgreSQL', 'MySQL', 'DBeaver', 'Prisma / ORM', 'SQL Analytics'],
    highlightMetric: { value: '3NF', label: { id: 'Standar Normalisasi', en: 'Relational Standard' } },
  },
];

export const clientReviews = [
  {
    quote: {
      id: 'Laudya menunjukkan pemahaman mendalam dalam mata kuliah Analisis Sistem dan Pemrograman Web. Proyek sistem bimbingan tugas akhir yang ia bangun sangat terstruktur, dengan dokumentasi SRS dan BPMN yang sangat rapi.',
      en: 'Laudya demonstrated profound analytical capability in Systems Analysis and Web Engineering. Her capstone thesis management prototype was exceptionally modeled with rigorous SRS and BPMN documentation.',
    },
    author: 'Dr. Ir. Hendra Gunawan, M.T.',
    role: { id: 'Dosen Pembimbing & Akademisi', en: 'Faculty Advisor & Senior Lecturer' },
    company: 'Program Studi Sistem Informasi',
    initials: 'HG',
    verifiedOutcome: { id: 'Nilai A Proyek Perancangan Sistem', en: 'Grade A on Systems Architecture' },
  },
  {
    quote: {
      id: 'Saat menjalani proyek kolaborasi, Laudya sangat komunikatif dan cepat menerjemahkan kebutuhan bisnis kami menjadi antarmuka web yang modern, mudah dipahami staf kasir, dan tidak pernah error.',
      en: 'During our collaborative project, Laudya was exceptionally communicative. She translated our retail workflows into an intuitive web interface that our staff adopted immediately with zero errors.',
    },
    author: 'Siti Rahmawati, S.E.',
    role: { id: 'Pemilik Usaha Retail & Mitra UMKM', en: 'Retail Founder & UMKM Partner' },
    company: 'Mitra Usaha Mandiri',
    initials: 'SR',
    verifiedOutcome: { id: 'Efisiensi Stok Meningkat 45%', en: 'Inventory Restock Lift +45%' },
  },
  {
    quote: {
      id: 'Dedikasi Laudya dalam mendesain sistem antarmuka sangat luar biasa. Ia tidak hanya mementingkan tampilan yang cantik, tetapi juga aspek arsitektur kode, kecepatan muat, dan kemudahan bagi pengguna akhir.',
      en: 'Laudya’s commitment to thoughtful design and software architecture is rare. She prioritizes clean code structure, blazing performance, and end-user accessibility alongside great visual craft.',
    },
    author: 'Fajar Nugraha',
    role: { id: 'Lead Software Engineer / Mentor Magang', en: 'Lead Software Engineer & Mentor' },
    company: 'Tech Studio Partner',
    initials: 'FN',
    verifiedOutcome: { id: 'Lighthouse Score 98/100', en: 'Lighthouse Performance 98/100' },
  },
];

export const faqItems = [
  {
    question: {
      id: 'Siapa Laudya Salbech Kanzora dan apa fokus studinya?',
      en: 'Who is Laudya Salbech Kanzora and what is her academic focus?',
    },
    answer: {
      id: 'Laudya Salbech Kanzora adalah mahasiswa aktif Program Studi Sistem Informasi. Fokus studinya mencakup Analisis & Perancangan Sistem Bisnis (Systems Analysis), Rekayasa Perangkat Lunak Web Modern (React, TypeScript), Desain Pengalaman Pengguna (UI/UX), dan Manajemen Basis Data Relasional.',
      en: 'Laudya Salbech Kanzora is an undergraduate student in Information Systems. Her focus encompasses Enterprise Systems Analysis, Modern Web Software Engineering (React, TypeScript), UI/UX Design Systems, and Relational Database Architecture.',
    },
  },
  {
    question: {
      id: 'Apakah Laudya terbuka untuk magang (internship) atau proyek freelance?',
      en: 'Is Laudya available for internships or freelance collaboration?',
    },
    answer: {
      id: 'Ya, tentu! Laudya sangat terbuka untuk kesempatan magang (Internship) di bidang Systems Analyst, Product Management, UI/UX Designer, maupun Frontend Developer, serta pengerjaan proyek freelance sistem informasi dan pembuatan website profesional.',
      en: 'Yes! Laudya is actively open for internship opportunities in Systems Analysis, UI/UX Design, or Frontend Engineering, as well as freelance web development and system design engagements.',
    },
  },
  {
    question: {
      id: 'Bagaimana metode kerja dan pendekatan penyelesaian masalah Laudya?',
      en: 'What is Laudya’s problem-solving methodology?',
    },
    answer: {
      id: 'Laudya menggunakan pendekatan terstruktur: diawali dengan Requirement Gathering & BPMN Modeling, perancangan prototipe UI/UX di Figma, pembuatan skema database normalisasi 3NF, dilanjutkan dengan implementasi kode bersih (clean code) dan pengujian menyeluruh sebelum deployment.',
      en: 'Laudya follows a structured methodology: starting with Requirement Gathering & BPMN Process Modeling, Figma prototyping, 3NF normalized database schema design, and clean-code component implementation followed by thorough testing.',
    },
  },
  {
    question: {
      id: 'Teknologi apa saja yang dikuasai secara mendalam?',
      en: 'What technologies and tools does Laudya specialize in?',
    },
    answer: {
      id: 'Bahasa & Framework: JavaScript, TypeScript, React 19, Node.js, Tailwind CSS, HTML5/CSS3. Database: PostgreSQL, MySQL. Tools & Desain: Figma, BPMN 2.0, UML, Git, GitHub, VS Code, Postman, Vercel.',
      en: 'Languages & Frameworks: TypeScript, JavaScript, React 19, Node.js, Tailwind CSS. Databases: PostgreSQL, MySQL. Tools & Methods: Figma, BPMN 2.0, UML, Git/GitHub, Postman, Vercel, REST APIs.',
    },
  },
];
