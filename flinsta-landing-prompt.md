# Flinsta — Full Next.js Landing Page Build Prompt

> **Context:** Flinsta is a strategic positioning and premium offer consulting brand targeting Spanish-speaking professionals who sell their time by the hour (coaches, consultants, therapists, technical specialists). The core transformation is taking them from "interchangeable hourly provider" to "positioned authority with a premium offer that generates organic demand and closes high-ticket programs."

---

## Brand Voice & Messaging Framework

**Audience:** 1:1 professionals with real expertise who:
- Sell sessions or hours
- Have income capped by their calendar
- Publish content without a system
- Lack a clear premium offer
- Are not perceived as authorities in their niche

**Not for:** beginners, influencers, or content creators.

**Core Pain (use this language in copy):**
- "I'm replaceable."
- "My income depends on hours."
- "I can't scale."
- "I'm not perceived as an authority."

**Promise:** Move from *hourly provider with no clear positioning* to *authority with a structured premium offer that generates organic opportunities and sells high-value programs.*

**Unique Offer Statement (use verbatim or as the headline foundation):**
> "I help professionals who sell by the hour exit the interchangeable model and become positioned authorities with a structured premium offer — generating organic demand through strategic content and closing high-ticket programs."

**4-Step Mechanism (use in the How It Works / Services section):**
1. **Premium Offer Redesign** — clear transformation, structure, defensible pricing
2. **Strategic Positioning** — niche by state/situation, professional identity
3. **Content System with Commercial Intent** — not content for engagement, but for conversion
4. **DM Activation System** — turning conversations into closed programs

**Narrative Arc (use across sections to guide the visitor's thinking):**
1. Identify the time trap (selling hours = structural ceiling)
2. Show the opportunity cost (income cap, burnout, calendar dependency)
3. Introduce the authority & premium offer concept
4. Reveal content as an acquisition system, not a creative activity

---

## Design System

### Colors
```css
--bg:           #000000
--surface:      #111111
--surface-2:    #1a1a1a
--border:       rgba(255, 255, 255, 0.08)
--text-primary: #ffffff
--text-muted:   rgba(255, 255, 255, 0.45)
--accent:       #ffffff
```

### Typography
- Font: `Geist` via `next/font` — clean, modern, precise
- Display headings: `7xl–8xl`, `font-weight: 700`, `letter-spacing: -0.03em`, `line-height: 1.05`
- Body: `text-muted`, `leading-relaxed`, `max-w-2xl`
- Labels / pills: uppercase, `tracking-widest`, small size

### Global Effects
- **Noise texture overlay:** fixed SVG grain at `3–5% opacity` on `body::before` for depth
- **Blob background:** reusable `<BlobBackground />` component (see below)
- **Scroll animations:** `opacity 0 → 1` + `translateY(20px) → 0` on section entry via `IntersectionObserver`

---

## Animated Blob Background Component

Reusable across hero and CTA sections. 5 blobs, each independently morphing and drifting:

```tsx
const blobs = [
  { color: '#d0d0d0', size: 600, top: '-10%',  right: '-5%',   duration: 22, delay: 0   },
  { color: '#888',    size: 500, top: '30%',    left: '-8%',    duration: 18, delay: -5  },
  { color: '#fff',    size: 400, bottom: '0%',  left: '30%',    duration: 25, delay: -10 },
  { color: '#444',    size: 700, top: '-15%',   left: '-10%',   duration: 20, delay: -8  },
  { color: '#bbb',    size: 350, bottom: '5%',  right: '-5%',   duration: 15, delay: -3  },
]
```

Each blob: `position: absolute`, `border-radius: 50%`, `filter: blur(100px)`, `opacity: 0.55`, animates `border-radius` morphing + slow `translate` drift over 15–25s `infinite alternate`. Use `@property --angle` for smooth CSS variable animation. Add `will-change: transform` and `prefers-reduced-motion` fallback that disables animation.

```css
@keyframes morphDrift {
  0%   { transform: translate(0px, 0px) scale(1);
         border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  33%  { transform: translate(80px, -60px) scale(1.1);
         border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  66%  { transform: translate(-40px, 80px) scale(0.95);
         border-radius: 50% 60% 30% 60% / 40% 70% 60% 30%; }
  100% { transform: translate(60px, 40px) scale(1.05);
         border-radius: 40% 60% 60% 30% / 60% 40% 50% 60%; }
}
```

---

## Button Style (apply globally to ALL buttons)

Metallic glass dark button — the defining UI element:

```css
.btn {
  background: #0d0d0d;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px;
  padding: 14px 28px;
  color: #fff;
  font-size: 1rem;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    inset 0 -1px 0 rgba(0, 0, 0, 0.4),
    0 4px 24px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  background: #1a1a1a;
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    0 8px 32px rgba(0, 0, 0, 0.7);
  transform: translateY(-1px);
}
```

The `inset 0 1px 0` top highlight creates the metallic rim. Apply this style to ALL CTAs site-wide.

---

## Navigation

- Fixed top, `backdrop-filter: blur(20px)`, `background: rgba(0,0,0,0.6)`, `border-bottom: 1px solid rgba(255,255,255,0.06)`
- Logo left: **"Flinsta"** — bold, white, slightly tracked
- Nav links center: `Services`, `Method`, `Testimonials`, `Contact` — `opacity: 0.7` default → `1` on hover, smooth transition
- CTA right: `"✦ Book a Call"` — metallic glass button style

---

## Section 1 — Hero

**Layout:** Full viewport height (`min-h-screen`), blob background active, centered content, `overflow: hidden`

**Content:**
- Status pill: `• Open to new projects` — dark pill (`background: #111`, `border: 1px solid rgba(255,255,255,0.1)`, `border-radius: 999px`), white dot pulses with `@keyframes pulse`
- Headline (split two lines):
  > **"Stop selling hours.**
  > **Start selling authority."**
- Subheadline (muted, `max-w-xl`, centered):
  > "We help 1:1 professionals exit the interchangeable model and become positioned authorities with structured premium offers."
- Two CTA buttons side by side using metallic glass style:
  - Primary: `"Start the Process"`
  - Secondary: `"See the Method"`
- Scroll indicator: `"Scroll down ——[🖱 mouse icon]——"` centered, `opacity: 0.4`, subtle bounce animation on mouse icon
- Logo ticker below: `"Trusted by professionals in:"` + scrolling logo marquee, `opacity: 0.35`, infinite left scroll `30s` linear

---

## Section 2 — Problem / Narrative

**Layout:** Full-width, two-column `55/45` split, dark background

**Left column — The Diagnosis:**
- Small label: `"THE REAL PROBLEM"` — uppercase, tracked, muted
- Large heading: `"It's not that you lack clients. It's that you lack positioning."`
- Three problem blocks with thin left border accent:
  1. **The Time Trap** — "Every hour you sell is an hour you can't scale. Your income has a structural ceiling built in."
  2. **The Interchangeability Problem** — "Without strategic positioning, you compete on price. You become replaceable."
  3. **The Content Illusion** — "Publishing without a conversion system is creative activity, not a business asset."
- Horizontal rule separator

**Right column — The Cost:**
- Dark card (`background: #111`, `border-radius: 20px`, `border: 1px solid var(--border)`, `padding: 2rem`)
- Heading: `"The opportunity cost of staying where you are"`
- Three stat rows, each with a large number + description:
  - `∞` — Hours traded for income, with no end in sight
  - `0` — Organic leads generated by your current content system
  - `1` — Premium offer you could be selling, but aren't
- Bottom CTA inside card: `"Change the equation →"`

---

## Section 3 — The Method (How It Works)

**Layout:** Full-width, centered, dark background with subtle grid texture overlay

**Header:**
- Small label: `"THE METHOD"`
- Heading: `"A structured process. Not a course."`
- Subtext: `"Four interconnected phases that transform how you position, offer, and sell."`

**Four phase cards** — horizontal on desktop, stacked on mobile. Each card:
- `background: #111`, `border: 1px solid rgba(255,255,255,0.07)`, `border-radius: 20px`, `padding: 2rem`
- Step number: large, muted, `opacity: 0.15`, absolute top-right
- Phase title (bold, white)
- Description (muted, `leading-relaxed`)

Card content:
1. **Premium Offer Redesign** — "We architect a premium offer with a clear transformation, solid structure, and a price that's defensible — not arbitrary."
2. **Strategic Positioning** — "We define your niche by situation, sharpen your professional identity, and eliminate interchangeability."
3. **Content System with Commercial Intent** — "We build a content architecture designed for conversion — not engagement. Every piece moves someone closer to buying."
4. **DM Activation System** — "We install a conversation-to-close system that turns inbound DMs into enrolled high-ticket clients."

On hover: card lifts slightly (`translateY(-4px)`), border brightens to `rgba(255,255,255,0.14)`.

---

## Section 4 — About / Meet the Founder

**Layout:** Two-column `55/45`, dark background

**Left column:**
- Large display heading: `"Meet [Founder Name]"`
- Bio paragraph (muted): "I'm [Name], a strategic positioning consultant. I help professionals with real expertise stop competing on price and start commanding premium. I've worked with coaches, consultants, and specialists across Latin America to redesign their offers, sharpen their positioning, and build content systems that actually generate clients."
- Horizontal rule
- Skill tags (dark filled pills, `border: 1px solid rgba(255,255,255,0.12)`, `border-radius: 8px`, small padding): `Premium Offer Design` · `Strategic Positioning` · `Content Systems` · `High-Ticket Sales` · `Personal Brand`
- Horizontal rule
- Experience table — three columns, subtle row dividers (`border-bottom: 1px solid rgba(255,255,255,0.06)`):

| Role | Brand | Period |
|---|---|---|
| Lead Strategist | Flinsta | Currently |
| Positioning Consultant | [Client/Brand] | 2023–24 |
| Brand & Offer Advisor | [Client/Brand] | 2021–23 |

**Right column:**
- Full-height image: `border-radius: 16px`, `object-fit: cover`, `filter: grayscale(100%)`
- Small dot pagination at bottom center

---

## Section 5 — Testimonials

**Layout:** Full-width, three-column grid, dark background

**Section header:**
- Label: `"RESULTS"`
- Heading: `"Professionals who made the shift"`

**Testimonial cards** (`background: #111`, `border: 1px solid rgba(255,255,255,0.07)`, `border-radius: 20px`, `padding: 2rem`):

Each card:
- Avatar: circular, grayscale, `80px`, `border: 1px solid rgba(255,255,255,0.1)`
- Client name: `2xl`, bold, white
- Role/title: muted gray, small
- Horizontal rule divider: `opacity: 0.1`
- Quote: regular weight, muted white, `leading-relaxed`
- Star rating row: gold `#F5C518` stars + numeric score `5.0`

Sample card content:
> **"I went from charging $80/session to closing a $3,000 program in 6 weeks. The offer redesign changed everything."**
> — Laura M., Business Coach

> **"I had followers but no system. Now my content actually generates leads that close. Completely different business."**
> — Carlos R., Marketing Consultant

> **"The positioning work alone was worth 10x the investment. I stopped competing and started leading."**
> — Valentina S., Executive Coach

---

## Section 6 — Recent Work / Case Studies (Portfolio)

**Layout:** Section label + horizontal rule, horizontal scrollable card row

**Header:**
- Label: `"CASE STUDIES ↓"` + horizontal rule spanning full width

**Scrollable project cards** (`scroll-snap-type: x mandatory`, `scrollbar-width: none`):

Each card:
- Aspect ratio `3/4`, `border-radius: 16px`, `overflow: hidden`
- Grayscale screenshot or result image (`filter: grayscale(100%)`, `object-fit: cover`)
- Overlay on bottom: frosted glass pill CTA `"View Case Study ↗"` — `backdrop-filter: blur(10px)`, `background: rgba(255,255,255,0.08)`, `border: 1px solid rgba(255,255,255,0.15)`, `border-radius: 999px`
- On hover: image scales up `scale(1.03)`, overlay darkens slightly

Card data (4 cards):
1. **@coach_name** — "From $80 sessions to $3K program. 6 weeks." — Category: `COACHING`
2. **@consultant_name** — "Content system generating 5 leads/week organically." — Category: `CONSULTING`
3. **@therapist_name** — "Repositioned premium niche. 3x average ticket." — Category: `THERAPY`
4. **@specialist_name** — "Launched high-ticket program. Sold out in 30 days." — Category: `SPECIALIST`

**No gradient fade cropping** — use `padding` on track container, never `overflow: hidden` on the outer wrapper. Cards must be fully visible with shadows intact.

Right-side navigation arrow: circular, metallic glass style.

---

## Section 7 — CTA / Contact

**Layout:** Full viewport section, blob background active (more intense than hero), centered content

**Content:**
- Status pill: `• Open to New Projects` — pulsing dot
- Heading: `"Ready to stop being interchangeable?"`
- Subtext (muted): `"Let's build your premium offer, sharpen your positioning, and install a system that generates demand. Book a free 30-minute diagnostic call."`
- Single large CTA button (metallic glass, wider padding `18px 48px`): `"Book a Free Call"`
- Social links row below: `LinkedIn | Instagram | Twitter` — icons separated by `|` dividers, `opacity: 0.5` → `1` on hover, smooth transition

---

## Footer

- Dark, minimal, single row
- Left: `© 2025 Flinsta. All rights reserved.`
- Center: `Flinsta` logotype
- Right: `Privacy Policy · Terms`
- All text `opacity: 0.4`, `font-size: sm`
- `border-top: 1px solid rgba(255,255,255,0.06)`

---

## Technical Delivery Spec

**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, `next/font` (Geist)

**File structure:**
```
app/
  layout.tsx           — global font, metadata, noise overlay
  page.tsx             — imports and composes all sections
components/
  BlobBackground.tsx   — reusable animated blob component
  Nav.tsx
  HeroSection.tsx
  ProblemSection.tsx
  MethodSection.tsx
  AboutSection.tsx
  TestimonialsSection.tsx
  WorkSection.tsx
  CTASection.tsx
  Footer.tsx
styles/
  globals.css          — CSS variables, keyframes, blob animations, noise texture
tailwind.config.ts     — custom color tokens, font stack
```

**Performance requirements:**
- `will-change: transform` on all blob divs
- `prefers-reduced-motion` media query disables all animations
- All images use `next/image` with `placeholder="blur"`
- Blob component wrapped in `React.memo`
- Lazy load all sections below the fold

**Metadata (SEO):**
```tsx
export const metadata = {
  title: 'Flinsta — Strategic Positioning for Premium Professionals',
  description: 'Stop selling hours. Start selling authority. We help 1:1 professionals build premium offers and generate organic high-ticket demand.',
  openGraph: { ... }
}
```

---

*Build the complete landing page as a single cohesive product. Every section must feel like part of the same design system — unified color, consistent button style, shared motion language, and a narrative that carries the visitor from problem awareness to booking a call.*
