## Node

```bash
npm init -y
npm install mongodb
```

index.js
```js
import { MongoClient } from "mongodb";

// Replace with your actual MongoDB Atlas connection string
const uri = "....";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    const buildInfo = await client.db("admin").command({ buildInfo: 1 });
    const roles = await client.db("admin").command({ rolesInfo: 1, showPrivileges: true });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    console.log(buildInfo);


    const database = client.db("scott");
    const collection = database.collection("depts");

    const results = await collection.find().toArray();

    console.log("Departments:");
    console.log(results);
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    await client.close();
  }
}

run();

```