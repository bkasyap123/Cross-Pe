import { json } from "express";
import jwt from "jsonwebtoken";
import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./scratch");

const isAuthenticated = (req, res, next) => {
  // let tkn = req.cookies.token;
  let tkn = localStorage.getItem("token");

  if (!tkn) return res.status(401).send("Unauthorized User");

  try {
    jwt.verify(JSON.parse(tkn), process.env.JWT_SECRET, (error, decoded) => {
      if (error || !decoded) {
        return res.status(401).send("Access denied to unauthorized user");
      } else {
        req.currUser = decoded.user;
        next();
      }
    });
  } catch (err) {
    next(err);
  }
};

export default isAuthenticated;
