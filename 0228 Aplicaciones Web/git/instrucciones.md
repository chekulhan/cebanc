# Git



Git es un sistema de **control de versiones distribuido** y de código abierto que se utiliza para rastrear los cambios en el código fuente de los proyectos de software.

https://git-scm.com/cheat-sheet

https://visualizegit.com/
https://git-web-engine.vercel.app/

## Demonstración

Teniendo un archivo main.tf:

```
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx" {
  name = "nginx:alpine"
}

resource "docker_container" "webserver" {
  name  = "webserver"
  image = docker_image.nginx.image_id

  ports {
    internal = 80
    external = 8080
  }
}
```

**Terraform** permite *describir* la infraestructura como código (IaC), comprobar los cambios antes de aplicarlos y crear, modificar o eliminar esa infraestructura automáticamente.

**Infrastructure as Code (IaC)** es una forma de gestionar y configurar la infraestructura informática mediante archivos de código, en lugar de realizar todos los cambios manualmente.


## Iniciar un repositorio
```
git init

ls -a
```

Git convierte la carpeta actual en un repositorio Git. `git init` crea el repositorio Git en la carpeta actual. A partir de ese momento, Git puede controlar los cambios que hagamos en ella.

Vamos a crear un archivo de texto y luego mirar el estado de git:

```bash
touch README.md
echo "# Archivo de readme" > README.md
cat README.md 
```

Ahora, 
```bash
git status
```

## Añadirlo al staging

```bash
git add README.md
```

git add no guarda todavía el cambio. Lo prepara para el próximo commit.

## Crear el primer commit
```
git commit -m "Primer commit"
```

## Modificaciones
Vamos a añadir una nueva linea y ver las modificaciones en git

```
echo "Este proyecto contiene la configuración de un servidor web." >> README.md
git status
git diff
```

## Actividad de repaso de Git

Tu equipo de sistemas recibe un proyecto de un equipo de desarrollo.

El equipo ha creado una pequeña aplicación web, pero os ha entregado el proyecto sin documentación.

Como administrador/a de sistemas, tienes que ayudarles a organizar el proyecto y dejar una documentación básica para que otras personas puedan entenderlo y ponerlo en marcha.

### 1. Revisar el proyecto

El proyecto se encuentra en la carpeta:

```text
Documents/
└── proyecto-git-01/
    ├── index.html
    ├── css/
    └── img/
```

Abre la carpeta `proyecto-git-01` y revisa los archivos que contiene.

Si no existe la estructura, créala y crea un archivo `index.html` sencillo.

### 2. Inicializar Git

Desde la carpeta `proyecto-git-01`, ejecuta:

```bash
git init
```

Esto convierte la carpeta del proyecto en un repositorio Git.

Comprueba el estado:

```bash
git status
```

### 3. Crear la primera versión

Añade **todos los archivos del proyecto** a Git:

```bash
git add .
```

Comprueba el estado:

```bash
git status
```

Ahora crea el primer commit:

```bash
git commit -m "Versión inicial del proyecto"
```

Comprueba el historial:

```bash
git log --oneline
```

Deberías tener una primera versión guardada del proyecto.

### 4. Añadir documentación

El equipo de desarrollo te informa de que el proyecto no tiene documentación.

Crea un archivo llamado:

```text
README.md
```

Incluye **2 o 3 líneas** explicando:

* Qué es el proyecto.
* Para qué sirve la aplicación.
* Cómo se puede abrir o poner en marcha.

Por ejemplo:

```markdown
# Proyecto Web

Aplicación web sencilla desarrollada para gestionar información de una empresa.

Para utilizarla, abrir el archivo `index.html` con un navegador web.
```

### 5. Comprobar los cambios

Comprueba qué ha cambiado en el proyecto:

```bash
git status
```

Git debería indicar que `README.md` es un archivo nuevo.

### 6. Añadir el README

Añade únicamente el README:

```bash
git add README.md
```

Comprueba de nuevo:

```bash
git status
```

### 7. Crear un segundo commit

Guarda la nueva versión:

```bash
git commit -m "Añadir documentación del proyecto"
```

### 8. Revisar el historial

Finalmente:

```bash
git log --oneline
```

Deberías tener dos commits:

```text
abc1234 Añadir documentación del proyecto
789abcd Versión inicial del proyecto
```

### ¿Qué has practicado?

* Inicializar un repositorio con `git init`.
* Añadir archivos con `git add`.
* Guardar versiones con `git commit`.
* Comprobar el estado con `git status`.
* Consultar el historial con `git log`.
* Añadir nuevos archivos a un proyecto que ya está controlado por Git.
