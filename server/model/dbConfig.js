const { MongoClient, ServerApiVersion } = require("mongodb");
const url = process.env.MONGO_URL;

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// import mongoose from "mongoose";

// dbConfig().catch((err) => console.log(err));

// async function dbConfig() {
//   await mongoose.connect(
//     `mongodb+srv://${process.env.MONGO_UNAME}:${process.env.MONGO_PWD}@easypayz.qxl1w3d.mongodb.net/?retryWrites=true&w=majority&appName=easypayz`
//   );
// }

// export default dbConfig;
