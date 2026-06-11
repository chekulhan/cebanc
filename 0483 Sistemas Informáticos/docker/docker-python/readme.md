

```bash
# 🚀 Producción:
# Construye una imagen usando el Dockerfile en el directorio actual (.)
# y la etiqueta (nombre) como "my-python-app"

docker build -t my-python-app .

# Ejecuta un contenedor a partir de la imagen "my-python-app"
# -it  → modo interactivo con terminal
# --rm → elimina el contenedor al salir

docker run -it --rm my-python-app
```


```bash
# 🛠️ Desarrollo (recomendado):
# Ejecuta un contenedor usando la imagen oficial "python:3.11-slim"
# Monta el directorio actual en /app dentro del contenedor
# Establece /app como directorio de trabajo
# Inicia una shell interactiva (bash)

docker run -it --rm -v $(pwd):/app -w /app python:3.11-slim bash

# Igual que el anterior, pero en lugar de bash
# ejecuta directamente el script app.py con Python
docker run -it --rm -v $(pwd):/app -w /app python:3.11-slim python app.py
```


