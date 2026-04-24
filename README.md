# Portfolio MAJJATI MOHAMED TAHA

Portfolio professionnel React + Vite + TypeScript + Tailwind CSS.

## 🚀 Démarrage rapide

### Étape 1 — Cloner et installer

```bash
# Copier ce dossier ou cloner depuis GitHub
cd mon-portfolio
npm install
```

### Étape 2 — shadcn/ui (à faire une seule fois)

```bash
npx shadcn@latest init
# Choisir : Default, Slate, src/components/ui
npx shadcn@latest add button card badge input textarea separator avatar
```

### Étape 3 — Lancer en développement

```bash
npm run dev
# → http://localhost:5173
```

### Étape 4 — Personnaliser ton contenu

- `src/data/profile.ts` → Tes infos personnelles (email, GitHub, LinkedIn)
- `src/data/certifications.ts` → Tes certifications (déjà remplies !)
- `src/data/projects.ts` → Tes projets
- `src/data/education.ts` → Tes formations

### Étape 5 — Badges certifications

Placer tes badges (screenshots PDF convertis en WebP) dans `public/certs/` :
- `public/certs/kotlin-cert.webp`
- `public/certs/php-cert.webp`

Puis dans `src/data/certifications.ts`, décommenter les lignes `image:`.

### Étape 6 — Build et preview

```bash
npm run build
npm run preview
```

### Étape 7 — Déploiement Vercel

```bash
git init
git add .
git commit -m "feat: portfolio NOUHAYLA SABIQ v1"
git branch -M main
git remote add origin https://github.com/TON_USER/mon-portfolio.git
git push -u origin main
```

1. New Project → Importer ton repo GitHub
2. Framework: **Vite** (auto-détecté)
3. Build Command: `npm run build`
4. Output: `dist`
5. Deploy 🚀

## 📁 Structure

```
src/
├── app/
│   ├── router.tsx          ← Routes SPA
│   └── RootLayout.tsx      ← Header + Footer
├── components/
│   ├── CertificationCard.tsx
│   └── ThemeToggle.tsx
├── data/
│   ├── profile.ts          ← Tes infos
│   ├── certifications.ts   ← Tes certifs MLIAEdu
│   ├── projects.ts         ← Tes projets
│   └── education.ts        ← Tes formations
└── pages/
    ├── Home.tsx
    ├── Projects.tsx
    ├── Experience.tsx
    ├── Education.tsx
    ├── Certifications.tsx
    └── Contact.tsx
```

## ⚙️ Fonctionnalités

### 🏠 Home
- Page d’accueil avec présentation générale
- Navigation vers les différentes sections

### 📁 Projects
- Affichage des projets sous forme de cartes
- Description et liens (demo / code)

### 🎓 Education
- Timeline des formations
- Affichage des diplômes et établissements

### 📜 Certifications
- Liste des certifications
- Fonction de **filtrage / recherche**

### 📬 Contact
- Formulaire de contact (nom, email, message)
- Validation basique côté frontend

---

## 🎨 Interface
- Design moderne inspiré des interfaces minimalistes
- Utilisation de Tailwind CSS
- Layout responsive (mobile / desktop)
- Mode sombre basé sur les classes Tailwind

---



## 🛠️ Technologies utilisées

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- React Helmet Async

---

## 🎥 Démonstration:



https://github.com/user-attachments/assets/7c03affc-a239-4f39-88c1-54c591eb67b1





## 💡 Concepts pratiqués

- Architecture modulaire React
- Routing multi-pages
- State management avec hooks
- Composition de composants
- Styling moderne avec Tailwind
- Organisation d’un projet frontend complet

---

## 🧑‍💻 Auteur

👤 **MAJJATI MOHAMED TAHA**  
⚛️ Projet React – TP Portfolio 
🎓 ENS Marrakech – Département Informatique  
📅 24 April 2026

