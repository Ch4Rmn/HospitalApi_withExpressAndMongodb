const express = require("express");
const { registerDoctor , loginDoctor } = require("../controller/doctorController");
const doctorRouter = express.Router();

doctorRouter.post("/signup", registerDoctor);

doctorRouter.post("/login", loginDoctor);

module.exports = doctorRouter;
