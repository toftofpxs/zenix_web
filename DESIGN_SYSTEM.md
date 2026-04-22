# 🎨 ZENIX WEB - DESIGN SYSTEM

## Brand Identity

**Zenix Web** est une agence web **agressive more clean**, **moderne** et **orientée résultats**.

### Brand Feeling

- ✅ Fast, reliable, results-focused
- ✅ Tech-oriented, modern SaaS
- ✅ Trust, efficiency, conversion
- ✅ NOT artistic, NOT decorative

---

## Visual Style

### Overall Aesthetic

- Dark mode first (mandatory)
- Minimalist, sharp, high contrast
- Cyber-tech aesthetic (but not flashy)
- Clean grid, strong spacing
- Subtle neon glow accents

### What This Means

```
✅ DO:
  - Clean, minimal cards
  - Strong typography hierarchy
  - High contrast colors
  - Subtle glow effects
  - Fast animations
  - Direct, clear copy

❌ DON'T:
  - Heavy shadows
  - Decorative elements
  - Slow animations
  - Gradients everywhere
  - Vague marketing copy
  - Artistic flourishes
```

---

## Color Palette

### Primary Colors

```css
Primary Background : #0B0F14  (Deep navy)
Secondary BG       : #111823  (Slightly lighter)
Dark border        : #1C2430  (For cards, dividers)
```

### Accent Colors

```css
Primary Accent     : #2D6BFF  (Tech blue - CTA)
Secondary Accent   : #00E5FF  (Cyan - Hover, highlights)
Optional Accent    : #7C3AED  (Purple - Alternative)
```

### Text Colors

```css
Primary Text       : #E6EDF5  (Off-white)
Secondary Text     : #9AA4B2  (Gray-blue)
Muted              : #5A6370  (Dark gray)
```

### When to Use Each

| Element | Color | Why |
|---------|-------|-----|
| Backgrounds | #0B0F14, #111823 | Clean foundation |
| Borders | #1C2430 | Subtle distinction |
| CTA Button | #2D6BFF | Clear primary action |
| Button Hover | #00E5FF | Fast, eye-catching |
| Headings | #E6EDF5 | Maximum contrast |
| Body Text | #E6EDF5 | Readable, professional |
| Muted Text | #9AA4B2 | Sub-info, labels |

---

## Typography

### Fonts

- **Headings:** Space Grotesk (Bold, Geometric, Modern)
- **Body:** Inter (Clean, Highly Readable)

### Scale & Hierarchy

```html
<!-- Hero Headline -->
<h1>48-64px bold, Space Grotesk, #E6EDF5</h1>

<!-- Section Title -->
<h2>32-40px bold, Space Grotesk, #E6EDF5</h2>

<!-- Card Heading -->
<h3>18-24px semibold, Space Grotesk, #E6EDF5</h3>

<!-- Body Text -->
<p>16px regular, Inter, #E6EDF5</p>

<!-- Small Text / Labels -->
<p>12-14px, Inter, #9AA4B2</p>
```

### Typography Rules

- Strong hierarchy (no subtle differences)
- Bold headlines (catch attention immediately)
- Simple, readable body text
- No decorative fonts
- Maximum 3 sizes per section

---

## Component Style

### Cards

```css
/* Style */
background: #111823
border: 1px solid #1C2430
border-radius: 12-16px
padding: 24px

/* Hover */
border-color: #2D6BFF
box-shadow: 0 0 20px rgba(45, 107, 255, 0.15)
transition: 200ms
```

### Buttons

#### Primary Button (CTA)

```css
background: #2D6BFF
color: white
padding: 12px 24px
border-radius: 12px
font-weight: 600

hover:
  - box-shadow glow blue
  - brightness +10%
  - scale +5%

transition: 150-200ms
```

#### Secondary Button

```css
background: transparent
border: 2px solid #00E5FF
color: #00E5FF
padding: 12px 24px
border-radius: 12px
font-weight: 600

hover:
  - fill slightly with blue tint
  - box-shadow glow cyan

transition: 150-200ms
```

### Forms / Inputs

```css
background: #111823
border: 1px solid #1C2430
color: #E6EDF5
padding: 12px 16px
border-radius: 12px

focus:
  - border-color: #2D6BFF
  - box-shadow glow blue

transition: 200ms
```

---

## Animation Style

### Overall Feel

- **FAST** - No slow animations
- **MINIMAL** - Subtle, purposeful
- **RESPONSIVE** - Feel snappy
- **EFFICIENT** - Speed perception

### Common Animations

#### Fade Up Entry

```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

#### Hover Scale

```javascript
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.2 }}
```

#### Glow on Hover

```css
box-shadow: 0 0 20px rgba(45, 107, 255, 0.15)
transition: 200ms
```

#### Loading State

```javascript
<motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
```

### Timing

- Entrance: 600ms
- Hover: 150-200ms
- Exit: 300ms
- Nothing over 800ms

---

## Spacing & Layout

### Grid

- Use max-width: 1280px (7xl in Tailwind)
- Padding: 24px (1.5rem) on mobile
- Padding: 48px (3rem) on desktop
- Gap between columns: 24px

### Section Spacing

```css
padding-top: 80px      /* md:128px */
padding-bottom: 80px   /* md:128px */
```

### Card Padding

```css
padding: 24px          /* Standard card */
padding: 32px          /* Large card */
```

---

## Border & Shadows

### Borders

```css
/* Cards, inputs */
border: 1px solid #1C2430

/* Hover state */
border: 1px solid #2D6BFF

/* Dividers */
border: 1px solid #1C2430
opacity: 50%
```

### Shadows (Minimal)

```css
/* Glow blue (on hover) */
box-shadow: 0 0 20px rgba(45, 107, 255, 0.15)

/* Glow cyan (on hover) */
box-shadow: 0 0 20px rgba(0, 229, 255, 0.15)

/* NO HEAVY SHADOWS */
```

---

## Responsive Design

### Breakpoints

- **Mobile:** 320px - 639px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px+

### Mobile First Rules

1. Start with mobile layout
2. Expand to tablet
3. Then desktop
4. Always test on real devices

---

## Copy Style (UI Text)

### Tone

- Direct
- Short
- Business oriented
- Results-focused
- NO marketing fluff

### Examples

```
✅ GOOD:
  "Des sites qui ramènent des clients"
  "Rapide. Propre. Rentable."
  "+35% de rendez-vous en 3 mois"
  "Load < 2.5s"

❌ BAD:
  "Expérience numérique exceptionnelle"
  "Créateurs de rêves digitaux"
  "Votre vision en code"
  "Solutions innovantes"
```

---

## Component Guide

### Hero Section

```
- Large bold headline (48-64px)
- Short, focused subheadline
- 2 CTAs (primary + secondary)
- Stats if relevant
- Subtle gradient background
```

### Service Cards

```
- Icon (top or left)
- Title (short, clear)
- Description (one line max)
- Hover: border glow
- Hover: slightly raise (translateY)
```

### Portfolio Item

```
- Project name
- Category tag
- Main result/metric
- Secondary metrics
- On hover: slight translate, glow
```

---

## Dark Mode Implementation

### Tailwind Configuration

```javascript
colors: {
  'zenix-dark': '#0B0F14',
  'zenix-bg': '#111823',
  'zenix-border': '#1C2430',
  'zenix-blue': '#2D6BFF',
  'zenix-cyan': '#00E5FF',
  'zenix-purple': '#7C3AED',
  'zenix-text': '#E6EDF5',
  'zenix-muted': '#9AA4B2',
}
```

### Usage

```html
<div class="bg-zenix-dark text-zenix-text border border-zenix-border">
  Content here
</div>
```

---

## Final Checklist

Before launching:

- [ ] All text is direct and results-focused
- [ ] No decorative elements
- [ ] Animations are < 600ms
- [ ] Hover effects are obvious but not flashy
- [ ] Card borders glow only on hover
- [ ] Buttons use primary blue for CTA
- [ ] All fonts are Space Grotesk or Inter
- [ ] Dark background #0B0F14
- [ ] High contrast for accessibility
- [ ] Mobile fully responsive
- [ ] Load time < 2.5s (target)

---

**This is a HIGH-PERFORMANCE, CONVERSION-FOCUSED design system.** ⚡

Not for aesthetics. For results. 🎯
