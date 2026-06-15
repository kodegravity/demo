# Hexiware — IT Consulting Landing Site

A modern, single-page marketing site for **Hexiware Consulting** built with Next.js 14 (App Router), Tailwind CSS, shadcn/ui and Framer Motion. Inspired by spiraldatatech.com but redesigned with a fresh brand, animated hero, and a working contact form backed by MongoDB.

> Email: hello@hexiware.com · Phone: +1 (800) 555-0199 · Toronto, Canada

---

## ✨ Features

- Animated hero with dashboard mockup, floating rocket, dot-grid background
- 6 services with hover-to-fill cards
- "Our company" stats + tech stack chips
- 4-step "How we work" timeline
- Testimonials / case studies
- Enterprise platform highlight
- Contact form → POST `/api/contact` → MongoDB
- Fully responsive, smooth scroll navigation
- Production-ready for Vercel

## 🧰 Tech Stack

- **Next.js 14** (App Router, JS)
- **Tailwind CSS** + **shadcn/ui** components
- **Framer Motion** animations
- **lucide-react** icons
- **MongoDB** (optional — only used by `/api/contact`)

## 🚀 Quick start (local)

```bash
# 1. install
yarn install     # or: npm install

# 2. configure env
cp .env.example .env
# edit MONGO_URL and DB_NAME

# 3. run
yarn dev         # http://localhost:3000
```

### `.env`

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=hexiware
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 📁 Project structure

```
app/
├── api/[[...path]]/route.js   # catch-all API (health + contact)
├── globals.css                # tailwind + custom styles
├── layout.js                  # root layout + fonts + toaster
└── page.js                    # full landing page (single file)
components/ui/                 # shadcn primitives (button, card, input, ...)
lib/utils.js                   # cn() helper
tailwind.config.js
package.json
```

## ☁️ Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel → **New Project** → import the repo.
3. Add Environment Variables:
   - `MONGO_URL` — your MongoDB connection string (e.g. MongoDB Atlas free tier)
   - `DB_NAME` — e.g. `hexiware`
4. Click **Deploy**. Done.

> If you don't need the contact form, simply delete `app/api/[[...path]]/route.js` and remove the `mongodb` import; the site works as a pure static landing page.

## 🎨 Customising

- **Company info / address / email**: edit the `Contact` and `Footer` components in `app/page.js`.
- **Services**: edit the `SERVICES` array near the top of `app/page.js`.
- **Testimonials**: edit `TESTIMONIALS`.
- **Brand colors**: change the `--primary` HSL value in `app/globals.css` and the `from-indigo-* to-blue-*` gradient classes used in `page.js`.
- **Logo**: replace the `<Logo />` component in `page.js` with your own SVG / `<Image />`.

## 📜 License

MIT — do whatever you want with it. © Hexiware Consulting.
