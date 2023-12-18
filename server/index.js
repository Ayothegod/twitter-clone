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

// middlewares
app.use(morgan("dev"));
app.use(multer);
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
app.get("/", async (req, res) => {
  try {
    const data = {
      fullname: "Ayomide",
      username: "Aiiomide",
      password: "Aiioeds98",
    };
    const user = await User.create({ data });
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
});

// Routes

// start server
app.listen(port, () =>
  console.log(`Tweeter server currently running on http://localhost:${port}`)
);
