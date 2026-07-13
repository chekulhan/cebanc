# Layouts
El layout es básicamente la disposición de los elementos en la pantalla. En este apartado se explicará justamente eso: cómo colocar los elementos HTML donde queremos. Antiguamente, para maquetar una página web se utilizaban tablas pero hace un tiempo, surgieron herramientas como flexbox o grid como una solución mucho más práctica.

## Flex
[Más Información sobre Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

![Flex](../../x-assets/0373/flex.png)

## Actividad
En esta actividad, estarán trabajando en el diseño y distribución de productos en línea para una tienda de moda. El objetivo es crear una página web sencilla, pero efectiva, utilizando CSS Flexbox para distribuir los productos en diferentes filas y columnas.

### Objetivo de la actividad

Crear una tienda de moda con productos distribuidos correctamente.
Asegúrense de que cada producto tenga un tamaño uniforme y atractivo, utilizando las herramientas de Flexbox.

Aplicar un diseño visualmente llamativo, con imágenes de productos y botones de acción (por ejemplo, "Agregar al carrito").
La página debe ser adaptable a dispositivos móviles.
Requerimientos:
- Los productos deben tener el mismo tamaño y estar distribuidos de manera armoniosa.
- Utilizar Flexbox para lograr la distribución y la alineación.

Este ejercicio les ayudará a comprender mejor el uso de Flexbox para crear un diseño responsivo y dinámico. ¡Pongan su creatividad al máximo y diviértanse mientras aprenden!



![Flex Actividad](../../x-assets/0373/flex.actividad.png)

---

## Grid
![Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

CSS Grid Layout was introduced in March **2017** as part of CSS3 and became a W3C recommendation.


```css
    .grid-container {
        display: grid; /* Activamos Grid */
        grid-template-columns: 100px 100px; /* 2 columnas de 100px cada una */
        grid-template-rows: 100px 100px; /* 2 filas de 100px cada una */
        gap: 10px; /* Espacio entre cajas */
        background-color: lightgray;
        padding: 10px;
    }

    .grid-item {
        background-color: steelblue;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
    }
```


```html
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
    </div>
```

