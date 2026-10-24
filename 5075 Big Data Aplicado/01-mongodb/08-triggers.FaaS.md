# Triggers y Funciones as a Service

## Cloud Function o *Function as a Service (FaaS)? ✅
Una Cloud Function es una función pequeña que se ejecuta automáticamente en la nube cuando ocurre un evento específico, como insertar un dato, recibir una petición web, subir un archivo, etc.

No necesitas preocuparte por servidores: la plataforma (como AWS, Google Cloud o MongoDB Atlas) se encarga de ejecutar, escalar y cerrar la función automáticamente.

**Características principales:**
- Evento-disparada: se ejecuta al ocurrir algo (por ejemplo, una nueva entrada en la base de datos).

- Escalado automático: se adapta a la carga sin que gestiones servidores.

- Paga por uso: solo pagas cuando la función realmente se ejecuta.

- Corta duración: la función hace su tarea y termina.

**Ejemplo: AWS Lambda**
Supongamos que quieres registrar en un log cada vez que alguien sube una imagen a un bucket S3.

Código básico (Node.js):
```javascript
exports.handler = async (event) => {
  console.log("Nuevo archivo subido:", event.Records[0].s3.object.key);

  return {
    statusCode: 200,
    body: JSON.stringify('Archivo procesado'),
  };
};
```

**¿Qué hace?**
- Se activa automáticamente cuando se sube un archivo a un bucket S3.

- Extrae el nombre del archivo (object.key).

- Imprime el nombre del archivo en los logs.

## MongoDB Atlas FaaS con triggers

**Trigger function**

```js
exports = async function(changeEvent) {
  // A Database Trigger will always call a function with a changeEvent.
  // Documentation on ChangeEvents: https://docs.mongodb.com/manual/reference/change-events/

  // This sample function will listen for events and replicate them to a collection in a different Database

  // Get the MongoDB service you want to use (see "Linked Data Sources" tab)
  // Note: In Atlas Triggers, the service name is defaulted to the cluster name.
  const serviceName = "NZCluster-01";
  const database = "clase";
  const db = context.services.get(serviceName).db("clase");
  const collection = db.collection("audit");

  
  // Get the "FullDocument" present in the Insert/Replace/Update ChangeEvents
  try {
    

    // If this is an "insert" event, insert the document into the other collection
    if (changeEvent.operationType === "insert") {
      const fullDoc = changeEvent.fullDocument;
      const auditEntry = {
        originalDoc: changeEvent.ns.coll,
        insertedAt: new Date(),
        document: fullDoc
      }
      
      await collection.insertOne(auditEntry);
    }

    
  } catch(err) {
    console.log("error performing mongodb write: ", err.message);
  }
};

```

**Testing console**

```js
/*
  To Run the function:
    - Type 'exports(Argument);' to run the function with an object argument
    - Click 'Run'

  A Database Trigger will always be called with a changeEvent describing the change that happened in the database.
  Learn more in our ChangeEvent documentation: https://docs.mongodb.com/manual/reference/change-events/

  ns: namespace = db y collecion 
*/

const changeEvent = {
  operationType: "insert",
  fullDocument: {
    _id: BSON.ObjectId("6658bafab6f3ec9b839d8e91"),
    name: "Test User",
    email: "test@example.com"
  },
  ns: {
    db: "clase",
    coll: "productos"
  },
  documentKey: {
    _id: BSON.ObjectId("6658bafab6f3ec9b839d8e91")
  }
};

exports(changeEvent);
```


## Actividad

Crear una funcion para guardar los datos que han sido borrados.

```jsx
// 🧪 Simulated delete changeEvent
const changeEvent = {
  operationType: "delete",
  documentKey: {
    _id: BSON.ObjectId("6658bdaf7a6ccf0023892f3a")  // Example _id
  },
  ns: {
    db: "clase",
    coll: "productos"
  }
};

exports(changeEvent);
```
