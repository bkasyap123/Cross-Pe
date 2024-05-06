import express from "express";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import dbConfig from "../model/dbConfig.js";
import { User } from "../model/userModal.js";
// import isAuthenticated from "../controllers/authController.js";
const userRoute = express.Router();

userRoute.post("/signup", async (req, res, next) => {
  let { email, pwd, phone } = req.body;
  if (!email || !pwd || !phone)
    return res.status(400).send("Provide all the details");

  try {
    if (await User.findOne({ email: email }))
      return res.status(400).send("User already Exist!");

    let hashedPwd = bcrypt.hashSync(pwd, 10);
    await User.create({
      email: email,
      pwd: hashedPwd,
      phone: phone,
    });

    res.status(200).send("Registration Successful");
  } catch (error) {
    next(error);
  }
});

userRoute.get("/dashboard", (req, res) => {
  res.status(200).send("Welcome!");
});

////LOGOUT
// userRoute.post("/logout", (req, res) => {
//   res.clearCookie("token").send("Logged out Successfully!");
//   req.user = null;
// });

export default userRoute;
