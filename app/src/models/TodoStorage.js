"use strict";

const db = require("../config/db");

class TodoStorage {
  static create(client) {
    const qurey = "insert into tb (description) values (?);";
    console.log(qurey, client);
    return new Promise((resolve, reject) => {
      db.query(qurey, [client], (err) => {
        if (err) reject(err);
        resolve({ success: true });
      });
    });
  }
}

module.exports = TodoStorage;
