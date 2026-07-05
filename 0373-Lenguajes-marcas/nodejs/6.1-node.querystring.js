const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Parse the URL
        const parsedUrl = url.parse(req.url, true); // The second argument `true` parses the query string
        console.log(parsedUrl);
        const queryData = parsedUrl.query; // Access the query object


        // Example: Get specific query parameters
        const name = queryData.name; // Assuming the URL is ?name=John
        const age = queryData.age;   // Assuming the URL is ?age=30


        console.log(`Name: ${name}, Age: ${age}`);
        // Tenemos ahora acceso a los parámetros de la URL!!!!

        // Respond with the query data
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Name: ${name}, Age: ${age}`);
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
