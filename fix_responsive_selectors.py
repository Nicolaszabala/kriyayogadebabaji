#!/usr/bin/env python3
"""
Script para agregar body:not(.prefer-web-version) a todos los selectores CSS
que no lo tengan dentro del bloque @media screen and (max-width: 767px)
"""

import re
import sys

def fix_responsive_css(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Encontrar el bloque @media screen and (max-width: 767px)
    media_pattern = r'(@media screen and \(max-width: 767px\) \{)(.*?)(\n\})'

    def fix_media_block(match):
        opening = match.group(1)
        block_content = match.group(2)
        closing = match.group(3)

        lines = block_content.split('\n')
        fixed_lines = []

        for line in lines:
            # Saltar líneas vacías, comentarios, y líneas que ya tienen el selector correcto
            if (not line.strip() or
                line.strip().startswith('/*') or
                line.strip().startswith('*') or
                'body:not(.prefer-web-version)' in line or
                'body.prefer-web-version' in line):
                fixed_lines.append(line)
                continue

            # Detectar líneas con selectores CSS (antes de {)
            # Patrón: busca selectores que terminan con { o ,
            if re.search(r'^\s+[#.\w\[\]:\(\)>+~*\s,-]+\s*\{', line) or re.search(r'^\s+[#.\w\[\]:\(\)>+~*\s,-]+,\s*$', line):
                # Extraer el selector
                selector_match = re.match(r'^(\s+)(.+?)(\s*\{|\s*,\s*)$', line)
                if selector_match:
                    indent = selector_match.group(1)
                    selector = selector_match.group(2).strip()
                    ending = selector_match.group(3)

                    # Si el selector no empieza con body: o @, agregar el prefijo
                    if not selector.startswith('body') and not selector.startswith('@'):
                        # Dividir por comas si hay múltiples selectores
                        selectors = [s.strip() for s in selector.split(',')]
                        fixed_selectors = []

                        for sel in selectors:
                            if sel and not sel.startswith('body'):
                                fixed_selectors.append(f'body:not(.prefer-web-version) {sel}')
                            else:
                                fixed_selectors.append(sel)

                        new_selector = ',\n  '.join(fixed_selectors)
                        fixed_lines.append(f'{indent}{new_selector}{ending}')
                    else:
                        fixed_lines.append(line)
                else:
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)

        return opening + '\n'.join(fixed_lines) + closing

    # Aplicar el fix solo al bloque @media
    fixed_content = re.sub(media_pattern, fix_media_block, content, flags=re.DOTALL)

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(fixed_content)

    print(f"✅ Archivo procesado: {output_file}")
    return True

if __name__ == '__main__':
    input_file = '/home/nicolas/kriyayogadebabaji.net/css-responsive/responsive.css'
    backup_file = '/home/nicolas/kriyayogadebabaji.net/css-responsive/responsive.css.backup'

    # Crear backup
    import shutil
    shutil.copy(input_file, backup_file)
    print(f"📦 Backup creado: {backup_file}")

    # Procesar archivo
    if fix_responsive_css(input_file, input_file):
        print("✅ Proceso completado exitosamente")
        print(f"⚠️  Si algo sale mal, restaura con: cp {backup_file} {input_file}")
    else:
        print("❌ Error en el proceso")
        sys.exit(1)
