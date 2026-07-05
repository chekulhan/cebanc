# Proyecto: Portal de Solicitudes de Empleo
## Descripción:

Este proyecto consiste en un portal donde las personas pueden simular la solicitud de un trabajo. Incluye tres páginas HTML como mínimo:

- index.html – Página de Inicio / Landing Page
Aquí hay una breve descripción del portal y un botón que dice "Comenzar la Solicitud". Al hacer clic, se accede al formulario.

- form.html – Formulario de Solicitud
En esta página, los candidatos completan su información, como nombre, correo electrónico, número de teléfono, experiencia y puesto al que quieren postularse. Al enviar el formulario, los datos se envían a un servidor Node.js que los muestra en la consola.

- thanks.html – Página de Agradecimiento
Después de enviar la solicitud, el usuario ve un mensaje de agradecimiento. También se puede incluir un enlace a la página principal o a recursos útiles, como consejos para entrevistas.

**Requisitos:**
- Uso de JavaScript para manejar el formulario y la interacción con el servidor.
- Diseño utilizando Flexbox para una mejor organización visual de los elementos.
- Implementación de un servidor Node.js para procesar y mostrar los datos del formulario.
- Uso de GitHub para la entrega del proyecto y el control de versiones.



## Avanzado (Ideas)

```javascript
const fs = require('fs');

const dataToAppend = 'This will also be appended to the file.\n';

// Write data to the file with the append flag
fs.writeFile('example.txt', dataToAppend, { flag: 'a' }, (err) => {  //O fs.appendFile('example.txt', dataToAppend, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data appended successfully!');
    }
});

```