# StaroCell Process - Hybrid Build Setup

This repository uses a **hybrid approach** that maintains both source code and built assets:

## 🎯 What You Get

**Root Level (Production-Ready):**
- `index.html` - Production HTML that loads from `/assets`
- `assets/` - Built/minified JS and CSS with 3D battery animation and scrolling

**Source Code (Development):**
- `src/` - Full React + TypeScript source code
- `index.dev.html` - Development HTML for `npm run dev`
- Build configuration (vite, tailwind, etc.)

## 🚀 Features

✅ **3D Battery Animation** - Interactive Three.js battery model that responds to scroll
✅ **Smooth Scrolling Animations** - Section-aware animations using framer-motion
✅ **Production Built** - Optimized and minified for deployment
✅ **Source Available** - Full source code for future modifications

## 📦 Quick Start

### View Production Version
Simply open `index.html` in a browser - no build needed!

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```
This updates the `assets/` folder with new builds.

## 📁 Structure

```
starocell-process/
├── index.html              # Production (loads from ./assets)
├── assets/                 # Built files (committed)
│   ├── index-*.js         # Minified React app with 3D animations
│   └── index-*.css        # Minified styles
├── src/                    # Source code (for development)
│   ├── App.tsx
│   ├── components/
│   │   ├── 3d/            # Battery & particle animations
│   │   ├── sections/      # Page sections
│   │   └── ui/            # UI components
│   ├── store.ts           # State management
│   └── types.ts
└── package.json           # Dependencies & scripts
```

## 🔧 How It Works

1. **For Users**: Just use `index.html` + `assets/` folder - works immediately
2. **For Developers**: Edit `src/`, run `npm run dev` to test, then `npm run build` to update assets
3. **Hybrid**: Repository looks like simple static site but has full development setup available

## 🎨 Tech Stack

- React 18 + TypeScript
- Three.js + React Three Fiber (3D animations)
- framer-motion (scroll animations)
- Tailwind CSS
- Vite (build tool)

---

**Note**: The built files in `assets/` are committed intentionally for immediate deployment.
