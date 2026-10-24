import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();


// Replace with your actual MongoDB Atlas connection string
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    const database = client.db("clase");
    const productos = database.collection("productos");

    // Open a change stream on the collection
    const changeStream = productos.watch();


    changeStream.on("change", (change) => {
      console.log("Change detected:");
      console.log(JSON.stringify(change, null, 2));

      if (change.operationType === "insert") {
        console.log("New document inserted:", change.fullDocument);
      }

      if (change.operationType === "delete") {
        console.log("Document deleted with _id:", change.documentKey._id);
      }

      // Add other operationType handlers as needed
    });

    process.stdin.resume();

     // Handle shutdown signals gracefully
    process.on("SIGINT", async () => {
      console.log("SIGINT received, closing connection...");
      await client.close();
      console.log("Connection closed. Exiting...");
      process.exit(0);
    });

    process.on("SIGTERM", async () => {
      console.log("SIGTERM received, closing connection...");
      await client.close();
      console.log("Connection closed. Exiting...");
      process.exit(0);
    });



  } catch (error) {
    console.error("Error connecting to MongoDB or running commands:", error);
  }
}

run();




/*
changeStream.on("error", (error) => {
  console.error("Change stream error:", error);
});

changeStream.on("close", () => {
  console.log("Change stream closed.");
});

*/