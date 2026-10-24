import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();


// Replace with your actual MongoDB Atlas connection string
const uri = process.env.MONGODB_URI;
console.log(uri);
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Run admin commands
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const buildInfo = await client.db("admin").command({ buildInfo: 1 });
    console.log("Build Info:", buildInfo);

  } catch (error) {
    console.error("Error connecting to MongoDB or running commands:", error);
  } finally {
    // Ensure the client will close when you finish/error
    await client.close();
  }
}

run();
