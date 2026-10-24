import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from a .env file if needed
const MONGODB_URI = process.env.MONGODB_URI;
           
const DB_NAME = 'scott';

let client;
let db;

async function connectDB() {
  if (!client) {
    client = new MongoClient(MONGODB_URI);

    await client.connect();
    db = client.db(DB_NAME);
    console.log(`✅ Connected to MongoDB database: ${DB_NAME}`);
  }

  return db;
}

export default connectDB;
