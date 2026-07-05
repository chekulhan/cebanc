# Custom Propiedades
Las custom properties en CSS son, básicamente, variables en las que se almacenan valores específicos que se pueden reutilizar a lo largo de la página web. La adición de esta funcionalidad en CSS es algo muy importante ya que normalmente, en las páginas web hay mucho CSS y con muchos valores repetidos.

## **Declaracion**
```css
:root {
  --primary-color: brown;
  --secondary-color: purple;
  --title-text-size: 22px;
  --body-text-size: 18px;
}
```

## **Usando la variable**

```css
element {
  background-color: var(--primary-color);
}
```

## Actividad
Usando 6-custom.propiedades.actividad.html, definir y aplicar las variables necesarias para que la página final parece a:

![Respuesta](../../x-assets/0373/custom.propiedades.actividad.png)