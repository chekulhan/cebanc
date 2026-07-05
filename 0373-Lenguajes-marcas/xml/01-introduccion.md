# XML

https://www.youtube.com/watch?v=yBBth_TEuN8

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book id="bk101">
    <title>Learning XML</title>
    <author>John Doe</author>
    <price>29.99</price>
  </book>
  <book id="bk102">
    <title>Advanced XML</title>
    <author>Jane Smith</author>
    <price>39.99</price>
  </book>
</bookstore>
```


# Historia de XML (eXtensible Markup Language)

## Origen en SGML:

XML surge de SGML (Standard Generalized Markup Language), un estándar de los años 80 para definir documentos con estructura y etiquetas.

SGML era muy potente pero muy complejo para usar en la web.

## Nacimiento de XML:

A mediados de los 90, la World Wide Web Consortium (W3C) buscaba una forma más simple de representar datos estructurados en la web.

En 1996, W3C comenzó a trabajar en un estándar más ligero que SGML, llamado XML.

## Primera recomendación oficial:

En febrero de 1998, el W3C publicó XML 1.0 como recomendación oficial.

Objetivo: ser simple, flexible y legible tanto para humanos como para máquinas.

Características clave desde el inicio:

- Documentos bien formados y jerárquicos.

- Posibilidad de definir tus propias etiquetas (“extensible”).

- Compatible con la web y con otros estándares como HTML, XHTML y SOAP.

## Uso y popularidad:

XML se convirtió en un estándar para intercambio de datos entre sistemas (por ejemplo, web services, configuración de aplicaciones, bases de datos).

Fue muy popular hasta la llegada de JSON, que es más ligero y fácil de usar en aplicaciones web modernas.

# Actividad

Vamos a crear un archivo XML que contenga información sobre coches. Cada coche tendrá un nombre, un fabricante y un precio. Además, tienen color como color="rojo" pero lo guardamos como atributo.

Tu tarea es escribir tu propio archivo XML siguiendo este ejemplo. Recuerda que:

- Cada archivo XML debe empezar con la declaración <?xml version="1.0" encoding="UTF-8"?>.

- Debe haber un elemento raíz que contenga todos los coches (por ejemplo, <coches>).

- Cada coche será un elemento <coche> con información dentro.

- Todos los elementos deben cerrarse correctamente y los atributos deben ir entre comillas.

# Tarea avanzado
¿Cómo se exporta datos de Excel a formato XML? Y importar?