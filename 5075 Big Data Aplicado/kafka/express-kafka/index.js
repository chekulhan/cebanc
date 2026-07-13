import express from 'express';
import path from "path";
import cors from 'cors';
import { fileURLToPath } from "url";

import orderRouter from './routes/orderRoutes.js';  
import { runOrderConsumer } from './consumers/orderConsumer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());



runOrderConsumer();

// Montar rutas
app.use('/api/v1', orderRouter);


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});