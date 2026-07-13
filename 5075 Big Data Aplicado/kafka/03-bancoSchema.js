
import { Kafka } from 'kafkajs';

// --- Kafka setup ---
const kafka = new Kafka({
  clientId: 'fraude-transacciones',
  brokers: ["localhost:29092"],  // place un .env file
});

const consumer = kafka.consumer({ groupId: 'graphql-consumer-group' });

const transactions = []; // captar los transacciones


await consumer.connect();
await consumer.subscribe({ topic: 'banco', fromBeginning: true });


await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      if (partition !== 1) return;

      const cantidad = message.value.toString().trim();
      console.log("received ", cantidad)
      transactions.push({cantidad}); // agregar a un in-memory array
    },
  });

  
// --- GraphQL schema ---
export const typeDefs = /* GraphQL */ `
  type Transaction {
    cantidad: Float
  }

  type Query {
    transactions: [Transaction!]!
  }
`;

export const resolvers = {
  Query: {
    transactions: () => transactions,
  },
};