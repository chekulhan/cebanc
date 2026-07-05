# Introducción a los Formularios en HTML
Los formularios en HTML son una de las principales herramientas para interactuar con los usuarios, ya que permiten recopilar información, como nombres, correos electrónicos o comentarios. Se utilizan ampliamente en aplicaciones web para tareas como la autenticación de usuarios, el envío de datos y la retroalimentación. A continuación, explicaremos los conceptos básicos para crear y gestionar formularios en HTML.

## 1. Formulario Básico (```<form>```)
El elemento ```<form>``` es el contenedor principal de todos los elementos de un formulario. Dentro de este contenedor, podemos incluir varios tipos de campos de entrada, como campos de texto, botones, casillas de verificación y más. La etiqueta <form> tiene varios atributos importantes:

```html
<form action="URL" method="POST">
    <!-- Elementos del formulario aquí -->
</form>
```

**action**: Este atributo define la URL a la que se enviarán los datos del formulario una vez que se envíen. Si el atributo action está vacío (action=""), los datos se enviarán a la misma URL en la que se encuentra el formulario.

**method**: Especifica el método HTTP que se utilizará para enviar los datos del formulario. Los dos valores más comunes son:

**GET**: Los datos del formulario se envían como parámetros en la URL (en el caso de un enlace).

**POST**: Los datos se envían en el cuerpo de la solicitud HTTP, lo que permite enviar una mayor cantidad de información de manera más segura.

## 2. Elementos del Formulario
Dentro del ```<form>```, podemos incluir diferentes tipos de entradas, como:

- **```<input>```**: Se utiliza para obtener datos de texto o valores de otros tipos (correo electrónico, contraseñas, etc.).
- **```<textarea>```**: Para obtener datos de texto más largos, como comentarios o mensajes.
- **```<select>```**: Para crear menús desplegables con opciones seleccionables.

Ejemplo de algunos elementos básicos de un formulario:

```html
<form action="procesar_datos.php" method="POST">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre"><br>

    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email"><br>

    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje"></textarea><br>

    <button type="submit">Enviar</button>
</form>
```

## 3. Botón de Envío (<button> o <input type="submit">)
El botón de envío es lo que permite al usuario enviar los datos del formulario al servidor. Este puede ser un ```<button>``` con el atributo type="submit", o un ```<input>``` de tipo submit. Al hacer clic en este botón, los datos del formulario se envían a la URL definida en el atributo action.

```html
<button type="submit">Enviar</button>
```

O:

```html
<input type="submit" value="Enviar">
```

## 4. Métodos de Envío
Como se mencionó, los métodos más utilizados para enviar los datos son:

**GET**: Los datos del formulario se añaden a la URL, lo que es útil para solicitudes que no modifican el servidor y que no requieren seguridad adicional. No se recomienda usar GET para enviar información sensible, ya que los datos son visibles en la URL.

Ejemplo con GET:

```html
<form action="procesar_datos.php" method="GET">
    <input type="text" name="nombre">
    <input type="submit" value="Enviar">
</form>
```

**POST**: Es el método recomendado cuando se envían datos sensibles o cuando el formulario realiza cambios en el servidor (como crear una cuenta o guardar información). Los datos no son visibles en la URL, lo que lo hace más seguro para formularios que contienen información privada.

Ejemplo con POST:

```html
<form action="procesar_datos.php" method="POST">
    <input type="password" name="contrasena">
    <input type="submit" value="Enviar">
</form>
```

Usar https://echo.free.beeceptor.com o https://httpbin.org/post para simular un POST:

```html
<form action="https://echo.free.beeceptor.com" method="POST">
```

## Elementos más comunos de entrada

1. ```<input>```
El elemento ```<input>``` es el más versátil y puede ser utilizado para una variedad de tipos de entrada. Su tipo (type) define qué tipo de entrada recibirá.

Ejemplo de uso:

```html
<label for="username">Nombre de usuario:</label>
<input type="text" id="username" name="username" placeholder="Ingresa tu nombre de usuario">
```

2. ```<textarea>```
El ```<textarea>``` se utiliza para campos de entrada de texto más largo, como comentarios o mensajes. Permite varias líneas de texto.

Ejemplo de uso:
```html
<label for="message">Mensaje:</label>
<textarea id="message" name="message" rows="4" cols="50" placeholder="Escribe tu mensaje aquí"></textarea>
```

3. ```<select>```
El elemento ```<select>``` se usa para crear listas desplegables, donde el usuario puede seleccionar una opción de un conjunto de opciones.

Ejemplo de uso:
```html
<label for="country">País:</label>
<select id="country" name="country">
    <option value="spain">España</option>
    <option value="mexico">México</option>
    <option value="colombia">Colombia</option>
</select>
```

4. ```<button>```
El ```<button>``` se utiliza para crear botones dentro de un formulario. Puede tener varias acciones, como enviar el formulario o realizar otras funciones con JavaScript.

Ejemplo de uso:
```html
<button type="submit">Enviar</button>
```

5. ```<input type="password">```
Este tipo de ```<input>``` se usa para ingresar contraseñas. Los caracteres se muestran como puntos o asteriscos para ocultarlos.

Ejemplo de uso:
```html
<label for="password">Contraseña:</label>
<input type="password" id="password" name="password" placeholder="Ingresa tu contraseña">
```

6. ```<input type="checkbox">```
El ```<input type="checkbox">``` se utiliza para crear casillas de verificación. Permite al usuario seleccionar o desmarcar una opción.

Ejemplo de uso:
```html
<label for="subscribe">Suscribirse al boletín:</label>
<input type="checkbox" id="subscribe" name="subscribe">
```

7. ```<input type="radio">```
El ```<input type="radio">``` se usa para botones de opción. Permite seleccionar solo una opción dentro de un grupo de opciones.

Ejemplo de uso:
```html
<label>Género:</label><br>
<input type="radio" id="male" name="gender" value="male">
<label for="male">Masculino</label><br>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Femenino</label>
```

8. ```<input type="date">```
El ```<input type="date">``` permite al usuario seleccionar una fecha de un calendario.

Ejemplo de uso:
```html
<label for="birthdate">Fecha de nacimiento:</label>
<input type="date" id="birthdate" name="birthdate">
```


## Actividad
**Contexto:**

Imagina que eres un desarrollador web en un centro de formación profesional. El sistema de gestión de estudiantes necesita un formulario para que los profesores o administradores puedan registrar nuevos estudiantes en el sistema. Este formulario debe incluir varios campos que permitan recopilar información relevante sobre los estudiantes, como su nombre, edad, género, carrera, y otros detalles personales.

**Objetivo:**

Tu tarea será desarrollar un formulario en HTML que permita ingresar los siguientes datos de un estudiante:

- Nombre completo (input text)
- Edad (input number)
F- echa de nacimiento (input date)
- Género (radio buttons)
- Carrera (select)
- Dirección (textarea)
- Aceptación de términos (checkbox)
- Enviar (button o submit)

## Referencias para la actividad de clase
The [] syntax in CSS is used for attribute selectors, which allow you to target elements based on their attributes and attribute values. This is particularly useful when you want to apply styles to elements that have a specific attribute, or an attribute with a certain value.

Basic Explanation:
```input[type="text"]```: This targets ```<input>``` elements where the type attribute is set to "text".
You can also use the [] syntax with other attributes like name, id, class, etc.

```css
input[type="text"] {
  background-color: lightblue;
}
```

The [] syntax is used in CSS to apply styles based on attribute values. It gives you more control and flexibility when targeting elements in your HTML, allowing you to style specific elements based on their attributes, such as type, name, href, etc. This is powerful for situations where you need to apply styles dynamically to elements that share certain attribute characteristics.