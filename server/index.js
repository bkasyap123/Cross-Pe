import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import userRoute from "./routes/userRoutes.js";
import connectDatabase from "./model/dbConfig.js";

const app = express();
connectDatabase();

app.use(
  cors({
    origin: "https://www.gocrosspe.com",
    // origin: "http://localhost:5174",
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
  console.error(error.stack);
  res.status(500).send(`Internal Server Error: ${message}`);
  next();
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
});
