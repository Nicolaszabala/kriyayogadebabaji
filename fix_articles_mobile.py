#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para corregir el contenido mobile de los artículos.
Extrae el contenido completo del div desktop y lo formatea para mobile.
"""

import re
import glob
from pathlib import Path

def extract_article_content(html):
    """Extrae el contenido del artículo desde el div #texto"""
    # Buscar el contenido dentro de <div id="texto">
    match = re.search(r'<div id="texto"><h2>(.*?)</h2></div>', html, re.DOTALL)
    if not match:
        return None

    content = match.group(1)

    # Limpiar el contenido
    # Convertir <br /><br /> en párrafos
    content = content.replace('<br /><br /><br />', '</p><p>')
    content = content.replace('<br /><br />', '</p><p>')
    content = content.replace('<br />', ' ')

    # Limpiar espacios múltiples
    content = re.sub(r'\s+', ' ', content)

    # Dividir en párrafos
    paragraphs = [p.strip() for p in content.split('</p><p>') if p.strip()]

    # Formatear como HTML limpio
    formatted = []
    for p in paragraphs:
        p = p.replace('<p>', '').replace('</p>', '').strip()
        if p:
            formatted.append(f'      <p>{p}</p>\n')

    return ''.join(formatted)

def fix_mobile_content(filepath):
    """Corrige el contenido mobile de un artículo"""
    print(f"Procesando: {filepath.name}")

    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Extraer el título del artículo
    title_match = re.search(r'<div id="titulo"><h6>(.*?)</h6>', html, re.DOTALL)
    if not title_match:
        print(f"  ⚠ No se encontró título en {filepath.name}")
        return False

    title = title_match.group(1).strip()

    # Extraer el contenido del artículo
    article_content = extract_article_content(html)
    if not article_content:
        print(f"  ⚠ No se encontró contenido en {filepath.name}")
        return False

    # Buscar y reemplazar el contenido mobile vacío
    mobile_pattern = r'(<div id="mobile-noticias"[^>]*>.*?<div class="mobile-section">.*?<h2>.*?</h2>.*?<p><em>.*?</em></p>\s*)(.*?)(</div>\s*</div>\s*</div>)'

    new_mobile_content = f'''\n{article_content}
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

    print(f"  ✓ Corregido: {filepath.name}")
    return True

def main():
    # Procesar todos los archivos t-*.htm
    files = sorted(glob.glob('t-*.htm'))

    print(f"\n📝 Encontrados {len(files)} artículos para procesar\n")

    success = 0
    failed = 0

    for filepath in files:
        path = Path(filepath)
        if fix_mobile_content(path):
            success += 1
        else:
            failed += 1

    print(f"\n✅ Procesados exitosamente: {success}")
    if failed > 0:
        print(f"❌ Fallidos: {failed}")
    print()

if __name__ == '__main__':
    main()
