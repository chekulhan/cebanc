const http = require('http');
const { parse } = require('querystring'); // usar para convertir datos de formulario en objeto

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <form action="/" method="POST">
                <label>Nombre: <input type="text" name="nombre"></label><br>
                <label>Apellido: <input type="text" name="apellido"></label><br>
                <button type="submit">Enviar</button>
            </form>
        `);
    }
    else if (req.method === 'POST') {
        console.log('recibiendo post');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        let data = '';
        req.on('data', chunk => {
            console.log(chunk);
            console.log(chunk.toString());
            data += chunk.toString();
        })
        req.on('end', () => {

            const formData = parse(data); // querystring parse data
            const { nombre, apellido} = formData; // destructure object

            res.end(`
                <h1>Welcome ${nombre} ${apellido}</h1>
             `);
        });

    }
    else {
        console.log('no handler');
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('No hay handler');
    }

});


server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});