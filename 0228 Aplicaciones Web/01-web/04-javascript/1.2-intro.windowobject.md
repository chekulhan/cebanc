# Window
El objeto global window es un componente fundamental del entorno del navegador en JavaScript. Representa la ventana del navegador y actúa como un contenedor para todo el contenido de la página web, así como para los objetos y funciones globales de JavaScript. Aquí hay una descripción general de sus características y funciones:

## Características del Objeto window:
Contenedor Global: window es el objeto global en un entorno de navegador. Cualquier variable o función que declares globalmente se convierte en una propiedad del objeto window.

## Propiedades: window tiene numerosas propiedades útiles, como:

- window.location: Proporciona información sobre la URL actual y permite redirigir a otras URL.
- window.document: Referencia al objeto document, que representa el contenido de la página web y permite manipularlo.
- window.navigator: Proporciona información sobre el navegador y el sistema operativo del usuario.
- window.history: Permite interactuar con el historial de navegación, como retroceder o avanzar en las páginas visitadas.

## Métodos: window incluye métodos útiles para interactuar con la ventana del navegador, como:

- window.open(): Abre una nueva ventana o pestaña.
- window.close(): Cierra la ventana actual.
- window.alert(): Muestra un cuadro de diálogo con un mensaje y un botón de "Aceptar".
- window.confirm(): Muestra un cuadro de diálogo con un mensaje y botones de "Aceptar" y "Cancelar".
Eventos: El objeto window puede manejar eventos a nivel de ventana, como resize, scroll, y load. Esto permite a los desarrolladores ejecutar código en respuesta a acciones del usuario o cambios en la ventana.

Contexto de Ejecución: En un script de JavaScript que se ejecuta en un navegador, el objeto window es el contexto de ejecución. Esto significa que las funciones y variables globales son accesibles como propiedades de window.

## Ejemplo de Uso:
```javascript
// Cambiar el título de la página
window.document.title = "Nuevo Título";

// Mostrar una alerta
window.alert("¡Hola, mundo!");

// Redirigir a otra URL
window.location.href = "https://www.ejemplo.com";

// Obtener la altura de la ventana
console.log(window.innerHeight);
```


## Actividades
- Mostrar el ancho y alto de la ventana del navegador en píxeles.
- Mostrar la URL completa de la página actual.
- Cambiar el título de la pestaña del navegador.
- Mostrar información sobre el navegador y el sistema operativo que estás utilizando.
- Abrir una nueva ventana o pestaña con la URL especificada, pista: window.open.
- Mostrar la fecha y hora actual pista: window.Date.

## Fechas

```javascript
const now = new Date();
console.log(now.toLocaleTimeString());

const date = new Date('2025-02-23');
const month = date.getMonth(); // This will return 1 because February is the second month
console.log(month); 

```

## Respuestas
Comandos a Probar:
Mostrar el tamaño de la ventana:

```javascript
console.log(`Ancho: ${window.innerWidth}, Alto: ${window.innerHeight}`);
```

Descripción: Este comando muestra el ancho y alto de la ventana del navegador en píxeles.

Acceder a la URL actual:

```javascript
console.log(window.location.href);
```

Descripción: Muestra la URL completa de la página actual.

Cambiar el título de la página:

```javascript
window.document.title = "Nuevo Título";
```

Descripción: Cambia el título de la pestaña del navegador. Verifica el cambio en la pestaña.

Mostrar información sobre el navegador:

```javascript
console.log(window.navigator.userAgent);
```

Descripción: Muestra información sobre el navegador y el sistema operativo que estás utilizando.

Mostrar el historial de navegación:

```javascript
console.log(window.history.length);
```

Descripción: Muestra la cantidad de entradas en el historial de navegación de la pestaña actual.

Abrir una nueva ventana:

```javascript
window.open("https://www.ejemplo.com", "_blank");
```

Descripción: Abre una nueva ventana o pestaña con la URL especificada.

Mostrar la fecha y hora actual:

```javascript
console.log(window.Date.now());
```

Descripción: Muestra la fecha y hora actual en milisegundos desde el 1 de enero de 1970.

Para mostrarlo facilmente, usar el objeto Date:

```javascript
const timestamp = Date.now(); // Get the current timestamp
const date = new Date(timestamp); // Create a new Date object

// Format the date as a readable string
const formattedDate = date.toLocaleDateString(); // E.g., "2/23/2025"
const formattedTime = date.toLocaleTimeString(); // E.g., "10:30:00 AM"

```