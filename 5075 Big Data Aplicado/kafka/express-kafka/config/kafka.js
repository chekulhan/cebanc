import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'order-api',
  brokers: ['localhost:29092'],
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: 'order-group' });
