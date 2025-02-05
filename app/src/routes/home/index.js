"use strict";

const express = require("express");

const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);

router.post("/", ctrl.process.create);
router.patch("/", ctrl.process.update);
router.delete("/", ctrl.process.delete);

module.exports = router;
