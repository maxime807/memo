# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React 19, TypeScript, Vite 6, Tailwind CSS 3, Framer Motion, Lenis, Lucide React. Architecture modulaire dans `src/components/` avec React Context (`src/context/`).

## Users

Participants à un événement unique (soirée d'entreprise, mariage, voyage, workshop) souhaitant déposer et récupérer des photos de manière instantanée, sans création de compte ni mot de passe.
Apprenants et développeurs souhaitant brancher facilement Supabase Storage sur une UI de haute facture déjà prête.

## Product Purpose

Fournir un espace centralisé, esthétique et sans friction pour rassembler tous les souvenirs d'un événement. L'application permet la visualisation en galerie masonry, l'upload de photos en lot par glisser-déposer, la navigation plein écran (lightbox) et le téléchargement des clichés originaux.

## Positioning

Une expérience photo éphémère à mi-chemin entre Pinterest (pour la mise en valeur masonry) et WeTransfer (pour la simplicité de partage direct sans compte).

## Operating Context

Consulté sur mobile et desktop, souvent via un QR code scanné sur le lieu de l'événement ou un lien partagé dans une messagerie de groupe.

## Capabilities and Constraints

- Monopage avec architecture strictement modulaire : composants isolés dans `src/components/`, logique d'état et mock storage dans `src/context/`.
- Configuration centralisée dans `src/config.ts` (titre, date de l'événement, placeholders photo Unsplash).
- 3 surfaces d'interaction clés :
  1. Vue principale : Header avec titre, date, compteur en direct, bouton d'action principal et grille masonry fluide.
  2. Modale d'upload : Zone de drag-and-drop, sélection multiple, prévisualisation miniature, barre de progression simulée et validation.
  3. Lightbox : Vue HD plein écran, navigation précédente / suivante, zoom/aspect ratio, bouton de téléchargement direct.
- Couche Supabase Storage isolée avec signatures de fonctions et commentaires guides `// TODO` pour les apprenants.

## Brand Commitments

- Nom : Memō
- Tonalité : Moderne, chaleureuse, minimaliste, centrée sur l'émotion des souvenirs.

## Evidence on Hand

Photos réelles d'exemple (Unsplash) configurées dès le départ pour assurer un rendu masonry réaliste et attractif.

## Product Principles

1. **Zéro friction** : Aucun formulaire d'inscription ni login nécessaire pour participer ou télécharger.
2. **Qualité visuelle & fluidité** : Galerie vivante, transitions Framer Motion soignées, défilement doux (Lenis).
3. **Pédagogie & modularité** : Séparation stricte des responsabilités (UI atomique, hooks/contextes clairs, fonctions de stockage isolées).
