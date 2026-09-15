# Data Lake con Pandas

Un empresa de comercio electrónico quiere mejorar el análisis de sus ventas. Actualmente, la información está repartida entre diferentes sistemas y cada uno proporciona los datos en un formato diferente.

El departamento de datos ha recibido 3 archivos:

- customers.csv — información de los clientes.

- products.json — información de los productos.

- orders.txt — información sobre los pedidos.

La empresa quiere crear un pequeño **Data Lake** donde conservar los datos originales y, posteriormente, procesarlos para obtener un conjunto de datos preparado para análisis en formato CSV.


```text
CSV ───────┐
           │
JSON ──────┼──→ Pandas → MERGE → TRANSFORM → FILTER → SORT
           │                                           │
TXT ───────┘                                           ▼
                                                final_orders.csv
```

Tienes la siguiente esstructura de datos:

```text
data_lake/
└── raw/
    ├── customers.csv
    ├── products.json
    └── orders.txt
```

customers.csv
```csv
customer_id,name,city,age
1,Alice,Madrid,25
2,Bob,Chicago,34
3,Charlie,London,29
4,Diana,Chicago,41
5,Eve,Madrid,22
6,Frank,Berlin,37
```


productos.json

```json
[
    {
        "product_id": 101,
        "product": "Laptop",
        "category": "Electronics",
        "price": 1200
    },
    {
        "product_id": 102,
        "product": "Mouse",
        "category": "Accessories",
        "price": 25
    },
    {
        "product_id": 103,
        "product": "Keyboard",
        "category": "Accessories",
        "price": 80
    },
    {
        "product_id": 104,
        "product": "Monitor",
        "category": "Electronics",
        "price": 300
    },
    {
        "product_id": 105,
        "product": "Headphones",
        "category": "Audio",
        "price": 150
    }
]
```

orders.txt

```text
1001|1|101|1
1002|2|102|2
1003|1|103|1
1004|3|104|2
1005|4|101|1
1006|5|105|2
1007|6|103|3
1008|2|105|1
```

## Tareas 
Tareas para incluir (no estan en órden) y mostrar en el resultado final. 

- añadir una columna => total = quantity* price
- incluir un precio con IVA
- merge los datos de clientes, productos y pedidos
    Por ejemplo:

```python
df = orders.merge(
    customers,
    on="customer_id",
    how="left"
)
```
- quitar la columna 'city'
- crear una clasificación por edad 
    
    Si age >= 30 → "30+"
    Si age < 30 → "Under 30"

- ordenar los datos por total con IVA


| Criterio                                                                                                                                                                                                                                                                                                                                                                           |       Puntos |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------: |
| No entregar la actividad o no presentar un resultado funcional.                                                                                                                                                                                                                                                                                                                    |  **1 punto** |
| Entregar el notebook de **Google Colab** con las tareas realizadas y funcionando. El código está organizado y contiene **comentarios que explican las partes principales**. Los archivos pueden estar preparados previamente para ejecutar el notebook.                                                                                                                            | **3 puntos** |
| Notebook de **Google Colab totalmente automatizado**. Al utilizar **“Ejecutar todo”**, el proceso completo funciona desde el principio: se crean/preparan los archivos necesarios, se leen los datos, se realizan todas las transformaciones y se genera automáticamente `final_orders.csv` con el resultado final. El código incluye comentarios claros en las partes relevantes. | **5 puntos** |


**Importante**: Para obtener 5 puntos, no debe ser necesario realizar pasos manuales entre la ejecución de las diferentes celdas. El objetivo es que el notebook pueda reproducir todo el proceso de principio a fin mediante “Ejecutar todo”.
