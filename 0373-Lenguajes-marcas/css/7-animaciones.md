
# ¿Qué son las animaciones en CSS?
Las animaciones en CSS te permiten cambiar la apariencia de un elemento a lo largo del tiempo. Puedes hacer que los elementos se muevan, se desvanezcan, crezcan o cambien de color de manera suave.

Stop Motion
https://www.youtube.com/watch?v=p5SygzMSLhM

Key frames
https://www.youtube.com/watch?v=seAx5WnCZPI


Los keyframes son como un mapa para tu animación. Le dicen al navegador qué estilos aplicar en diferentes momentos

```css
@keyframes animationName {
  from { /* Starting styles */ }
  to { /* Ending styles */ }
}
```

Ejemplo:

```css
@keyframes moveRight {
  from { transform: translateX(0); }  /* Start here */
  to { transform: translateX(100px); } /* End here */
}
```

## Propiedades de Animación
Para usar una animación en un elemento, necesitas agregar algunas propiedades. Aquí están las principales:

- animation-name: ¿Cuál es el nombre de la animación (como moverDerecha)?
- animation-duration: ¿Cuánto tiempo debe durar la animación? (por ejemplo, 2s para 2 segundos)
- animation-timing-function: ¿Cómo se mueve la animación? (por ejemplo, ease significa que comienza lento, acelera y luego desacelera)
- animation-iteration-count: ¿Cuántas veces debe repetirse la animación? (por ejemplo, infinite para que sea interminable)
- animation-direction: ¿Debería invertirse en cada bucle alterno? (por ejemplo, alternate)

## Aplicar una animación
Agregas la animación a un elemento en tu CSS. Por ejemplo:

```css

.caja {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation-name: moverDerecha;          /* Usar la animación que definimos */
  animation-duration: 2s;                /* Dura 2 segundos */
  animation-timing-function: ease;       /* Movimiento suave */
  animation-iteration-count: infinite;    /* Repetir para siempre */
}
```

## Resumen
- Define los keyframes para establecer dónde comienza y termina la animación.
- Usa propiedades de animación para controlar cómo y cuándo se reproduce la animación.
- Aplica la animación a un elemento para ver la animación en acción.

## Propiedad de translate
La aceleración por GPU fue un cambio clave: las transformaciones se ejecutan en la tarjeta gráfica en lugar del CPU, haciendo que las animaciones sean mucho más suaves, incluso si hay varios elementos moviéndose o efectos complejos.

1. Translate (trasladar)
La función translate mueve un elemento desde su posición original.

2D Translate: Mueve un elemento a lo largo de los ejes X e Y.

```css
transform: translate(50px, 100px); /* Mueve 50px a la derecha y 100px hacia abajo */
```

3D Translate: Mueve un elemento en el espacio 3D.

```css
transform: translate3d(50px, 100px, 30px); /* Mueve 50px a la derecha, 100px hacia abajo y 30px hacia adelante */
```

2. Rotate (rotar)
La función rotate gira un elemento alrededor de un punto específico.

2D Rotate: Rota un elemento en sentido horario o antihorario.

```css
transform: rotate(45deg); /* Rota el elemento 45 grados */
```

3D Rotate: Rota un elemento alrededor de los ejes X, Y o Z en el espacio 3D.

```css
transform: rotateX(30deg); /* Rota 30 grados alrededor del eje X */
```

3. Scale (escalar)
La función scale cambia el tamaño de un elemento.

2D Scale: Escala un elemento a lo largo de los ejes X e Y.

```css
transform: scale(2); /* Duplica el tamaño del elemento */
```


3D Scale: Escala un elemento en el espacio 3D.

```css
transform: scale3d(1, 1, 1.5); /* Mantiene el ancho y alto igual pero escala la profundidad por 1.5 */
```

4. Skew (inclinar)
La función skew inclina un elemento a lo largo de los ejes X e Y.

2D Skew: Inclina un elemento en dos direcciones.
```css
transform: skew(20deg, 10deg); /* Inclina 20 grados en el eje X y 10 grados en el eje Y */
```

5. Combinar Transformaciones
Puedes combinar múltiples funciones de transformación en una sola propiedad

https://www.youtube.com/watch?v=ZSQuEAVEHGs

transform:

```css
transform: translate(50px, 100px) rotate(45deg) scale(1.5);
```

| Acción de `transform`       | Descripción                                                   | Ejemplo CSS                        |
|------------------------------|---------------------------------------------------------------|-----------------------------------|
| **translate(x, y)**          | Mueve un elemento en los ejes horizontal (x) y vertical (y).  | `transform: translate(100px, 50px);` |
| **translateX(x)**            | Mueve solo en el eje horizontal.                              | `transform: translateX(100px);`  |
| **translateY(y)**            | Mueve solo en el eje vertical.                                | `transform: translateY(50px);`   |
| **translateZ(z)**            | Mueve en el eje Z (profundidad 3D).                           | `transform: translateZ(50px);`   |
| **translate3d(x, y, z)**     | Mueve en 3D combinando X, Y y Z.                              | `transform: translate3d(100px, 50px, 20px);` |
| **rotate(angle)**            | Rota el elemento en 2D alrededor de su centro.                | `transform: rotate(45deg);`      |
| **rotateX(angle)**           | Rota el elemento alrededor del eje X (3D).                    | `transform: rotateX(45deg);`     |
| **rotateY(angle)**           | Rota el elemento alrededor del eje Y (3D).                    | `transform: rotateY(45deg);`     |
| **rotateZ(angle)**           | Rota el elemento alrededor del eje Z (3D, equivalente a rotate). | `transform: rotateZ(45deg);`     |
| **scale(factor)**            | Escala el tamaño del elemento uniformemente.                  | `transform: scale(1.5);`         |
| **scaleX(factor)**           | Escala solo en horizontal.                                    | `transform: scaleX(2);`          |
| **scaleY(factor)**           | Escala solo en vertical.                                      | `transform: scaleY(0.5);`        |
| **scale3d(x, y, z)**         | Escala en los tres ejes.                                      | `transform: scale3d(1, 2, 1);`   |
| **skew(x-angle, y-angle)**   | Inclina el elemento en X y Y.                                  | `transform: skew(20deg, 10deg);` |
| **skewX(x-angle)**           | Inclina solo en X.                                            | `transform: skewX(20deg);`       |
| **skewY(y-angle)**           | Inclina solo en Y.                                            | `transform: skewY(10deg);`       |
| **matrix(a, b, c, d, e, f)** | Transformación combinada 2D con matriz personalizada.        | `transform: matrix(1, 0, 0, 1, 50, 50);` |
| **perspective(n)**           | Define la profundidad para efectos 3D.                        | `transform: perspective(500px) rotateY(45deg);` |



## Demo de clas

```css
<style>
    .box {
        opacity: 0;
        width: 100px;
        height: 100px;
        background-color: #3498db;
        position: relative;
        animation: fadeIn 2s forwards, moveBox 3s infinite alternate
    }


    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
    
    @keyframes moveBox {
        0% {
            left: 0;
            background-color: #3498db;
        }
        50% {
        left: 200px;
        background-color: #2ecc71;
        }
        100% {
            left: 0;
            background-color: #3498db;
            }
    }

</style>
```



# Demo de Sun Rise
```html
<style>
  body {
            background: skyblue;
        }
        .sun {
            background-color: yellow;
            border-radius: 100%;
            height:100px;
            width:100px;
            position: relative;
            animation: sunRise 5s ;
        }

        @keyframes sunRise {
            from {
                
                transform: scale(1);
            }

            to {
                transform: scale(2) translateY(-200px);
            }
        }

        .horizon {
            border-top: 1px solid black;
            margin: 150px 0; 
        }

    </style>
</head>
<body>

    <div class="horizon"></div>
    <div class="sun"></div>
```html

Sun Cycle
```css


@keyframes sunCycle {
    0% {
      bottom: -50px;
      transform: scale(1);
    }
    40% {
      bottom: 150px;   /* sun rises */
      transform: scale(1.5);
    }
    60% {
      bottom: 150px;   /* sun pauses at top */
      transform: scale(1.5);
    }
    100% {
      bottom: -50px;   /* sun sets */
      transform: scale(1);
    }
  }

```