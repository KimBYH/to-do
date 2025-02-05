"use strict";

const express = require("express");
const html = require("html");
const app = express();
const bodyParser = require("body-parser");

const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

app.use("/", home);

module.exports = app;
