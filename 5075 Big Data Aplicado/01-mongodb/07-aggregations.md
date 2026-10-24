# Agregaciones / Aggregations

**¿Qué es un pipeline de agregación en MongoDB?**
Un pipeline de agregación es una secuencia de etapas (o pasos) que se aplican sobre los documentos de una colección, uno tras otro, para transformar y procesar los datos hasta obtener el resultado que quieres.

Piensa en un pipeline como una fábrica o una tubería donde:
- Cada etapa hace un trabajo específico:
filtrar, agrupar, ordenar, modificar, etc.

- Los datos pasan por cada etapa en orden.

- El resultado de una etapa es la entrada de la siguiente.

```sql
SELECT deptno, COUNT(*) 
FROM employees 
GROUP BY deptno;
```

```js
db.employees.aggregate([
  { $group: { _id: "$deptno", count: { $sum: 1 } } }
]);
```

## Pista!
Atributos va en este formato:
```js
"$cantidad"
```

Mientras operaciones y funciones va en este formato:
```js

$sum, $multiply, $avg

// por ejemplo:
{ $sum: "$cantidad" }
```

## Ejemplo con mongodb en Node
Usar client-test-conn.js para probarlo.

```js
const database = client.db("clase");
const productos = database.collection("productos");


const pipeline = [
    {
    '$count': 'total'
    }
];

const result = await productos.aggregate(pipeline).toArray();

console.log(result[0]?.total ?? 0);

```



## Group by
Para este demo, agregar (clonar) mas documentos para cada producto. Por ejemplo, para que haya 3 pantalones, etc...

```sql
SELECT nombreProducto, COUNT(*) AS total
FROM products
GROUP BY nombreProducto
ORDER BY total DESC
```


En la consola de Atlas, escribimos un stage 1 de $group, y luego agregamos un stage de $sort.

```js
{
  _id: "$nombreProducto",
  total: {
    $sum: 1
  }
}
```

![Aggregation](../../x-assets/0491/mongodb.agregation.1.png)

# WHERE
OJO - aplicar MQL (Mongo Query Language)


![Aggregation](../../x-assets/0491/mongodb.agregation.2.png)


## Project
Vamos a aplicar un calculo al resultado, en la fase de $project. Aunque si se puede hacerlo en una fase, seria mejor separar las fases.
```js
[
  {
    $group:
      /**
       * _id: The id of the group.
       * fieldN: The first field name.
       */
      {
        _id: "$nombreProducto",
        totalProductos: {
          $sum: "$precio",
        },
      },
  },
  {
    $project:
      /**
       * specifications: The fields to
       *   include or exclude.
       */
      {
        totalProductos: {
          $add: ["$totalProductos", 100],
        },
      },
  },
]
```


## Actividades

Buscar ($match) los documentos con el precio menos o igual a 15 euros. Ahora, contar ($count) el número de productos en total con el precio igual o menos a 15 euros.


Convertir esta búsqueda en un $match con agregación:
```js
db.collection.find({ nombreProducto: { $in: ["Camiseta", "Pantalón"] } })
```


Queremos conseguir los siguientes resultados en una aplicacion de consola de Node:
```js
[
  { _id: 'Camiseta', total_cantidad: 375 },
  { _id: 'Pantalón', total_cantidad: 234 },
  { _id: 'Chaqueta', total_cantidad: 432 },
  { _id: 'Zapatos', total_cantidad: 320 },
  { _id: 'Calcetines', total_cantidad: 200 },
  { _id: 'Clone', total_cantidad: 111 }
]
```

## Actividades de repaso
Usando la base de datos movies:

- Contar el número de peliculas con el año 1903 o 1914 (year). 

- Para cada año (year), queremos mostrar el número de películas que han sacado, ordenado por mayor a menor.

- Encontrar los top 5 peliculas (limit: 5) por genero (genres). Seguir los pasos:

1. Empezar con $unwind para producir un documento por cada genre. Fijate en el indice 'genreIndex' añadido al final de cada documento.
{
  path: '$genres',
  includeArrayIndex: 'genreIndex',
  preserveNullAndEmptyArrays: true
}

2. Llevar a cabo un $group by en genre, para conseguir la suma de todos los documentos por genero.

3. Ordenar por mayor

4. Sacar los primero 5 ($limit)

¿Podrias llevar a cabo lo mismo en countries para sacar una lista única de valores? Probarlo también con `db.movies.distinct("countries");`




## Respuestas

```js
{
  _id: "$nombreProducto",
  total_cantidad: {
    $sum: "$cantidad"
  }
}


[
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        precio: {
          $lte: 16.1,
        },
      },
  },
  {
    $count:
      /**
       * Provide the field name for the count.
       */
      "totalProductos",
  },
]




[
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        year: {
          $in: [1903, 1914]
        }
      }
  },
  {
    $count:
      /**
       * Provide the field name for the count.
       */
      "Resultado"
  }
]


[
  {
    $group:
      /**
       * _id: The id of the group.
       * fieldN: The first field name.
       */
      {
        _id: "$year",
        numero: {
          $sum: 1
        }
      }
  },
  {
    $sort:
      /**
       * Provide any number of field/order pairs.
       */
      {
        numero: -1
      }
  }
]






[
  {
    $unwind:
      /**
       * path: Path to the array field.
       * includeArrayIndex: Optional name for index.
       * preserveNullAndEmptyArrays: Optional
       *   toggle to unwind null and empty values.
       */
      {
        path: "$genres",
        includeArrayIndex: "genreIndex",
        preserveNullAndEmptyArrays: true
      }
  },
  {
    $group:
      /**
       * _id: The id of the group.
       * fieldN: The first field name.
       */
      {
        _id: "$genres",
        result: {
          $sum: 1
        }
      }
  },
  {
    $sort:
      /**
       * Provide any number of field/order pairs.
       */
      {
        result: -1
      }
  },
  {
    $limit:
      /**
       * Provide the number of documents to limit.
       */
      5
  }
]
```