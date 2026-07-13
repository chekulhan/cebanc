import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092'],  // Connect to Kafka on localhost:9092
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
  await consumer.connect();
  console.log('Consumer connected to Kafka');

  // Subscribe to the topic "test-topic"
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  // Consume messages from the topic
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
    },
  });
};

run().catch(console.error);
