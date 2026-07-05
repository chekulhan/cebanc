// 1. mostrar res.end con una linea de texto.
// 2. mostrar con html completo

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // Cambia a HTML
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi Servidor Node.js</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
            h1 { color: blue; }
            p { font-size: 18px; }
        </style>
    </head>
    <body>
        <h1>¡Hola, mundo desde Node.js! 🚀</h1>
        <p>Este es un servidor básico creado con Node.js.</p>
    </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Servidor ejecutándose en http://${hostname}:${port}/`);
});
