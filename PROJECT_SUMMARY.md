# Navakam Hospitality - Project Summary

## Overview
A luxury hospitality website for **Navakam Hospitality**, showcasing premium resort properties and tour services across India's scenic destinations. Built with React, Vite, and Tailwind CSS, featuring sophisticated animations and page transitions.

## Tech Stack

### Core
- **React 19.2.4** - UI framework
- **Vite 8.0.4** - Build tool and dev server
- **React Router DOM 7.1.0** - Client-side routing
- **Tailwind CSS 4.2.2** - Utility-first styling

### Animation & UI
- **Framer Motion 12.38.0** - Page transitions and animations
- **Lucide React 1.7.0** - Icon library

### Development
- **ESLint 9.39.4** - Code linting
- **@vitejs/plugin-react** - React support for Vite

## Project Structure

```
src/
├── main.jsx              # Application entry point
├── App.jsx               # Root component with router setup
├── index.css             # Global styles
├── components/
│   ├── Navbar.jsx        # Navigation component
│   ├── Footer.jsx        # Footer component
│   ├── PageTransition.jsx # Framer Motion page transitions
│   └── ScrollReveal.jsx  # Scroll-based reveal animations
├── pages/
│   ├── Home.jsx          # Landing page with property showcase
│   ├── WovenTours.jsx    # Tour services page
│   ├── MMGVagamon.jsx    # Vagamon resort page
│   ├── MMGWayanad.jsx    # Wayanad resort page
│   └── MMGKodaikanal.jsx # Kodaikanal resort page
└── assets/
    ├── hero.png          # Hero section image
    ├── react.svg         # React logo
    └── vite.svg          # Vite logo
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page with property cards |
| `/woven-tours` | WovenTours | Tour packages and services |
| `/mmg-vagamon` | MMGVagamon | Vagamon resort details |
| `/mmg-wayanad` | MMGWayanad | Wayanad resort details |
| `/mmg-kodaikanal` | MMGKodaikanal | Kodaikanal resort details |

## Key Features

### Design System
- **Color Palette**: Charcoal background, cream text, gold accents
- **Typography**: Font display for headings, font-body for content
- **Animations**: Smooth page transitions, scroll reveals, hover effects

### Components
- **PageTransition**: Wraps pages with AnimatePresence for smooth transitions
- **ScrollReveal**: Reveals content as user scrolls
- **Animated Routes**: Auto-scrolls to top on navigation

### Home Page Sections
1. **Hero**: Full-screen intro with CTAs
2. **Properties Showcase**: Grid of 4 property cards with hover effects
3. **Brand Story**: Mission statement and heritage narrative

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `bg-charcoal` | `#0a1913` | Background |
| `text-cream` | `#f5f5dc` | Primary text |
| `text-gold` | `#c9a84c` | Accents |
| `selection:bg-gold/30` | - | Text selection |

## Contact
- **Email**: info@navakamresorts.com

---
*Generated: 2026-04-07*
