# 📌 Introducción a Math en JavaScript
El objeto Math en JavaScript proporciona funciones matemáticas útiles para cálculos numéricos. No es un constructor, por lo que no se puede instanciar. A continuación, te muestro los 10 comandos más comunes con ejemplos simples.



## isNaN - función de ayuda
La función isNaN() en JavaScript se utiliza para determinar si un valor es NaN (Not-a-Number). Esta función es útil para verificar si un valor no es un número válido, ya que NaN es un valor especial que representa un resultado no numérico de operaciones matemáticas.

__Ejemplo de isNaN__
Aquí hay un ejemplo sencillo que demuestra cómo usar isNaN():

```javascript
// Valores a verificar
const valores = [10, 'texto', NaN, undefined, null, 3.14, '123', '12.3abc'];

// Verificar cada valor y mostrar si es NaN
valores.forEach(valor => {
    if (isNaN(valor)) {
        console.log(`${valor} es NaN`);
    } else {
        console.log(`${valor} es un número válido`);
    }
});
```

--------------

1️⃣ Math.PI – Valor de π
Devuelve el valor de pi (π), útil para cálculos con círculos.

```javascript
console.log(Math.PI);  // 3.141592653589793
```

2️⃣ Math.round() – Redondeo al entero más cercano
Redondea un número al entero más cercano.

```javascript
console.log(Math.round(4.6));  // 5
console.log(Math.round(4.3));  // 4
```

3️⃣ Math.floor() – Redondeo hacia abajo
Devuelve el número entero menor o igual al valor dado.

```javascript
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.1));  // 4
```


4️⃣ Math.ceil() – Redondeo hacia arriba
Devuelve el número entero mayor o igual al valor dado.

```javascript
console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(4.9));  // 5
```

5️⃣ Math.random() – Número aleatorio
Genera un número aleatorio entre 0 y 1.

```javascript
console.log(Math.random()); // Ejemplo: 0.7253
console.log(Math.floor(Math.random() * 10) + 1); // Número aleatorio entre 1 y 10
```

6️⃣ Math.pow() – Potencias
Eleva un número a una potencia dada.

```javascript
console.log(Math.pow(2, 3)); // 2^3 = 8
console.log(Math.pow(5, 2)); // 5^2 = 25
```

7️⃣ Math.sqrt() – Raíz cuadrada
Calcula la raíz cuadrada de un número.

```javascript
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5
```

8️⃣ Math.abs() – Valor absoluto
Devuelve el valor absoluto de un número.

```javascript
console.log(Math.abs(-7));  // 7
console.log(Math.abs(3.2)); // 3.2
```

9️⃣ Math.min() y Math.max() – Mínimo y máximo
Devuelven el número más pequeño o más grande de una lista.

```javascript
console.log(Math.min(10, 5, 8));  // 5
console.log(Math.max(10, 5, 8));  // 10
```

🔟 Math.trunc() – Eliminar decimales
Elimina la parte decimal de un número sin redondear.

```javascript
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-3.7)); // -3
```

---

## Actividades

- Crear una página con un control `<input type=text>`. Si un usuario introduce un numero, mostrar un mensaje que es válido. Si no, decirle que no es un número válido.
- Generar un numero aleatorio, entre 1 y 6, como si lanzaras un dado - pista: Math.random() * 6, agregar 1 y floor (Hacerlo en Node.js después de haberlo hecho en el cliente)
- AVANZADO: Crear una aplicación web para calcular el Costo Total de un Producto. Hay un formmulario de HTML tipo POST, con 3 controles: precio de unidad, cantidad, impuestos. Mandar los datos al servidor para que llevue a cabo los cálculos. Al final vamos a devolver JSON al cliente: 

```javascript
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ totalCost })); 
```
---

## Respuestas

```html
<h1>Verificar si es un número</h1>
    <input type="text" id="userInput" placeholder="Introduce un valor">
    <button id="checkButton">Verificar</button>
    <h2 id="result"></h2>

    <script>
        // Evento para verificar el valor cuando se hace clic en el botón
        document.getElementById('checkButton').addEventListener('click', function() {
            const inputValue = document.getElementById('userInput').value; // Obtener el valor del input
            
            // Verificar si es un número
            if (isNaN(inputValue) || inputValue.trim() === '') {
                document.getElementById('result').textContent = `${inputValue} no es un número válido.`;
            } else {
                document.getElementById('result').textContent = `${inputValue} es un número válido.`;
            }
        });
    </script>

```


```javascript
// Function para echar los dados
function lanzarDados() {
    // Generar un numero aleatorio
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
}

// Simular lanzar el dado 10 veces - preguntar al usuario para las veces de simular
for (let i = 0; i < 10; i++) {
    console.log(`Roll ${i + 1}: ${rollDice()}`);
}
```




**Actividad Node.js**
```html
<h1>Cálculo de Costo Total de Productos</h1>
    <form id="costForm" action="/calculate" method="POST">
        <label for="unitPrice">Precio Unitario:</label>
        <input type="number" id="unitPrice" name="unitPrice" step="0.01" required><br><br>
        <label for="quantity">Cantidad:</label>
        <input type="number" id="quantity" name="quantity" required><br><br>
        <label for="taxRate">Tasa de Impuesto (%):</label>
        <input type="number" id="taxRate" name="taxRate" step="0.01" value="0"><br><br>
        <button type="submit">Calcular Costo Total</button>
    </form>

```

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

// Función para calcular el costo total
function calculateTotalCost(unitPrice, quantity, taxRate) {
    const subtotal = unitPrice * quantity;
    const tax = subtotal * (taxRate / 100);
    return subtotal + tax;
}

// Crea el servidor
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Sirve el formulario HTML
        fs.readFile(path.join(__dirname, 'form.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error al cargar el formulario');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.method === 'POST' && req.url === '/calculate') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // Convertir Buffer a cadena
        });

        req.on('end', () => {
            const { unitPrice, quantity, taxRate } = JSON.parse(body);
            const totalCost = calculateTotalCost(Number(unitPrice), Number(quantity), Number(taxRate));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ totalCost })); // convertir objeto a JSON string - JSON.parse({"name":"John","age":30}) => objeto
        });
    } else {
        // Manejar 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Inicia el servidor
const port = 3000;
server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

```