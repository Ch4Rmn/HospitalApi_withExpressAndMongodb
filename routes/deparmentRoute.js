const express = require("express");
const deparmentRouter = express();

const {
  getAllDeparment,
  addDeparment,
  updateDeperment,
  deleteDeparment,
} = require("../controller/deparmentController");


deparmentRouter.get("", getAllDeparment);

deparmentRouter.post("", addDeparment);

deparmentRouter.put("/:id", updateDeperment);

deparmentRouter.delete("/:id", deleteDeparment);


module.exports = deparmentRouter;
