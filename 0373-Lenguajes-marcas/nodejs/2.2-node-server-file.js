


const { createServer } = require('http');
const fs  = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// JSON
/* const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({name: 'Pepe', edad:23}));
    res.end('Hello World');
    }
); */

// Repasar y add http://127.0.0.1:3000/index.html y http://127.0.0.1:3000/2.html
/* const server = createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('ABC');
    res.end('Hello World');
    }
);
 */

const server = createServer((req, res) => {
    //console.log(require('fs')); // Check `fs` module structure
    //console.log(require('http')); // Check `http` module structure

    console.log(req.method, req.url);
    var filePath = '';
    if (req.url === '/') {
        console.log(req.url);
        filePath = 'index1.html';
    }
    else if (req.url === '/index2') {
        console.log(req.url);
        filePath = 'index2.html';
    }
    else {
        filePath = 'error.html';
        //filePath = req.url.substring(1);
    }

    //let filePath = req.url === '/' ? 'index.html' : req.url.substring(1);


    //fs.readFile('index1.html', (err, data) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not Found');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
        
    });
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});