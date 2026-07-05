const { createServer } = require('http');
const fs = require('fs');
const querystring = require('querystring');


const server = createServer((req, res) => {
    console.log(req.method, req.url);
    if (req.method === 'GET' && req.url === '/login') {
        fs.readFile('login.html', (err, data) => {
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
    }
    else if (req.method === 'POST' && req.url === '/login') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // Collect chunks
        });

        req.on('end', () => {
            // Format 'username=john_doe&password=secure123'
            console.log('Full request body:', body); // Now we have the full data
            const formData = querystring.parse(body);  
            console.log('Form data:', formData.username);
        
            res.writeHead(302, { 'Location': '/login' });  // redirect
            res.end('Data received!');
        });
    } else {
        res.end('Send a POST request to /login');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://127.0.0.1:3000/');
});
