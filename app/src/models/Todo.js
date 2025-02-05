"use strict";

const todoStorage = require("./TodoStorage");

class Todo {
  constructor(body) {
    this.body = body;
  }

  async create() {
    const client = this.body;

    console.log(client.dis);

    try {
      const response = await todoStorage.create(client.dis);
      return response;
    } catch (err) {}
  }
}

module.exports = Todo;
