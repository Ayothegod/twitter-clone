const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session")
const sessionStore = require("connect-mongodb-session")(session)
const User = require("./models/User");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4001;

const userRoute = require("./routes/user")
const postRoute = require("./routes/post");
const profileRoute = require("./routes/profile");
const commentRoute = require("./routes/comment");
const { isAuth } = require("./middleware/session");
const { notFound, errorHandler } = require("./middleware/error");

// middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// other middlewares -> session, error , rate-limit, cache etc
const store = new sessionStore({
  uri: process.env.DATABASE_URL,
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: store
}))

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
app.use("/api", userRoute)
app.use("/api", postRoute)
app.use("/api", commentRoute)
app.use("/api", profileRoute)

app.use(notFound)
app.use(errorHandler)

// start server
app.listen(port, () =>
  console.log(`Tweeter server currently running on http://localhost:${port}`)
);
