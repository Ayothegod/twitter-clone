const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const User = require("./models/User");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4001;

const userRoute = require("./routes/user")

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// other middlewares -> session, error , rate-limit, cache etc

// connect database
const startDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then((res) => console.log("database connected"))
    .catch((e) => console.log(e));
};
startDb();

// Base Route
app.get("/", (req, res) => {
  try {
    res.status(200).json("Default route");
  } catch (error) {
    res.json(error);
  }
});

// Routes
app.use("/", userRoute)

// start server
app.listen(port, () =>
  console.log(`Tweeter server currently running on http://localhost:${port}`)
);
