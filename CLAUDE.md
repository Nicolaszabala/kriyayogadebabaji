# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Spanish-language spiritual website for Kriya Yoga de Babaji, currently undergoing a responsive design transformation. The site is a traditional static HTML website with a fixed-width layout (953px) being modernized with mobile-first responsive design on the `responsive-design` branch.

**Technology Stack:** Static HTML (.htm files), vanilla CSS, vanilla JavaScript. No build tools or frameworks.

**Repository:** https://github.com/Nicolaszabala/kriyayogadebabaji

## Git Workflow

The project uses a feature branch workflow:

- **Main branch:** `main` (production-ready code)
- **Development branch:** `responsive-design` (active responsive design implementation)

Always work on the `responsive-design` branch for responsive design features. Merge to `main` only when features are fully tested across devices.

## Development Server

Start the local development server:

```bash
# Using the provided script (preferred)
./start-dev-server.sh 8000

# Or manually with Python 3
python3 -m http.server 8000

# Or with Node.js
npx http-server -p 8000
```

Access at: http://localhost:8000

## Architecture

### CSS Layer System

The site uses a **surgical responsive approach** - desktop layout remains untouched, mobile styles are applied only on screens <768px:

**Original CSS (Desktop - 953px fixed width):**
1. `css/reset.css` - CSS reset
2. `css/arquitectura.css` - Main layout structure (`#contenedor`: 953px, `#todaPagina`: 922px)
3. `css/cabeceraIndex.css` - Header styles
4. `css/textos.css` - Typography
5. `css/menus.css` - Navigation (`#menu`: 870px horizontal, `#lateral`: vertical sidebar)
6. `css/cuerpoIndex.css` - Main content area
7. `css/fuentes.css` - Custom fonts

**Responsive CSS (Mobile only - <768px):**
- `css-responsive/responsive.css` - Mobile-only overrides with `!important` rules inside `@media (max-width: 767px)`
- `css-responsive/hamburger-menu.css` - Hamburger menu styles (mobile only)

### JavaScript Structure

**Legacy JavaScript:**
- `js/frasedeldia.js` - Daily quote rotation
- `js/coolslide.js` - Image slideshow
- `js/iniciar_rotacion.js` / `js/iniciar_rotacion2.js` - Animation utilities
- `js/agregar.js` / `js/agregar2.js` / `js/agregar3.js` - Dynamic content utilities

**Responsive JavaScript:**
- `js/menu-toggle.js` - Mobile hamburger menu functionality (IIFE pattern, only runs on <768px)

### HTML Structure

All pages use `.htm` extension. The main structure follows this pattern:

```html
#contenedor (953px container)
  └─ #todaPagina (922px wrapper)
      ├─ Header area
      ├─ #menu (870px horizontal navigation)
      ├─ #lateral (vertical sidebar menu)
      └─ Main content area (#cuerpo)
```

## Responsive Design Implementation

### Mobile-First Principles

The responsive implementation follows these rules:

1. **Desktop preservation**: Original layout stays intact for screens ≥768px
2. **Mobile-only changes**: All responsive changes are inside `@media (max-width: 767px)`
3. **Use !important**: Override fixed-width desktop styles with `!important` in mobile media queries
4. **Progressive enhancement**: Mobile users get hamburger menu, desktop users keep horizontal navigation

### Breakpoints

```css
Mobile:        max-width: 767px  (320px - 767px)
Desktop:       min-width: 768px  (768px+, uses original fixed 953px layout)
```

### Testing Viewports

Test responsive changes at these specific sizes:
- **320x568** - iPhone SE
- **375x667** - iPhone 6/7/8
- **414x896** - iPhone 11 Pro Max
- **768x1024** - iPad Portrait
- **1024x768** - Desktop (should see original desktop layout)

## Key Behavioral Notes

### Menu System

Two navigation systems coexist:

1. **Desktop Navigation (`#menu`)**: Horizontal menu, 870px wide, uses floated `<li>` elements
2. **Mobile Navigation**: Same `#menu` element transforms via CSS, JavaScript adds hamburger toggle button dynamically

The JavaScript in `menu-toggle.js`:
- Only initializes on screens ≤767px
- Dynamically creates hamburger button as first child of `#menu`
- Adds `.menu-active` class to show/hide menu
- Closes menu on outside click or window resize >767px
- Does NOT modify the DOM structure permanently

### File Naming Convention

- HTML files use `.htm` extension (not `.html`)
- CSS files use descriptive names (`arquitectura.css`, `cabeceraIndex.css`)
- Original files are sometimes kept with " Original" suffix (e.g., `fuentes Original.css`)

## Important Directories

- `css/` - Original desktop CSS (DO NOT modify unless fixing desktop bugs)
- `css-responsive/` - Mobile-only responsive CSS (safe to modify)
- `js/` - All JavaScript files
- `imagenes/` - Image assets
- `backup/` - Local backups (gitignored: `backup/local-*`)
- `textos/` - Text content files
- `spi/`, `rss/`, `docs/` - Subsections of the site

## Common Development Tasks

### Adding Mobile-Specific Styles

Always wrap in mobile media query:

```css
@media screen and (max-width: 767px) {
  #element {
    /* mobile styles */
    width: 100% !important;  /* Use !important to override fixed desktop widths */
  }
}
```

### Testing Responsive Changes

1. Start dev server: `./start-dev-server.sh`
2. Open browser DevTools
3. Toggle device toolbar
4. Test at 320px, 375px, 768px widths
5. Verify desktop view (≥768px) remains unchanged

### Debugging Menu Issues

If hamburger menu doesn't appear:
- Check browser console for JavaScript errors
- Verify `menu-toggle.js` is loaded after DOM
- Confirm viewport width is ≤767px
- Check that `#menu` element exists in HTML

## Configuration Files

- `project-config.json` - Project metadata and breakpoint definitions
- `development-setup.md` - Detailed development setup and workflow checklist
- `.gitignore` - Excludes `backup/local-*`, `*.log`, `node_modules/`, IDE settings

## Browser Compatibility

Target browsers:
- Chrome/Chromium ≥60
- Firefox ≥60
- Safari ≥12
- Edge ≥79
- iOS Safari ≥12
- Android Chrome ≥60

The site uses standard CSS3 and ES6+ JavaScript (IIFE, arrow functions, `const`/`let`). No transpilation required for modern browsers.

## Site Content

This is a spiritual education website about Kriya Yoga. Content is entirely in Spanish. The site includes:
- Daily inspirational quotes (rotated via JavaScript)
- Text articles about yoga philosophy (`t-*.htm` files)
- Conference and class schedules (`lista*.htm` files)
- Audio files (mantras, interviews)
- Resource downloads

When editing, preserve the spiritual and educational tone of the content.
