"use strict";

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "todo",
});

db.connect();

module.exports = db;
