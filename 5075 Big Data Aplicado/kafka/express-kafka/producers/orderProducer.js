import { producer } from '../config/kafka.js';

// curl -X POST http://localhosttent-Type: application/json" -d '{"productId": 123, "quantity": 6}'

export const sendOrderMessage = async (order) => {
  await producer.connect();
  console.log('Producer connected');

  await producer.send({
    topic: 'orders',
    messages: [
      {
        value: JSON.stringify(order),
      },
    ],
  });

  console.log(JSON.stringify(order));
  console.log('Message sent to Kafka');
  await producer.disconnect();
};
