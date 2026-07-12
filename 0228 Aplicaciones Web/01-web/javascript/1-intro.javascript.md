# Javascript comandos útiles

Usar dev tools
```javascript
console.log(document.head); // Shows the <head> section
console.log(document.body); // Shows the <body> section
document.documentElement;

document.title = "New Page Title"; // Changes the document title

```



# 🔍 10 Cosas que Debes Explorar en el DOM Usando la Consola de DevTools y JavaScript
Si estás aprendiendo sobre el Document Object Model (DOM), aquí tienes 10 aspectos clave que puedes explorar utilizando la Consola de DevTools (F12 > Pestaña Consola) y JavaScript.

1️⃣ Acceder a Todo el DOM
🔎 ¿Qué hace? Muestra todo el documento HTML en la consola.

```javascript
console.log(document);
```

2️⃣ Ver y Modificar el <head> y <body>
🔎 ¿Qué hace? Permite acceder y modificar las secciones principales de la página.

```javascript
console.log(document.head); // Muestra la sección <head>
console.log(document.body); // Muestra la sección <body>
document.title = "Nuevo Título de Página"; // Cambia el título del documento
```

3️⃣ Obtener un Elemento por su ID
🔎 ¿Qué hace? Selecciona un elemento específico usando su ID.

```javascript
console.log(document.getElementById("miElemento")); 
```

🛠 Prueba: Añade un id a un elemento en tu HTML y ejecuta este código.

4️⃣ Seleccionar Elementos por Clase o Nombre de Etiqueta
🔎 ¿Qué hace? Obtiene elementos según su clase o etiqueta.

```javascript
console.log(document.getElementsByClassName("miClase")); 
console.log(document.getElementsByTagName("p"));
```

🛠 Prueba: Observa cómo devuelve una HTMLCollection (no es un array).
📌 **Summary: Use HTMLCollection for live updates, but convert it to an array when you need array methods!** 🚀

5️⃣ Usar querySelector y querySelectorAll
🔎 ¿Qué hace? Selecciona elementos usando selectores CSS.

```javascript
console.log(document.querySelector("p")); // Primer elemento <p>
console.log(document.querySelectorAll(".miClase")); // Todos los elementos con la clase
```

🛠 Prueba: Compara los resultados con getElementsByClassName().

6️⃣ Explorar Padres, Hijos y Hermanos de un Elemento
🔎 ¿Qué hace? Permite navegar entre los elementos del DOM.

```javascript
let miElemento = document.querySelector("p");
console.log(miElemento.parentNode); // Obtiene el elemento padre
console.log(miElemento.children); // Lista los elementos hijos
console.log(miElemento.nextElementSibling); // Siguiente elemento
console.log(miElemento.previousElementSibling); // Elemento anterior
```

🛠 Prueba: Inspecciona cómo están relacionados los elementos.

7️⃣ Modificar Contenido (innerText, innerHTML, textContent)
🔎 ¿Qué hace? Cambia el texto dentro de un elemento.

```javascript
let parrafo = document.querySelector("p");
parrafo.innerText = "¡Nuevo contenido!";
parrafo.innerHTML = "<b>¡Nuevo contenido en negrita!</b>"; // Permite HTML
```
🛠 Prueba: Observa la diferencia entre innerText y innerHTML.

8️⃣ Modificar Atributos (src, href, class, id)
🔎 ¿Qué hace? Cambia atributos de un elemento, como imágenes y enlaces.

```javascript
let imagen = document.querySelector("img");
imagen.src = "nueva-imagen.jpg"; // Cambia la imagen
imagen.alt = "Nueva descripción de la imagen";

let enlace = document.querySelector("a");
enlace.href = "https://ejemplo.com"; // Cambia el enlace
```

🛠 Prueba: Modifica dinámicamente imágenes y enlaces.

9️⃣ Modificar CSS con JavaScript
🔎 ¿Qué hace? Permite cambiar estilos en tiempo real.

```javascript
let miBoton = document.querySelector("button");
miBoton.style.backgroundColor = "red"; // Cambia el color de fondo
miBoton.style.fontSize = "20px"; // Cambia el tamaño de la fuente
```

🛠 Prueba: Cambia los estilos dinámicamente.

🔟 Agregar y Eliminar Elementos del DOM
🔎 ¿Qué hace? Permite crear y eliminar elementos en la página.

```javascript
let nuevoElemento = document.createElement("div");
nuevoElemento.innerText = "¡Hola, soy un nuevo elemento!";
document.body.appendChild(nuevoElemento); // Lo añade a la página

nuevoElemento.remove(); // Lo elimina
```

🛠 Prueba: Añade y elimina elementos dinámicamente.

# Window

```
window.location;
window.navigator.userAgent;
window.alert("hola");
var y = window.prompt("Hola", "x");
```