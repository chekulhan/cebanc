

// Practicar antes en un archivo de node.
let str = "Hello, World!";

console.log(str.substring(0, 5));  // "Hello" (Extracts from index 0 to 4)
console.log(str.substring(7));     // "World!" (Extracts from index 7 to the end)
console.log(str.substring(7, 12)); // "World"  (Extracts from index 7 to 11) 

// Actividad (substring o slice)
const str = "Hello, welcome to JavaScript programming!";
// extraer "welcome" en una variable y "Javascript" en otra variable y "programming!" en el ultimo (slice-x)


// Practicar lectura de un archivo
const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
}
);


// ACTIVIDAD avanzado - guardar un archivo de HTML al sistema

const content = '<h1>Hello, World! This is a new file.</h1>';

// respuesta: 
fs.writeFile('output.txt', content, 'utf-8', (err) => {
    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log('File written successfully.');
    }
});

// fs.appendFile('output.txt', additionalContent, 'utf-8', (err) => {
