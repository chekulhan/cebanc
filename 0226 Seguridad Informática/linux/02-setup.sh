#!/bin/bash


# Base path: current directory
BASE_DIR="./proyecto"


# Create main project directory
mkdir -p "$BASE_DIR"


# Create files with some content
echo "Este es el reporte del proyecto" > "$BASE_DIR/reporte.txt"
echo -e "#!/bin/bash\n# Script de ejemplo\necho 'Ejecutando análisis...'" > "$BASE_DIR/script.sh"
echo "id,nombre,valor\n1,Elemento1,100\n2,Elemento2,200" > "$BASE_DIR/datos.csv"


# Create directories
mkdir -p "$BASE_DIR/logs"
mkdir -p "$BASE_DIR/imagenes"


# Set default permissions
chmod 644 "$BASE_DIR/reporte.txt"
chmod 644 "$BASE_DIR/script.sh"   
chmod 644 "$BASE_DIR/datos.csv"
chmod 700 "$BASE_DIR/logs"
chmod 750 "$BASE_DIR/imagenes"


# Confirmation message
echo "Estructura de proyecto creada en $BASE_DIR con permisos iniciales."
ls -lR "$BASE_DIR"