# ⚡ ZENIX WEB - QUICKSTART

## 🚀 Installation (2 minutes)

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur

```bash
npm run dev
```

### 3. Ouvrir dans le navigateur

```
http://localhost:3000
```

✨ **Voilà! Le site fonctionne.**

---

## 🎨 Personnalisation Rapide

### Modifier le Contenu

Fichier: `data/content.ts`

```typescript
export const content = {
  brand: {
    name: 'Zenix Web',           // ← Votre nom
    tagline: '...',              // ← Votre tagline
  },
  hero: {
    headline: '...',             // ← Votre headline
    subheadline: '...',          // ← Votre sous-titre
  },
  // ... modifier d'autres sections
}
```

### Changer les Couleurs

Fichier: `tailwind.config.js`

```javascript
colors: {
  'zenix-dark': '#0B0F14',      // ← Couleur fond
  'zenix-blue': '#2D6BFF',      // ← Couleur accent
  'zenix-cyan': '#00E5FF',      // ← Couleur hover
}
```

### Ajouter une Section

1. Créer: `components/sections/MySection.tsx`
2. Importer dans: `app/page.tsx`
3. Ajouter au rendu

---

## 📦 Déploiement

### Build

```bash
npm run build
npm start
```

### Vercel

```bash
git push origin main
# Auto-déploiement
```

---

## 📚 Fichiers Clés

| Fichier | But |
|---------|------|
| `data/content.ts` | Contenu du site |
| `tailwind.config.js` | Thème & couleurs |
| `components/sections/` | Composants sections |
| `app/globals.css` | Styles globaux |

---

## 🎯 Prochaines Étapes

- [ ] `npm install`
- [ ] `npm run dev`
- [ ] Modifier `data/content.ts`
- [ ] Tester localement
- [ ] Build: `npm run build`
- [ ] Déployer sur Vercel

---

**Prêt à lancer? `npm install && npm run dev`** 🚀
