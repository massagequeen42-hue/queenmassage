# Database Guide

## Overview

QueenMassage uses **Neon PostgreSQL** with **Prisma ORM**.

## Schema

### Models

| Model | Description |
|-------|-------------|
| User | Admin users (NextAuth) |
| Account | OAuth accounts |
| Session | User sessions |
| Service | Massage services |
| Booking | Customer bookings |
| BlogPost | Blog articles |
| Testimonial | Customer reviews |
| GalleryItem | Gallery images |
| FAQ | FAQ entries |
| CoverageArea | Service areas |
| PricingPlan | Pricing packages |
| SiteSetting | CMS settings |
| ContactSubmission | Contact form entries |
| CareerApplication | Job applications |

## Setup

### 1. Create Neon Database

```
https://console.neon.tech
```

- Create new project
- Region: Singapore (sin1) for Southeast Asia
- Copy connection strings

### 2. Configure Environment

```env
DATABASE_URL="postgresql://user:pass@ep-xxx.aws.neon.tech/queenmassage?sslmode=require"
DIRECT_URL="postgresql://user:pass@ep-xxx.aws.neon.tech/queenmassage?sslmode=require"
```

### 3. Generate Client

```bash
npx prisma generate
```

### 4. Push Schema

```bash
npx prisma db push
```

### 5. Seed Data

```bash
npx prisma db seed
```

### 6. View Data

```bash
npx prisma studio
```

## Migrations

For production changes:

```bash
# Create migration
npx prisma migrate dev --name description_of_change

# Apply in production
npx prisma migrate deploy
```

## Backup

Neon provides:
- Point-in-time recovery
- Branching for safe changes
- Auto-scaling

## Common Queries

```sql
-- Total bookings by status
SELECT status, COUNT(*) FROM bookings GROUP BY status;

-- Revenue by month
SELECT DATE_TRUNC('month', "createdAt") as month, SUM("totalPrice") 
FROM bookings WHERE status = 'COMPLETED' GROUP BY month;

-- Popular services
SELECT s.name, COUNT(b.id) as total 
FROM services s LEFT JOIN bookings b ON s.id = b."serviceId" 
GROUP BY s.name ORDER BY total DESC;
```
