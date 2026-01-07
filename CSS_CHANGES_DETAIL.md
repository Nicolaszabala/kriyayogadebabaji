# Cambios Detallados en desktop-responsive.css

## Sección 1: BODY BACKGROUND & MOUNTAIN TEXTURE (NUEVO)

```css
/* ANTES: No existía */

/* DESPUÉS: */
body.prefer-new-desktop {
  background-color: #FFFFFF;
  background-image:
    linear-gradient(to bottom, rgba(172, 20, 41, 0.03) 0%, transparent 200px),
    repeating-linear-gradient(
      135deg,
      transparent,
      transparent 35px,
      rgba(172, 20, 41, 0.015) 35px,
      rgba(172, 20, 41, 0.015) 70px
    );
  background-attachment: fixed;
}
```

**Propósito:** Textura decorativa sutil en márgenes (estilo Olivero de Drupal)

---

## Sección 2: BASE WRAPPER

```css
/* ANTES: */
body.prefer-new-desktop .desktop-new-wrapper {
  background-color: #FAFAFA; /* ❌ Gris claro */
}

/* DESPUÉS: */
body.prefer-new-desktop .desktop-new-wrapper {
  background-color: #FFFFFF; /* ✅ Blanco puro */
  position: relative; /* ✅ Agregado para contexto */
}
```

---

## Sección 3: DESKTOP CITA

```css
/* ANTES: */
body.prefer-new-desktop .desktop-cita {
  background: linear-gradient(to bottom, #FFFFFF, #FAFAFA); /* ❌ */
}

body.prefer-new-desktop .cita-texto {
  font-size: 18px !important;
  line-height: 1.8 !important; /* ❌ */
}

/* DESPUÉS: */
body.prefer-new-desktop .desktop-cita {
  background: #FFFFFF; /* ✅ Blanco puro */
  transition: box-shadow 0.3s ease; /* ✅ Agregado */
}

body.prefer-new-desktop .desktop-cita:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12); /* ✅ Nuevo */
}

body.prefer-new-desktop .cita-texto {
  font-family: 'Lato', Helvetica, Arial, sans-serif; /* ✅ Unificado */
  font-size: 18px !important;
  line-height: 1.7 !important; /* ✅ Ajustado */
  margin: 0; /* ✅ Agregado */
}
```

---

## Sección 4: DESKTOP CARD

```css
/* ANTES: */
body.prefer-new-desktop .desktop-card {
  padding: 40px; /* ❌ Espacio extra abajo */
}

body.prefer-new-desktop .desktop-card h2 {
  font-size: 24px !important;
  /* ❌ Sin font-family */
}

body.prefer-new-desktop .desktop-card p {
  font-size: 16px !important;
  line-height: 1.7 !important; /* ❌ */
}

/* DESPUÉS: */
body.prefer-new-desktop .desktop-card {
  padding: 40px 40px 30px 40px; /* ✅ Reducido bottom padding */
  display: flex; /* ✅ Nuevo */
  flex-direction: column; /* ✅ Nuevo */
}

body.prefer-new-desktop .desktop-card h2 {
  font-family: 'Lato', Helvetica, Arial, sans-serif; /* ✅ Unificado */
  font-size: 24px !important;
}

body.prefer-new-desktop .desktop-card h3 { /* ✅ NUEVO */
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  color: #AC1429 !important;
  font-size: 20px !important;
  font-weight: bold !important;
}

body.prefer-new-desktop .desktop-card p {
  font-family: 'Lato', Helvetica, Arial, sans-serif; /* ✅ Unificado */
  font-size: 16px !important;
  line-height: 1.6 !important; /* ✅ Ajustado */
}

body.prefer-new-desktop .desktop-card p:last-child { /* ✅ NUEVO */
  margin-bottom: 0 !important; /* Elimina espacio extra */
}

body.prefer-new-desktop .desktop-card ul,
body.prefer-new-desktop .desktop-card ol { /* ✅ NUEVO */
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 16px !important;
  line-height: 1.6 !important;
}

body.prefer-new-desktop .desktop-card strong { /* ✅ NUEVO */
  font-weight: bold !important;
  color: #AC1429 !important;
}
```

---

## Sección 5: BOOK CARDS

```css
/* ANTES: */
body.prefer-new-desktop .desktop-book-card img {
  transition: transform 0.3s ease;
  /* ❌ Sin estilos adicionales */
}

/* DESPUÉS: */
body.prefer-new-desktop .desktop-book-card img {
  transition: transform 0.3s ease;
  max-width: 100%; /* ✅ Agregado */
  height: auto; /* ✅ Agregado */
  border-radius: 8px; /* ✅ Agregado */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* ✅ Agregado */
}

body.prefer-new-desktop .desktop-book-card h3 { /* ✅ NUEVO */
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  color: #AC1429 !important;
  font-size: 18px !important;
}

body.prefer-new-desktop .desktop-book-card p { /* ✅ NUEVO */
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 14px !important;
  line-height: 1.6 !important;
  color: #666 !important;
}
```

---

## Sección 6: MUSIC & LINAJE CARDS

```css
/* ANTES: */
body.prefer-new-desktop .desktop-music-card {
  text-align: center;
  /* ❌ Sin estilos de tipografía */
}

/* DESPUÉS: */
body.prefer-new-desktop .desktop-music-card img {
  border-radius: 12px; /* ✅ Agregado */
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* ✅ Agregado */
}

body.prefer-new-desktop .desktop-music-card p { /* ✅ NUEVO */
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 16px !important;
  font-weight: 600 !important;
}

body.prefer-new-desktop .desktop-linaje-card img { /* ✅ NUEVO */
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

body.prefer-new-desktop .desktop-linaje-card p { /* ✅ NUEVO */
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 1.4 !important;
}
```

---

## Sección 7: GLOBAL TYPOGRAPHY (NUEVA SECCIÓN)

```css
/* ANTES: No existía */

/* DESPUÉS: */
body.prefer-new-desktop .desktop-new-wrapper h1 {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  color: #AC1429 !important;
  font-size: 28px !important;
  font-weight: bold !important;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 40px;
}

body.prefer-new-desktop .desktop-new-wrapper h2 {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  color: #AC1429 !important;
  font-size: 24px !important;
  font-weight: bold !important;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
}

body.prefer-new-desktop .desktop-new-wrapper h3 {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  color: #AC1429 !important;
  font-size: 20px !important;
  font-weight: bold !important;
  margin-bottom: 15px;
  margin-top: 20px;
}

body.prefer-new-desktop .desktop-new-wrapper p {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 16px !important;
  line-height: 1.6 !important;
  color: #333 !important;
  margin-bottom: 15px;
}

body.prefer-new-desktop .desktop-new-wrapper a {
  color: #AC1429 !important;
  transition: color 0.3s ease;
}

body.prefer-new-desktop .desktop-new-wrapper a:hover {
  color: #B8860B !important;
}
```

---

## Sección 8: FOOTER

```css
/* ANTES: */
body.prefer-new-desktop .desktop-new-footer {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 2px solid #E5E5E5;
  /* ❌ Sin estilos de tipografía */
}

/* DESPUÉS: */
body.prefer-new-desktop .desktop-new-footer p { /* ✅ NUEVO */
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 14px !important;
  line-height: 1.6 !important;
  color: #666 !important;
}

body.prefer-new-desktop .desktop-new-footer a { /* ✅ NUEVO */
  color: #666 !important;
  text-decoration: underline !important;
  transition: color 0.3s ease;
}

body.prefer-new-desktop .desktop-new-footer a:hover { /* ✅ NUEVO */
  color: #333 !important;
}
```

---

## Sección 9: BUTTONS & FORMS (NUEVA SECCIÓN)

```css
/* ANTES: No existía */

/* DESPUÉS: ✅ TODO NUEVO */
body.prefer-new-desktop .desktop-new-wrapper .contact-button,
body.prefer-new-desktop .desktop-card .contact-button {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 16px !important;
  font-weight: bold !important;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none !important;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Mailchimp form styling */
body.prefer-new-desktop #mc_embed_signup {
  background-color: transparent !important;
  font-family: 'Lato', Helvetica, Arial, sans-serif !important;
}

body.prefer-new-desktop #mc_embed_signup h2 {
  font-family: 'Lato', Helvetica, Arial, sans-serif !important;
  color: #AC1429 !important;
  font-size: 24px !important;
  font-weight: bold !important;
}

body.prefer-new-desktop #mc_embed_signup input[type="email"]:focus,
body.prefer-new-desktop #mc_embed_signup input[type="text"]:focus {
  border-color: #AC1429 !important;
  outline: none;
}

body.prefer-new-desktop #mc_embed_signup .button {
  font-family: 'Lato', Helvetica, Arial, sans-serif !important;
  font-size: 18px !important;
  font-weight: bold !important;
  background: linear-gradient(to bottom, #AC1429, #D4526E) !important;
  transition: all 0.3s ease !important;
}

body.prefer-new-desktop #mc_embed_signup .button:hover {
  background: linear-gradient(to bottom, #8B1021, #C23750) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(172, 20, 41, 0.4) !important;
}
```

---

## Sección 10: ACCESSIBILITY ENHANCEMENTS (NUEVA SECCIÓN)

```css
/* ANTES: No existía */

/* DESPUÉS: ✅ TODO NUEVO */
body.prefer-new-desktop a:focus,
body.prefer-new-desktop button:focus,
body.prefer-new-desktop input:focus,
body.prefer-new-desktop select:focus,
body.prefer-new-desktop textarea:focus {
  outline: 2px solid #AC1429;
  outline-offset: 2px;
}

body.prefer-new-desktop .skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: #AC1429;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 10000;
}

body.prefer-new-desktop .skip-to-content:focus {
  top: 0;
}
```

---

## Sección 11: RESPONSIVE BREAKPOINTS (MEJORADO)

```css
/* ANTES: */
@media screen and (min-width: 1200px) {
  body.prefer-new-desktop .desktop-items-grid-3 {
    grid-template-columns: repeat(4, 1fr);
  }
  /* ❌ Sin padding adicional */
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  body.prefer-new-desktop .desktop-card {
    padding: 30px;
    /* ❌ Sin ajuste bottom */
  }
  /* ❌ Sin ajustes de tipografía */
}

/* DESPUÉS: */
@media screen and (min-width: 1200px) {
  body.prefer-new-desktop .desktop-new-wrapper {
    padding: 40px 40px; /* ✅ Agregado */
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  body.prefer-new-desktop .desktop-section-grid-2 {
    gap: 30px; /* ✅ Agregado */
  }

  body.prefer-new-desktop .desktop-card {
    padding: 30px 30px 25px 30px; /* ✅ Ajustado */
  }

  body.prefer-new-desktop .desktop-cita {
    padding: 25px 30px; /* ✅ Agregado */
  }

  body.prefer-new-desktop .desktop-new-wrapper h1 { /* ✅ NUEVO */
    font-size: 26px !important;
  }

  body.prefer-new-desktop .desktop-new-wrapper h2,
  body.prefer-new-desktop .desktop-card h2 { /* ✅ NUEVO */
    font-size: 22px !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) { /* ✅ NUEVO */
  body.prefer-new-desktop .desktop-section-grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## Sección 12: PRINT STYLES (NUEVA SECCIÓN)

```css
/* ANTES: No existía */

/* DESPUÉS: ✅ TODO NUEVO */
@media print {
  body.prefer-new-desktop {
    background: white !important;
    background-image: none !important;
  }

  body.prefer-new-desktop .desktop-new-wrapper {
    max-width: 100% !important;
    padding: 0 !important;
  }

  body.prefer-new-desktop .desktop-card {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
```

---

## Resumen de Cambios por Categoría

### Tipografía
- ✅ Font-family agregado a todos los elementos: `Lato, Helvetica, Arial, sans-serif`
- ✅ Line-height ajustado: `1.6` para párrafos, `1.7` para cita
- ✅ Tamaños jerárquicos: H1 (28px) → H2 (24px) → H3 (20px) → P (16px)

### Fondo
- ✅ `#FAFAFA` → `#FFFFFF` en body, wrapper, cita, cards
- ✅ Textura decorativa agregada (gradientes con rgba brand color)

### Espaciado
- ✅ Padding cards: `40px` → `40px 40px 30px 40px`
- ✅ `p:last-child { margin-bottom: 0 }` para eliminar espacio extra
- ✅ Flexbox agregado para mejor control

### Accesibilidad
- ✅ Focus states destacados (outline 2px)
- ✅ Skip to content link
- ✅ Contraste WCAG AA verificado

### Nuevas Secciones
- ✅ Global Typography (h1, h2, h3, p fuera de cards)
- ✅ Buttons & Forms (contact buttons, Mailchimp)
- ✅ Accessibility Enhancements
- ✅ Print Styles

### Mejoras Responsive
- ✅ Gaps ajustados por breakpoint
- ✅ Tipografías reducidas en 768-1024px
- ✅ Landscape mode optimizado
