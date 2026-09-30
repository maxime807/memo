---
name: Memō
description: Album photo partagé éphémère et minimaliste à forte signature éditoriale
colors:
  canvas: "#ededed"
  surface: "#ffffff"
  ink: "#141415"
  subtle: "#8a8a8a"
  card: "#f7f7f7"
  borderline: "#ededed"
  borderline-active: "#141415"
typography:
  display:
    fontFamily: "'Funnel Sans', -apple-system, sans-serif"
    fontSize: "clamp(3rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Funnel Sans', -apple-system, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.05em"
  body:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  full: "9999px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "20px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "6px 14px"
  button-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "4px 0px"
  card-gallery:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0px"
  modal-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "32px"
---

# Design System: Memō

## Overview

**Creative North Star: "The Curated Ephemera"**

Memō emprunte le langage visuel des galeries d'art contemporain et du design éditorial brut suisse (inspiré de la direction artistique d'Owen Ashcroft). Conçu pour immortaliser les souvenirs d'un événement unique sans compte ni mot de passe, le système efface l'interface superflue au profit de la mise en valeur des photographies.

L'expérience repose sur un contraste net entre un canevas texturé neutre (`#ededed` enrichi d'un grain discret) et des panneaux blancs monolithiques sans arrondis (`#ffffff`), créant une sensation de feuillets de magazine posés sur une table de travail.

**Key Characteristics:**
- **Split-Screen Rigide** : Navigation et identité ancrées à gauche (440px), galerie à défilement interne à droite.
- **Typographie Asymétrique** : Titrage monumental en *Funnel Sans* resserré (`-0.04em`) associé à des métadonnées microscopiques en *Inter* majuscules.
- **Grain & Matière** : Texture de bruit optique à 3.5% d'opacité éliminant toute sensation de platitude numérique.

## Colors

La palette est strictement monochrome, neutre et contrastée, laissant la couleur et l'émotion aux photographies partagées.

### Primary
- **Typographic Ink** (`#141415`): Utilisé pour le texte principal, les titrages monumentaux, les bordures actives et les boutons d'action.

### Neutral
- **Neutral Canvas** (`#ededed`): Fond global du viewport sur lequel reposent les panneaux blancs.
- **Pure Surface** (`#ffffff`): Couleur de fond des panneaux de la sidebar, du conteneur de galerie et des modales.
- **Subtle Gray** (`#8a8a8a`): Métadonnées secondaires, heures, séparateurs et labels discrets.
- **Borderline** (`#ededed`): Filets de séparation horizontaux et contours subtils des panneaux.

### Named Rules
**The No-Color Rule.** L'interface ne doit comporter aucun accent coloré (pas de bleu, de vert ou de violet). La seule couleur acceptée provient des photographies des utilisateurs.

## Typography

**Display Font:** *Funnel Sans* (Google Fonts) avec fallback `-apple-system, sans-serif`  
**Body Font:** *Inter* avec fallback `-apple-system, BlinkMacSystemFont, sans-serif`

**Character:** Tension typographique forte entre des titrages imposants, froids et condensés, et des métadonnées horodatées précises comme sur une planche contact de photographe.

### Hierarchy
- **Display** (Bold 700, `clamp(3rem, 5vw, 4.5rem)`, line-height 0.95, tracking `-0.04em`, uppercase): Titre principal "MEMŌ ALBUM SOUVENIR".
- **Headline** (Bold 700, `1.75rem`, line-height 1.1, tracking `-0.04em`, uppercase): Titres de sections ("PHOTOS", "LAISSER UN MOT").
- **Title** (SemiBold 600, `0.75rem`, tracking `0.08em`, uppercase): Légendes de photographies et noms des contributeurs.
- **Body** (Medium 500, `0.8125rem`, line-height 1.5, uppercase): Paragraphe descriptif de l'événement dans la sidebar.
- **Label** (Medium 500, `0.6875rem`, tracking `0.08em`, uppercase): Horodatages, compteurs et boutons d'onglets.

## Layout & Adaptation Responsive

L'interface adopte une hiérarchie adaptative à 4 paliers alignée sur les standards industriels :
- **Grand Écran Desktop (≥1280px / `xl`)** : Sidebar 420-440px fixe à gauche + Galerie masonry à **3 colonnes** fluides.
- **Tablette Paysage / Petit Laptop (1024px-1279px / `lg`)** : Sidebar 350px fixe à gauche + Galerie masonry à **2 colonnes**.
- **Tablette Portrait (768px-1023px / `md`)** : Sidebar compacte 290px fixe à gauche + Galerie à **1 colonne** centrée.
- **Mobile (<768px)** : Interface linéaire verticale (Sidebar compacte en tête) + Galerie à **2 colonnes** pour maximiser la découverte des photos.

## Elevation & Depth

Le système rejette les ombres portées floues et artificielles. La hiérarchie spatiale repose exclusivement sur le contraste de surfaces et la superposition franche.

### Shadow Vocabulary
- **Modal Depth** (`box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)`): Réservé exclusivement à la modale de dépôt et à la Lightbox pour les détacher du fond obscurci.

### Named Rules
**The Flat Plane Rule.** Les cartes de la galerie et la sidebar ne possèdent aucune ombre au repos. Elles existent comme des surfaces planes découpées avec précision.

## Shapes

- **Angles droits stricts (0px radius)** : Tous les panneaux, conteneurs d'images et zones de formulaire ont un rayon de courbure nul (`rounded-none`).
- **Pastilles circulaires (`rounded-full`)** : Réservées uniquement aux boutons de commande fonctionnels (pastille `+` au survol, bouton fermer `✕` de la lightbox, flèches précédent/suivant et FAB mobile).

## Components

### Buttons
- **Underline Link** : Texte noir majuscule souligné d'un filet de 1px avec décalage de 4px (`border-b border-ink pb-1`).
- **Action Border** : Filet noir fin (`border border-ink/40 px-3.5 py-1.5`), inversion en noir plein au survol.
- **Circular FAB** : Bouton rond noir 56x56px avec icône Plus blanche, ombre marquée, flottant en bas à droite sur mobile.

### Cards / Gallery Items
- Conteneur d'image à ratio intrinsèque réservé (`aspectRatio`) avec skeleton dynamique (`#dedad2 animate-pulse`).
- Légende binaire : Titre/Auteur à gauche en gras, Heure à droite en gris discret.

### Lightbox
- Écran d'assombrissement noir à 60% avec flou de diffusion (`bg-black/60 backdrop-blur-md`).
- Cadre blanc fin avec bouton de fermeture circulaire extérieur droit et navigation latérale au clavier ou au clic.

### Upload Modal
- Boîte blanche 100% opaque centrée.
- Zone de drop en tirets (`border-dashed border-borderline`) avec icône centrale et jauge de progression en aplat noir.

## Do's and Don'ts

### Do:
- **Do** réserver l'espace vertical de chaque image via son `aspectRatio` exact pour proscrire les sauts de page.
- **Do** maintenir tous les textes en majuscules avec tracking resserré sur les titres et aéré sur les métadonnées.
- **Do** conserver le grain de fond optique discret (`opacity: 0.035`).

### Don't:
- **Don't** ajouter de couleurs vives ou de dégradés (respecter la neutralité absolue du canevas).
- **Don't** arrondir les angles des cartes de la galerie ou de la sidebar (l'esthétique repose sur la rigueur géométrique).
- **Don't** ajouter de jargon de portfolio de designer (conserver l'esprit d'un album photo d'événement partagé).
