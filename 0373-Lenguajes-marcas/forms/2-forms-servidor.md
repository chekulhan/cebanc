
# 📌 Node.js y Formularios (sin Express)

## 1️⃣ Creación de un servidor básico  
Node.js permite crear un servidor HTTP sin necesidad de frameworks adicionales. Para ello, usamos el módulo `http`:  

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor funcionando');
});

server.listen(3000, () => console.log('Servidor en http://localhost:3000'));
```
👉 Esto crea un servidor que escucha en el puerto `3000`.

---

## 2️⃣ Enviar un formulario desde HTML  
El formulario HTML envía los datos mediante **POST** al servidor:

```html
<form action="/" method="post">
    <label>Nombre: <input type="text" name="nombre"></label><br>
    <label>Apellido: <input type="text" name="apellido"></label><br>
    <button type="submit">Enviar</button>
</form>
```

- El atributo `action="/"` envía los datos al mismo servidor.  
- El método `post` indica que los datos **no se envían en la URL**, sino en el **cuerpo de la petición**.  

---

## 3️⃣ Recibir y procesar los datos en el servidor  
Node.js **no procesa automáticamente** los datos del formulario. Se deben capturar manualmente con `req.on('data')` y `req.on('end')`:

```javascript
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let data = '';

        // Captura los datos en partes (chunks)
        req.on('data', chunk => { data += chunk.toString(); });

        // Cuando termina de recibir datos, los procesa
        req.on('end', () => {
            const formData = parse(data); // Convierte los datos a un objeto
            const { nombre, apellido } = formData; // Extrae nombre y apellido

            // Muestra los datos en la respuesta
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h2>Bienvenido, ${nombre} ${apellido}!</h2>`);
        });
    } else {
        // Página con el formulario si la petición es GET
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <form action="/" method="post">
                <label>Nombre: <input type="text" name="nombre"></label><br>
                <label>Apellido: <input type="text" name="apellido"></label><br>
                <button type="submit">Enviar</button>
            </form>
        `);
    }
});

server.listen(3000, () => console.log('Servidor en http://localhost:3000'));
```

---

## 4️⃣ Explicación del código
✅ `req.on('data', chunk => {...})`: Recibe la información en partes.  
✅ `req.on('end', () => {...})`: Procesa los datos cuando termina de recibirlos.  
✅ `querystring.parse(data)`: Convierte `nombre=Juan&apellido=Pérez` en `{ nombre: 'Juan', apellido: 'Pérez' }`.  
✅ `res.end(...)`: Devuelve una nueva página HTML con los datos del usuario.  

---

## 5️⃣ Alternativa moderna con `URLSearchParams`
En lugar de `querystring.parse()`, se puede usar `URLSearchParams`:

```javascript
req.on('end', () => {
    const formData = Object.fromEntries(new URLSearchParams(data));
    const { nombre, apellido } = formData;
    res.end(`<h2>Hola, ${nombre} ${apellido}!</h2>`);
});
```
🚀 **Esta opción es más moderna y recomendada en Node.js actuales**.

---

## 6️⃣ Manejo de errores y validaciones
Es importante verificar si los datos están presentes antes de usarlos:

```javascript
const nombre = formData.nombre || 'Invitado';
const apellido = formData.apellido || '';
```

Si el usuario no ingresa datos, se muestra un valor por defecto.

---

## 🎯 Resumen
✔ Un servidor en Node.js **puede recibir datos de un formulario sin Express**.  
✔ Se usa `req.on('data')` y `req.on('end')` para capturar y procesar los datos.  
✔ `querystring.parse()` o `URLSearchParams` ayudan a convertir los datos en un objeto.  
✔ **Siempre validar la entrada** para evitar errores.  




## Actividad: Crear una página de registro de usuario en Node.js
### Objetivo
Crear un servidor básico en Node.js que reciba los datos de un formulario (como nombre, contraseña y correo electrónico) y los muestre en la página siguiente después de ser enviados. 

### Instrucciones
- Configurar el servidor básico.
- Crear una página HTML con un formulario que tenga los siguientes campos:
    - Nombre
    - Correo electrónico
    - Contraseña
    
    El formulario debe usar el método POST y enviarlo al servidor.
- Capturar y procesar los datos del formulario:
- Mostrar los datos recibidos en la página de confirmación:
    
    Después de recibir y procesar los datos, el servidor debe responder con una página HTML que muestre el nombre y el correo electrónico del usuario registrado, junto con un mensaje de bienvenida.

# Alternativas
Eso es un tema avanzado, no para este clase ahora
Se puede usar AJAX y/ addEventListener para llevar a cabo lo mismo, sin tener un servidor.

```javascript
    document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Capture form data
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;

    // Display captured data
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p><strong>Nombre:</strong> ${nombre}</p><p><strong>Apellido:</strong> ${apellido}</p>`;

    // Optionally, store the data or process it further (e.g., send to a third-party service)
});
```