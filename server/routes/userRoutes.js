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
    let newUser = await User.create({
      email: email,
      pwd: hashedPwd,
      phone: phone,
    });

    //Getting User -- Saving to cookie
    let tkn = jwt.sign({ User: newUser }, process.env.JWT_SECRET, {
      expiresIn: 3 * 24 * 60 * 60 * 1000,
    });
    let opts = { maxAage: 3 * 24 * 60 * 60 * 1000 };
    res.cookie("token", tkn, opts).send("Registration Successful");
  } catch (error) {
    next(error);
  }
});

userRoute.post("/login", async (req, res, next) => {
  let { email, pwd } = req.body;
  if (!email || !pwd) return res.status(400).send("Provide all the details");

  try {
    let theUser = await User.findOne({ email: email });
    if (!theUser) return res.status(400).send("User Does Not Exist!");

    if (!bcrypt.compareSync(pwd, theUser.pwd)) {
      res.status(401).send("Incorrect email or password!");
    } else {
      let tkn = jwt.sign({ User: theUser }, process.env.JWT_SECRET, {
        expiresIn: 3 * 24 * 60 * 60 * 1000,
      });
      let opts = { maxAage: 3 * 24 * 60 * 60 * 1000 };
      res.cookie("token", tkn, opts).send("Login Successful");
    }
  } catch (error) {
    next(error);
  }
});

userRoute.get("/dashboard", isAuthenticated, (req, res) => {
  res.status(200).json({ User: req.user });
});

userRoute.post("/logout", (req, res) => {
  res.clearCookie("token").send("Logged out Successfully!");
  req.user = null;
});

export default userRoute;
