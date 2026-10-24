use("scott");

db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuario", "nombre", "apellido", "correo", "tipo_usuario", "activo"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Debe ser un ObjectId generado automáticamente"
        },
        usuario: {
          bsonType: "string",
          description: "Debe ser una cadena de texto y es obligatorio"
        },
        nombre: {
          bsonType: "string",
          description: "Debe ser una cadena de texto y es obligatorio"
        },
        apellido: {
          bsonType: "string",
          description: "Debe ser una cadena de texto y es obligatorio"
        },
        correo: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$",
          description: "Debe ser una cadena con formato de correo electrónico válido y es obligatorio"
        },
        pais: {
          bsonType: ["string", "null"],
          description: "Puede ser una cadena de texto o null, y es opcional"
        },
        tipo_usuario: {
          bsonType: "string",
          enum: ["Admin", "Cliente", "Proveedor"],
          description: "Solo puede ser 'Admin', 'Cliente', 'Proveedor'"
        },
        fecha_nacimiento: {
          bsonType: ["date", "null"],
          description: "Puede ser una fecha o null, y es opcional"
        },
        activo: {
          bsonType: "bool",
          description: "Debe ser un valor booleano y es obligatorio"
        }
      }
    }
  }
});



db.usuarios.createIndex({ usuario: 1 }, { unique: true });

db.usuarios.createIndex({ correo: 1 }, { unique: true });

// Si te equivocaste al crear la colección y necesitas eliminarla para recrearla con el esquema correcto:
use("scott");
db.usuarios.drop();


// OJO, al insertar fechas en la interfaz, usar:
 "fecha_nacimiento": { "$date": "1990-05-20T00:00:00Z" },

// Documento 1: Correcto (debería insertarse sin problemas)
{
  "usuario": "juanperez",
  "nombre": "Juan",
  "apellido": "Pérez",
  "correo": "juan.perez@example.com",
  "pais": "España",
  "tipo_usuario": "Cliente",
  "fecha_nacimiento": ISODate("1990-05-20T00:00:00Z"),
  "activo": true
}


// Documento 2: Falla porque tiene un campo adicional 'telefono' no permitido
{
  "usuario": "mariagarcia",
  "nombre": "Maria",
  "apellido": "García",
  "correo": "maria.garcia@example.com",
  "pais": "Australia",
  "tipo_usuario": "Proveedor",
  "fecha_nacimiento": ISODate("1985-11-15T00:00:00Z"),
  "activo": false,
  "telefono": "+34123456789"  // campo adicional no permitido
}

// Documento 3: Falla porque 'activo' tiene un tipo incorrecto (string en vez de boolean)
{
  "usuario": "carlossanchez",
  "nombre": "Carlos",
  "apellido": "Sánchez",
  "correo": "carlos.sanchez@example.com",
  "pais": "España",
  "tipo_usuario": "Admin",
  "fecha_nacimiento": ISODate("1978-01-10T00:00:00Z"),
  "activo": "true"  // tipo incorrecto, debe ser booleano
}

// Documento 4: ¿Por qué falla?
{
  "usuario": "Juanito",
  "nombre": "Hijo",
  "apellido": "Pérez",
  "correo": "juan.perez@example.com",
  "pais": "España",
  "tipo_usuario": "Cliente",
  "fecha_nacimiento": {
    "$date": "1990-05-20T00:00:00.000Z"
  },
  "activo": true
}



/* Modificar la colección para añadir o actualizar el esquema de validación */
db.runCommand({
  collMod: "usuarios",
  validator: { $jsonSchema: { /* esquema aquí */ } },
  validationLevel: "moderate" // opcional
});


/*

Actividad: Crear un esquema MongoDB para una colección libros

En esta actividad, debes crear un esquema JSON para validar documentos en una colección de libros. El esquema debe incluir las siguientes reglas y validaciones:

titulo: Obligatorio. Debe ser una cadena de texto (string).

autor: Obligatorio. Debe ser una cadena de texto.

genero: Obligatorio. Debe ser una cadena y su valor solo puede estar dentro de un conjunto limitado (enum) con opciones como: "Ficción", "No Ficción", "Misterio", "Romance", etc.

fecha_publicacion: Obligatorio. Debe ser un campo de tipo fecha (date).

paginas: Opcional. Si se incluye, debe ser un entero positivo mayor o igual a 1.

disponible: Obligatorio. Debe ser un valor booleano (true o false).

precio: Obligatorio. Debe ser un número decimal (double) mayor que 0. Opcionalmente, puede tener un rango definido, por ejemplo entre 10 y 1000.
Puedes usar minimum: x, maximum: y,

No se permiten campos adicionales que no estén definidos en el esquema.

Crear un índice en el campo genero para mejorar las consultas basadas en género.

*/


db.createCollection("libros", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "titulo", "autor", "genero", "fecha_publicacion", "disponible", "precio"],
      additionalProperties: false,
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Debe ser un ObjectId y es obligatorio"
        },
        titulo: {
          bsonType: "string",
          description: "Debe ser una cadena de texto y es obligatorio"
        },
        autor: {
          bsonType: "string",
          description: "Debe ser una cadena de texto y es obligatorio"
        },
        genero: {
          bsonType: "string",
          enum: [
            "Ficción",
            "No Ficción",
            "Misterio",
            "Ciencia Ficción",
            "Fantasia",
            "Biografía",
            "Historia",
            "Romance"
          ],
          description: "Debe ser uno de los géneros permitidos y es obligatorio"
        },
        fecha_publicacion: {
          bsonType: "date",
          description: "Debe ser una fecha válida y es obligatorio"
        },
        paginas: {
          bsonType: "int",
          minimum: 1,
          description: "Debe ser un número entero positivo y es opcional"
        },
        disponible: {
          bsonType: "bool",
          description: "Debe ser un valor booleano y es obligatorio"
        },
        precio: {
          bsonType: "double",
          minimum: 0.01,
          maximum: 10000,
          description: "Debe ser un número decimal mayor que 0 y opcionalmente menor o igual a 10000"
        }
      }
    }
  }
});

db.libros.createIndex({ genero: 1 })

db.collection.find(query).hint({ $natural: 1 })  