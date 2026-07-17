
![Docker vs MV](../images/docker.mv.webp)

*Las máquinas virtuales virtualizan el hardware, mientras que los contenedores virtualizan el entorno del sistema operativo.*

O, de forma más precisa:

*Las máquinas virtuales emulan un ordenador completo, incluyendo hardware virtual y un sistema operativo invitado. Los contenedores comparten el núcleo (kernel) del sistema operativo anfitrión, mientras aíslan procesos, sistemas de archivos, redes y recursos.*

¿Qué significa exactamente «virtualizar»?

En este contexto, virtualizar significa crear una versión lógica o software de un recurso físico, de manera que las aplicaciones o los usuarios interactúen con ella como si fuera real.

Por ejemplo:

- Virtualizar hardware significa crear CPUs, memoria, discos y tarjetas de red virtuales mediante software.
- Virtualizar un entorno de sistema operativo significa proporcionar a una aplicación la sensación de que tiene su propio sistema de archivos, procesos, red y recursos, aunque en realidad comparte el mismo kernel con otras aplicaciones.

En otras palabras, la virtualización crea **una abstracción** que oculta los detalles físicos subyacentes y presenta una versión **aislada o simulada** de esos recursos.

Más informacion sobre las diferencias:
https://k21academy.com/kubernetes/docker-vs-virtual-machine/

# Comandos comúnes

| Comando                                     | Descripción                                                                          |
| ------------------------------------------- | ------------------------------------------------------------------------------------ |
| `docker --version`                          | Muestra la versión instalada de Docker.                                              |
| `docker info`                               | Muestra información detallada sobre el cliente y el daemon de Docker.                |
| `docker system info`                        | Muestra información del sistema Docker (equivalente moderno es `docker info`).       |
| `docker images`                             | Lista las imágenes almacenadas localmente.                                           |
| `docker ps`                                 | Muestra los contenedores en ejecución.                                               |
| `docker ps -a`                              | Muestra todos los contenedores, incluidos los detenidos.                             |
| `docker container ls`                       | Muestra los contenedores en ejecución (nuevo formato orientado a objetos).           |
| `docker container ls -a`                    | Muestra todos los contenedores, incluidos los detenidos.                             |
| `docker system df -v`                       | Muestra el uso de espacio de imágenes, contenedores, volúmenes y caché, con detalle. |
| `docker container exec -it XXXXX /bin/bash` | Abre una sesión interactiva de Bash dentro del contenedor indicado por `XXXXX`.      |


# Ejemplo con Debian

https://hub.docker.com/_/debian

```
docker run -it debian bash
```

Y dentro del contenedor:

```
cat etc/os-release
uname -a   # contiene el nombre del contenedor, y además, el host OS
exit
```


TO DO - namespaces and cgroups for docker engine

# Recursos adicionales


| Recurso  | URL |
|----------|-----|
| Docker Info de Clase | https://docs.google.com/document/d/12UDEovSM7b7pHgEwf0ski8NdsOb4OSJdwesSiD-eQA0/view |
| Docker Cheat Sheet | https://dockerlabs.collabnix.com/docker/cheatsheet/ |
| Diferencias entre MV y Contenedores | https://k21academy.com/kubernetes/docker-vs-virtual-machine/ |

