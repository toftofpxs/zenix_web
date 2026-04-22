# Zenix Web - Agence Web Haute Conversion

Une agence web moderne, minimaliste et orientée résultats conçue pour les commerces locaux.

## 🎯 Positionnement

**Zenix Web** crée des sites web **ultrarapides**, **conversion-focused** et **optimisés pour ramener des clients** aux commerces locaux : garages, salons, réparation, e-commerce local, etc.

**Tagline:** "Des sites qui ramènent des clients"

## 🛠️ Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **React Hook Form**
- **Lucide React**

## 🎨 Design System

- **Dark Mode First** - Technologique et moderne
- **Minimaliste** - Pas de décoration inutile
- **High Contrast** - Premium et lisible
- **SaaS Aesthetic** - Tech-oriented

### Palette Couleurs

```
Primary Background  : #0B0F14
Secondary BG        : #111823
Borders             : #1C2430
Primary Accent      : #2D6BFF (Blue)
Secondary Accent    : #00E5FF (Cyan)
Optional Accent     : #7C3AED (Purple)
Text Primary        : #E6EDF5
Text Secondary      : #9AA4B2
```

### Typographie

- **Headings:** Space Grotesk (Bold, Geometric)
- **Body:** Inter (Clean, Readable)

## 📱 Sections

1. **Navbar** - Navigation fixe avec menu mobile
2. **Hero** - Headline percutante + 2 CTAs
3. **Services** - 6 services avec icônes
4. **Portfolio** - Cas clients avec résultats réels
5. **Process** - 3 étapes (Analyze → Build → Deliver)
6. **Contact** - Formulaire optimisé + infos
7. **Footer** - Liens + CTA

## 🚀 Installation

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir: http://localhost:3000

### 3. Build pour la production

```bash
npm run build
npm start
```

## 🎯 Caractéristiques

- ✅ **Mobile-First** - Optimisé pour mobile
- ✅ **Performant** - Load < 2.5s cible
- ✅ **Conversion-Focused** - Designed for leads
- ✅ **Responsive** - Desktop/Tablet/Mobile
- ✅ **Animations Rapides** - Fade-up, Hover effects
- ✅ **SEO Ready** - Meta tags, Open Graph
- ✅ **Accessible** - Semantic HTML, ARIA

## 📋 Contenu

Tous les textes sont dans `data/content.ts` pour faciliter les modifications.

```typescript
export const content = {
  brand: { ... },
  hero: { ... },
  services: { ... },
  portfolio: { ... },
  contact: { ... },
  // etc...
}
```

## 🔧 Personnalisation

### Changer le Contenu

Éditer `data/content.ts`:

```typescript
hero: {
  headline: 'Votre titre ici',
  subheadline: 'Votre sous-titre',
  // ...
}
```

### Changer les Couleurs

Éditer `tailwind.config.js`:

```javascript
colors: {
  'zenix-blue': '#2D6BFF',
  'zenix-cyan': '#00E5FF',
  // ...
}
```

### Ajouter une Section

1. Créer: `components/sections/MySection.tsx`
2. Importer dans: `app/page.tsx`
3. Ajouter au rendu

## 📈 Performance

- Load time: < 2.5s
- Lighthouse: 90+ score
- Core Web Vitals: All Green
- Mobile optimized

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
git push origin main
# Auto-déploiment
```

### Autre

```bash
npm run build
npm start
```

## 📞 Support

Tous les fichiers sont commentés et bien structurés.

## 📄 Licence

Libre d'utilisation et de modification.

---

**Créé pour les agences web orientées résultats.** 🚀
