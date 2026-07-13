import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'bolsa-consumidor',
  brokers: ['localhost:29092'],  // Connect to Kafka on localhost:29092
});

const consumer = kafka.consumer({ groupId: 'bolsa-consumer-group' });

const run = async () => {
  await consumer.connect();
  console.log('Consumer connected to Kafka');

  // Subscribe to the topic "test-topic"
  await consumer.subscribe({ topic: 'bolsa', fromBeginning: true });

  // Consume messages from the topic
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
    },
  });



};

run()

process.on('SIGINT', async () => {
    console.log('Disconnecting Kafka consumer...');
    await consumer.disconnect();
    process.exit();
  });
