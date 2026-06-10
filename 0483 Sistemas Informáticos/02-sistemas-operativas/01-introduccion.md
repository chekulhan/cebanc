# Sistemas Operativos para Desarrolladores
"El entorno donde vivirán las aplicaciones que desarrollaremos durante nuestra carrera profesional."

**Objetivo principal**

Que todos sean capaces de instalar, usar y administrar una máquina Linux básica para desarrollo.


Unidad 1. ¿Qué es un sistema operativo y por qué existe?
Contenidos oficiales
Historia.
Tipos de sistemas operativos.
Versiones.
Licencias.
Enfoque para programadores

Pregunta inicial:

¿Podría ejecutarse Java sin un sistema operativo?

o

¿Quién reserva memoria para Chrome?

Explicar:

Aplicación
↓
Sistema Operativo
↓
Hardware

Comparar:

Windows
Linux
macOS

Hablar de:

Kernel
Servicios
Procesos

No dedicaría más de una sesión a la historia.

Unidad 2. Instalación de un sistema operativo
Práctica principal

Instalar Linux en una máquina virtual.

Yo usaría:

Ubuntu

o

Linux Mint

Ubuntu suele tener mejor documentación para principiantes.

Actividad

Cada alumno debe documentar:

ISO utilizada.
Requisitos.
Configuración de la VM.
Capturas.
Problemas encontrados.
Soluciones.

Así cubres:

documentación de la instalación

sin necesidad de teoría artificial.

Unidad 3. Virtualización

Esta es probablemente la parte más interesante.

Pregunta

¿Cómo puede haber 100 servidores Linux en un único servidor físico?

Explicar:

Hardware
↓
Hipervisor
↓
Máquina Virtual
↓
Linux

Mostrar:

VirtualBox
VMware
Hyper-V

Introducir también:

Docker (solo concepto)

Comparar:

Máquina Virtual
≠
Contenedor
Unidad 4. Administración básica de Linux

Aquí dedicaría la mayor parte del tiempo.

Navegación
pwd
ls
cd
mkdir
rm
cp
mv
Usuarios
whoami
sudo
passwd
Procesos
ps
top
htop
kill

Relacionándolo con el módulo anterior:

¿Dónde está ejecutándose nuestro programa Java?

Información del sistema
free -h
lscpu
df -h
uname -a
Unidad 5. Gestión de software

Aquí conectas perfectamente con el resultado de aprendizaje.

Actualización
sudo apt update
sudo apt upgrade
Instalación
sudo apt install git
sudo apt install openjdk-21-jdk
sudo apt install nginx
Eliminación
sudo apt remove nginx
Búsqueda
apt search java

Aquí los alumnos entienden algo que usarán durante años.

Unidad 6. Versiones y licencias

No lo haría teórico.

Lo plantearía como investigación.

Comparar:

Sistema	Licencia
Windows	Propietaria
Linux	GPL
Android	Open Source
macOS	Propietaria

Preguntas:

¿Por qué Linux es gratuito?
¿Por qué Ubuntu puede redistribuirse?
¿Qué diferencia hay entre software libre y gratuito?