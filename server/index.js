import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import path from "path";
import userRoute from "./routes/userRoutes.js";
import connectDatabase from "./model/dbConfig.js";
const app = express();
connectDatabase();

app.use(
  cors({
    origin: "https://easypayz.vercel.app",
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    const indexPath = path.join(process.cwd(), "client", "build", "index.html");
    res.sendFile(indexPath);
  });
}

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
});
