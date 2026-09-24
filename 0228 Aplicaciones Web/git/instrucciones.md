# Git

Git es un sistema de **control de versiones distribuido** y de código abierto que se utiliza para rastrear los cambios en el código fuente de los proyectos de software.

https://git-scm.com/cheat-sheet


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