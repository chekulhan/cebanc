import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092'],  // Connect to Kafka on localhost:9092
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  console.log('Producer connected to Kafka');

  // Send a message to the topic "test-topic"
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello Kafka again!' },
    ],
  });

  console.log('Message sent to Kafka topic "test-topic"');

  await producer.disconnect();
}

run();
