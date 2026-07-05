console.log('Inicio'); // This executes first

setTimeout(() => {
    console.log('Ejecutado después de 2 segundos'); // This executes after the delay
}, 2000);

console.log('Fin'); // This executes immediately after 'Inicio'


// formato basico
function showMessage() {
    console.log('This message is displayed after 2 seconds.');
}

setTimeout(showMessage, 2000);



// Sin arrow function y con anónimo funcion
setTimeout(function() {
    console.log('Ejecutado después de 2 segundos'); // This executes after the delay
}, 2000);