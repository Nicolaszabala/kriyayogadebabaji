# Entorno de Desarrollo - Kriya Yoga de Babaji Responsive

## Branch de Desarrollo
- **Branch actual**: `responsive-design`
- **Rama principal**: `main`
- **Repositorio**: https://github.com/Nicolaszabala/kriyayogadebabaji

## Estructura del Proyecto

```
kriyayogadebabaji.net/
├── css/                    # Archivos CSS originales
│   ├── reset.css
│   ├── arquitectura.css    # Layout principal
│   ├── cabeceraIndex.css   # Header
│   ├── menus.css          # Navegación
│   ├── cuerpoIndex.css    # Contenido
│   ├── textos.css         # Tipografía
│   └── fuentes.css        # Fuentes adicionales
├── css-responsive/         # Nuevos archivos CSS responsive (a crear)
│   ├── responsive.css      # CSS principal responsive
│   ├── hamburger-menu.css  # Menú hamburguesa
│   ├── grid-system.css     # Sistema de grid
│   └── media-queries.css   # Media queries
├── js/                    # JavaScript (a crear)
│   └── menu-toggle.js     # Funcionalidad del menú
├── backup/                # Backups locales (a crear)
├── imagenes/              # Imágenes existentes
└── *.htm                  # Páginas HTML existentes
```

## Comandos de Git

### Branch Management
```bash
# Cambiar a rama de desarrollo
git checkout responsive-design

# Ver estado actual
git status

# Crear commit de trabajo
git add .
git commit -m "WIP: Responsive design implementation"

# Push a repositorio
git push origin responsive-design

# Volver a main
git checkout main

# Merge cambios (cuando esté listo)
git merge responsive-design
```

### Workflow de Desarrollo
1. Trabajar en rama `responsive-design`
2. Commits frecuentes para tracking
3. Testing en múltiples dispositivos
4. Merge a `main` solo cuando esté completamente probado

## Servidor de Desarrollo

Para desarrollo local, usar servidor HTTP simple:

```bash
# Python 3
python -m http.server 8000

# Node.js (si está disponible)
npx http-server -p 8000

# Acceder en: http://localhost:8000
```

## Testing

### Breakpoints a Probar
- Mobile: 320px - 576px
- Tablet: 577px - 768px
- Desktop Small: 769px - 992px
- Desktop Large: 993px+

### Navegadores Target
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Checklist de Implementación

### Fase 1: Base Responsive ✓
- [x] Crear branch de desarrollo
- [x] Configurar entorno
- [ ] Modernizar DOCTYPE y meta tags
- [ ] Crear CSS responsive base
- [ ] Implementar sistema de grid

### Fase 2: Menú Hamburguesa
- [ ] Crear HTML del menú responsive
- [ ] Implementar CSS del hamburguesa
- [ ] Añadir JavaScript interactivo
- [ ] Testing de accesibilidad

### Fase 3: Contenido Adaptativo
- [ ] Optimizar imágenes responsive
- [ ] Ajustar tipografía fluida
- [ ] Mejorar espaciado
- [ ] Layout flexible con CSS Grid/Flexbox

### Fase 4: Optimización
- [ ] Performance tuning
- [ ] Cross-browser testing
- [ ] Accessibility compliance
- [ ] SEO improvements

## Notas Importantes

- **Mantener compatibilidad**: Los archivos CSS originales se mantienen como fallback
- **Progressive Enhancement**: Implementación gradual sin romper funcionalidad existente
- **Mobile First**: Enfoque mobile-first para mejor performance
- **Testing continuo**: Probar en dispositivos reales durante desarrollo

## Recursos Útiles

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Responsive Design Checker](http://responsivedesignchecker.com/)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)