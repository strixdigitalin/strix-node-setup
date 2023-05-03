const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.port || 5000;
require("./CONN_CONST/Connection");

app.listen(PORT, () => console.log(PORT));
