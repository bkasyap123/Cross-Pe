import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  uname: {
    type: String,
  },
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

userSchema.pre("save", async function (next) {
  if (this.isModified("pwd")) {
    this.pwd = await bcrypt.hash(this.pwd, 10);
  }
  next();
});

userSchema.methods.comparePwd = async function (password) {
  return await bcrypt.compare(password, this.pwd);
};

userSchema.methods.genToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

const User = mongoose.model("User", userSchema);

export { userSchema, User };
