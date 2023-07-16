const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var deparmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  Description: {
    type: String,
    required: true,
  },

  mobile: {
    type: Number,
    required: true,
  },

  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Doctor",
  },
});

//Export the model
const Deparment = mongoose.model("Deparment", deparmentSchema);
module.exports = Deparment;
