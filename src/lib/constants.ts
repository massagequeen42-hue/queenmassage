export const SITE_CONFIG = {
  name: 'QueenMassage',
  domain: 'queenmassage.id',
  url: 'https://queenmassage.id',
  title: 'QueenMassage - Pijat Panggilan Profesional Bandung #1',
  description: 'Layanan pijat panggilan profesional terbaik di Bandung. Tersedia Traditional Massage, Sport Massage, Reflexology, Aromatherapy, Prenatal Massage, dan lainnya. Terapis bersertifikat, harga terjangkau.',
  phone: '+6281234567890',
  whatsapp: '6281234567890',
  email: 'info@queenmassage.id',
  address: 'Bandung, Jawa Barat, Indonesia',
  openingHours: '08:00 - 22:00',
  socialMedia: {
    instagram: 'https://instagram.com/queenmassage.id',
    facebook: 'https://facebook.com/queenmassage.id',
    tiktok: 'https://tiktok.com/@queenmassage.id',
  },
}

export const SERVICES = [
  {
    name: 'Pijat Traditional & Refleksi',
    slug: 'pijat-traditional-refleksi',
    shortDesc: 'Kombinasi pijat tradisional dan refleksi untuk relaksasi total dan keseimbangan tubuh.',
    icon: 'Star',
    price: 200000,
    priceOptions: [
      { duration: 60, price: 200000 },
      { duration: 90, price: 250000 },
      { duration: 120, price: 300000 },
    ],
    duration: 60,
    recommended: true,
  },
  {
    name: 'Pijat Kebugaran',
    slug: 'pijat-kebugaran',
    shortDesc: 'Pijat khusus untuk memulihkan kebugaran tubuh, menghilangkan lelah dan pegal secara menyeluruh.',
    icon: 'Zap',
    price: 400000,
    priceOptions: [
      { duration: 60, price: 400000 },
      { duration: 90, price: 500000 },
      { duration: 120, price: 600000 },
    ],
    duration: 60,
    recommended: true,
  },
  {
    name: 'Pijat Lulur',
    slug: 'pijat-lulur',
    shortDesc: 'Perawatan lengkap pijat dan lulur untuk kulit halus, cerah, dan tubuh rileks.',
    icon: 'Gem',
    price: 450000,
    priceOptions: [
      { duration: 120, price: 450000 },
    ],
    duration: 120,
    recommended: true,
  },
  {
    name: 'Traditional Massage',
    slug: 'traditional-massage',
    shortDesc: 'Pijat tradisional Indonesia dengan teknik turun-temurun untuk relaksasi total.',
    icon: 'Flower2',
    price: 150000,
    duration: 60,
  },
  {
    name: 'Relaxation Massage',
    slug: 'relaxation-massage',
    shortDesc: 'Teknik pijat lembut untuk menghilangkan stress dan menenangkan pikiran.',
    icon: 'Heart',
    price: 175000,
    duration: 60,
  },
  {
    name: 'Sport Massage',
    slug: 'sport-massage',
    shortDesc: 'Pijat khusus untuk atlet dan pecinta olahraga, recovery otot optimal.',
    icon: 'Dumbbell',
    price: 200000,
    duration: 60,
  },
  {
    name: 'Deep Tissue Massage',
    slug: 'deep-tissue-massage',
    shortDesc: 'Tekanan dalam untuk melepas ketegangan otot kronis dan nyeri.',
    icon: 'Layers',
    price: 225000,
    duration: 60,
  },
  {
    name: 'Reflexology',
    slug: 'reflexology',
    shortDesc: 'Terapi refleksi pada titik-titik saraf kaki untuk keseimbangan tubuh.',
    icon: 'Footprints',
    price: 125000,
    duration: 60,
  },
  {
    name: 'Aromatherapy Massage',
    slug: 'aromatherapy-massage',
    shortDesc: 'Kombinasi pijat dengan essential oil untuk relaksasi mendalam.',
    icon: 'Sparkles',
    price: 250000,
    duration: 90,
  },
  {
    name: 'Prenatal Massage',
    slug: 'prenatal-massage',
    shortDesc: 'Pijat khusus ibu hamil, aman dan nyaman untuk meringankan ketidaknyamanan.',
    icon: 'Baby',
    price: 200000,
    duration: 60,
  },
  {
    name: 'Couple Massage',
    slug: 'couple-massage',
    shortDesc: 'Pijat berdua dengan pasangan, pengalaman relaksasi romantis.',
    icon: 'Users',
    price: 350000,
    duration: 90,
  },
  {
    name: 'Hotel Massage',
    slug: 'hotel-massage',
    shortDesc: 'Layanan pijat langsung ke kamar hotel Anda di Bandung.',
    icon: 'Building',
    price: 200000,
    duration: 60,
  },
  {
    name: 'Office Massage',
    slug: 'office-massage',
    shortDesc: 'Pijat di kantor untuk karyawan, tingkatkan produktivitas tim.',
    icon: 'Briefcase',
    price: 175000,
    duration: 60,
  },
]

export const COVERAGE_AREAS = [
  { name: 'Bandung', slug: 'bandung', lat: -6.9175, lng: 107.6191 },
  { name: 'Cimahi', slug: 'cimahi', lat: -6.8841, lng: 107.5413 },
  { name: 'Lembang', slug: 'lembang', lat: -6.8115, lng: 107.6178 },
  { name: 'Soreang', slug: 'soreang', lat: -7.0331, lng: 107.5186 },
  { name: 'Kopo', slug: 'kopo', lat: -6.9577, lng: 107.5787 },
  { name: 'Buah Batu', slug: 'buah-batu', lat: -6.9531, lng: 107.6404 },
  { name: 'Antapani', slug: 'antapani', lat: -6.9120, lng: 107.6560 },
  { name: 'Dago', slug: 'dago', lat: -6.8698, lng: 107.6150 },
  { name: 'Setiabudi', slug: 'setiabudi', lat: -6.8584, lng: 107.6100 },
  { name: 'Pasteur', slug: 'pasteur', lat: -6.8935, lng: 107.5869 },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Harga', href: '/harga' },
  { label: 'Area', href: '/area' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Testimoni', href: '/testimoni' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Karir', href: '/karir' },
  { label: 'Kontak', href: '/kontak' },
]

export const TIME_SLOTS = [
  '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00',
]

export const FAQ_DATA = [
  {
    question: 'Apa itu pijat panggilan QueenMassage?',
    answer: 'QueenMassage adalah layanan pijat profesional yang datang langsung ke lokasi Anda, baik di rumah, hotel, atau kantor di area Bandung dan sekitarnya. Terapis kami bersertifikat dan berpengalaman.',
  },
  {
    question: 'Bagaimana cara booking pijat?',
    answer: 'Anda bisa booking melalui website kami, menghubungi WhatsApp, atau mengisi form booking online. Pilih layanan, tanggal, waktu, dan lokasi yang diinginkan.',
  },
  {
    question: 'Berapa harga pijat panggilan?',
    answer: 'Harga mulai dari Rp 125.000 untuk Reflexology hingga Rp 350.000 untuk Couple Massage. Harga sudah termasuk biaya transport dalam area coverage kami.',
  },
  {
    question: 'Area mana saja yang dilayani?',
    answer: 'Kami melayani seluruh area Bandung Raya termasuk Bandung Kota, Cimahi, Lembang, Soreang, Kopo, Buah Batu, Antapani, Dago, Setiabudi, dan Pasteur.',
  },
  {
    question: 'Apakah terapis bersertifikat?',
    answer: 'Ya, seluruh terapis QueenMassage telah melalui pelatihan profesional dan memiliki sertifikasi resmi. Kami juga melakukan background check untuk keamanan pelanggan.',
  },
  {
    question: 'Bisa memilih terapis pria atau wanita?',
    answer: 'Tentu! Saat booking, Anda bisa memilih preferensi gender terapis sesuai kenyamanan Anda.',
  },
  {
    question: 'Apa yang perlu disiapkan untuk pijat di rumah?',
    answer: 'Cukup sediakan ruangan yang cukup luas dan nyaman. Terapis kami akan membawa semua perlengkapan termasuk matras pijat, handuk, dan minyak/aromatherapy.',
  },
  {
    question: 'Apakah aman untuk ibu hamil?',
    answer: 'Ya, kami menyediakan layanan Prenatal Massage khusus untuk ibu hamil. Terapis kami terlatih khusus dan menggunakan teknik yang aman untuk ibu dan janin. Disarankan untuk usia kehamilan di atas 12 minggu.',
  },
  {
    question: 'Berapa lama durasi pijat?',
    answer: 'Durasi standar adalah 60 menit. Namun tersedia juga opsi 90 menit dan 120 menit tergantung layanan yang dipilih.',
  },
  {
    question: 'Apakah ada garansi kepuasan?',
    answer: 'Ya! Jika Anda tidak puas dengan layanan kami, kami akan mengirimkan terapis pengganti atau mengembalikan dana Anda. Kepuasan pelanggan adalah prioritas utama kami.',
  },
]
