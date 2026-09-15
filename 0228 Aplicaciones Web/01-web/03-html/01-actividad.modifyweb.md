# Modificaciones en el Restuarante

- Como el proveedor de servicios web está de vacaciones, te han encargado a ti hacer las modificaciones necesarias en la página del restaurante.

- Reemplazo de Imagen Local: La imagen de la parrilla se carga desde una URL. Descarga la imagen a tu ordenador, guárdala una carpeta y modificar su ubicación .

- Corregir Enlaces Rotos: En la sección de especialidades hay un enlace hacia la "Página Turística de San Sebastián" con una dirección incorrecta ([http://www.sansebastian-invalido-123.com](http://www.sansebastian-invalido-123.com)). Modifícalo para que apunte a una dirección válida como [https://www.sansebastianturismoa.eus](https://www.sansebastianturismoa.eus).

- Actualizar Enlace Inseguro a HTTPS: En el pie de página hay un enlace al blog que utiliza el protocolo inseguro http://. Cambia la URL para que use la versión segura.

- Aplicar Texto en Negrita: En el párrafo de "Nuestra Cocina", pon en negrita la frase "mar Cantábrico" y "huertas locales" utilizando la etiqueta `<strong>` o `<b>`. ¿Cual es la diferencia entre strong y b?

- Aplicar Texto en Cursiva: En la sección de "Especialidades", pon en cursiva las descripciones de los platos (por ejemplo: "Carne madurada a la brasa...") utilizando la etiqueta `<em>`.

- Agregar otro parrafo con un titulo, después de la imagen. Incluir información sobre el plato estrella del restuarante.

- Crear un Nuevo Contenedor Div con Color: Agrega una nueva sección al final del menú rodeada por una etiqueta `<div>`. Ponle un estilo en línea con un color de fondo azul claro para anunciar un "Menú del Día".

- Cambiar Colores de Encabezados: Cambia el color del texto (color) en las etiquetas `<h3>` de las especialidades a un color verde oscuro.

- Añadir un Subtítulo `<h3>` y un Párrafo `<p>`: Agrega un tercer plato a la lista de especialidades que sea "Kokotxas de Merluza" con su respectiva descripción y precio.

- Modificar el Texto del Encabezado: Cambia el texto del título principal `<h1>` para añadir la palabra "Restaurante", de modo que diga: "Restaurante Asador Donostia".

- Añadir un Salto de Línea en el pie de página para separar el número de teléfono y que aparezca en su propia línea justo debajo de la dirección física.

**¿Qué más podrias mejorar en la página del restaurante? !Ser creativo!**



```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Asador Donostia - Parte Vieja</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 20px;">

    <!-- Encabezado principal -->
    <div style="background-color: #0d233a; color: white; padding: 15px; text-align: center;">
        <h1 style="margin: 0;">Asador Donostia</h1>
        <p style="font-style: italic;">Cocina vasca tradicional en la Parte Vieja</p>
    </div>

    <br>

    <!-- Sección Sobre Nosotros -->
    <div style="background-color: white; padding: 15px; margin-bottom: 15px; border-radius: 5px;">
        <h2 style="color: #0d233a;">Nuestra Cocina</h2>
        <p>En <strong>Asador Donostia</strong> seleccionamos los mejores productos del mar Cantábrico y las huertas locales. Disfruta de nuestra especialidad en chuletones a la parrilla y pescados frescos del día.</p>
        
        <!-- Imagen desde internet -->
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=500" alt="Chuletón a la parrilla" style="width: 100%; max-width: 400px; border: 2px solid #0d233a;">
    </div>

    <!-- Sección de Menú -->
    <div style="background-color: white; padding: 15px; border-radius: 5px;">
        <h2 style="color: #0d233a;">Especialidades</h2>
        
        <h3 style="color: #8b0000;">Chuletón de Mayor</h3>
        <p>Carne madurada a la brasa con sal de Añana.<br>Precio: 58.00 € / kg</p>
        
        <h3 style="color: #8b0000;">Mero a la Donostiarra</h3>
        <p>Pescado salvaje al horno con refrito de ajos y guindilla.<br>Precio: 28.00 €</p>

        <p>Consulta las atracciones turísticas cercanas en la <br>
           <a href="http://www.sansebastian-invalido-123.com">Página Turística de San Sebastián</a>
        </p>
    </div>

    <br>

    <!-- Pie de página -->
    <div style="text-align: center; color: #777777; font-size: 14px;">
        <p>Dirección: Calle 31 de Agosto, San Sebastián | Reservas: 943-001122<br>
           Visita nuestro blog no seguro: <a href="http://www.asardordonostia-blog.com">Blog del Restaurante</a><br>
           Derechos reservados &copy; 2026 Asador Donostia
        </p>
    </div>

</body>
</html>

```