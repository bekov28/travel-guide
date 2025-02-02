const express = require("express");
const connectDB = require("./config/db.js");
require("dotenv").config();
const cors = require('cors')

//Connect to database
connectDB();

const app = express();

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

//Routes

app.use("/api/travel", require("./routes/travelRoutes.js"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}!`));
