# ¿Sobre qué infraestructura se ejecuta el software que desarrollamos?

- "¿Por qué mi aplicación va lenta?"
- "¿Qué ocurre cuando ejecuto mi código?"
- "¿Cómo llega una petición HTTP al servidor?"
- "¿Por qué el servidor se queda sin memoria?"
- "¿Qué hace realmente el sistema operativo cuando arranca?"

1. Del código fuente al procesador: ¿qué ocurre cuando ejecutamos un programa?

Contenidos asociados:

CPU.
Registros.
Contador de programa.
Unidad aritmético-lógica.
Memoria RAM.

Interés para programadores:
Entender cómo una instrucción de alto nivel termina convirtiéndose en instrucciones de máquina.

Actividad:
Seguir el recorrido:

main()
 ↓
compilador
 ↓
ejecutable
 ↓
sistema operativo
 ↓
CPU


2. ¿Por qué algunas aplicaciones consumen tanta memoria?

Contenidos asociados:

RAM.
Tipos de memoria.
Jerarquía de memoria.

Interés para programadores:
Relacionar variables, objetos, colecciones y cachés con el consumo real de memoria.

Preguntas interesantes:

¿Por qué un navegador puede consumir varios GB?
¿Por qué una consulta grande puede bloquear una aplicación?
3. Anatomía del ordenador de un desarrollador

Contenidos asociados:

Placa base.
CPU.
RAM.
SSD.
Tarjetas de red.

Interés para programadores:
Identificar qué componente suele ser el cuello de botella al desarrollar, compilar o ejecutar aplicaciones.

Actividad:
Analizar las especificaciones reales de sus equipos.

4. El viaje de una petición HTTP

Contenidos asociados:

Interfaces de entrada/salida.
Adaptadores de red.
Características de las redes.

Interés para programadores:

Navegador
 ↓
Sistema Operativo
 ↓
Tarjeta de red
 ↓
Router
 ↓
Servidor
 ↓
Base de datos

Es una forma muy natural de introducir redes sin profundizar aún.

5. ¿Qué pasa cuando pulsamos el botón de encendido?

Contenidos asociados:

Proceso de puesta en marcha.
BIOS/UEFI.
Sistema operativo.

Interés para programadores:

Power On
 ↓
UEFI
 ↓
Bootloader
 ↓
Kernel
 ↓
Servicios
 ↓
Aplicaciones

Muchos desarrolladores utilizan Linux o Windows diariamente sin saber cómo llegan a ejecutarse.

6. Seguridad física y prevención de riesgos en un entorno IT

Contenidos asociados:

Normativa.
Prevención de riesgos.

Enfoque interesante:
No como prevención industrial, sino como buenas prácticas profesionales:

Descarga electrostática.
Manipulación de componentes.
Seguridad eléctrica.
Ergonomía.
Gestión de cableado.
Protección de equipos.

Caso práctico:
Montar o desmontar un equipo siguiendo procedimientos seguros.

7. Tipos de memoria y por qué importan al rendimiento

Contenidos asociados:

RAM.
ROM.
Caché.
Almacenamiento persistente.

Interés para programadores:

Comparar:

Registros
↓
Caché
↓
RAM
↓
SSD
↓
Red

Y relacionarlo con:

variable local
objeto
base de datos
API remota
8. Reconociendo los componentes físicos de un servidor moderno

Contenidos asociados:

Componentes físicos.
Interfaces.
Adaptadores.

Interés para programadores:

Muchos terminarán desplegando aplicaciones en servidores o cloud.

Reconocer:

CPU.
Memoria.
NIC.
SSD.
Fuentes de alimentación.
9. Mapa físico vs mapa lógico: la diferencia que todo desarrollador debería conocer

Contenidos asociados:

Mapas físicos y lógicos de red.

Ejemplo muy cercano a ellos:

Mapa físico:

PC → Switch → Router → Internet

Mapa lógico:

Frontend
 ↓
API
 ↓
Base de datos

Esto conecta directamente con arquitecturas de software.

10. Diagnóstico básico de problemas para desarrolladores

Contenidos asociados:

Redes.
Hardware.
Arranque.
Componentes.

Escenarios:

La API responde lenta.
El servidor consume mucha RAM.
No hay conectividad.
La aplicación no arranca.

Que aprendan a identificar si el problema es:

Hardware
Sistema Operativo
Red
Aplicación