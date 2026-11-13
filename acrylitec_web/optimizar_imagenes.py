"""
=============================================================================
ACRYLITEC - SCRIPT DE OPTIMIZACIÓN Y CONVERSIÓN MASIVA A WEBP
Proyecto de Residencias Profesionales
Requisitos: Python 3.8+ y biblioteca Pillow (pip install pillow)
=============================================================================
"""

import os
from PIL import Image

def optimizar_catalogo(directorio_fotos='fotos', calidad=88):
    """
    Escanea el directorio de fotos, redimensiona imágenes sobredimensionadas
    utilizando remuestreo Lanczos de alta fidelidad y las exporta al formato
    moderno WebP con compresión de método 6.
    """
    if not os.path.exists(directorio_fotos):
        print(f"Error: El directorio '{directorio_fotos}' no existe.")
        return

    print("=" * 70)
    print("ACRYLITEC: INICIANDO PIPELINE DE OPTIMIZACIÓN WEBP")
    print("=" * 70)

    total_original = 0
    total_optimizado = 0
    procesadas = 0

    for archivo in sorted(os.listdir(directorio_fotos)):
        nombre_lower = archivo.lower()
        if nombre_lower.endswith(('.jpg', '.jpeg', '.png')) and not nombre_lower.endswith('.webp'):
            ruta_origen = os.path.join(directorio_fotos, archivo)
            nombre_base = os.path.splitext(archivo)[0]
            ruta_destino = os.path.join(directorio_fotos, f"{nombre_base}.webp")

            peso_orig = os.path.getsize(ruta_origen)
            total_original += peso_orig

            with Image.open(ruta_origen) as img:
                # Regla de dimensionamiento: 1800px para imagen principal (Hero), 1200px para galería
                max_dim = 1800 if 'principal' in nombre_lower else 1200
                ancho, alto = img.size

                if max(ancho, alto) > max_dim:
                    ratio = max_dim / max(ancho, alto)
                    nuevo_tamano = (int(ancho * ratio), int(alto * ratio))
                    resample_filter = getattr(Image, 'Resampling', Image).LANCZOS
                    img_procesada = img.resize(nuevo_tamano, resample_filter)
                else:
                    img_procesada = img

                # Guardado en WebP con compresión optimizada
                img_procesada.save(ruta_destino, 'WEBP', quality=calidad, method=6)

            peso_nuevo = os.path.getsize(ruta_destino)
            total_optimizado += peso_nuevo
            reduccion = (1 - (peso_nuevo / peso_orig)) * 100
            procesadas += 1

            print(f"✔ [{archivo}] {peso_orig / 1024:.1f} KB -> [{nombre_base}.webp] {peso_nuevo / 1024:.1f} KB (-{reduccion:.1f}%)")

    print("-" * 70)
    if total_original > 0:
        ahorro_total = (1 - (total_optimizado / total_original)) * 100
        print(f"RESUMEN FINAL: {procesadas} imágenes procesadas")
        print(f"Peso Inicial : {total_original / (1024 * 1024):.2f} MB")
        print(f"Peso Final   : {total_optimizado / (1024 * 1024):.2f} MB")
        print(f"Ahorro Neto  : {ahorro_total:.2f}% de reducción de ancho de banda")
    print("=" * 70)

if __name__ == '__main__':
    directorio = os.path.join(os.path.dirname(__file__), 'fotos')
    optimizar_catalogo(directorio)

