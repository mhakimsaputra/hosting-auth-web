const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
require("dotenv").config();

const app = express();

// middleware
app.use(express.static("public"));

app.use(express.json());

app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
mongoose.set("strictQuery", true);
// const dbURI = "mongodb+srv://mhakims:university17@cluster0.amja7kk.mongodb.net/nodejs-auth";
mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => app.listen(process.env.PORT || 3001))
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
// app.get("/signup", (req, res) => res.render("signup"));
app.get("/auth", requireAuth, (req, res) => res.render("auth"));

app.use(authRoutes);
