import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";
import app from "./app.js"; // Assuming all middlewares/routes are in app.js

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET
});

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello from render");
});

app.listen(PORT, () => {
  console.log(`Server running ...`);
});
