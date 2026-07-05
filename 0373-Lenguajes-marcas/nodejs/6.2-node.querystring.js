const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Parse the URL
        const parsedUrl = url.parse(req.url, true);
        const queryData = parsedUrl.query;

        // Example: Get specific query parameters
        // logical OR ||  = not null, undefined, 0, NaN, "", or false)

        const name = queryData.name || 'Guest'; // Default to 'Guest' if no name is provided
        const age = queryData.age || 'unknown'; // Default to 'unknown' if no age is provided

        // Read the HTML file
        const filePath = path.join(__dirname, '5.2-node.querystring.index'); // Assuming index.html is in the same directory

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            // Replace placeholders in the HTML with query parameters
            const responseData = data.replace('{{name}}', name).replace('{{age}}', age);

            // Respond with the modified HTML
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(responseData);
        });
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
