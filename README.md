# StaroCell - Next Generation Battery Technology

A professional, interactive website showcasing StaroCell's revolutionary bio-inspired battery technology. Built with React, Three.js, and Framer Motion.

## Features

### 🔋 3D Battery Visualization
- Interactive 3D battery model with layered components
- Scroll-based animation showing battery assembly process
- Exploded view with component tooltips

### 🎬 Smooth Scroll Animations
- Framer Motion powered transitions
- Section-based scroll triggers
- Parallax effects and fade-ins

### 📊 Complete Content Sections
1. **Hero** - Product introduction with key value propositions
2. **Anatomy of Innovation** - Exploded view with technical specifications
3. **Bio-Mimetic Engineering** - 6 deep-dive technical feature cards
4. **Performance Comparison** - Li-Ion vs StaroCell metrics visualization
5. **Manufacturing** - Gigafactory compatibility and production efficiency
6. **Universal Applications** - Use cases across industries
7. **About Us** - Company information and achievements
8. **Contact & Footer** - Partnership forms and legal information

## Technology Stack

- **React 18.2** - UI framework
- **TypeScript 5.8** - Type safety
- **Three.js 0.160** - 3D rendering engine
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js helpers
- **Framer Motion 11** - Animation library
- **Vite 6** - Build tool
- **Tailwind CSS** - Styling (via CDN)
- **Zustand 4.5** - State management

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── components/
│   ├── 3d/              # Three.js 3D components
│   │   ├── Battery.tsx  # 3D battery model
│   │   ├── Particles.tsx
│   │   └── Scene.tsx
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── ExplodedView.tsx
│   │   ├── TechDeepDive.tsx
│   │   ├── Comparison.tsx
│   │   ├── Manufacturing.tsx
│   │   ├── Applications.tsx
│   │   ├── AboutUs.tsx
│   │   └── Footer.tsx
│   └── ui/              # Reusable UI components
│       ├── Modal.tsx
│       └── SectionContainer.tsx
├── App.tsx              # Main application
├── index.tsx            # Entry point
├── store.ts             # Zustand state management
├── types.ts             # TypeScript type definitions
└── vite.config.ts       # Vite configuration
```

## Security

- No known vulnerabilities in dependencies
- No dangerous patterns (eval, innerHTML, etc.)
- No hardcoded secrets
- Form submissions use secure Formspree endpoint
- Error handling implemented for all user interactions

## Accessibility

- ARIA labels on interactive 3D elements
- Keyboard navigation support
- Screen reader friendly tooltips
- Semantic HTML structure

## Browser Support

- Modern browsers with WebGL support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2026 StaroCell Energy Systems. All rights reserved.

## Contact

For partnership inquiries, use the contact form on the website or visit our offices in:
- Stockholm, Sweden
- San Francisco, USA
- Tokyo, Japan
