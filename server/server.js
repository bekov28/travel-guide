const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");

const app = express();

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ["http://localhost:3000", "https://travelbook-berdiyor.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

mongoose.set("strictQuery", false);

connectDB();

//Routes

app.use("/api/travel", require("./routes/travelRoutes.js"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}!`));
