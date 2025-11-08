# Protocolo Mobile - Kriya Yoga de Babaji

## Estado del Proyecto

### Páginas Completadas ✅
Las siguientes páginas YA tienen el protocolo mobile completo aplicado:
- index.htm
- seminarios.htm (+ seminarios1.htm, seminarios2.htm, seminarios3.htm)
- clases.htm
- articulos.htm
- libros.htm
- contacto.htm
- descargas.htm
- 18siddhas.htm

### Artículos Procesados ✅
**¡TODOS COMPLETADOS! 50+ archivos con contenido mobile completo:**

**Grupo 1 - Completados previamente (25 artículos):**
- t-linaje.htm, t-circuito.htm, t-biografia.htm, t-kundalini.htm
- t-aum.htm, t-gracia.htm, t-samadhi2.htm, t-disociacion.htm
- t-inconsciente3.htm, t-desapego2.htm, t-guia.htm, t-samskaras.htm
- t-progreso.htm, t-mantra.htm, t-shiva.htm, t-ganesha.htm
- t-Muruga.htm, t-consciencia.htm, t-prologo.htm, t-patanjali.htm
- t-jesus.htm, t-aurobindo.htm, t-india1.htm, t-hijoprodigo.htm
- t-supramental.htm

**Grupo 2 - Sesión 1: Artículos con estructura existente (15):**
1. ✅ t-templo2.htm (21 párrafos)
2. ✅ t-charla.htm (35 párrafos)
3. ✅ t-aforismos.htm (30 párrafos)
4. ✅ t-tantra.htm (15 párrafos)
5. ✅ t-tantra2.htm (37 párrafos)
6. ✅ t-emociones.htm (26 párrafos)
7. ✅ t-entrega.htm (15 párrafos)
8. ✅ t-meditaciones.htm (15 párrafos)
9. ✅ t-devocion.htm (16 párrafos)
10. ✅ t-mente.htm (12 párrafos)
11. ✅ t-nidra.htm (23 párrafos)
12. ✅ t-silencio.htm (11 párrafos)
13. ✅ t-guru.htm (19 párrafos)
14. ✅ t-gurupurnima.htm (18 párrafos)
15. ✅ t-resurreccion.htm (13 párrafos)

**Grupo 3 - Sesión 2: Archivos sin estructura previa (10):**
1. ✅ t-mataji.htm (18 párrafos) - Mataji y su meditación nocturna
2. ✅ t-sundaranandar.htm (24 párrafos) - Caminar por el filo de la cuchilla
3. ✅ t-bogar.htm (15 párrafos) - Bogar y la tapa dorada
4. ✅ t-kudambay.htm (16 párrafos) - Ascenso y Descenso
5. ✅ t-ramalinga2.htm (16 párrafos) - La Luz de Gracia
6. ✅ Ubadecam.htm (35 párrafos) - Versos del Tirumandiram 113-142
7. ✅ t-siddhas.htm (19 párrafos) - Los Siddhas
8. ✅ t-jyoti.htm (17 párrafos) - Jyoti, la hermana de Skanda
9. ✅ t-ramalinga.htm (30 párrafos) - 28 poemas de Ramalinga
10. ✅ kriyababaji.htm (10 artículos) - Historias de Kriya Babaji

**Total: 50 archivos con estructura mobile completa**

### Tareas Pendientes ❌

**Ninguna - Protocolo Mobile COMPLETADO** ✅

**Script disponible:** `fix_remaining_articles.py` (modificado y listo para ejecutar)

---

## El Protocolo Mobile Completo

Cada página HTML debe tener:

### 1. CSS en el `<head>`
```html
<link rel="stylesheet" type="text/css" href="css-responsive/responsive.css" />
<link rel="stylesheet" type="text/css" href="css-responsive/version-toggle.css" />
<link rel="stylesheet" type="text/css" href="css-responsive/hamburger-menu.css" />
```

### 2. Estructura de Contenido Dual

```html
<li>

<!-- CONTENIDO MOBILE -->
<div id="mobile-noticias" style="display: none;">
  <div class="mobile-content-wrapper">

    <div class="mobile-section">
      <h2>Título del Artículo</h2>
      <p><em>por Nityananda</em></p>

      <p>[Contenido completo del artículo en párrafos limpios]</p>

      <h3>Subtítulo si existe</h3>

      <p>[Más contenido...]</p>

      <!-- Imágenes si las hay -->
      <div class="mobile-image-container">
        <img src="imagenes/foto.jpg" alt="Descripción" />
      </div>

      <p><a href="docs/archivo.pdf">Descargar versión en PDF</a></p>
    </div>

  </div>
</div>

<!-- CONTENIDO DESKTOP -->
<div id="desktop-noticias">
  [Contenido desktop original sin cambios]
</div>
<!-- FIN CONTENIDO DESKTOP -->

</li>
```

### 3. Scripts antes de `</body>`
```html
<!-- JavaScript para menú responsive -->
<script src="js/menu-toggle.js"></script>

<!-- JavaScript para contenido mobile personalizado -->
<script src="js/mobile-content.js"></script>

<!-- JavaScript para botón scroll to top -->
<script src="js/scroll-to-top.js"></script>
</body>
```

### 4. Copyright Actualizado
Cambiar `Copyright 2019©` o `2020©` por `Copyright 2025©`

---

## Reglas de Formateo Mobile

### Para Artículos (t-*.htm):

**Extracción del contenido:**
- El contenido está en: `<div id="texto"><h2>CONTENIDO AQUÍ</h2></div>`
- El título está en: `<div id="titulo"><h6>Título</h6>`

**Conversiones:**
- `<b>Subtítulo</b>` → `<h3>Subtítulo</h3>`
- `<br /><br /><br />` (triple) → Separador de párrafos
- `<br /><br />` (doble) → Nuevo párrafo `</p><p>`
- `<br />` (simple) → Espacio en blanco

**Elementos a eliminar:**
- Sección "Artículos de meses anteriores" al final
- Enlaces a otros artículos al final del contenido

**Imágenes:**
- Si hay imágenes en el contenido, envolverlas en:
```html
<div class="mobile-image-container">
  <img src="..." alt="..." />
  <p class="linaje-description" style="text-align: center;">Descripción</p>
</div>
```

---

## Cómo Completar las 15 Tareas Pendientes

### Opción 1: Ejecutar el Script (Recomendado)
```bash
cd /home/nicolas/kriyayogadebabaji.net
python3 fix_remaining_articles.py
```

El script `fix_remaining_articles.py` está modificado y debería procesar los 15 archivos restantes.

### Opción 2: Proceso Manual por Archivo

Para cada archivo:

1. **Leer el archivo** y ubicar:
   - Título en `<div id="titulo"><h6>TÍTULO</h6>`
   - Contenido en `<div id="texto"><h2>CONTENIDO</h2></div>`

2. **Formatear el contenido:**
   - Convertir `<b>` en `<h3>`
   - Dividir en párrafos según `<br /><br /><br />`
   - Limpiar saltos de línea simples

3. **Reemplazar en mobile-section:**
   - Buscar `<div class="mobile-section">...</div>` (primer cierre)
   - Reemplazar TODO su contenido con:
     ```html
     <h2>TÍTULO</h2>
     <p><em>por Nityananda</em></p>

     [CONTENIDO FORMATEADO]

     <p><a href="docs/NOMBRE_ARCHIVO.pdf">Descargar versión en PDF</a></p>
     ```

4. **Guardar** el archivo

---

## Verificación

Para verificar que un artículo está completo:

```bash
# Debe mostrar más de 3 párrafos
sed -n '/<div class="mobile-section">/,/Descargar versión en PDF/p' ARCHIVO.htm | grep -c '<p>'
```

Si devuelve > 3, el artículo tiene contenido completo ✅

---

## Notas Importantes

- **NO inventar texto:** Solo copiar el contenido que ya existe en desktop
- **Mantener desktop intacto:** No modificar `<div id="desktop-noticias">`
- **Todos los h2/h3 dentro de .mobile-section:** Para que tengan las líneas de gradiente
- **Botones:** Usar clases `phone-button` y `whatsapp-button` con `<span>` wrapper
- **Gradientes:** Botones verticales (`to bottom`), líneas de título horizontales (`to right`)

---

## Contacto / Dudas

Usuario: Nicolás
Proyecto: kriyayogadebabaji.net
Directorio: /home/nicolas/kriyayogadebabaji.net/
