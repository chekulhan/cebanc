# Elementos de bloque (block) y elementos en línea (inline)

Elementos de bloque (block) y elementos en línea (inline) son dos tipos de elementos en HTML que se comportan de manera diferente en la estructura y disposición de una página web.

## Elementos de Bloque (block)
Los elementos de bloque son aquellos que ocupan todo el ancho disponible en la página, lo que significa que siempre comienzan en una nueva línea y empujan cualquier contenido posterior a una línea inferior. Estos elementos se apilan verticalmente unos sobre otros. Ejemplos comunes de elementos de bloque son las etiquetas ```<div>```, ```<p>```, ```<header>```, ```<section>```, ```<article>```, y las etiquetas de encabezado como ```<h1>```, ```<h2>```, etc.

**Características principales:**

Tamaño: Pueden tener un ancho y altura específicos definidos con CSS.
Disposición: Siempre se dibujan en una nueva línea, y ocupan el 100% del ancho disponible (por defecto).
Ejemplo de uso: Crear secciones, encabezados, párrafos, listas, etc.

## Elementos en Línea (inline)
Los elementos en línea son aquellos que solo ocupan el ancho necesario para su contenido. No comienzan en una nueva línea y se colocan junto a otros elementos en la misma línea, a menos que no haya suficiente espacio en la línea actual. Algunos ejemplos de elementos en línea son las etiquetas ```<span>```, ```<a>```, ```<strong>```, ```<img>```, y  ```<em>```.

**Características principales:**

Tamaño: No tienen un ancho y altura explícitos (aunque se puede modificar su comportamiento con display: inline-block).
Disposición: Se distribuyen de manera horizontal, en línea con otros elementos.
Ejemplo de uso: Dar formato a partes del texto, enlaces, imágenes dentro de párrafos, etc.

# Diferencia clave
La principal diferencia entre estos dos tipos de elementos radica en su comportamiento de disposición en la página. Los elementos de bloque afectan el flujo de la página creando nuevas líneas, mientras que los elementos en línea se colocan en la misma línea con otros elementos, permitiendo que el contenido se ajuste de manera más compacta.

Al trabajar con CSS, se puede manipular estos comportamientos usando la propiedad display, cambiando un elemento de bloque a en línea (display: inline) o viceversa (display: block).

| **Tipo de Elemento**   | **Elementos de Bloque**                                | **Elementos en Línea**                                   |
|-------------------------|--------------------------------------------------------|----------------------------------------------------------|
| **Descripción**          | Ocupan todo el ancho disponible, saltan a una nueva línea y se apilan verticalmente | Ocupan solo el ancho necesario, permanecen en la misma línea que el contenido circundante |
| **Ejemplos**             | `<div>`, `<p>`, `<h1>`, `<section>`, `<footer>`, `<article>` | `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<code>`    |
| **Propiedad Display**    | `display: block;`                                      | `display: inline;`                                       |
| **Comportamiento**       | Obligan al siguiente elemento a aparecer en una nueva línea | No obligan a una nueva línea y permanecen en la misma línea |
| **Caso de Uso**          | Agrupar contenido, crear secciones y estructurar el diseño | Estilizar partes del texto, elementos pequeños dentro de un contexto más grande |
| **Ancho y Alto**         | Se puede establecer explícitamente el ancho y alto     | No se puede establecer ancho y alto (a menos que se cambie a `inline-block`) |
| **Margen y Relleno**     | Se pueden aplicar márgenes y relleno arriba/abajo      | Solo funcionan los márgenes y rellenos izquierda/derecha |

