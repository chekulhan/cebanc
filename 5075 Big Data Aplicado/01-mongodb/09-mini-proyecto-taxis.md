# Mini proyecto

**Escenario:**
🎬  Reunión mensual de producto con el equipo de liderazgo de San Sabastián Taxis.


PM (Responsable de Producto Digital)

Gerente General

Encargado de Operaciones

Responsable de Atención al Cliente

PM (Product Manager):
Buenos días a todos. He preparado una propuesta que puede transformar nuestra web actual en una herramienta mucho más útil para nuestros clientes y también para nosotros.

Gerente:
Cuéntanos. ¿De qué se trata?

PM:
Ahora mismo, nuestra página web es solo informativa: mostramos tarifas, teléfono de contacto y poco más. Pero cada vez más clientes nos preguntan si pueden reservar su viaje directamente desde la web, sin tener que llamar. Especialmente turistas, hoteles y empresas.

Responsable Atención al Cliente:
Sí, lo hemos notado. Muchos preguntan si pueden dejar los datos del viaje y recibir confirmación más tarde.

PM:
Exactamente. Lo que propongo es incorporar una sección interactiva en la web donde cualquier persona pueda:

Ingresar su nombre, lugar de recogida, destino, fecha y hora del viaje

Ver su historial de viajes pasados (si ha iniciado sesión)

Y nosotros, desde el panel de administración, podríamos ver esas reservas y gestionarlas en tiempo real

Encargado de Operaciones:
¿Y eso cómo se guarda? ¿Qué tan complicado sería?

PM:
Se guarda en una base de datos segura de NoSQL, MongoDB, y cada reserva va asociada a un cliente (aunque no se haya registrado oficialmente). Es simple: quien quiera ver su historial, puede usar un correo electrónico para identificarse, o incluso podríamos usar WhatsApp como canal complementario.
Desde el punto de vista técnico, sería una web moderna, usando tecnologias como ReactJS y backend en Node.js para recibir y guardar las reservas.

Gerente:
¿Y en cuánto tiempo se puede tener eso?

PM:
En una semana podríamos tener un prototipo funcional. De hecho, ya he preparado un diseño inicial donde:

A la izquierda se muestra una lista con viajes anteriores

A la derecha se puede añadir un nuevo viaje

Y hay un botón grande en la parte inferior, pensado especialmente para móviles, que dice “Reservar taxi”

Responsable Atención al Cliente:
¿Y los clientes verían todos sus viajes?

PM:
Solo si se identifican por correo o teléfono. Pero sí, podrían llevar un registro. Ideal para quienes viajan frecuentemente con nosotros: jubilados, personas mayores, turistas recurrentes, etc.

Encargado de Operaciones:
Eso también nos ayudaría a reducir llamadas innecesarias, y a tener las direcciones ya registradas antes del viaje.

PM:
Sí. Y más adelante podríamos conectarlo con el sistema de flota para enviar al taxista más cercano automáticamente. Pero el primer paso es permitir reservas desde la web.

Gerente:
Bien. Me gusta. Sencillo, útil y nos da un salto digital importante. Tira adelante con el prototipo. Lo revisamos la próxima semana.

PM:
Perfecto. Les comparto el enlace a la demo en cuanto esté lista.


**MongoDB**
El desarrollado full-stack ha sacado un ejemplo de lo que seria el documento que se guarda en MongoDB.

```json
{
  _id: ObjectId("..."),
  nombre: "Alice Smith",
  correo_electronico: "alice@email.com",
  saldo: 80,

  viajes: [
    {
      id_viaje: ObjectId(),
      lugar_recogida: "Calle Principal",
      lugar_destino: "Avenida del Parque",
      estado: "completado", // "reservado", "en curso", "completado", "cancelado"
      costo: 15,
      fecha_hora: ISODate("2025-05-27T14:00:00Z")
    },
    {
      id_viaje: ObjectId(),
      lugar_recogida: "Biblioteca",
      lugar_destino: "Museo",
      estado: "en curso",
      costo: 9,
      fecha_hora: ISODate("2025-05-27T15:00:00Z")
    }
  ]
}
```



---



## Respuesta

```js
import { ObjectId } from 'mongodb';

const usersCollection = db.collection('users'); // adjust collection name

const userId = ObjectId("...");  // The user _id you want to update

const newTrip = {
  id_viaje: new ObjectId(),
  lugar_recogida: "Plaza Mayor",
  lugar_destino: "Estación Central",
  estado: "reservado",
  costo: 12,
  fecha_hora: new Date("2025-05-28T10:00:00Z")
};

async function addTripToUser() {
  const result = await usersCollection.updateOne(
    { _id: userId },
    { $push: { viajes: newTrip } }
  );
```