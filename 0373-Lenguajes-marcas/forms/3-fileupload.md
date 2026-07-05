# Introducción al input type="file" y el uso de FileReader en JavaScript
El elemento HTML `<input type="file">` permite a los usuarios seleccionar uno o más archivos de su sistema de archivos local para subirlos a una aplicación web. Este tipo de entrada es fundamental en muchas aplicaciones web, ya que permite la carga de imágenes, documentos, vídeos y otros tipos de archivos. Con el avance de HTML5, este elemento se ha vuelto más versátil, permitiendo a los desarrolladores ofrecer experiencias interactivas y dinámicas.

**Usos Típicos de `input type="file"`**
Carga de Archivos: Permite a los usuarios subir documentos, imágenes, audio o vídeo a la aplicación web.
Vista Previa de Archivos: Al combinarlo con FileReader, es posible mostrar una vista previa del archivo seleccionado antes de enviarlo al servidor.
Edición de Archivos: Algunas aplicaciones permiten a los usuarios cargar archivos para editarlos en la web, como imágenes o documentos de texto.

**Métodos y Atributos Comunes de `input type="file"`**
Atributos:

accept: Especifica los tipos de archivos que el servidor acepta. Por ejemplo, accept=".jpg,.png" restringe la selección a imágenes JPEG y PNG.
multiple: Permite seleccionar varios archivos al mismo tiempo.
required: Indica que el campo es obligatorio.
Métodos:

- files: Propiedad que devuelve una lista de archivos seleccionados (un objeto FileList).
- value: Propiedad que contiene la ruta del archivo seleccionado (en navegadores modernos, este valor no muestra la ruta completa por razones de seguridad).

## Actividad

![Actividad Upload](../../x-assets/0373/fileupload1.png)
![Actividad Upload](../../x-assets/0373/fileupload2.png)


## Uso de FileReader
La API FileReader es una herramienta poderosa en JavaScript que permite a los desarrolladores leer el contenido de los archivos seleccionados de forma asíncrona. Esta API facilita la interacción con los archivos en el lado del cliente sin necesidad de enviarlos al servidor.

**Métodos Comunes de FileReader**
- readAsText(file): Lee el contenido de un archivo como texto. Este método es útil para archivos de texto como .txt, .csv, etc.
- readAsDataURL(file): Lee el archivo y lo codifica como una URL de datos, que se puede usar para mostrar imágenes, vídeos o audio directamente en la página web.
- readAsArrayBuffer(file): Lee el archivo en forma de un ArrayBuffer, que es útil para archivos binarios.

**Eventos Comunes de FileReader**
- onload: Se activa cuando la lectura del archivo se completa con éxito. Permite acceder al contenido leído a través de event.target.result.
- onerror: Se activa si ocurre un error durante la lectura del archivo, lo que permite manejar errores de manera adecuada.

**Ejemplo de Uso**
A continuación, un simple ejemplo que muestra cómo usar <input type="file"> junto con FileReader para leer y mostrar el contenido de un archivo de texto:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de FileReader</title>
</head>
<body>
    <h1>Sube un archivo de texto</h1>
    <input type="file" id="fileInput" accept=".txt" required>
    <pre id="fileContent"></pre>

    <script>
        document.getElementById('fileInput').addEventListener('change', function() {
            const file = this.files[0]; // Obtener el primer archivo seleccionado
            const reader = new FileReader();

            reader.onload = function(event) {
                document.getElementById('fileContent').textContent = event.target.result; // Mostrar el contenido
            };

            reader.onerror = function() {
                alert('Error al leer el archivo');
            };

            if (file) {
                reader.readAsText(file); // Leer el archivo como texto
            }
        });
    </script>
</body>
</html>
```

## Conclusión
El uso de `<input type="file">` junto con FileReader permite a los desarrolladores crear aplicaciones web interactivas que manejan archivos de manera efectiva. Esta combinación ofrece la posibilidad de leer y procesar archivos del lado del cliente, mejorando la experiencia del usuario al interactuar con contenido local.


## Using URL.createObjectURL:

```javascript
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    const fileURL = URL.createObjectURL(file); // Create a temporary URL

    // Use the fileURL to play audio or display an image
    const audio = new Audio(fileURL);
    audio.play(); // Play the selected audio file
});
```


# Respuesta
```html

// Display file info
infoDiv.innerHTML = `
<p><strong>File Name:</strong> ${file.name}</p>
<p><strong>File Size:</strong> ${(file.size / 1024).toFixed(2)} KB</p>
<p style="color: green;"><strong>Success! PDF is ready.</strong></p>
`;

```