import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

//Connect to database
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}!`));
