const Doctor = require("../models/doctorSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret_key = "doctorSchema";

// CREATE DOCTOR ACC
const registerDoctor = async (req, res) => {
  // console.log('signup');

  const { name, email, password, phone, job } = req.body;

  const existingDoctor = await Doctor.findOne({ email: email });
  if (!existingDoctor) {
    const hashPass = await bcrypt.hash(password, 10);
    try {
      const doctors = await Doctor.create({
        name: name,
        email: email,
        password: hashPass,
        phone: phone,
        job: job,
      });

      const token = jwt.sign(
        { email: doctors.email, id: doctors._id },
        secret_key
      );
      console.log("Token is " + token);

      res.status(200).json({
        doctors: doctors,
        token: token,
      });
    } catch (error) {
      res.status(500).json({
        errorMessage: "crendital error in doctorSignin",
      });
    }
  } else {
    res.status(404).json({
      errorMessage: "doctor already exists!",
    });
  }
  //   console.log(name, email, password, phone, job);
};

// DOCTOR LOGIN
const loginDoctor = async (req, res) => {
  //   console.log("OK doctor login");
  const { email, password } = req.body;
  try {
    const existingDoctor = await Doctor.findOne({ email: email });
    // findOne check then get all data

    if (!existingDoctor) {
      res.status(404).json({
        errorMessage: "doctor not found!",
      });
    } else {
      const vertifyPass = bcrypt.compare(password, existingDoctor.password);

      if (!vertifyPass) {
        res.status(400).json({
          errorMessage: "Password wrong!",
        });
      } else {
        const token = jwt.sign({
          email: existingDoctor.email,
          id: existingDoctor._id,
        },secret_key);
        res.status(200).json({
          existingDoctor: existingDoctor,
          token: token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "crendital error in doctorLogin",
    });
  }
};

module.exports = { registerDoctor, loginDoctor };
