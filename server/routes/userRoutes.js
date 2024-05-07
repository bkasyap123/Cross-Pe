import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConfig from "../model/dbConfig.js";
import { User } from "../model/userModal.js";
import isAuthenticated from "../controllers/authController.js";
const userRoute = express.Router();

userRoute.post("/signup", async (req, res, next) => {
  let { email, pwd, phone } = req.body;
  if (!email || !pwd || !phone)
    return res.status(400).send("Provide all the details");

  try {
    if (await User.findOne({ email: email }))
      return res.status(400).send("User already Exist!");

    let hashedPwd = bcrypt.hashSync(pwd, 10);
    let newUser = new User({
      email: email,
      pwd: hashedPwd,
      phone: phone,
    });
    await newUser.save();

    let tkn = jwt.sign({ user: newUser }, process.env.JWT_SECRET, {
      expiresIn: 2 * 24 * 60 * 60 * 1000,
    });
    let cookieOps = { maxAge: 2 * 24 * 60 * 60 * 1000 };
    req.currUser = null;
    res.cookie("token", tkn, cookieOps).send("Registration Successful");
  } catch (error) {
    next(error);
  }
});

userRoute.post("/login", async (req, res) => {
  //check the input
  let { email, pwd } = req.body;
  if (!email || !pwd) return res.status(400).send("Provide all the details");

  //if user exist
  let user = await User.findOne({ email: email });
  if (!user) return res.status(404).send("User not found");

  //is pwd correct
  if (!bcrypt.compareSync(pwd, user.pwd))
    return res.status(401).send("Incorrect password");

  //saving /sending token
  let tkn = jwt.sign({ user: user }, process.env.JWT_SECRET, {
    expiresIn: 2 * 24 * 60 * 60 * 1000,
  });
  let cookieOps = { maxAge: 2 * 24 * 60 * 60 * 1000 };
  res.cookie("token", tkn, cookieOps).send("Login Successfull");
});

userRoute.get("/dashboard", isAuthenticated, (req, res) => {
  res.status(200).send(req.currUser);
});

//LOGOUT
userRoute.post("/logout", (req, res) => {
  res.clearCookie("token").send("Logged out Successfully!");
  req.user = null;
});

export default userRoute;
