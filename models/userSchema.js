const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    //   unique:[true,'cant duplicate'],
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
        type:Number,
        required:true,
        // index:true
    },
    job :{
        type:String,
        required:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role:{
      type:String,
      required:true
    }
  },

  { timestamps: true }
);

//Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
