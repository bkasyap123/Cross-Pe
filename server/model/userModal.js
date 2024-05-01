import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export { userSchema, User };
