# AJAX y acceso a APIs desde el cliente

AJAX (Asynchronous JavaScript and XML) es una técnica que permite que las páginas web actualicen datos sin recargar toda la página. Esto hace que las aplicaciones web sean más interactivas y rápidas.

## 1. Tecnologías que forman AJAX

AJAX no es un lenguaje ni una librería, es la combinación de varias tecnologías:

- HTML/XHTML: estructura del contenido de la página.

- CSS: estilo visual de la página.

- JavaScript: permite enviar solicitudes al servidor y actualizar el contenido dinámicamente.

- DOM (Document Object Model): permite cambiar partes de la página sin recargarla.

- XMLHttpRequest (XHR): objeto que realiza las solicitudes al servidor de forma asíncrona.

## 2. Historia resumida

| Año   | Tecnología / Evento                  | Qué permitió / Características principales                              |
|-------|-------------------------------------|------------------------------------------------------------------------|
| 1998  | `XMLHttpRequest` en Internet Explorer 5 | Solicitar datos al servidor sin recargar la página, comunicación asíncrona |
| 2006  | jQuery AJAX (`$.ajax`)               | Simplifica XHR, compatibilidad entre navegadores, más fácil de usar para REST APIs |
| 2015  | Axios y librerías basadas en promesas | Manejo más limpio de errores, encadenamiento de solicitudes, integración JSON |
| 2015+ | `fetch()` estandarizado               | API nativa moderna, basada en promesas, manejo más sencillo de JSON y errores, soporte para streams y binarios |


Nota: Para alumnos principiantes, basta con recordar que AJAX empezó con XMLHttpRequest, luego se hizo más fácil con jQuery, y hoy usamos fetch().

## 3. Principios de XMLHttpRequest

Asincronía: permite que la página siga funcionando mientras se espera la respuesta del servidor.

Interacción sin recargar: se pueden enviar y recibir datos sin refrescar la página completa.

Formatos de datos flexibles: aunque se llamó “XML”, hoy también se usa JSON, HTML o texto plano.

Eventos de estado (readyState): indica si la solicitud está en curso, completada, etc.

## 4. Limitaciones de XMLHttpRequest

| Limitación                     | Explicación sencilla                                                                 |
|--------------------------------|------------------------------------------------------------------------------------|
| Verbosidad                      | Se necesita mucho código incluso para solicitudes simples.                          |
| Callbacks / Callback Hell       | Funciones anidadas pueden ser difíciles de leer y mantener.                         |
| Promesas                        | No tiene soporte nativo; manejar errores y flujos asíncronos es más complicado.     |
| CORS (Cross-Origin)             | Restricciones al pedir datos de otros dominios; a veces difícil de configurar.      |
| Datos binarios / Streams        | Difícil de manejar comparado con fetch, que gestiona streams y archivos binarios más fácil. |
| Compatibilidad moderna          | Aunque funciona en muchos navegadores, es menos flexible y legible que fetch.       |

## Ejemplo de AJAX

No funciona en el navegador. Hay que usar Live Server.
Right-click your HTML file → “Open with Live Server”.

```html
<!DOCTYPE html>
<html>
<head>
  <title>AJAX Example</title>
</head>
<body>

<h2>AJAX Example</h2>
<button onclick="loadData()">Load Data</button>
<div id="result"></div>

<script>
function loadData() {
  // 1. Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // 2. Define what happens when the response is received
  xhr.onreadystatechange = function() {
    // readyState 4 = request finished, status 200 = OK
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Display the response in the "result" div
      document.getElementById("result").innerHTML = xhr.responseText;
    }
  };

  // 3. Set up the request (GET request to a file or API)
  xhr.open("GET", "data.txt", true); // 'data.txt' can also be a JSON or API endpoint

  // 4. Send the request
  xhr.send();
}
</script>

</body>
</html>
```

## Librerías intermedias antes de fetch

### jQuery AJAX

Simplifica XHR y es compatible con todos los navegadores antiguos.

```javascript
$.ajax({
  url: "https://api.example.com/data",
  method: "GET",
  dataType: "json",
  success: function(response) {
    console.log(response); // muestra los datos en consola
  },
  error: function(err) {
    console.error(err); // manejo de errores
  }
});
```

Por qué se usaba:

- Más simple que XHR directo

- Compatible con todos los navegadores

- Muy popular para acceder a APIs REST antes de fetch()

### Axios y librerías basadas en promesas

Se popularizaron justo antes de que fetch() fuera estándar.

Permiten usar promesas, encadenar .then() y .catch() y manejar errores fácilmente.

6. Introducción a fetch()

fetch() es la forma moderna de hacer solicitudes asíncronas:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json()) // convierte la respuesta a JSON
  .then(data => console.log(data))   // muestra los datos
  .catch(error => console.error(error)); // manejo de errores
```

Ventajas frente a XHR:

- Basado en promesas → código más limpio

- Manejo más simple de JSON y errores

- Mejor compatibilidad con nuevas APIs (streams, binarios)

## 7. Evolución resumida de tecnologías de acceso a APIs
XMLHttpRequest → jQuery AJAX → Axios → fetch()
