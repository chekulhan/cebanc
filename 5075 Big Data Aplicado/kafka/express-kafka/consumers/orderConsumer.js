import { consumer } from '../config/kafka.js';

export const orderMessages = []; // Store consumed messages here

export const runOrderConsumer = async () => {
  try {
    await consumer.connect();
    console.log('Consumer connected');

    await consumer.subscribe({ topic: 'orders', fromBeginning: false }); // true para debug

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        if (message && message.value) {
          try {
            const order = JSON.parse(message.value.toString());
            console.log('Order received:', order);
            orderMessages.push(order); // Store the order in the array
          } catch (error) {
            console.error('Error parsing message:', error);
          }
        }
      },
    });
  } catch (error) {
    console.error('Error in consumer:', error);
  }
};
