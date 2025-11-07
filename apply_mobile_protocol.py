#!/usr/bin/env python3
"""
Script para aplicar el protocolo mobile responsive a todos los archivos t-*.htm
"""

import os
import re
import glob
from bs4 import BeautifulSoup

def extract_article_content(soup):
    """Extrae el contenido del artículo y lo convierte a formato mobile"""
    noticias_div = soup.find('div', id='noticias')
    if not noticias_div:
        return None

    # Extraer título
    titulo_div = noticias_div.find('div', id='titulo')
    if titulo_div:
        h6 = titulo_div.find('h6')
        titulo = h6.get_text().strip() if h6 else "Artículo"

        # Buscar autor
        autor_text = titulo_div.get_text()
        autor_match = re.search(r'por\s+(.+?)(?:\n|$)', autor_text, re.IGNORECASE)
        autor = autor_match.group(1).strip() if autor_match else ""
    else:
        titulo = "Artículo"
        autor = ""

    # Extraer texto del div#texto
    texto_div = noticias_div.find('div', id='texto')
    if not texto_div:
        return None

    # Extraer contenido de texto (dentro de h2)
    h2 = texto_div.find('h2')
    if not h2:
        return None

    mobile_content = []
    mobile_content.append(f'      <h2>{titulo}</h2>')
    if autor:
        mobile_content.append(f'      <p><em>por {autor}</em></p>')
    mobile_content.append('')

    # Procesar contenido del h2
    for child in h2.children:
        if child.name == 'br':
            continue
        elif child.name == 'div' and 'foto' in child.get('id', '').lower():
            # Es una imagen
            img = child.find('img')
            if img:
                src = img.get('src', '')
                alt = img.get('alt', 'Imagen')
                mobile_content.append('      <div class="mobile-image-container">')
                mobile_content.append(f'        <img src="{src}" alt="{alt}" />')
                mobile_content.append('      </div>')
                mobile_content.append('')
        elif child.name in ['b', 'strong']:
            # Es un subtítulo
            subtitle = child.get_text().strip()
            if subtitle:
                mobile_content.append(f'      <h3>{subtitle}</h3>')
                mobile_content.append('')
        elif child.name == 'a':
            # Es un enlace, mantenerlo
            pass
        elif isinstance(child, str):
            # Es texto
            text = child.strip()
            if text and text != '':
                # Dividir por <br/> tags
                paragraphs = text.split('<br')
                for para in paragraphs:
                    para = para.strip()
                    if para and para != '/>' and len(para) > 5:
                        mobile_content.append(f'      <p>{para}</p>')
                        mobile_content.append('')

    return '\n'.join(mobile_content)

def apply_mobile_protocol(filepath):
    """Aplica el protocolo mobile responsive a un archivo HTML"""
    print(f"Procesando: {filepath}")

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
    content = re.sub(r'Copyright\s+201[0-9]', 'Copyright 2025', content)
    content = re.sub(r'Copyright\s+202[0-4]', 'Copyright 2025', content)

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
    # Buscar el patrón: <li><div id="noticias">
    pattern = r'(<li><div id="noticias">)'
    match = re.search(pattern, content)

    if not match:
        print(f"  - No se encontró div#noticias, saltando...")
        return False

    # Encontrar el cierre de </div><!-- de noticias-->
    noticias_start = match.start()
    noticias_pattern = r'</div><!-- de noticias-->\s*</li><!-- de noticias-->'
    noticias_end_match = re.search(noticias_pattern, content[noticias_start:])

    if not noticias_end_match:
        print(f"  - No se encontró cierre de noticias, saltando...")
        return False

    noticias_end = noticias_start + noticias_end_match.end()

    # Extraer contenido original
    original_content = content[noticias_start:noticias_end]

    # Crear versión simplificada para mobile usando regex
    # Extraer título
    titulo_match = re.search(r'<h6>(.+?)</h6>', original_content, re.DOTALL)
    titulo = titulo_match.group(1).strip() if titulo_match else "Artículo"

    # Extraer autor
    autor_match = re.search(r'por\s+([^<\n]+)', original_content)
    autor = autor_match.group(1).strip() if autor_match else ""

    # Extraer PDF link si existe
    pdf_match = re.search(r'<a href="(docs/[^"]+\.pdf)">', original_content)
    pdf_link = pdf_match.group(1) if pdf_match else ""

    # Crear contenido mobile básico
    mobile_section = f'''<li>

<!-- CONTENIDO MOBILE -->
<div id="mobile-noticias" style="display: none;">
  <div class="mobile-content-wrapper">
    <div class="mobile-section">
      <h2>{titulo}</h2>'''

    if autor:
        mobile_section += f'\n      <p><em>por {autor}</em></p>'

    mobile_section += '\n\n      <p>Contenido del artículo optimizado para dispositivos móviles.</p>'

    if pdf_link:
        mobile_section += f'\n\n      <p><a href="{pdf_link}">Descargar versión en PDF</a></p>'

    mobile_section += '''
    </div>
  </div>
</div>

<!-- CONTENIDO DESKTOP -->
<div id="desktop-noticias">
'''

    # Añadir contenido original
    mobile_section += original_content

    mobile_section += '''
</div>
<!-- FIN CONTENIDO DESKTOP -->
    </li><!-- de noticias-->'''

    # Reemplazar en el contenido
    content = content[:noticias_start] + mobile_section + content[noticias_end:]

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
            errores += 1

    print(f"\n{'='*60}")
    print(f"RESUMEN:")
    print(f"  - Archivos procesados correctamente: {procesados}")
    print(f"  - Archivos saltados (ya procesados): {saltados}")
    print(f"  - Errores: {errores}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
