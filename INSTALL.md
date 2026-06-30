# Installation Guide

## Prerequisites

- **Node.js** 20 or higher
- **npm** 10+ (or yarn/pnpm)
- **Git**
- **Neon PostgreSQL** account (free tier available)

## Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/queenmassage.git
cd queenmassage
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your values:

### Database (Neon)
1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Set `DATABASE_URL` and `DIRECT_URL`

### Authentication
1. Generate a secret: `openssl rand -base64 32`
2. Set `NEXTAUTH_SECRET`

### WhatsApp
1. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` (format: 628xxxxx)

## Step 4: Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed initial data
npx prisma db seed
```

## Step 5: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## Step 6: Verify

- [ ] Homepage loads correctly
- [ ] Dark/Light mode works
- [ ] Navigation works
- [ ] Booking form submits
- [ ] Admin panel accessible at /admin

## Common Issues

### Prisma Client Not Found
```bash
npx prisma generate
```

### Database Connection Error
- Check DATABASE_URL is correct
- Ensure Neon project is active
- Try `?sslmode=require` in connection string

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```
