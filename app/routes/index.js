"use strict";

const path = require("path");

const express = require("express");

const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

module.exports = router;
