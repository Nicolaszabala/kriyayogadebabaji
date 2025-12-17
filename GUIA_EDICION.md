# Guía de Edición de Artículos
## Sitio Web Kriya Yoga de Babaji

---

## 1. Introducción

Este documento explica cómo editar artículos existentes o crear nuevos en tu sitio web, considerando que ahora funciona con **dos versiones**: escritorio y móvil responsive.

**Concepto clave:** Los archivos `.htm` sirven tanto para escritorio como para móvil. El sistema detecta automáticamente el tamaño de pantalla y aplica los estilos correspondientes.

---

## 2. Estructura de Archivos

Tu sitio tiene la siguiente organización:

```
kriyayogadebabaji.net/
├── index.htm                    (Página principal - caso especial)
├── articulos.htm                (Listado de artículos)
├── t-kundalini.htm             (Artículos individuales)
├── t-tantra.htm
├── contacto.htm
├── css/                        (Estilos para escritorio)
│   └── textos.css
├── css-responsive/             (Estilos para móvil)
│   └── responsive.css
├── imagenes/                   (Todas las imágenes)
└── js/
    └── mobile-content.js       (Solo para index.htm)
```

---

## 3. Casos de Uso

### A) Editar un artículo existente

**Ejemplo:** Modificar el texto del artículo sobre Kundalini (`t-kundalini.htm`)

1. Abre el archivo `t-kundalini.htm` con tu editor de texto
2. Localiza la sección que quieres editar
3. Modifica el contenido dentro de las etiquetas HTML
4. Guarda el archivo
5. Recarga el navegador (F5 en escritorio, o Cmd+R en móvil)

**El cambio se verá automáticamente en ambas versiones** (escritorio y móvil).

---

### B) Agregar una imagen a un artículo

**Pasos:**

1. Sube tu imagen a la carpeta `imagenes/` con un nombre descriptivo
   - Ejemplo: `meditacion_nueva.jpg`

2. En el archivo `.htm`, agrega este código donde quieras que aparezca:

```html
<!-- Versión Escritorio (siempre visible) -->
<div class="imagen">
  <img src="imagenes/meditacion_nueva.jpg" alt="Descripción de la imagen" />
  <p>Texto opcional debajo de la imagen</p>
</div>
```

3. **Para móviles**, agrega después del bloque anterior:

```html
<!-- Versión Mobile (solo visible en móvil) -->
<div class="mobile-section">
  <div class="mobile-image-container">
    <img src="imagenes/meditacion_nueva.jpg" alt="Descripción de la imagen" />
    <p class="linaje-description" style="text-align: center;">Texto debajo de la imagen</p>
  </div>
</div>
```

**Nota:** Las dos versiones coexisten en el mismo archivo. El CSS se encarga de mostrar solo la apropiada según el dispositivo.

---

### C) Crear un nuevo artículo desde cero

**Ejemplo:** Crear `t-nuevo-articulo.htm`

1. **Copia un artículo existente** como plantilla:
   ```bash
   cp t-kundalini.htm t-nuevo-articulo.htm
   ```

2. **Edita el nuevo archivo** y modifica:

   a) El título (línea ~5):
   ```html
   <title>Título de tu nuevo artículo - Kriya Yoga de Babaji</title>
   ```

   b) El contenido principal (dentro de `<div id="todaPaginaB">`):
   - Reemplaza textos
   - Cambia imágenes
   - Mantén la estructura HTML

3. **Estructura mínima recomendada para móvil:**

```html
<!-- CONTENIDO MOBILE -->
<div id="mobile-content">

  <!-- Título principal -->
  <div class="mobile-section">
    <h1>Título del Artículo</h1>
  </div>

  <!-- Imagen (opcional) -->
  <div class="mobile-section">
    <div class="mobile-image-container">
      <img src="imagenes/tu-imagen.jpg" alt="Descripción" />
      <p class="linaje-description" style="text-align: center;">Pie de foto</p>
    </div>
  </div>

  <!-- Párrafos de contenido -->
  <div class="mobile-section">
    <p>Tu contenido aquí...</p>
    <p>Más párrafos...</p>
  </div>

  <!-- Botón volver (opcional) -->
  <div class="mobile-section" style="text-align: center;">
    <a href="articulos.htm" class="mobile-back-button">← Volver a Artículos</a>
  </div>

</div>
```

4. **No olvides el footer:**

```html
<div id="fin">
  <a href="mailto:info@kriyayogadebabaji.net">info@kriyayogadebabaji.net</a> -
  Esta web fue creada y es mantenida por Nacho Albalat, Nityananda: info@kriyayogadebabaji.net.
  Copyright 2025©. Se permite la libre reproducción siempre que se cite la fuente.
  Desarrollo web: <a href="https://conexos.es" target="_blank">Conexos</a>
</div>
```

---

## 4. Caso Especial: index.htm

La página principal (`index.htm`) funciona de manera diferente.

### Contenido de Escritorio
Está directamente en `index.htm` como HTML normal.

### Contenido Móvil
Se genera dinámicamente desde el archivo `js/mobile-content.js`.

**Para editar la versión móvil de index.htm:**

1. Abre `js/mobile-content.js`
2. Busca la sección que quieres modificar (por ejemplo, `terapias:`):

```javascript
terapias: {
    title: 'Terapias',
    content: `
        <div class="mobile-section" id="mobile-terapias">
            <h2>Terapias</h2>
            <p>Tu contenido aquí...</p>
        </div>
    `
}
```

3. Modifica el HTML dentro de los backticks (\`)
4. Guarda el archivo
5. Recarga con Ctrl+Shift+R (hard refresh)

---

## 5. Elementos Comunes y su Código

### Párrafo simple
```html
<p>Tu texto aquí.</p>
```

### Título
```html
<h2>Subtítulo</h2>
<h3>Subtítulo menor</h3>
```

### Enlace
```html
<a href="https://ejemplo.com">Texto del enlace</a>
```

### Negrita
```html
<strong>Texto en negrita</strong>
```

### Cursiva
```html
<em>Texto en cursiva</em>
```

### Lista con viñetas
```html
<ul>
  <li>Primer punto</li>
  <li>Segundo punto</li>
  <li>Tercer punto</li>
</ul>
```

### Imagen centrada (móvil)
```html
<div class="mobile-image-container">
  <img src="imagenes/nombre.jpg" alt="Descripción" />
  <p class="linaje-description" style="text-align: center;">Pie de foto</p>
</div>
```

---

## 6. Verificar tus Cambios

### En Escritorio:
1. Abre el navegador
2. Ve a http://localhost:8000 (o tu URL)
3. Recarga con F5

### En Móvil:
1. Abre Chrome DevTools (F12)
2. Click en el icono de móvil (Ctrl+Shift+M)
3. Selecciona "iPhone SE" o "Galaxy S8" (360px)
4. Recarga con Ctrl+Shift+R (hard refresh)

**Consejo:** Siempre prueba en ambas versiones antes de publicar.

---

## 7. Errores Comunes y Soluciones

### "No veo mis cambios en móvil"
**Solución:** Haz un hard refresh (Ctrl+Shift+R). Los navegadores guardan caché.

### "La imagen no aparece"
**Solución:**
- Verifica que la imagen esté en la carpeta `imagenes/`
- Revisa que el nombre del archivo coincida exactamente (mayúsculas/minúsculas)
- Asegúrate de que la ruta sea `imagenes/nombre.jpg` (sin `/` al inicio)

### "El texto se ve descuadrado en móvil"
**Solución:** Asegúrate de usar las clases correctas:
- `<div class="mobile-section">` para secciones
- `<div class="mobile-image-container">` para imágenes

### "Los cambios funcionan en escritorio pero no en móvil"
**Solución:** Si es `index.htm`, recuerda que la versión móvil está en `js/mobile-content.js`.

---

## 8. Publicar tus Cambios

Una vez que hayas verificado tus ediciones en local:

1. **Guarda todos los archivos modificados**
2. **Sube los archivos al servidor** usando tu método habitual (FTP, SSH, etc.)
3. **Verifica en producción** abriendo el sitio en tu móvil real

---

## 9. Recursos de Referencia

### Archivos que puedes usar como plantilla:
- `t-kundalini.htm` - Artículo con imágenes y texto
- `articulos.htm` - Página de listado
- `contacto.htm` - Página con formulario

### Archivos que NO debes modificar (a menos que sepas lo que haces):
- `css/reset.css`
- `css/arquitectura.css`
- `js/menu-toggle.js`
- `js/scroll-to-top.js`

### Archivos de estilos principales:
- `css/textos.css` - Estilos de texto para escritorio
- `css-responsive/responsive.css` - Estilos para móvil

---

## 10. Consejos Finales

1. **Mantén copias de seguridad** de tus archivos antes de editarlos
2. **Edita un archivo a la vez** para identificar errores fácilmente
3. **Prueba siempre en móvil** - cada vez más visitantes usan smartphones
4. **Usa nombres descriptivos** para nuevas imágenes (ej: `chakra_muladhara.jpg` en lugar de `img001.jpg`)
5. **Sé consistente** con el formato - copia la estructura de artículos existentes

---

**Última actualización:** Noviembre 2025
**Versión:** 2.0
