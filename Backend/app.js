import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import blogRouter from "./routes/blogRouter.js";
import fileUpload from "express-fileupload";

const app = express();
dotenv.config();

app.use(cors({
  origin: "https://your-frontend.vercel.app",
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));

// ✅ Connect DB
dbConnection();

// ✅ Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);

// ✅ Error handler
app.use(errorMiddleware);

export default app;
