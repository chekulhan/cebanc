const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '';

    if (req.url === '/' || req.url === '/home') {
        filePath = path.join(__dirname, 'home.html');
    } else if (req.url === '/index') {
        filePath = path.join(__dirname, 'index.html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Internal Server Error');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
