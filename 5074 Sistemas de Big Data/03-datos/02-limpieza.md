
Guardar los datos en CSV
```csv
fecha,producto,categoria,ciudad,unidades,precio,cliente
2026-09-01,Portatil,Informática,Donostia,2,850,Empresa A
2026-09-01,Raton,Accesorios,Donostia,10,18,Empresa B
2026-09-02,Teclado,Accesorios,Irún,5,35,Empresa C
2026-09-02,Portatil,Informatica,Bilbao,1,850,Empresa D
2026-09-03,Monitor,Informática,Donostia,3,220,Empresa A
2026-09-03,Raton,Accesorios,Bilbao,8,18,Empresa E
2026-09-04,Teclado,Accesorios,Irún,,35,Empresa B
2026-09-04,Portatil,Informática,Donostia,-2,850,Empresa F
2026-09-05,Monitor,Informática,Bilbao,2,-220,Empresa C
2026-09-05,Raton,Accesorios,Donostia,15,18,Empresa D
2026-09-06,Portatil,Informática,Irún,1,850,Empresa A
2026-09-06,Monitor,Informática,Donostia,4,220,Empresa E
2026-09-07,Teclado,Accesorios,Bilbao,6,35,Empresa F
2026-09-07,Raton,Accesorios,Donostia,12,18,Empresa B
2026-09-07,Raton,Accesorios,Donostia,12,18,Empresa B
2026-09-08,Portatil,Informática,Donostia,3,850,
2026-09-08,Monitor,Informática,Bilbao,200,220,Empresa C
2026-09-09,Teclado,Accesorios,Donostia,4,35,Empresa G
2026-09-09,teclado,Accesorios,Donostia,4,35,Empresa G
2026-09-10,Portatil,Informática,Donostia,2,850,Empresa A
2026-09-10,Monitor,Informatica,Bilbao,3,220,Empresa C
2026-09-11,Raton,Accesorios,Donostia,10,18,Empresa B
2026-09-11,Raton,Accesorios,Donostia,10,18,Empresa B
2026-09-12,Portatil,Informática,Bilbao,1,850,Empresa H
2026-09-12,Monitor,Informática,Donostia,5,220,Empresa I
2026-09-13,Tablet,Electrónica,Donostia,2,300,Empresa J
2026-09-13,Tablet,Electronica,Donostia,2,300,Empresa J
2026-09-14,Portatil,Informática,Donostia,abc,850,Empresa A
2026-09-14,Monitor,Informática,Bilbao,4,220,Empresa C
2026-09-15,Raton,Accesorios,Donostia,8,18,Empresa K
2026-09-15,Raton,Accesorios,Donostia,8,18,Empresa K
```


| Qué buscamos                  | Ejemplo en ventas                   | Pandas                       |
| ----------------------------- | ----------------------------------- | ---------------------------- |
| **Valores nulos**             | `unidades = NaN`                    | `isna()`                     |
| **Duplicados**                | misma venta repetida                | `duplicated()`               |
| **Valores fuera de rango**    | `unidades = -2` o `200`             | filtros                      |
| **Tipos incorrectos**         | `unidades = "abc"`                  | `to_numeric()`               |
| **Valores inconsistentes**    | `Informática` / `Informatica`       | `unique()`, `replace()`      |
| **Texto inconsistente**       | `Teclado` / `teclado`               | `str.lower()`, `str.strip()` |
| **Valores no válidos**        | categoría `"XXX"`                   | `unique()`, filtros          |
| **Formatos incorrectos**      | fechas como texto o mal escritas    | `to_datetime()`              |
| **Columnas innecesarias**     | información que no necesitamos      | `drop()`                     |
| **Datos que no corresponden** | precio negativo, ciudad desconocida | filtros/reglas               |

1. ¿Faltan datos?              → Nulos
2. ¿Hay datos repetidos?       → Duplicados
3. ¿Los valores tienen sentido?→ Fuera de rango
4. ¿Son del tipo correcto?     → Tipos de datos
5. ¿Están escritos igual?      → Consistencia
6. ¿La información es válida?   → Reglas de negocio


```
import pandas as pd

df = pd.read_csv("ventas.csv")

df.head()

df.info()
df.describe()

# Nulos
df.isna().sum()

# Filas Duplicadas
df.duplicated().sum()
df[df.duplicated(keep=False)]

# convertir texto a NaN. Mirad los datos
pd.to_numeric(df["unidades"], errors='coerce')
df["unidadesNEW"] = pd.to_numeric(df["unidades"], errors='coerce')
df.drop(columns="unidades")
```
