import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import userRoute from "./routes/userRoutes.js";
const app = express();

<<<<<<< HEAD
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
=======
app.use(cors({origin: "https://easypayz.vercel.app", credentials: true}));
>>>>>>> 329eef21772cfa94059f01964e9c875331e0ba8c
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoute);

<<<<<<< HEAD
app.get("/health", (req, res) => {
  res.status(200).json({ success: "Health is Ok" });
});
=======
app.get('/health', (req, res) => {
  res.status(200).json({success: 'Health is Ok'})
})
>>>>>>> 329eef21772cfa94059f01964e9c875331e0ba8c

app.use((error, req, res, next) => {
  let { message } = error;
  console.log(`You got an Error: ${message}`);
  next();
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
});
