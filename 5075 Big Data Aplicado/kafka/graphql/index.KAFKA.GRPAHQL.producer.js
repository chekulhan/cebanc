import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

import { createYoga, createSchema } from 'graphql-yoga';
import { typeDefs, resolvers } from './kafkaSchema.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

async function startServer() {
  try {


    // Setup GraphQL Yoga
    const yoga = createYoga({
      schema: createSchema({
        typeDefs,
        resolvers,
      }) 
    });


    // Mount Yoga at /graphql
    app.use('/graphql', yoga);

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
