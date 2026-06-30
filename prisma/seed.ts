import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  await prisma.user.upsert({
    where: { email: 'admin@queenmassage.id' },
    update: {},
    create: {
      email: 'admin@queenmassage.id',
      name: 'Admin QueenMassage',
      role: 'ADMIN',
    },
  })

  // Seed Services
  const services = [
    {
      name: 'Traditional Massage',
      slug: 'traditional-massage',
      description: 'Pijat tradisional Indonesia dengan teknik turun-temurun untuk relaksasi total. Menggunakan tekanan jari, telapak tangan, dan siku untuk melancarkan peredaran darah dan melepas ketegangan otot.',
      shortDesc: 'Pijat tradisional Indonesia dengan teknik turun-temurun untuk relaksasi total.',
      duration: 60,
      price: 150000,
      icon: 'Flower2',
      benefits: ['Melancarkan peredaran darah', 'Mengurangi nyeri otot', 'Meningkatkan fleksibilitas', 'Mengurangi stress'],
      category: 'massage',
      sortOrder: 1,
    },
    {
      name: 'Relaxation Massage',
      slug: 'relaxation-massage',
      description: 'Teknik pijat lembut untuk menghilangkan stress dan menenangkan pikiran. Menggunakan gerakan Swedish massage yang mengalir.',
      shortDesc: 'Teknik pijat lembut untuk menghilangkan stress dan menenangkan pikiran.',
      duration: 60,
      price: 175000,
      icon: 'Heart',
      benefits: ['Mengurangi kecemasan', 'Menurunkan tekanan darah', 'Relaksasi total', 'Meningkatkan mood'],
      category: 'massage',
      sortOrder: 2,
    },
    {
      name: 'Sport Massage',
      slug: 'sport-massage',
      description: 'Pijat khusus untuk atlet dan pecinta olahraga. Fokus pada recovery otot dan pencegahan cedera.',
      shortDesc: 'Pijat khusus untuk atlet dan pecinta olahraga, recovery otot optimal.',
      duration: 60,
      price: 200000,
      icon: 'Dumbbell',
      benefits: ['Mempercepat recovery', 'Mencegah cedera', 'Meningkatkan fleksibilitas', 'Mengurangi muscle soreness'],
      category: 'massage',
      sortOrder: 3,
    },
    {
      name: 'Deep Tissue Massage',
      slug: 'deep-tissue-massage',
      description: 'Tekanan dalam untuk melepas ketegangan otot kronis dan nyeri. Efektif untuk masalah postur dan cedera lama.',
      shortDesc: 'Tekanan dalam untuk melepas ketegangan otot kronis dan nyeri.',
      duration: 60,
      price: 225000,
      icon: 'Layers',
      benefits: ['Mengatasi nyeri kronis', 'Memperbaiki postur', 'Melepas trigger points', 'Mengurangi inflamasi'],
      category: 'massage',
      sortOrder: 4,
    },
    {
      name: 'Reflexology',
      slug: 'reflexology',
      description: 'Terapi refleksi pada titik-titik saraf kaki untuk keseimbangan tubuh dan meningkatkan fungsi organ.',
      shortDesc: 'Terapi refleksi pada titik-titik saraf kaki untuk keseimbangan tubuh.',
      duration: 60,
      price: 125000,
      icon: 'Footprints',
      benefits: ['Menyeimbangkan energi tubuh', 'Meningkatkan fungsi organ', 'Mengurangi nyeri kaki', 'Melancarkan peredaran darah'],
      category: 'reflexology',
      sortOrder: 5,
    },
    {
      name: 'Aromatherapy Massage',
      slug: 'aromatherapy-massage',
      description: 'Kombinasi pijat lembut dengan essential oil berkualitas tinggi untuk relaksasi mendalam dan pengalaman multisensory.',
      shortDesc: 'Kombinasi pijat dengan essential oil untuk relaksasi mendalam.',
      duration: 90,
      price: 250000,
      icon: 'Sparkles',
      benefits: ['Relaksasi mendalam', 'Manfaat aromatherapy', 'Mengurangi kecemasan', 'Melembabkan kulit'],
      category: 'massage',
      sortOrder: 6,
    },
    {
      name: 'Prenatal Massage',
      slug: 'prenatal-massage',
      description: 'Pijat khusus ibu hamil yang aman dan nyaman. Membantu mengurangi ketidaknyamanan kehamilan.',
      shortDesc: 'Pijat khusus ibu hamil, aman dan nyaman untuk meringankan ketidaknyamanan.',
      duration: 60,
      price: 200000,
      icon: 'Baby',
      benefits: ['Mengurangi nyeri punggung', 'Mengurangi kaki bengkak', 'Mengurangi stress', 'Meningkatkan sirkulasi'],
      category: 'prenatal',
      sortOrder: 7,
    },
    {
      name: 'Couple Massage',
      slug: 'couple-massage',
      description: 'Pijat berdua dengan pasangan oleh dua terapis secara bersamaan. Pengalaman relaksasi romantis.',
      shortDesc: 'Pijat berdua dengan pasangan, pengalaman relaksasi romantis.',
      duration: 90,
      price: 350000,
      icon: 'Users',
      benefits: ['Pengalaman bersama', 'Meningkatkan bonding', 'Relaksasi berdua', 'Momen berkualitas'],
      category: 'massage',
      sortOrder: 8,
    },
    {
      name: 'Hotel Massage',
      slug: 'hotel-massage',
      description: 'Layanan pijat langsung ke kamar hotel Anda di Bandung. Cocok untuk wisatawan dan business traveler.',
      shortDesc: 'Layanan pijat langsung ke kamar hotel Anda di Bandung.',
      duration: 60,
      price: 200000,
      icon: 'Building',
      benefits: ['Layanan ke kamar hotel', 'Tidak perlu keluar', 'Cocok untuk traveler', 'Peralatan lengkap'],
      category: 'massage',
      sortOrder: 9,
    },
    {
      name: 'Office Massage',
      slug: 'office-massage',
      description: 'Pijat di kantor untuk karyawan. Program corporate wellness untuk meningkatkan produktivitas tim.',
      shortDesc: 'Pijat di kantor untuk karyawan, tingkatkan produktivitas tim.',
      duration: 60,
      price: 175000,
      icon: 'Briefcase',
      benefits: ['Meningkatkan produktivitas', 'Mengurangi stress kerja', 'Corporate wellness', 'Fleksibel jadwal'],
      category: 'corporate',
      sortOrder: 10,
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    })
  }

  // Seed Coverage Areas
  const areas = [
    { name: 'Bandung', slug: 'bandung', description: 'Layanan pijat panggilan profesional di Bandung Kota. Melayani seluruh kecamatan di Kota Bandung.', latitude: -6.9175, longitude: 107.6191, sortOrder: 1 },
    { name: 'Cimahi', slug: 'cimahi', description: 'Layanan pijat panggilan di Cimahi. Coverage area Cimahi Utara, Tengah, dan Selatan.', latitude: -6.8841, longitude: 107.5413, sortOrder: 2 },
    { name: 'Lembang', slug: 'lembang', description: 'Pijat panggilan di area Lembang dan sekitarnya. Cocok untuk villa dan hotel di kawasan wisata.', latitude: -6.8115, longitude: 107.6178, sortOrder: 3 },
    { name: 'Soreang', slug: 'soreang', description: 'Layanan massage home service di Soreang, Kabupaten Bandung Selatan.', latitude: -7.0331, longitude: 107.5186, sortOrder: 4 },
    { name: 'Kopo', slug: 'kopo', description: 'Pijat panggilan profesional di area Kopo dan sekitarnya termasuk Margahayu dan Sayati.', latitude: -6.9577, longitude: 107.5787, sortOrder: 5 },
    { name: 'Buah Batu', slug: 'buah-batu', description: 'Layanan massage di Buah Batu, Bandung Selatan. Termasuk area Turangga dan Batununggal.', latitude: -6.9531, longitude: 107.6404, sortOrder: 6 },
    { name: 'Antapani', slug: 'antapani', description: 'Pijat panggilan di Antapani dan sekitarnya. Coverage termasuk Arcamanik dan Mandalajati.', latitude: -6.9120, longitude: 107.6560, sortOrder: 7 },
    { name: 'Dago', slug: 'dago', description: 'Layanan pijat di area Dago, Bandung Utara. Termasuk hotel dan villa di kawasan Dago Atas.', latitude: -6.8698, longitude: 107.6150, sortOrder: 8 },
    { name: 'Setiabudi', slug: 'setiabudi', description: 'Pijat panggilan di Setiabudi dan Lembang bawah. Area premium Bandung Utara.', latitude: -6.8584, longitude: 107.6100, sortOrder: 9 },
    { name: 'Pasteur', slug: 'pasteur', description: 'Layanan massage di area Pasteur, dekat dengan pintu tol dan Bandung Barat.', latitude: -6.8935, longitude: 107.5869, sortOrder: 10 },
  ]

  for (const area of areas) {
    await prisma.coverageArea.upsert({
      where: { slug: area.slug },
      update: area,
      create: area,
    })
  }

  // Seed FAQs
  const faqs = [
    { question: 'Apa itu pijat panggilan QueenMassage?', answer: 'QueenMassage adalah layanan pijat profesional yang datang langsung ke lokasi Anda, baik di rumah, hotel, atau kantor di area Bandung dan sekitarnya.', category: 'general', sortOrder: 1 },
    { question: 'Bagaimana cara booking pijat?', answer: 'Anda bisa booking melalui website kami, menghubungi WhatsApp, atau mengisi form booking online. Pilih layanan, tanggal, waktu, dan lokasi.', category: 'booking', sortOrder: 2 },
    { question: 'Berapa harga pijat panggilan?', answer: 'Harga mulai dari Rp 125.000 untuk Reflexology hingga Rp 350.000 untuk Couple Massage. Sudah termasuk transport.', category: 'pricing', sortOrder: 3 },
    { question: 'Area mana saja yang dilayani?', answer: 'Seluruh Bandung Raya termasuk Bandung Kota, Cimahi, Lembang, Soreang, Kopo, Buah Batu, Antapani, Dago, Setiabudi, dan Pasteur.', category: 'area', sortOrder: 4 },
    { question: 'Apakah terapis bersertifikat?', answer: 'Ya, seluruh terapis telah melalui pelatihan profesional dan memiliki sertifikasi resmi. Kami juga melakukan background check.', category: 'general', sortOrder: 5 },
  ]

  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq })
  }

  // Seed Testimonials
  const testimonials = [
    { name: 'Sarah Wijaya', role: 'Karyawan Swasta', content: 'Pijat tradisionalnya luar biasa! Setelah seharian kerja, badan langsung terasa ringan.', rating: 5, sortOrder: 1 },
    { name: 'Budi Santoso', role: 'Atlet', content: 'Sport massage di QueenMassage sangat membantu recovery setelah latihan berat.', rating: 5, sortOrder: 2 },
    { name: 'Rina Agustina', role: 'Ibu Hamil', content: 'Prenatal massage-nya sangat nyaman dan aman. Rasa pegal di punggung langsung hilang.', rating: 5, sortOrder: 3 },
  ]

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({ data: testimonial })
  }

  console.log('✅ Seeding complete!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
