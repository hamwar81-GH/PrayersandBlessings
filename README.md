# Prayers and Blessings — prayersandblessings.net

A premium spiritual editorial platform built with Next.js 14, Tailwind CSS, and the App Router.

---

## 🚀 Quick Deployment Guide

### Prerequisites
- Node.js 18.17+ 
- npm or yarn
- Git
- GitHub account
- Vercel account (free tier works)

---

## 📦 Step 1 — Local Setup

```bash
# Extract the ZIP and enter the project
cd prayersandblessings

# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

---

## 🐙 Step 2 — Push to GitHub

```bash
# Initialize Git
git init
git add .
git commit -m "Initial commit: Prayers and Blessings platform"

# Create repo on GitHub (via github.com), then:
git remote add origin https://github.com/YOUR_USERNAME/prayersandblessings.git
git branch -M main
git push -u origin main
```

---

## ▲ Step 3 — Deploy to Vercel

**Option A — Vercel Dashboard (Recommended):**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your `prayersandblessings` GitHub repository
4. Vercel auto-detects Next.js — no extra config needed
5. Click **"Deploy"**
6. Your site is live in ~2 minutes

**Option B — Vercel CLI:**

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 🌐 Step 4 — Connect Custom Domain

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `prayersandblessings.net` and `www.prayersandblessings.net`
3. Update your DNS registrar with the Vercel nameservers or A/CNAME records provided
4. SSL is automatic via Vercel

---

## 💰 Step 5 — Enable Google AdSense

1. Apply for AdSense at [google.com/adsense](https://www.google.com/adsense)
2. Once approved, get your Publisher ID (`ca-pub-XXXXXXXXXX`)
3. In `app/layout.tsx`, uncomment and update the AdSense script:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous"></script>
   ```
4. In `components/ui/AdSlot.tsx`, replace the placeholder with your actual `<ins>` tag

---

## 📧 Step 6 — Newsletter Integration

Replace the newsletter form in `app/page.tsx` with your preferred provider:
- **Mailchimp**: Add their embed form action URL
- **ConvertKit**: Use their form embed code  
- **Beehiiv**: Connect via their embed widget

---

## 🔍 SEO Checklist

- [ ] Google Search Console: Add property and submit sitemap at `/sitemap.xml`
- [ ] Google Analytics: Add GA4 tracking ID to `layout.tsx`
- [ ] Update `verification` in `layout.tsx` with your Google Search Console code
- [ ] Replace placeholder images with real spiritual photography
- [ ] Add real author photos to `/about` page
- [ ] Update physical address and phone number in Footer and Contact page

---

## 📁 Project Structure

```
prayersandblessings/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # XML sitemap generator
│   ├── robots.ts               # Robots.txt generator
│   ├── not-found.tsx           # 404 page
│   ├── prayers/                # Prayer pillar pages
│   ├── blessings/              # Blessing pillar pages
│   ├── collections/            # Collection pages
│   ├── guides/                 # Guide pages
│   ├── about/                  # About Us (EEAT)
│   ├── contact/                # Contact Us
│   ├── privacy-policy/         # Privacy Policy
│   ├── terms-of-use/           # Terms & Disclaimer
│   ├── cookies-policy/         # Cookies Policy
│   ├── editorial-guidelines/   # Editorial Standards (EEAT)
│   ├── sitemap/                # HTML Sitemap
│   ├── dmca/                   # DMCA Policy
│   ├── search/                 # Search page
│   └── feed.xml/               # RSS Feed
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav with search
│   │   └── Footer.tsx          # Trust footer
│   └── ui/
│       ├── BackToTop.tsx       # Back to top button
│       └── AdSlot.tsx          # AdSense placement component
├── public/
│   ├── icon.svg                # Favicon
│   ├── site.webmanifest        # PWA manifest
│   └── images/                 # Image assets
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind with custom design tokens
├── tsconfig.json               # TypeScript config
├── vercel.json                 # Vercel deployment config
└── package.json
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `ivory` | `#FAF7F2` | Background |
| `gold` | `#C9A96E` | Primary accent |
| `sage` | `#DDE6D5` | Section tints |
| `lavender` | `#E9E2F4` | Section tints |
| `charcoal` | `#1F1F1F` | Body text |
| Font Display | Cormorant Garamond | Headlines |
| Font Body | Manrope | Body text |

---

## 📝 Content Expansion

To add new prayer/blessing pages, create a new folder inside `app/prayers/` or `app/blessings/` with a `page.tsx` file. Copy an existing sub-page as your template and update the metadata and content.

---

## ✅ Production Readiness Checklist

- [x] Next.js 14 App Router
- [x] Full TypeScript
- [x] Mobile-first responsive design
- [x] Sticky header with search
- [x] XML Sitemap (`/sitemap.xml`)
- [x] Robots.txt (`/robots.txt`)
- [x] RSS Feed (`/feed.xml`)
- [x] JSON-LD Schema (Organization, WebSite, SiteNavigation, FAQ)
- [x] Open Graph + Twitter Card metadata on all pages
- [x] Canonical URLs on all pages
- [x] EEAT pages (About, Contact, Editorial, Privacy, Terms, Cookies, DMCA)
- [x] AdSense placements (4 per page pattern)
- [x] Back-to-top button
- [x] 404 custom page
- [x] Security headers
- [x] Vercel-ready config
- [x] No broken imports
- [x] No duplicate H1s
- [x] Breadcrumb navigation
- [x] HTML Sitemap page
- [x] Social media links (Instagram, Pinterest, YouTube, TikTok)

---

*Built for prayersandblessings.net — Premium Spiritual Editorial Platform*
