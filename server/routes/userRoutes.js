import express from "express";
import {
  getUser,
  login,
  logout,
  signup,
} from "../controllers/userController.js";
import isAuthenticated from "../middlewares/authHandler.js";
const userRoute = express.Router();

userRoute.post("/signup", signup);
userRoute.post("/login", login);
userRoute.post("/logout", logout);
userRoute.get("/dashboard", isAuthenticated, getUser);

export default userRoute;
