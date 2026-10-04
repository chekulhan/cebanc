Métricas
Las métricas de usabilidad son fundamentales para garantizar que un producto o servicio digital sea fácil de usar, eficiente y satisfactorio para los usuarios. Medir la usabilidad permite identificar puntos débiles y áreas de mejora, lo que ayuda a diseñar una experiencia de usuario (UX) óptima. Algunas razones clave para usar métricas de usabilidad son:

- Mejorar la experiencia del usuario: Las métricas permiten medir la interacción del usuario con la interfaz, identificando fricciones y problemas que pueden afectar la satisfacción.

- Optimización del tiempo y esfuerzo: Analizando cómo los usuarios interactúan con el sistema, se pueden reducir los tiempos y los pasos necesarios para completar tareas.

- Aumentar la eficiencia: Las métricas ayudan a identificar características o flujos de trabajo ineficaces, lo que permite realizar mejoras que optimicen la eficiencia general.

- Fomentar la toma de decisiones basada en datos: Al medir aspectos clave de la usabilidad, los equipos pueden tomar decisiones informadas sobre los cambios y las actualizaciones del producto.

El uso de métricas de usabilidad es esencial para crear productos y servicios digitales que sean fáciles de usar, eficientes y satisfactorios para los usuarios. Con herramientas como Google Analytics, Hotjar, Crazy Egg, y plataformas de pruebas de usabilidad como UserTesting, los equipos pueden obtener información valiosa para tomar decisiones basadas en datos y optimizar continuamente la experiencia del usuario. La medición constante de métricas permite adaptarse a las necesidades del usuario, identificar problemas rápidamente y mejorar la interfaz para maximizar la satisfacción y la conversión.

**NPS (Net Promoter Score):**

Función: Mide la lealtad de los usuarios al producto o servicio.

Métricas: Índice que mide la probabilidad de que los usuarios recomienden el producto.

Uso: Útil para medir la satisfacción a largo plazo y cómo los usuarios ven el valor global de la interfaz o producto.

**A/B Testing Tools:**

Función: Permite realizar pruebas A/B para comparar dos versiones de una página o funcionalidad.

Métricas: Conversiones, tasa de clics, tiempo en la página.

Uso: Ayuda a entender qué diseño o cambio mejora la experiencia de usuario y los resultados del negocio.

# Actividades
## Snackbar
![Snackbar](../../../x-assets/UF1843/snackbar.png)

## Slider
![Slider](../../../x-assets/UF1843/snackbar.png)


## A/B Testing
En esta actividad, vamos a realizar una prueba A/B para evaluar la efectividad de dos botones de llamada a la acción (CTA). El objetivo es determinar cuál de los dos botones genera más interacción por parte de los usuarios.

Pasos:

Diseño de los Botones: Crearemos dos versiones diferentes de un botón. Ambos botones tendrán la misma función (por ejemplo, "Comprar ahora"), pero con texto ligeramente diferente y un color diferente para ver cuál es más atractivo para los usuarios. Ejemplo de las dos versiones:

- Botón A: "Comprar ahora"
- Botón B: "Haz tu compra ahora"

Asignación Aleatoria de Usuarios: Usaremos una técnica de asignación aleatoria para mostrar uno de los dos botones a cada usuario que visite la página. Esto se realizará utilizando una función que seleccione al azar entre las dos versiones, asegurando que la prueba sea justa.

Por ejemplo:
```javascript
const newVariant = Math.random() < 0.5 ? "A" : "B";
```

![A/B Testing](../../../x-assets/UF1843/ABTesting.png)


## ButtonGroup - NPS

En esta actividad, vamos a implementar un componente que permita a los usuarios proporcionar su puntuación de Net Promoter Score (NPS), una métrica clave para medir la satisfacción y lealtad de los clientes. El NPS se mide con una escala de 0 a 10, donde 0 significa que no recomendarían el producto/servicio y 10 indica que lo recomendarían con seguridad.

Uso de Array para Iteración: Utilizamos Array(11).keys() para generar un array de valores del 0 al 10, que luego iteramos con .map() para crear un conjunto de botones dinámicamente. Este enfoque permite mantener el código limpio y escalable.

Por ejemplo:
```javascript

 <ButtonGroup variant="outlined" fullWidth>
    {[...Array(11).keys()].map

```

![NPS](../../../x-assets/UF1843/nps.png)