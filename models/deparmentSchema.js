const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var deparmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  service: {
    type: String,
    required: true,
  },

  mobile: {
    type: Number,
    required: true,
  },

  userId : {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }

});

//Export the model
const Deparment = mongoose.model("Deparment", deparmentSchema);
module.exports = Deparment;
