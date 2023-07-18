const express = require("express");
const deparmentRouter = express();
const auth = require("../middlware/auth.js");

const {
  getAllDeparment,
  addDeparment,
  updateDeperment,
  deleteDeparment,
  getDeparment,
} = require("../controller/deparmentController");

deparmentRouter.get("", auth, getAllDeparment);

deparmentRouter.post("", auth, addDeparment);

deparmentRouter.get("/:id", getDeparment);

deparmentRouter.put("/:id", updateDeperment);

deparmentRouter.delete("/:id", deleteDeparment);

module.exports = deparmentRouter;
