

1. Colecciones separadas (Normalizado)
Qué es: Guardas departamentos y empleados en colecciones diferentes, y los empleados tienen un campo que referencia el departamento (deptno).

Ventajas: Fácil de migrar desde bases de datos relacionales, consultas independientes a empleados o departamentos.

Desventajas: Para obtener empleados junto con su departamento necesitas hacer consultas tipo join ($lookup), lo que puede ser menos eficiente.

```json
{
  "_id": ObjectId("..."),
  "deptno": 10,
  "dname": "ACCOUNTING",
  "loc": "DALLAS"
}
```
Colección employees:

```json
{
  "_id": ObjectId("..."),
  "empno": 7369,
  "ename": "SMITH",
  "job": "CLERK",
  "mgr": 7902,
  "hiredate": "1980-12-17T00:00:00Z",
  "sal": 800,
  "comm": null,
  "deptno": 10  // referencia a departamento
}
```

2. Empleados embebidos dentro del departamento (Embebido)
Qué es: Guardas cada departamento como un documento, y dentro de él un array con todos los empleados que pertenecen a ese departamento.

Ventajas: Obtienes toda la información de un departamento y sus empleados en una sola consulta. Ideal si consultas mucho por departamento.

Desventajas: Si actualizas mucho empleados individualmente, puede ser ineficiente. Además, hay un límite de tamaño máximo por documento (16MB).

```json
{
  "_id": ObjectId("..."),
  "deptno": 10,
  "dname": "ACCOUNTING",
  "loc": "DALLAS",
  "employees": [
    {
      "empno": 7369,
      "ename": "SMITH",
      "job": "CLERK",
      "mgr": 7902,
      "hiredate": "1980-12-17T00:00:00Z",
      "sal": 800,
      "comm": null
    },
    {
      "empno": 7499,
      "ename": "ALLEN",
      "job": "SALESMAN",
      "mgr": 7698,
      "hiredate": "1981-02-20T00:00:00Z",
      "sal": 1600,
      "comm": 300
    }
  ]
}
```

3. Enfoque híbrido
Qué es: Guardas empleados en una colección separada, pero usas consultas con $lookup para unir datos cuando necesitas, o embebes empleados solo en casos puntuales.

Ventajas: Combina flexibilidad y rendimiento. Puedes hacer consultas rápidas o relaciones cuando sea necesario.

Desventajas: Más complejo de implementar y mantener.

Se mantiene la misma estructura del enfoque 1 (colecciones separadas), pero en la consulta usas $lookup para unir datos.

Ejemplo de consulta agregación con $lookup:

```js
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "deptno",
      foreignField: "deptno",
      as: "department_info"
    }
  },
  {
    $unwind: "$department_info"
  }
]);
```

# Actividad
Implantar el esquema de scott con depts y emps de Oracle en una colección 'embebido'.

