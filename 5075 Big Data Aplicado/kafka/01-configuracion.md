# Kafka

Apache Kafka es un sistema de mensajería distribuido de tipo publish/subscribe, optimizado para el procesamiento de eventos en tiempo real. Permite transmitir, almacenar, procesar y reenviar grandes volúmenes de datos entre sistemas de forma eficiente y segura.

## Ejemplos de uso:

- Procesamiento de eventos en tiempo real (transacciones bancarias, clics en sitios web).
- Ingesta de datos para análisis o almacenamiento (Big Data).
- Comunicación entre microservicios.
- Integración entre sistemas (ETL, pipelines de datos).

https://www.youtube.com/watch?v=wO6DCLU4uxE
https://www.youtube.com/watch?v=aj9CDZm0Glc

```bash
>> docker compose up -d
>> docker logs kafka
>> docker compose down
>> docker exec -it kafka bash

$ kafka-topics --list --bootstrap-server localhost:29092
$ kafka-topics --create --topic test2-topic --bootstrap-server localhost:29092 --partitions 1 --replication-factor 1

# Consola producer:
$ kafka-console-producer --broker-list localhost:29092 --topic test-topic

# Consola consumer:
$ kafka-console-consumer --bootstrap-server localhost:29092 --topic test-topic --from-beginning

```



# Actividad 1
## Simular un chatroom

En Docker Terminal, crear un nuevo topic: orders
$ kafka-topics --bootstrap-server localhost:29092 --create --topic orders
$ kafka-topics --bootstrap-server localhost:29092 --list

$ kafka-console-producer --broker-list localhost:29092 --topic orders
$ kafka-console-consumer --bootstrap-server localhost:29092 --topic orders --from-beginning

>> Mandar los pedidos : 
- {OrderID: 1235, Item: Monitors, Quantity: 15 }
- {OrderID: 1234, Item: Laptops, Quantity: 20 }


# Actividad 2
## Gestión de Kafka

```bash
$ kafka-topics --bootstrap-server localhost:29092 --list

$ kafka-topics --bootstrap-server localhost:29092 --describe --topic orders

$ kafka-topics --bootstrap-server localhost:29092 --delete --topic orders

```


# Particiones

Crear un nuevo topic con particiones:
```bash
$>> kafka-topics --bootstrap-server localhost:29092 --create --topic partition-topic --partitions 2 --replication-factor 1
```

Ahora vamos a mandar mensajes a cada partición. Fijate en el formato de key:value:

```bash
$>> kafka-console-producer --bootstrap-server localhost:29092 --topic partition-topic --property "parse.key=true" --property "key.separator=:"

$>> ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic partition-topic --property "parse.key=true" --property "key.separator=:"
```

Ahora mandar mensajes en formato key:value, por ejemplo:

user1:¿Qué tal estas?

user2:Estoy bien. Y tu?

user1:Bueno, ni fu ni fa

user2:Vale. Hasta luego


```bash
$>> kafka-console-consumer --bootstrap-server localhost:29092 --topic partition-topic --from-beginning --property print.partition=true 


$>> kafka-console-consumer --bootstrap-server localhost:29092 --topic partition-topic --partition 1 --from-beginning

```


## Actividad de banco con Node
Querermos implantar un sistema de deteccion de fraudes, si al sacar dinero, sobrepasa 10,000 euros, indicar al administrador de tecnologias.


```js
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092'],
});

const producer = kafka.producer();

async function run() {
  await producer.connect();

  // Send message explicitly to partition 0
  await producer.send({
    topic: 'my-topic',
    messages: [
      { key: 'user1', value: 'message for partition 0', partition: 0 },
      { key: 'user2', value: 'message for partition 1', partition: 1 },
    ],
  });

  await producer.disconnect();
}

run().catch(console.error);
```

```js
const { Kafka } = require('kafkajs');

const kafka = new Kafka({ clientId: 'my-app', brokers: ['localhost:29092'] });
const consumer = kafka.consumer({ groupId: 'test-group' });

async function run() {
  await consumer.connect();

  await consumer.subscribe({ topic: 'my-topic', fromBeginning: true });

  // Assign specific partition
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if (partition === 1) {
        console.log({
          partition,
          offset: message.offset,
          value: message.value.toString(),
        });
      }
    },
  });
}

run().catch(console.error);
```




## Actividad 4: Partitions en el contexto de un banco

Crear un topic con 2 particiones para gestionar los datos de un banco, según el tipo de transacción: 
Partition 0: para depositar dinero
Partition 1: para sacar dinero

Al consumir, tendremos un cliente que está consumiendo los ingresos y otro que está consumiendo los gastos.Fijate en el –group atributo.

$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic partition-topic  --partitions 2 --replication-factor 1

$>> ./kafka-topics.sh --bootstrap-server localhost:9092 --describe --topic banco





$>> ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic banco --property "parse.key=true" --property "key.separator=:"

$>> ./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic banco --from-beginning --property print.partition=true
--property print.partition=true

Sacar solo los datos de ingreso (realmente se hace con un cliente usando la programación):

./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic banco --from-beginning 
--property print.key=true --property print.partition=true | grep "^ingreso"

# Node

```bash
npm install kafkajs
```

# Actividad
Vamos a generar datos aleatorios de acciones. En el **producer**, simularemos acciones en formato JSON. En el **consumidor**, guardaremos sus datos en una colección en MongoDB.

```js
const acciones = ['AAPL', 'GOOGL', 'TSLA', 'AMZN', 'MSFT'];


  const accionUpdate = {
    symbol: acciones[Math.floor(Math.random() * acciones.length)],
    price: (100 + Math.random() * 1000).toFixed(2),  // Random price between 100 and 1100
    timestamp: new Date().toISOString(),
  };
```


# Actividad: Web architectura 
Vamos a montar juntos una arquitectura compleja y escalable para desacoplar los componentes de un sistema moderno de gestión de productos. La idea principal es utilizar Kafka como sistema de mensajería central para transmitir eventos entre diferentes servicios, logrando así una alta disponibilidad, tolerancia a fallos y escalabilidad.

En esta arquitectura:

- El cliente web (ReactJS) envía las peticiones mediante un servidor GraphQL que actúa como productor, publicando eventos en Kafka.

- Kafka funciona como un bus de eventos distribuido que garantiza la entrega y persistencia de mensajes. Este servicio es el productor de eventos (Express con GraphQL)

- Un servicio consumidor (Express con GrpahQL) lee esos eventos de Kafka y actualiza la base de datos MongoDB.

- A su vez, este servicio consumidor expone su propia API GraphQL para que el cliente pueda consultar los datos ya procesados y almacenados.

Este enfoque permite desacoplar la inserción y actualización de datos de su almacenamiento, facilitando la escalabilidad horizontal y la integración con otros sistemas en el futuro.

```pqsql
+----------------+       +---------------------------+       +-------------------------+
|                |       |                           |       |                         |
|  ReactJS       | ----> | Kafka + GraphQL Producer  | ----> | MongoDB Consumer +      |
|  Frontend      |       | Server (localhost:5000)   |       | GraphQL API (localhost:5001) |
|  (Browser)     |       |                           |       |                         |
+----------------+       +---------------------------+       +-------------------------+
                              |                                      |
                              |                                      |
                              v                                      v
                   +----------------------+              +----------------------+
                   |  Kafka Broker in     |              |  MongoDB Atlas Cloud  |
                   |  Docker Container    |              |  (Cloud Database)     |
                   +----------------------+              +----------------------+

```
---

docker ps
docker exec -it 3ea95e708ac2 /bin/bash

docker exec -it kafka /bin/bash

netcat commands, comprobar que los puertos estan abiertos
nc -zv localhost 22181
nc -zv localhost 29092



kafka-topics --list --bootstrap-server localhost:29092

kafka-consumer-groups --list --bootstrap-server localhost:29092

>> docker pull apache/kafka

Quick start
Start a Kafka broker:
>> docker run -d --name broker apache/kafka:latest

Open a shell in the broker container:
>> docker exec --workdir /opt/kafka/bin/ -it broker sh

A topic is a logical grouping of events in Kafka. From inside the container, create a topic called test-topic:
$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic test-topic

Write two string events into the test-topic topic using the console producer that ships with Kafka:
$>>  ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test-topic

This command will wait for input at a > prompt. Enter hello, press Enter, then world, and press Enter again. Enter Ctrl+C to exit the console producer.
Now read the events in the test-topic topic from the beginning of the log:
$>>  ./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-topic --from-beginning

You will see the two strings that you previously produced:
hello
world

The consumer will continue to run until you exit out of it by entering Ctrl+C.
When you are finished, stop and remove the container by running the following command on your host machine:
docker rm -f broker
Actividad 1: Similar un chat room
En Docker Terminal, crear un nuevo topic: chat-room

$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic chat-room

Producir:
En el mismo terminal, empezar a mandar mensajes al topic:
$>> ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic chat-room

Consumir: 
En otro terminal como lo de Windows, conectar primero:
>> docker exec --workdir /opt/kafka/bin/ -it kafka-broker sh

y ahora escuchar los mensajes:
$>> ./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic chat-room --from-beginning
(puedes quitar —-from-beginning)

Actividad 2: 
Gestión de Kafka
$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --list
$>> ./kafka-topics.sh --bootstrap-server localhost:9092 --describe --topic chat-room
$>> ./kafka-topics.sh --bootstrap-server localhost:9092 --delete --topic chat-room

Explanación: Partitions
Crear un nuevo topic con particiones:
$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic partition-topic  --partitions 2 --replication-factor 1

Ahora vamos a mandar mensajes a cada partición. Fijate en el formato de key:value:

$>> ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic partition-topic --property "parse.key=true" --property "key.separator=:"

Ahora mandar mensajes en formato key:value, por ejemplo:
user1:¿Qué tal estas?
user2:Estoy bien. Y tu?
user1:Bueno, ni fu ni fa
user2:Vale. Hasta luego

$>> ./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic partition-topic --from-beginning --property print.partition=true
--property print.partition=true
Actividad 4: Partitions en el contexto de un banco

Crear un topic con 2 particiones para gestionar los datos de un banco, según el tipo de transacción: 
Partition 0: para depositar dinero
Partition 1: para sacar dinero

Al consumir, tendremos un cliente que está consumiendo los ingresos y otro que está consumiendo los gastos.Fijate en el –group atributo.

$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic partition-topic  --partitions 2 --replication-factor 1

$>> ./kafka-topics.sh --bootstrap-server localhost:9092 --describe --topic banco



$>> ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic banco --property "parse.key=true" --property "key.separator=:"

$>> ./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic banco --from-beginning --property print.partition=true
--property print.partition=true

Sacar solo los datos de ingreso (realmente se hace con un cliente usando la programación):

./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic banco --from-beginning 
--property print.key=true --property print.partition=true | grep "^ingreso"


```js
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'fraud-detector',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'fraud-detection-group' });

async function run() {
  await consumer.connect();

  // Consumir solo la partición 1 (por ejemplo, la de withdrawals)
  await consumer.subscribe({ topic: 'banco', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // Solo analizar mensajes de la partición de retiradas
      if (partition === 1) {
        const value = message.value.toString();
        const transaction = JSON.parse(value);

        // Ejemplo: detectar retiradas superiores a 10,000
        if (transaction.tipo === 'withdrawal' && transaction.monto > 10000) {
          console.log('Alerta de posible fraude: Retirada grande detectada:', transaction);
          // Aquí podrías agregar lógica para alertar, bloquear, etc.
        }
      }
    },
  });
}

run().catch(console.error);

```