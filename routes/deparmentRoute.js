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

deparmentRouter.get("/:id",auth, getDeparment);

deparmentRouter.put("/:id",auth, updateDeperment);

deparmentRouter.delete("/:id",auth, deleteDeparment);

module.exports = deparmentRouter;
