import mongoose from "mongoose";
const url = process.env.MONGO_URL;

const connectDatabase = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log(`Mongoose Connected`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDatabase;
