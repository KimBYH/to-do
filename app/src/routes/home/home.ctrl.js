"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const process = {
  create: (req, res) => {},
};

module.exports = {
  output,
  process,
};
