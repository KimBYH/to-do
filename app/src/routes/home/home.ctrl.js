"use strict";

const Todo = require("../../models/Todo");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const process = {
  create: (req, res) => {
    const todo = new Todo(req.body);
    const response = todo.create();
    return response;
  },
  update: (req, res) => {
    console.log(req.body);
  },
  delete: (req, res) => {
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};
