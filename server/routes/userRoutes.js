import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connection from "../model/dbConfig.js";
import isAuthenticated from "../controllers/authController.js";
const userRoute = express.Router();

userRoute.post("/signup", (req, res, next) => {
  let { email, pwd, phone } = req.body;
  if (!email || !pwd || !phone) return res.send("Provide all the details");
  let hashedPwd = bcrypt.hashSync(pwd, 10);
  try {
    let Q = `INSERT INTO users VALUES ('${email}', '${hashedPwd}', '${phone}')`;
    connection.query(Q, (err, rez) => {
      if (err?.message.includes("Duplicate"))
        return res.status(400).send("User already Exist!" || err.message);

      //Getting User - Saving to cookie
      let Q = `SELECT * FROM users`;
      connection.query(Q, (error, result) => {
        let tkn = jwt.sign({ User: result }, process.env.JWT_SECRET, {
          expiresIn: 3 * 24 * 60 * 60 * 1000,
        });
        let opts = { maxAage: 3 * 24 * 60 * 60 * 1000 };
        res.cookie("token", tkn, opts).send("Registration Successful");
      });
    });
  } catch (error) {
    next(error);
  }
});

userRoute.post("/login", (req, res, next) => {
  let { email, pwd } = req.body;
  if (!email || !pwd) return res.send("Provide all the details");
  try {
    let Q = `SELECT * FROM users WHERE email='${email}'`;
    connection.query(Q, (err, result) => {
      if (!result[0]) return res.status(400).send(`User doesn't Exist`);

      if (!bcrypt.compareSync(pwd, result[0].pwd)) {
        res.status(401).send("Incorrect email or password!");
      } else {
        let tkn = jwt.sign({ User: result[0] }, process.env.JWT_SECRET, {
          expiresIn: 3 * 24 * 60 * 60 * 1000,
        });
        let opts = { maxAage: 3 * 24 * 60 * 60 * 1000 };
        res.cookie("token", tkn, opts).send("Login Successful");
      }
    });
  } catch (error) {
    next(error);
  }
});

userRoute.get("/dashboard", isAuthenticated, (req, res) => {
  res.status(200).json({ User: req.user[0] });
});

userRoute.post("/logout", (req, res) => {
  res.clearCookie("token").send("Logged out Successfully!");
  req.user = null;
});

export default userRoute;
