import mongoose from "mongoose";
const url = process.env.MONGO_URL;

dbConfig().catch((err) => console.log(err));

async function dbConfig() {
  await mongoose.connect(url);
}

export default dbConfig;
