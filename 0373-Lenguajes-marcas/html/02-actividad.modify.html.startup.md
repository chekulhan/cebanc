# Modificaciones en la página de Startup

SmartGarage es una startup tecnológica creada por un pequeño equipo de jóvenes emprendedores que comenzó trabajando desde un garaje.

La empresa está a punto de presentar su primer producto: unas gafas inteligentes que combinan realidad aumentada, cámara y control por voz.

La página web está prácticamente terminada, pero antes del lanzamiento hay varios cambios pendientes.

El equipo necesita que dejes la página preparada para presentar el producto a los primeros clientes.

* La imagen está tardando en cargar. Guardar la imagen en una carpeta local dentro del proyecto, para mejorar el rendimiento y no depender de otro recurso.

* Un enlace de la página no funciona. Corregirlo para que lleve al recurso correspondiente.

* Uno de los enlaces utiliza una conexión no segura. Actualizarlo para utilizar una conexión segura.

* Las características principales de las gafas deben destacar visualmente dentro del texto: realidad aumentada, control por voz y cámara integrada.

* Después de la imagen principal debe aparecer información sobre el producto estrella de SmartGarage, con un título y una descripción.

* La empresa quiere destacar la oferta **"LANZAMIENTO — 20% DE DESCUENTO"** en una zona diferenciada de la página.

* Los títulos de los productos deben tener una apariencia más moderna y relacionada con una startup tecnológica.

* Añadir al catálogo el nuevo modelo **SmartGarage Vision X**, con un precio de **399 €** y una breve descripción.

* El mensaje principal de la empresa debe cambiarse por **"El futuro delante de tus ojos"**.

* La información de contacto del pie de página debe quedar organizada y ser fácil de leer.

* La página necesita una sección donde se explique brevemente cómo nació SmartGarage y cómo pasó de ser una idea en un garaje a convertirse en una startup tecnológica.


**¿Qué más podrias mejorar en la página del startup? Añadir al menos dos mejoras que consideres útiles para mejorar la página o la experiencia de los clientes.!**



```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>SmartGarage</title>
</head>

<body style="font-family: Arial, sans-serif; background-color: #f2f2f2; margin: 20px;">

    <!-- Encabezado -->
    <div style="background-color: #222; color: white; padding: 20px; text-align: center;">
        <h1>SmartGarage</h1>
        <p>Wearable technology for everyone</p>
    </div>

    <br>

    <!-- Sobre el producto -->
    <div style="background-color: white; padding: 20px;">

        <h2>Nuestras gafas inteligentes</h2>

        <p>
            En SmartGarage desarrollamos tecnología para hacer la vida más sencilla.
            Nuestras gafas inteligentes combinan realidad aumentada, control por voz
            y cámara integrada.
        </p>

        <img 
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
            alt="Gafas inteligentes"
            style="width: 100%; max-width: 500px;"
        >

    </div>

    <br>

    <!-- Productos -->
    <div style="background-color: white; padding: 20px;">

        <h2>Productos</h2>

        <h3>SmartGarage One</h3>

        <p>
            Gafas inteligentes para descubrir una nueva forma de interactuar
            con la tecnología.
            <br>
            Precio: 299 €
        </p>

        <h3>SmartGarage Pro</h3>

        <p>
            Un modelo avanzado con funciones adicionales para profesionales.
            <br>
            Precio: 349 €
        </p>

        <p>
            Descubre las últimas novedades sobre realidad aumentada en
            <a href="http://www.example-invalid-tech.com">
                nuestra página tecnológica
            </a>.
        </p>

    </div>

    <br>

    <!-- Información -->
    <div style="background-color: #dddddd; padding: 20px;">

        <h2>La startup</h2>

        <p>
            SmartGarage nació en un pequeño garaje con una idea:
            crear tecnología que pueda utilizar cualquier persona.
        </p>

        <p>
            Nuestro blog:
            <a href="http://www.example.com">
                SmartGarage Blog
            </a>
        </p>

    </div>

    <br>

    <!-- Pie de página -->
    <div style="text-align: center; color: #666666; font-size: 14px;">

        <p>
            SmartGarage · Donostia
            | Contacto: info@smartgarage.example
            <br>
            © 2026 SmartGarage
        </p>

    </div>

</body>
</html>
```