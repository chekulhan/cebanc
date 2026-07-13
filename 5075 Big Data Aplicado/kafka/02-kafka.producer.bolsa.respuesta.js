import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'bolsa-producer',    // se puede ver con docker logs kafka
  brokers: ['localhost:29092'],  // Connect to Kafka on localhost:9092
});

const producer = kafka.producer();

const acciones = ['AAPL', 'GOOGL', 'TSLA', 'AMZN', 'MSFT'];

const run = async () => {
  await producer.connect();
  console.log('Producer connected to Kafka');

  // Simulate a random stock price update
  const accionUpdate = {
    symbol: acciones[Math.floor(Math.random() * acciones.length)],
    price: (100 + Math.random() * 1000).toFixed(2),  // Random price between 100 and 1100
    timestamp: new Date().toISOString(),
  };

  await producer.send({
    topic: 'bolsa',
    messages: [
      { value: JSON.stringify(accionUpdate) },
    ],
  });

  console.log('Message sent to Kafka topic "bolsa"');

  await producer.disconnect();
}

run();
