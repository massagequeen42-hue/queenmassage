# Deployment Guide

## Vercel Deployment (Recommended)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/queenmassage)

### Manual Setup

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/queenmassage.git
git push -u origin main
```

2. **Import in Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Select "Next.js" framework preset

3. **Environment Variables**
   Add all variables from `.env.example` in Vercel dashboard:
   - Settings > Environment Variables
   - Add each variable for Production, Preview, and Development

4. **Database**
   - Use Neon PostgreSQL (integrates with Vercel)
   - Or add `DATABASE_URL` manually

5. **Deploy**
   - Click Deploy
   - Wait for build to complete

### Domain Setup

1. Go to Project Settings > Domains
2. Add `queenmassage.id`
3. Configure DNS:
   - A Record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`

## CI/CD with GitHub Actions

The project includes `.github/workflows/deploy.yml` that:
- Runs lint on every push/PR
- Deploys preview for PRs
- Deploys production on push to `main`

### Required Secrets

Add these in GitHub repo Settings > Secrets:
- `VERCEL_TOKEN` - Vercel API token
- `VERCEL_ORG_ID` - Your Vercel org ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

Get these values:
```bash
npx vercel link
# Check .vercel/project.json for orgId and projectId
```

## Neon Database Setup

1. Create account at [neon.tech](https://neon.tech)
2. Create new project (region: Singapore for best latency)
3. Copy connection strings:
   - Pooled connection → `DATABASE_URL`
   - Direct connection → `DIRECT_URL`
4. Run migrations:
```bash
npx prisma db push
npx prisma db seed
```

## Post-Deployment Checklist

- [ ] Website loads at custom domain
- [ ] SSL certificate active (HTTPS)
- [ ] All pages render correctly
- [ ] Booking form works
- [ ] WhatsApp integration works
- [ ] Admin panel accessible
- [ ] Database connected
- [ ] Analytics tracking (GA4, Clarity)
- [ ] Search Console verified
- [ ] Sitemap accessible at /sitemap.xml
- [ ] robots.txt accessible at /robots.txt
- [ ] Core Web Vitals passing

## Monitoring

- **Vercel Dashboard**: Build logs, analytics, errors
- **Neon Dashboard**: Database metrics, queries
- **Google Search Console**: Indexing, search performance
- **Google Analytics**: Traffic, conversions
- **Microsoft Clarity**: Heatmaps, recordings
