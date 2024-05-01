import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import userRoute from "./routes/userRoutes.js";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:2000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoute);

app.use((error, req, res, next) => {
  let { message } = error;
  console.log(`You got an Error: ${message}`);
  next();
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
});