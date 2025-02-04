"use strict";

const express = require("express");
const html = require("html");
const app = express();

const home = require("./routes");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

app.listen(3000, () => {
  console.log("서버 가동");
});
