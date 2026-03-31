View the site on https://6bf99e4e.dominus-investments.pages.dev/

Dominus Investments — Web Platform
I built a modern, high-performance marketing website for Dominus Investments, a Durban-based business consulting firm helping South African SMEs diagnose, stabilise, and scale through proven operational systems.

Tech Stack

React 19 with TypeScript
Vite 8 (Rolldown-powered)
Framer Motion — scroll-driven parallax and entrance animations
React Router v7 — client-side routing with SPA fallback
Lucide React — iconography
Custom CSS-in-JS styling (inline <style> blocks per component)


Project Structure
src/
├── components/
│   ├── Navigation.tsx       # Sticky nav with scroll state + mobile menu
│   ├── HeroSection.tsx      # Parallax image stack hero
│   ├── Footer.tsx           # CTA section + site footer
│   └── ui/
│       └── image.tsx        # Wix-compatible image component
├── pages/
│   ├── Home.tsx             # Landing page (Hero, What We Do, The Method)
│   ├── About.tsx            # Full about page with mission, values, SA context
│   ├── TheMethodPage.tsx    # Four-stage framework detail page
│   ├── Services.tsx         # Placeholder
│   └── Contact.tsx          # Placeholder
├── hooks/
│   └── use-size.ts          # ResizeObserver hook
├── styles/
│   ├── fonts.css            # Cormorant Garamond + Futura font faces
│   └── animations.css       # Shared reveal/fade utility classes
└── lib/
    └── utils.ts             # cn() class merging utility

Getting Started
Requirements: Node.js >=20.19.0
bash# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

---

## Pages & Routes

| Route | Component | Status |
|---|---|---|
| `/` | `Home` | ✅ Complete |
| `/about` | `About` | ✅ Complete |
| `/themethod` | `TheMethodPage` | ✅ Complete |
| `/services` | `Services` | 🚧 Placeholder |
| `/contact` | `Contact` | 🚧 Placeholder |
| `/work-with-us` | `Contact` | 🚧 Placeholder |

---

## Design System

The site uses a consistent design language across all pages:

| Token | Value |
|---|---|
| Primary gold | `#C6922A` |
| Ink (dark bg) | `#1a1a1a` |
| Cream (light bg) | `#f9f6f1` |
| Heading font | Cormorant Garamond |
| Body font | Jost / Georgia fallback |

Animations use a shared `useInView` intersection observer hook for scroll-triggered reveals. Framer Motion handles parallax and mount transitions on the homepage.

---

## Deployment

The project includes a `public/_redirects` file for SPA routing on Netlify:
```
/* /index.html 200
For other hosts (Vercel, Render, etc.), configure your server to serve index.html for all routes.

