import { sendOrderMessage } from '../producers/orderProducer.js';
import { orderMessages } from '../consumers/orderConsumer.js';

export const createOrder = async (req, res) => {
  const { productId, quantity } = req.body;

  const order = {
    productId,
    quantity,
    status: 'NEW',
    createdAt: new Date().toISOString(),
  };

  await sendOrderMessage(order);

  res.status(200).send('Order message sent to Kafka');
};


export const getOrders = async (req, res) => {
  console.log('Getting orders...');
  console.log('Current orders:', orderMessages);  // Check if the messages are being added
  
  const ordersToSend = [...orderMessages]; // Copy for response
  orderMessages.length = 0; // Clear the original array

  res.status(200).json({ orders: ordersToSend });
};

