const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.port || 5000;
require("./CONN_CONST/Connection");
// -----------------
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));

var cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
app.use(function (req, res, next) {
  console.log(req._parsedUrl.path, "----<<<<<<<<<<<Current ");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// -------------------------------------
// Routes
// const AuthRoutes = require("./ROUTES/Auth.Routes");
app.use("/static", express.static("uploads"));
// Pages 
// app.use("/auth", AuthRoutes);

app.listen(PORT, () => console.log(PORT));
