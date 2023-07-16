const mongoose = require('mongoose')

const db = mongoose
 
  .connect("mongodb://root:linhtutkyaw@127.0.0.1:27017/hospital?authSource=admin")

  .then(() =>console.log("Connected with databse!"))
  .catch((err) => {
    console.log("error with" + err.message);
     process.exit();
  });


module.exports = db;

