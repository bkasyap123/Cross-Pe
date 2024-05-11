import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import userRoute from "./routes/userRoutes.js";
const app = express();

app.use(
  cors({
    origin: "https://easypayz.vercel.app",
    // origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoute);

app.get("/health", (req, res) => {
  res.status(200).json({ success: "Health is Ok" });
});

app.use((error, req, res, next) => {
  let { message } = error;
  console.log(`You got an Error: ${message}`);
  next();
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
});
