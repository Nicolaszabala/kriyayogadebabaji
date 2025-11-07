#!/usr/bin/env python3
"""
Script para aplicar el protocolo mobile responsive a todos los archivos t-*.htm
"""

import os
import re

def apply_mobile_protocol(filepath):
    """Aplica el protocolo mobile responsive a un archivo HTML"""
    filename = os.path.basename(filepath)
    print(f"Procesando: {filename}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Verificar si ya tiene los CSS responsive (evitar duplicados)
    if 'css-responsive/responsive.css' in content:
        print(f"  - Ya tiene CSS responsive, saltando...")
        return False

    # 2. Agregar CSS responsive en el <head>
    css_insert = '''<link rel="stylesheet" type="text/css" href="css-responsive/responsive.css" />
<link rel="stylesheet" type="text/css" href="css-responsive/version-toggle.css" />
<link rel="stylesheet" type="text/css" href="css-responsive/hamburger-menu.css" />
</head>'''

    content = content.replace('</head>', css_insert)

    # 3. Actualizar copyright a 2025
    content = re.sub(r'Copyright\s+201[0-9]©', 'Copyright 2025©', content)
    content = re.sub(r'Copyright\s+202[0-4]©', 'Copyright 2025©', content)

    # 4. Agregar scripts antes de </body>
    scripts = '''
<!-- JavaScript para menú responsive -->
<script src="js/menu-toggle.js"></script>

<!-- JavaScript para contenido mobile personalizado -->
<script src="js/mobile-content.js"></script>

<!-- JavaScript para botón scroll to top -->
<script src="js/scroll-to-top.js"></script>

</body>'''

    content = content.replace('</body>', scripts)

    # 5. Wrap contenido en versiones mobile y desktop
    # Buscar el patrón: <li><div id="noticias"> hasta </div><!-- de noticias--></li>
    pattern = r'(\s*<li><div id="noticias">.*?</div><!-- de noticias-->\s*</li><!-- de noticias-->)'
    match = re.search(pattern, content, re.DOTALL)

    if not match:
        print(f"  - No se encontró div#noticias correctamente, saltando...")
        return False

    original_noticias_block = match.group(1)

    # Extraer título del artículo
    titulo_match = re.search(r'<h6>(.+?)</h6>', original_noticias_block, re.DOTALL)
    if titulo_match:
        titulo_html = titulo_match.group(1)
        # Limpiar tags HTML del título
        titulo = re.sub(r'<[^>]+>', '', titulo_html).strip()
    else:
        titulo = "Artículo"

    # Extraer autor
    autor_match = re.search(r'</h6>(.{0,100}?)por\s+([^<\n]+)', original_noticias_block, re.DOTALL)
    autor = ""
    if autor_match:
        autor = autor_match.group(2).strip()
        # Limpiar si tiene tags
        autor = re.sub(r'<[^>]+>', '', autor).strip()

    # Extraer PDF link si existe
    pdf_match = re.search(r'<a href="(docs/[^"]+\.pdf)">', original_noticias_block)
    pdf_link = pdf_match.group(1) if pdf_match else ""

    # Crear contenido mobile básico con estructura correcta
    mobile_wrapper = f'''        	<li>

<!-- CONTENIDO MOBILE -->
<div id="mobile-noticias" style="display: none;">
  <div class="mobile-content-wrapper">
    <div class="mobile-section">
      <h2>{titulo}</h2>'''

    if autor:
        mobile_wrapper += f'\n      <p><em>por {autor}</em></p>'

    mobile_wrapper += '\n\n      <p>Contenido del artículo optimizado para dispositivos móviles.</p>'

    if pdf_link:
        mobile_wrapper += f'\n\n      <p><a href="{pdf_link}">Descargar versión en PDF</a></p>'

    mobile_wrapper += '''
    </div>
  </div>
</div>

<!-- CONTENIDO DESKTOP -->
<div id="desktop-noticias">
<div id="noticias">'''

    # Extraer solo el contenido interno de <div id="noticias">...</div>
    noticias_content_match = re.search(r'<div id="noticias">(.*?)</div><!-- de noticias-->', original_noticias_block, re.DOTALL)
    if noticias_content_match:
        noticias_inner_content = noticias_content_match.group(1)
    else:
        print(f"  - No se pudo extraer contenido interno de noticias")
        return False

    mobile_wrapper += noticias_inner_content

    mobile_wrapper += '''</div><!-- de noticias-->
</div>
<!-- FIN CONTENIDO DESKTOP -->
    </li><!-- de noticias-->'''

    # Reemplazar el bloque original
    content = content.replace(original_noticias_block, mobile_wrapper)

    # Guardar archivo
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  - ✓ Procesado correctamente")
    return True

def main():
    # Lista de archivos especificados por el usuario
    archivos = [
        "t-linaje.htm", "t-templo2.htm", "t-charla.htm", "t-circuito.htm",
        "t-biografia.htm", "t-aforismos.htm", "t-tantra.htm", "t-tantra2.htm",
        "t-emociones.htm", "t-mataji.htm.htm", "t-kundalini.htm", "t-aum.htm",
        "t-entrega.htm", "t-gracia.htm", "t-samadhi2.htm", "t-disociacion.htm",
        "t-inconsciente3.htm", "t-desapego2.htm", "t-meditaciones.htm", "t-devocion.htm",
        "t-guia.htm", "t-samskaras.htm", "t-mente.htm", "t-progreso.htm",
        "t-nidra.htm", "t-mantra.htm", "t-silencio.htm", "t-guru.htm",
        "t-gurupurnima.htm", "t-shiva.htm", "t-ganesha.htm", "t-Muruga.htm",
        "t-consciencia.htm", "t-prologo.htm", "t-resurreccion.htm", "t-patanjali.htm",
        "t-jesus.htm", "t-aurobindo.htm", "t-india1.htm", "t-hijoprodigo.htm",
        "t-supramental.htm"
    ]

    base_dir = "/home/nicolas/kriyayogadebabaji.net"

    procesados = 0
    errores = 0
    saltados = 0

    for archivo in archivos:
        filepath = os.path.join(base_dir, archivo)
        if not os.path.exists(filepath):
            print(f"⚠ Archivo no encontrado: {archivo}")
            errores += 1
            continue

        try:
            resultado = apply_mobile_protocol(filepath)
            if resultado:
                procesados += 1
            else:
                saltados += 1
        except Exception as e:
            print(f"✗ Error procesando {archivo}: {e}")
            import traceback
            traceback.print_exc()
            errores += 1

    print(f"\n{'='*60}")
    print(f"RESUMEN:")
    print(f"  - Archivos procesados correctamente: {procesados}")
    print(f"  - Archivos saltados (ya procesados): {saltados}")
    print(f"  - Errores: {errores}")
    print(f"  - Total archivos: {len(archivos)}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
