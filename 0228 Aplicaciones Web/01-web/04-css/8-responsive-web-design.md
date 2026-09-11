# **Unidades Absolutas y Relativas en CSS**  


CSS proporciona diferentes tipos de unidades para definir tamaños, márgenes, rellenos y otras propiedades. Estas unidades se dividen en dos categorías: **absolutas** y **relativas**.


![Relative vs Absolute](../x-assets/0373/css.relative.absolute.png)

---

## **📌 Unidades Absolutas**  
Estas unidades tienen un tamaño **fijo**, lo que significa que no cambian según el elemento padre o el tamaño de la pantalla. Se utilizan comúnmente cuando se necesita una dimensión exacta e invariable.

| **Unidad** | **Descripción** |
|-----------|----------------|
| `px` (píxeles) | La unidad más utilizada, representa un solo punto en la pantalla. |
| `pt` (puntos) | Utilizado en medios impresos; 1 pt = 1/72 de una pulgada. |
| `pc` (picas) | Utilizado en tipografía; 1 pc = 12 pt. |
| `cm` (centímetros) | Usado en diseños de impresión; 1 cm = 37.8 px. |
| `mm` (milímetros) | 1 mm = 1/10 de un cm. |
| `in` (pulgadas) | 1 in = 2.54 cm = 96 px. |

✅ **Ejemplo usando unidades absolutas:**
```css
h1 {
  font-size: 24px;
}

p {
  width: 5cm;
}
```

# 📌 Unidades Relativas  

Las unidades relativas son **dinámicas**, lo que significa que cambian según el elemento padre, la ventana del navegador o algún otro factor.  

## **Unidades Relativas y Descripción**  

| **Unidad** | **Descripción** |
|-----------|----------------|
| `em` | Relativo al tamaño de fuente del **elemento padre**. |
| `rem` | Relativo al tamaño de fuente del **elemento raíz** (`html`). |
| `%` | Relativo al tamaño del elemento padre. |
| `vw` (viewport width) | 1vw = 1% del ancho de la ventana del navegador. |
| `vh` (viewport height) | 1vh = 1% de la altura de la ventana del navegador. |
| `vmin` | El valor más pequeño entre `vw` y `vh`. |
| `vmax` | El valor más grande entre `vw` y `vh`. |

---

## ✅ **Ejemplo usando unidades relativas:**
```css
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 2 * 16px = 32px */
}

p {
  width: 50%; /* 50% del ancho del elemento padre */
}

.container {
  height: 80vh; /* 80% de la altura de la ventana del navegador */
}
```

## 🔍 Diferencias Clave  

| **Característica** | **Unidades Absolutas** | **Unidades Relativas** |
|-------------------|----------------------|----------------------|
| **Flexibilidad** | Tamaño fijo | Se ajusta dinámicamente |
| **¿Es responsivo?** | ❌ No | ✅ Sí |
| **¿Cuándo usar?** | Diseños impresos, posiciones exactas | Páginas web, diseño fluido |
| **Unidades comunes** | `px`, `pt`, `cm` | `em`, `rem`, `%`, `vw`, `vh` |

---

## 🛠 **¿Cuándo Usar Cada Una?**  
✅ **Usa unidades absolutas** cuando necesites un **control preciso** (por ejemplo, en diseños de impresión o elementos de UI fijos).  
✅ **Usa unidades relativas** para un **diseño responsivo** y mejor adaptabilidad en diferentes pantallas.  


TO DO
# Responsive
https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Responsive_Design

# Media Queries
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries