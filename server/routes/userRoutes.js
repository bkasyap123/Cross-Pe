import express from "express";
import { getUser, login, signup } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/authHandler.js";
const userRoute = express.Router();

userRoute.post("/signup", signup);
userRoute.post("/login", login);
userRoute.get("/dashboard", isAuthenticated, getUser);

export default userRoute;
