import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

import { createYoga, createSchema } from 'graphql-yoga';
import { typeDefs, resolvers } from './productosSchema.js';

import { Kafka } from 'kafkajs';

import connectDB from './db-mongodb.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    // Connect to MongoDB
    const db = await connectDB();
    app.locals.db = db;


    // Setup GraphQL Yoga
    const yoga = createYoga({
      schema: createSchema({
        typeDefs,
        resolvers,
      }) ,
      context: ({ request }) => ({
        db: app.locals.db,  // Pass your MongoDB connection to resolvers
      }),
    });


    // Mount Yoga at /graphql
    app.use('/graphql', yoga);

    // === Kafka consumer setup ===
      const kafka = new Kafka({
        clientId: 'express-kafka-consumer',
        brokers: ['localhost:29092'], // adjust broker address if needed
      });
  
      const consumer = kafka.consumer({ groupId: 'productos-group' });
  
      await consumer.connect();
      await consumer.subscribe({ topic: 'productos', fromBeginning: true });
  
      consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          const value = message.value.toString();
          console.log(`Kafka message received on topic ${topic}:`, value);
          // You can parse JSON here if your messages are JSON
          try {
            const data = JSON.parse(value);
            console.log('Parsed data:', data);
          } catch {
            // not JSON, just log raw value
          }
        },
      });
      // === end Kafka consumer setup ===
    

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`GraphQL endpoint at http://localhost:${PORT}/graphql`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
