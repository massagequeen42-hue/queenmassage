# QueenMassage - Professional Home Massage Service Bandung

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/queenmassage)

Premium home massage service website built with Next.js 15, React 19, TypeScript, and TailwindCSS.

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS, Shadcn UI
- **Animation**: Framer Motion, GSAP, Lenis Smooth Scroll
- **Database**: Neon PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Vercel + GitHub Actions CI/CD
- **Analytics**: Google Analytics 4, Microsoft Clarity, Meta Pixel

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- PostgreSQL (Neon)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/queenmassage.git
cd queenmassage

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Set up database
npx prisma generate
npx prisma db push
npx prisma db seed

# Start development server
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env` and fill in:

- `DATABASE_URL` - Neon PostgreSQL connection string
- `NEXTAUTH_SECRET` - Random secret for NextAuth
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - WhatsApp business number
- See `.env.example` for all variables

## 🏗️ Project Structure

```
queenmassage/
├── prisma/              # Database schema & seed
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── admin/      # Admin dashboard
│   │   ├── api/        # API routes
│   │   ├── area/       # Coverage area pages (Local SEO)
│   │   ├── blog/       # Blog pages
│   │   ├── booking/    # Booking page
│   │   ├── layanan/    # Service pages
│   │   └── ...
│   ├── components/     # React components
│   │   ├── admin/      # Admin components
│   │   ├── booking/    # Booking form
│   │   ├── home/       # Homepage sections
│   │   ├── layout/     # Navbar, Footer
│   │   ├── providers/  # Context providers
│   │   └── ui/         # Reusable UI components
│   └── lib/            # Utilities, constants, validations
├── .github/workflows/  # CI/CD
└── vercel.json         # Vercel config
```

## 🔧 Scripts

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run db:push    # Push schema to database
npm run db:migrate # Run migrations
npm run db:seed    # Seed database
npm run db:studio  # Open Prisma Studio
```

## 🌐 SEO Features

- Dynamic meta tags per page
- Schema.org structured data (LocalBusiness, Service, FAQ, Article, Breadcrumb)
- XML Sitemap auto-generation
- robots.txt
- Open Graph & Twitter Cards
- Core Web Vitals optimized
- Local SEO landing pages for each area

## 📱 Features

- Responsive design (mobile-first)
- Dark/Light mode
- WhatsApp integration
- Online booking system
- Admin dashboard (CMS)
- Blog with SEO optimization
- Coverage area pages
- Service detail pages
- Testimonials
- FAQ with schema markup
- Contact form
- Career page

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

### Manual

```bash
npm run build
npm run start
```

## 📄 License

Private - QueenMassage © 2025
