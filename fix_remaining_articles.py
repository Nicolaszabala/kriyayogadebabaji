#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para corregir los 15 artículos restantes con estructura HTML diferente.
"""

import re
from pathlib import Path

# Lista de archivos a procesar
FILES_TO_PROCESS = [
    't-templo2.htm',
    't-charla.htm',
    't-aforismos.htm',
    't-tantra.htm',
    't-tantra2.htm',
    't-emociones.htm',
    't-entrega.htm',
    't-meditaciones.htm',
    't-devocion.htm',
    't-mente.htm',
    't-nidra.htm',
    't-silencio.htm',
    't-guru.htm',
    't-gurupurnima.htm',
    't-resurreccion.htm'
]

def extract_title(html):
    """Extrae el título del artículo"""
    # Buscar en <div id="titulo"><h6>...</h6>
    match = re.search(r'<div id="titulo">\s*<h6>(.*?)</h6>', html, re.DOTALL)
    if match:
        title = match.group(1).strip()
        # Limpiar saltos de línea
        title = re.sub(r'\s+', ' ', title)
        return title
    return None

def format_content(content):
    """Formatea el contenido para mobile"""
    # Reemplazar <b>Subtítulo</b> con <h3>
    content = re.sub(r'<b>(.*?)</b>', r'<h3>\1</h3>', content)

    # Dividir por <br /><br /><br /> (separador de secciones)
    sections = content.split('<br /><br /><br />')

    formatted_paragraphs = []

    for section in sections:
        section = section.strip()
        if not section:
            continue

        # Si la sección empieza con <h3>, mantenerla aparte
        h3_match = re.match(r'(<h3>.*?</h3>)\s*(.*)', section, re.DOTALL)
        if h3_match:
            h3_tag = h3_match.group(1)
            rest = h3_match.group(2).strip()
            formatted_paragraphs.append(f'\n      {h3_tag}\n')
            if rest:
                section = rest
            else:
                continue

        # Reemplazar <br /><br /> con separador temporal
        section = section.replace('<br /><br />', '|||PARAGRAPH|||')
        # Reemplazar <br /> simple con espacio
        section = section.replace('<br />', ' ')

        # Dividir en párrafos
        paragraphs = section.split('|||PARAGRAPH|||')

        for para in paragraphs:
            para = para.strip()
            if para:
                # Limpiar espacios múltiples
                para = re.sub(r'\s+', ' ', para)
                formatted_paragraphs.append(f'      <p>{para}</p>\n')

    return ''.join(formatted_paragraphs)

def extract_article_content(html):
    """Extrae y formatea el contenido del artículo"""
    # Buscar el contenido dentro de <div id="texto"><h2>
    match = re.search(r'<div id="texto">\s*<h2>(.*?)</h2>\s*</div>', html, re.DOTALL)
    if not match:
        return None

    content = match.group(1)

    # Limpiar el inicio (espacios, <br /> iniciales)
    content = re.sub(r'^[\s<br />]+', '', content)

    # Quitar la sección de "Artículos de meses anteriores" si existe
    content = re.sub(r'\+ Artículos de meses anteriores:.*$', '', content, flags=re.DOTALL)
    content = re.sub(r'<a href=.*$', '', content, flags=re.DOTALL)

    # Formatear el contenido
    formatted = format_content(content)

    return formatted

def fix_mobile_content(filepath):
    """Corrige el contenido mobile de un artículo"""
    print(f"Procesando: {filepath.name}")

    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Extraer el título
    title = extract_title(html)
    if not title:
        print(f"  ⚠ No se encontró título en {filepath.name}")
        return False

    print(f"  📄 Título: {title[:50]}...")

    # Extraer y formatear el contenido
    article_content = extract_article_content(html)
    if not article_content:
        print(f"  ⚠ No se encontró contenido en {filepath.name}")
        return False

    # Buscar y reemplazar TODO el contenido de mobile-section
    # Patrón más simple: reemplaza desde <div class="mobile-section"> hasta el primer </div> que lo cierra
    mobile_pattern = r'(<div class="mobile-section">)(.*?)(</div>\s*</div>\s*</div>\s*<!-- CONTENIDO DESKTOP -->)'

    # Construir el nuevo contenido mobile completo
    new_mobile_content = f'''
      <h2>{title}</h2>
      <p><em>por Nityananda</em></p>

{article_content}
      <p><a href="docs/{filepath.stem}.pdf">Descargar versión en PDF</a></p>
    '''

    # Reemplazar
    html_fixed = re.sub(mobile_pattern, r'\1' + new_mobile_content + r'\3', html, flags=re.DOTALL)

    # Verificar que se hizo el reemplazo
    if html_fixed == html:
        print(f"  ⚠ No se pudo reemplazar contenido mobile en {filepath.name}")
        return False

    # Guardar
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html_fixed)

    print(f"  ✓ Corregido exitosamente")
    return True

def main():
    print(f"\n📝 Procesando {len(FILES_TO_PROCESS)} artículos restantes\n")

    success = 0
    failed = 0

    for filename in FILES_TO_PROCESS:
        filepath = Path(filename)
        if not filepath.exists():
            print(f"⚠ {filename} no existe")
            failed += 1
            continue

        if fix_mobile_content(filepath):
            success += 1
        else:
            failed += 1
        print()

    print(f"\n{'='*50}")
    print(f"✅ Procesados exitosamente: {success}")
    if failed > 0:
        print(f"❌ Fallidos: {failed}")
    print(f"{'='*50}\n")

if __name__ == '__main__':
    main()
