<div align="center">

# Cyfra Service Center

**Production-grade landing page for an electronics repair business in Kyiv.**  
Built with React 19, TypeScript 5 strict mode, and Feature-Sliced Design — architected for long-term maintainability, not just a quick deploy.

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7_strict-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square)](https://www.framer.com/motion)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## Overview

A complete redesign and rebuild of an existing service center website — from WordPress to a modern React SPA. The goal: maximize conversion from organic search traffic through a fast, accessible, SEO-first frontend with a clear content hierarchy and zero fluff.

The project covers the full spectrum of real-world frontend engineering: semantic HTML, structured data for Google rich results, scroll-triggered animations, an accessible animated accordion and auto-playing slider, per-page SEO with canonical/OG/JSON-LD, code-split lazy routing, and a consistent design system.

---

## Demo

> Deploy URL: `https://www.cyfra.org.ua`  
> Local: `npm run dev` → `http://localhost:5173`

**Pages:**
| Route | Description |
|---|---|
| `/` | Home — hero, services, process, advantages, reviews slider, FAQ accordion, CTA |
| `/remont/` | All repair services overview |
| `/remont/:serviceId` | Dynamic service page (7 services, single component) |
| `/pro-nas/` | About — team, timeline, values |
| `/vidhuky/` | Reviews with `AggregateRating` JSON-LD |
| `/blog/` | Blog with category filter |
| `/kontakty/` | Contacts — form, map embed, hours |
| `*` | Custom 404 |

---

## Features

- 🔍 **SEO-first** — per-page `<title>`, `<meta description>`, canonical, Open Graph, Twitter Cards, `lang="uk"`, `og:locale="uk_UA"`, and JSON-LD structured data on every route
- 🏗 **Schema.org markup** — `LocalBusiness`, `Service`, `BreadcrumbList`, `AggregateRating`, `Review` schemas generated from typed helpers
- ⚡ **Route-level code splitting** — every page is a lazy chunk; shared vendor/router/motion bundles split manually in Vite config
- 🎞 **Scroll-triggered animations** — `useInView` + `framer-motion` variants library; stagger groups, slide left/right, scale-in — all declarative and reusable
- 🎠 **Auto-playing review slider** — directional `AnimatePresence`, pause-on-hover, progress bar countdown, dot + arrow controls
- 🪗 **Animated FAQ accordion** — `height: auto` reveal via Framer Motion, `aria-expanded`, first item pre-opened
- 📱 **Mobile-first responsive** — hamburger drawer with overlay, swipe-friendly slider, adaptive grid breakpoints
- ♿ **Accessibility** — semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`), `aria-label` on all icon-only controls, `aria-expanded` on accordion triggers
- 🗺 **Sitemap + robots.txt** — 13 URLs with priorities and `changefreq`, proper disallow rules

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Library | React | 19.0 |
| Language | TypeScript | 5.7 (strict) |
| Bundler | Vite | 6.0 |
| Routing | React Router | 7.0 |
| Animation | Framer Motion | 11.0 |
| Styling | Tailwind CSS | 3.4 |
| SEO | react-helmet-async | 2.0 |
| Icons | lucide-react | 0.460 |
| Fonts | Unbounded + Manrope | — |

---

## Architecture

The project follows **Feature-Sliced Design (FSD)** — a methodology that enforces a strict import direction (`pages → widgets → features → entities → shared`) to prevent circular dependencies and keep the codebase scalable as it grows.

```
src/
├── app/
│   ├── App.tsx             # Layout shell: Header + main + Footer + MessengerButtons
│   └── router.tsx          # All routes with React.lazy + Suspense + PageSkeleton
│
├── pages/                  # Route-level components — one folder per page
│   ├── home/HomePage.tsx
│   ├── repair/
│   │   ├── RepairPage.tsx       # Services overview
│   │   └── RepairItemPage.tsx   # Dynamic :serviceId — single component for 7 services
│   ├── about/AboutPage.tsx
│   ├── blog/BlogPage.tsx
│   ├── reviews/ReviewsPage.tsx
│   ├── contacts/ContactsPage.tsx
│   └── not-found/NotFoundPage.tsx
│
├── widgets/                # Layout-level reusable blocks
│   ├── header/Header.tsx   # Sticky header, desktop dropdown, mobile drawer
│   ├── footer/Footer.tsx   # CTA strip, 4-column grid, bottom bar
│   └── seo-head/SeoHead.tsx  # Helmet wrapper: title/meta/OG/Twitter/JSON-LD
│
├── features/               # User-interaction features, self-contained
│   ├── contact-form/ContactForm.tsx    # Controlled form, loading/success states
│   ├── review-slider/ReviewSlider.tsx  # Auto-play, AnimatePresence, progress bar
│   └── faq-accordion/FaqAccordion.tsx  # height:auto animation, aria-expanded
│
├── entities/               # Domain data types and static data
│   ├── service/services.ts  # ServiceInfo interface + SERVICES array (7 entries)
│   └── review/reviews.ts    # Review interface + REVIEWS array
│
└── shared/
    ├── config/site.ts       # Single source of truth: URLs, phones, SEO defaults
    ├── lib/
    │   ├── animations.ts    # Framer Motion Variants library (fadeUp, slideLeft…)
    │   └── seo.ts           # JSON-LD builder functions (LocalBusiness, Service, Breadcrumb)
    └── ui/
        ├── Button/Button.tsx    # Polymorphic button: 4 variants × 3 sizes
        └── Section/Section.tsx  # SectionHeader, Animated, AnimatedGroup, AnimatedItem
```

**Why FSD?** Import rules are enforced structurally: a `feature` can import from `entities` and `shared`, but never from `pages` or `widgets`. This means any feature component is safe to refactor in isolation — a property that becomes critical in teams of 3+.

---

## State Management

This project uses **local React state only** — no external store. This is a deliberate choice, not a limitation.

Each feature component owns the state it needs:

```tsx
// ReviewSlider.tsx — slider state fully encapsulated
const [active, setActive] = useState(0)
const [dir, setDir] = useState(1)
const [paused, setPaused] = useState(false)
const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

// Stable callbacks prevent interval recreation on re-renders
const go = useCallback((idx: number, direction: number) => {
  setDir(direction)
  setActive((idx + total) % total)
}, [total])

const next = useCallback(() => go(active + 1, 1), [active, go])
```

```tsx
// FaqAccordion.tsx — single open index, null = all closed
const [openIndex, setOpenIndex] = useState<number | null>(0)
```

```tsx
// ContactForm.tsx — form + async submission state
const [form, setForm] = useState<FormState>({ name: '', phone: '', service: '', message: '' })
const [submitted, setSubmitted] = useState(false)
const [loading, setLoading] = useState(false)
```

**Rationale:** Introducing Redux or Zustand here would add complexity without benefit. The correct time to reach for a global store is when state needs to be shared across multiple unrelated subtrees — which doesn't occur in this application. The architecture is explicitly prepared for that migration: adding a `store/` layer to FSD is a single step.

---

## API Layer

Currently the contact form simulates async submission (ready to wire to a real endpoint):

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  // Replace with: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
  await new Promise((r) => setTimeout(r, 900))
  setLoading(false)
  setSubmitted(true)
}
```

The integration point is intentionally isolated inside `features/contact-form/` — switching to a real API (REST, tRPC, or a form service like Formspree) requires changing exactly one function.

---

## Authentication & Security

No authentication is required for this use case (public-facing landing page). Security considerations implemented:

- All external links use `rel="noopener noreferrer"` to prevent tab-napping
- `noIndex` prop on `NotFoundPage` prevents 404 from being indexed
- No secrets or environment-specific values embedded in client bundle — `site.ts` holds only public business info
- Phone numbers stored as E.164 (`+380678880422`) in config, formatted separately for display — single source of truth, no formatting scattered across components

---

## Performance Optimizations

### Bundle Splitting
Manual `manualChunks` in `vite.config.ts` prevents the three heaviest dependencies from bundling together:

```ts
manualChunks: {
  vendor: ['react', 'react-dom'],   // ~140 kB — cached aggressively
  router: ['react-router-dom'],     // ~25 kB — changes rarely
  motion: ['framer-motion'],        // ~95 kB — separated from vendor
}
```

### Route-Level Code Splitting
Every page is `React.lazy()` with a consistent extraction pattern:

```ts
const HomePage = lazy(() =>
  import('@/pages/home/HomePage').then((m) => ({ default: m.HomePage }))
)
```

Named exports are explicitly mapped to `default` — this avoids the "re-export default" footgun and keeps tree-shaking clean.

### Scroll-Triggered Animations
All animations use `useInView` with `{ once: true }` — elements animate in once and never again, preventing unnecessary re-renders and repaints on scroll-back.

```tsx
const inView = useInView(ref, { once: true, margin: '-60px' })
```

The `-60px` root margin ensures animations trigger just before the element enters the viewport, eliminating the "pop-in" effect on slow connections.

### Stagger Groups
Cards and list items use `staggerContainer` + `staggerChildren` — the browser schedules small sequential animations rather than repainting the entire grid at once:

```ts
export const staggerContainer: Variants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}
```

### Interval Memory Management
The `ReviewSlider` properly clears its interval on cleanup to prevent memory leaks:

```ts
useEffect(() => {
  if (paused) return
  intervalRef.current = setInterval(next, 5000)
  return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
}, [paused, next])
```

### Font Strategy
Two Google Fonts loaded with `display=swap` and `preconnect` hints in `<head>`. Unbounded (headings) + Manrope (body) — both with strong Cyrillic coverage, loaded with only the weight subset needed.

### Image Lazy Loading
Google Maps iframe uses `loading="lazy"` — the heaviest third-party resource doesn't block initial render.

---

## Reusable Components

### `SeoHead` — per-page SEO in one line
```tsx
<SeoHead
  title="Ремонт телефонів у Києві — від 299 грн | Цифра"
  description="..."
  canonical={`${SITE_CONFIG.url}/remont/telefoniv/`}
  schema={[serviceSchema, breadcrumbSchema]}
/>
```
Handles `<title>`, `<meta>`, canonical, OG, Twitter Cards, and multiple JSON-LD `<script>` tags — all from a single typed interface. `noIndex` prop for 404 pages.

### `SectionHeader` — animated heading block
```tsx
<SectionHeader
  label="Послуги"          // small uppercase label above
  title="Що ремонтуємо"   // main heading
  subtitle="Оберіть тип пристрою..."  // optional body
  center                  // optional centering
/>
```
Wraps `useInView` + stagger internally. Consumers write zero animation logic.

### `Animated` / `AnimatedGroup` / `AnimatedItem` — composable animation wrappers
```tsx
// Single element with custom variant and delay
<Animated variants={slideLeft} delay={0.2}>
  <p>Content</p>
</Animated>

// Stagger group — children animate in sequence
<AnimatedGroup className="grid grid-cols-3 gap-4">
  {items.map(item => (
    <AnimatedItem key={item.id}>
      <Card {...item} />
    </AnimatedItem>
  ))}
</AnimatedGroup>
```

### `Button` — typed variant/size system
```tsx
// Variant map prevents invalid combinations at compile time
const variantClasses: Record<ButtonVariant, string> = { ... }
const sizeClasses: Record<ButtonSize, string> = { ... }

// Usage — both variant and size are autocompleted
<Button variant="outline" size="lg">Детальніше</Button>
```

### `FaqAccordion` — fully generic
```tsx
// Works on HomePage with global FAQ and RepairItemPage with service-specific FAQ
<FaqAccordion items={service.faq} />
```
Accepts `Array<{ q: string; a: string }>` — the interface is declared in the component, not tied to any entity type.

### JSON-LD Builder Functions
```ts
// Pure functions, fully typed, no side effects
buildLocalBusinessSchema()
buildServiceSchema(name, description, url)
buildBreadcrumbSchema(items: Array<{ name: string; url: string }>)
```

---

## TypeScript Usage

TypeScript 5.7 in **strict mode** with all three additional lint-level flags enabled:

```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noFallthroughCasesInSwitch": true
}
```

**Domain types are narrow and explicit:**

```ts
// ServiceId is a union — not string — so passing an invalid service slug is a compile error
export type ServiceId =
  | 'telefoniv' | 'noutbukiv' | 'televizoriv'
  | 'planshativ' | 'prynteriv' | 'konsolei' | 'navushnykiv'

export interface ServiceInfo {
  id: ServiceId
  priceFrom: number          // not string — arithmetic-safe
  daysMin: number
  daysMax: number
  warrantyDays: number
  faq: Array<{ q: string; a: string }>
}
```

**Config is `as const`** — every value is a literal type, making the config object a compile-time constant registry:

```ts
export const SITE_CONFIG = {
  phone: ['+380678880422', '+380958880422'],
  // ...
} as const
// typeof SITE_CONFIG.phone → readonly ['+380678880422', '+380958880422']
```

**Animation variants are typed via `framer-motion`'s `Variants`** — the animation library's own type system is leveraged rather than using `any`:

```ts
import { type Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}
```

**Props interfaces extend native HTML attributes:**

```ts
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}
```
This means every valid `<button>` attribute (`disabled`, `type`, `aria-*`, `data-*`) works on `<Button>` without being re-declared.

---

## Testing

Tests are not included in this version. The architecture is explicitly set up for easy test introduction:

- **Unit tests** (`vitest` + `@testing-library/react`): all shared utilities (`animations.ts`, `seo.ts`, `site.ts`) are pure functions with no side effects — one import, call, assert.
- **Component tests**: `FaqAccordion`, `ReviewSlider`, `Button`, and `ContactForm` are self-contained with no external store dependencies — mount and interact without mocks.
- **E2E** (`Playwright`): routing is flat and predictable — page navigation, form submission flow, and slider interaction are straightforward to script.

Adding `vitest` to this project is a one-command change to `package.json` with zero architectural refactoring.

---

## Getting Started

```bash
# 1. Clone
git clone https://github.com/your-username/cyfra.git
cd cyfra

# 2. Install
npm install

# 3. Develop
npm run dev
# → http://localhost:5173

# 4. Type-check
npx tsc --noEmit

# 5. Build for production
npm run build

# 6. Preview production build
npm run preview
```

**Node.js ≥ 18** required (ESM, `fetch` API).

---

## Environment Variables

No environment variables are required to run the project. All configuration is in `src/shared/config/site.ts`.

To connect a real contact form API, add a `.env` file:

```env
VITE_CONTACT_API_URL=https://your-api.example.com/contact
```

And update `ContactForm.tsx`:
```ts
await fetch(import.meta.env.VITE_CONTACT_API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

---

## Deployment

The project builds to a static `/dist` folder — deployable anywhere that serves HTML.

**Vercel (recommended):**
```bash
npm i -g vercel
vercel --prod
```

**Netlify:**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
> ⚠️ The SPA redirect rule is required — without it, direct navigation to `/remont/telefoniv/` returns 404 on Netlify/Apache.

**Docker:**
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

---

## Challenges & Engineering Decisions

### 1. Dynamic route with a single component
All 7 service pages share `RepairItemPage.tsx`. The component reads `useParams<{ serviceId: string }>()` and looks up the service from the typed `SERVICES` array. If the param doesn't match any known `ServiceId`, it redirects to `/remont` via `<Navigate>`. This eliminates 7 nearly-identical page files while keeping full type safety and per-page SEO.

### 2. Ukrainian apostrophe in JS strings
Ukrainian uses the modifier letter apostrophe (`ʼ`, U+02BC) in words like `розʼєм`. The standard keyboard apostrophe (`'`, U+0027) terminates JS string literals. All Ukrainian text in `.ts` string values uses U+02BC — visually identical but syntactically safe. JSX text nodes (between tags) are unaffected since the HTML parser handles apostrophes differently.

### 3. Scroll-triggered animation architecture
A naive approach fires animations based on scroll position — expensive and hard to reuse. Instead, all animations are declared as `Variants` objects in a single `animations.ts` file and consumed through four wrapper components (`Animated`, `AnimatedGroup`, `AnimatedItem`, `SectionHeader`). Consumers write zero animation logic — they just choose a variant. Adding a new animation pattern means adding one export to `animations.ts`.

### 4. Review slider interval + `useCallback` dependency chain
The slider's autoplay interval depends on `next`, which depends on `active`, which changes on every slide. Without `useCallback`, the interval would restart on every render. The solution: `go` is memoized with `[total]` as its only dependency (total never changes), `next` and `prev` are memoized with `[active, go]`, and the `useEffect` depends on `[paused, next]` — so the interval only restarts when the slide changes or play state changes. Zero stale closure bugs.

### 5. JSON-LD as pure functions
SEO structured data is generated by pure builder functions rather than inline objects in JSX. This makes schemas testable, reusable, and consistent — the `LocalBusiness` address appears in exactly one place.

---

## Future Improvements

- [ ] **`vitest` + React Testing Library** — unit tests for all shared utilities and feature components
- [ ] **CMS integration** — replace static `BLOG_POSTS` and `REVIEWS` arrays with headless CMS (Sanity, Contentful, or Strapi)
- [ ] **Real form API** — wire `ContactForm` to an endpoint or Formspree; add server-side validation
- [ ] **i18n** — add Ukrainian/Russian language toggle via `react-i18next`; `hreflang` alternate URLs already in the SEO plan
- [ ] **`React.Suspense` for data** — when CMS integration lands, wrap data fetching in Suspense boundaries with proper loading skeletons already designed
- [ ] **Service Worker / PWA** — offline support via `vite-plugin-pwa`
- [ ] **Error Boundary** — add a top-level `ErrorBoundary` component to catch render errors gracefully
- [ ] **Playwright E2E** — test the contact form flow, slider navigation, and accordion keyboard interaction

---

## About the Developer

This project reflects an engineering mindset that goes beyond "make it work."

Every structural decision here has a reason: FSD enforces dependency direction to prevent architectural decay over time. Strict TypeScript with `noUnusedLocals` and `noUnusedParameters` keeps dead code out of the bundle. Manual `manualChunks` in Vite ensures the heaviest libraries are cached independently. Animation variants are extracted to a shared library so motion is consistent and declarative across the entire app. The `SeoHead` component abstracts all SEO concerns behind a typed interface so page authors can't forget `og:locale` or ship a page without a canonical.

These aren't accidental good practices — they're the result of understanding what breaks in a codebase at scale and designing around it from the start.

**Core competencies demonstrated:**
- React 19 with concurrent features (Suspense, lazy, `useCallback` dependency management)
- TypeScript strict mode: discriminated unions, `as const`, extending native HTML types
- Feature-Sliced Design applied to a real project
- Framer Motion: `AnimatePresence`, `useInView`, `Variants`, custom easing, directional animation
- SEO engineering: structured data generation, canonical strategy, Open Graph, JSON-LD
- Vite production configuration: manual chunk splitting, path aliases, ESM
- Accessible UI: `aria-expanded`, `aria-label`, semantic landmarks, keyboard-navigable controls
- Performance-aware React: stable `useCallback` chains, `once: true` in scroll observers, interval cleanup

**Open to:** Frontend, Fullstack, or React-focused roles.  
**Stack preference:** React · TypeScript · Next.js / Vite · Node.js

---

<div align="center">

---

## 📞 Connect

- **Portfolio:** [sergdev.website](https://sergdev.website)
- **GitHub:** [github.com/skaliuzhnyi](https://github.com/skaliuzhnyi)
- **Email:** flskaliuzhnyi@gmail.com
- **LinkedIn:** [linkedin.com/in/skaliuzhnyi](https://linkedin.com/in/skaliuzhnyi)

---

</div>
