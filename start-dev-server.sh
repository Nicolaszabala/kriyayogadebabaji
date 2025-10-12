#!/bin/bash

# Script para iniciar el servidor de desarrollo
# Uso: ./start-dev-server.sh [puerto]

PORT=${1:-8000}

echo "🚀 Iniciando servidor de desarrollo..."
echo "📁 Directorio: $(pwd)"
echo "🌐 Puerto: $PORT"
echo "🔗 URL: http://localhost:$PORT"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo "----------------------------------------"

# Verificar si Python está disponible
if command -v python3 &> /dev/null; then
    echo "Usando Python 3..."
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    echo "Usando Python 2..."
    python -m SimpleHTTPServer $PORT
else
    echo "❌ Error: Python no está instalado"
    echo "💡 Alternativa: usa 'npx http-server -p $PORT' si tienes Node.js"
    exit 1
fi