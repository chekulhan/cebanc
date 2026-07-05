# Lenguajes de Marca

Un Lenguaje de Marcas (Markup Language) es un modo de codificar (redactar) un documento donde, junto con el texto, se incorporan etiquetas (marcas o anotaciones) con información adicional relativa a la estructura del texto o su formato de presentación. Los Lenguajes de Marcas permiten hacer explícita la estructura de un documento, su contenido semántico o cualquier otra información lingüística o extralingüística que se quiera hacer patente.

No son lenguajes de programación como Java, Javascript, Python, C, C++, ...

Un ejemplo de un lenguaje de marcas:

![Lenguaje de Marcas ](../x-assets/0373/marcas.ex.png)

# GML
GML fue desarrollado en IBM entre 1969 y 1970 por Charles Goldfarb, Edward Mosher y Raymond Lorie (cuyas iniciales de apellido fueron usados por Goldfarb para crear el término GML). Las marcas incluyen información al documento relativa a parrafos, cabeceras, listas, tablas, etc. Dió lugar a SGML.

![GML ](../x-assets/0373/gml.png)

# SGML

SGML (Standard Generalized Markup Language) – 1969-1986. En 1986, SGML se convirtió en un estándar ISO para definir documentos estructurados.

# HTML

[Tim Berns-Lee](https://info.cern.ch/) en 1990´s. 


WYSIWYG, acrónimo de What You See Is What You Get (en español, "lo que ves es lo que obtienes"), es una frase aplicada a los procesadores de texto y otros editores de texto con formato (como los editores de HTML) que permiten escribir un documento mostrando directamente el resultado final, frecuentemente el resultado impreso. 


# XML
Desarrollo de XML – 1996-1998
En 1996, el W3C (World Wide Web Consortium) reunió a un grupo liderado por Jon Bosak de Sun Microsystems para desarrollar un formato más ligero y flexible que SGML.
En 1998, XML 1.0 fue publicado como una recomendación oficial del W3C.
XML fue diseñado para ser más simple que SGML, pero más estructurado que HTML.

Sobre los años 2000, XML se convirtió en el estándar para intercambiar datos entre aplicaciones web y empresariales. Se usó ampliamente en servicios web, configuraciones de software y almacenamiento de datos. Tecnologías como SOAP (Simple Object Access Protocol) y RSS (Really Simple Syndication) usaban XML.

XML fue un gran avance en la estructuración de datos para la web y sigue siendo una tecnología clave en muchos sistemas. Aunque ha sido reemplazado en parte por JSON, sigue siendo ampliamente utilizado en documentos estructurados y sistemas empresariales.

![XML](../x-assets/0373/xml.ex.png)

# XHTML
XHTML (Extensible HyperText Markup Language) es una versión más estricta y estructurada de HTML, basada en XML. Surgió como un intento de mejorar la calidad y coherencia del código web.

📌 Evolución de XHTML
- XHTML 1.0 (2000) → Primera versión, casi idéntica a HTML 4.01 pero con reglas más estrictas.
- XHTML 1.1 (2001) → Modularización, pero sin cambios significativos.
- XHTML 2.0 (cancelado en 2009) → Intentó cambiar muchas reglas de HTML, pero no tuvo éxito.
- HTML5 (2014) → Se abandonó la evolución de XHTML y el W3C decidió seguir con HTML5, que es más flexible.

Hoy en día, XHTML es poco usado, ya que HTML5 es el estándar actual, ofreciendo más flexibilidad y nuevas funciones.

📌 Diferencias clave entre XHTML y HTML
✅ XHTML requiere que todas las etiquetas estén correctamente cerradas.
✅ Los nombres de etiquetas deben estar en minúsculas.
✅ Los atributos deben estar entre comillas (" ").
✅ Las etiquetas vacías como <img /> deben cerrarse con />.

# JSON
JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos, ampliamente utilizado en aplicaciones web. Surgió a principios de la década de 2000 y se ha convertido en uno de los estándares más populares para representar datos estructurados.

JSON tiene sus raíces en el lenguaje de programación JavaScript. En 1999, el formato JSON fue propuesto por Douglas Crockford, quien lo popularizó y lo documentó como una alternativa más simple y flexible al formato XML.

📌 Evolución y uso en la actualidad
Desde su popularización, JSON ha sido adoptado en una gran variedad de aplicaciones, especialmente en la web. Algunos de los casos más comunes de uso de JSON incluyen:

- APIs RESTful: JSON es el formato de intercambio de datos por excelencia en APIs modernas.
- Aplicaciones móviles: JSON es ampliamente utilizado para el intercambio de datos entre servidores y dispositivos móviles.
- Bases de datos NoSQL: Muchas bases de datos modernas, como MongoDB y CouchDB, utilizan JSON para almacenar y gestionar datos.

![JSON](../x-assets/0373/json.ex.png)

# Markdown
Los principios de markdown se remontan a wikiwikiweb - se puede usar el sandbox de wikipedia para un simulacro.

[Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) para utilizar su markdown lenguaje de etiquetas. 

Usando este recurso online o [StackEdit.io](https://stackedit.io/), editar algunas lineas de texto para crear un readme.md archivo.

Leer esta guía para la creación de readme.md archivos.

Extender Stackedit.io o github con código Javascript:

## Actividades:

- Usar actividad-xml.xml para complementar las partes que faltan
- Llevar a cabo este [Tutorial de Markdown](https://commonmark.org/help/tutorial/)

## Recurso adicional
```json
{
  "catalogo": {
    "libros": [
      {
        "categoria": "programación",
        "idioma": "es",
        "titulo": "Introducción a XML",
        "autor": "Juan Pérez",
        "anio": 2025,
        "editorial": "Editorial Técnica",
        "descripcion": "Este libro es una guía completa sobre XML.",
        "comentario": "El signo mayor &gt; se usa para comparar valores."
      },
      {
        "categoria": "diseño web",
        "idioma": "en",
        "titulo": "Fundamentos de HTML y CSS",
        "autor": "María López",
        "anio": 2024,
        "editorial": "Ediciones Creativas",
        "descripcion": "Un enfoque práctico para diseñadores web.",
        "comentario": "El símbolo menor &lt; se utiliza en etiquetas HTML."
      },
      {
        "categoria": "base de datos",
        "idioma": "es",
        "titulo": "SQL para Principiantes",
        "autor": "Carlos Gómez",
        "anio": 2023,
        "editorial": "Grupo Editorial",
        "descripcion": "Aprende SQL desde cero con ejemplos prácticos."
      }
    ]
  }
}

```