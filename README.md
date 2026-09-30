# 📸 MEMŌ — Starter Project (Supabase Storage Workshop)

> Application web moderne de galerie photo d'événement conçue avec **React**, **Vite**, **TypeScript**, **Tailwind CSS** et **Framer Motion**.
> Ce repository sert de **projet de départ pour les apprenants** dans le cadre de l'intégration de **Supabase Storage**.

---

## 🎯 Objectifs de l'Atelier

Dans cette version de départ, l'application est prête visuellement et fonctionnellement avec des données d'exemple, mais sans couche de stockage externe. Votre mission consiste à :

1. **Créer un projet Supabase** et configurer un bucket de stockage (ex. `photos`) avec les droits d'accès adaptés (politiques RLS / Storage policies).
2. **Configurer les variables d'environnement** (`VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`) en copiant `.env.example` vers `.env`.
3. **Connecter l'upload d'images** dans [`UploadModal.tsx`](src/components/sections/UploadModal.tsx) pour envoyer les fichiers déposés vers le bucket Supabase Storage.
4. **Mettre à jour la galerie dynamiquement** en récupérant la liste des photos stockées dans Supabase et en mettant à jour la galerie.

---

## 🚀 Démarrage Rapide

### 1. Prérequis
- [Node.js](https://nodejs.org/) (version 18+ recommandée)
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/)

### 2. Installation
```bash
# Installer les dépendances
npm install
```

### 3. Configuration de l'environnement
Copiez le fichier d'exemple pour créer votre configuration locale :
```bash
cp .env.example .env
```
Renseignez ensuite vos identifiants de projet Supabase dans le fichier `.env` :
```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-cle-anonyme-supabase
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### 5. Tester le build de production
```bash
npm run build
```

---

## 🏛️ Architecture du Projet

Le projet respecte une règle stricte de **Zéro Monolithe** : chaque élément de l'interface est isolé dans un composant dédié sous `src/components/`.

```text
├── public/
│   ├── images-exemples/       # Photos haute résolution & miniatures locales de départ
│   │   ├── grid/             # Miniatures optimisées pour la grille
│   │   └── optimized/        # Formats allégés pour la Lightbox
│   └── images-loader/         # Clichés d'ambiance pour l'écran de préchargement
├── src/
│   ├── components/
│   │   ├── common/           # Composants partagés (ex: NoiseOverlay)
│   │   ├── gallery/          # Grille Masonry, Header d'album, Tuiles photos (GalleryItem)
│   │   ├── sections/         # Lightbox immersive et UploadModal (zone de drop)
│   │   ├── sidebar/          # Volet gauche (bio, onglets info/contact, horloge)
│   │   └── ui/               # Bouton flottant (FAB), Preloader cinétique (MemoPreloader)
│   ├── context/
│   │   └── AppContext.tsx    # State global (photos, ouverture modale, sélection lightbox)
│   ├── App.tsx               # Point d'assemblage principal de l'UI
│   ├── config.ts             # Configuration éditoriale (titre, dates, photos initiales)
│   ├── index.css             # Directives Tailwind et design tokens
│   └── main.tsx              # Point d'entrée React
├── .env.example              # Gabarit pour vos variables Supabase
└── vite.config.ts            # Configuration Vite & alias (@ -> /src)
```

---

## 🛠️ Stack Technique

- **Framework** : [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Backend / Stockage cible** : [Supabase Storage](https://supabase.com/docs/guides/storage)
