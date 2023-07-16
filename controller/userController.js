const User = require("../models/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret_key = "userSchema";

// CREATE User ACC
const registerUser = async (req, res) => {
  // console.log('signup');

  const { name, email, password, phone, job, role } = req.body;

  const existingUser = await User.findOne({ email: email });
  if (!existingUser) {
    const hashPass = await bcrypt.hash(password, 10);
    try {
      const Users = await User.create({
        name: name,
        email: email,
        password: hashPass,
        phone: phone,
        job: job,
        role: role,
      });

      const token = jwt.sign({ email: Users.email, id: Users._id }, secret_key);
      console.log("Token is " + token);

      res.status(200).json({
        Users: Users,
        token: token,
      });
    } catch (error) {
      res.status(500).json({
        errorMessage: "crendital error in UserSignin",
      });
    }
  } else {
    res.status(404).json({
      errorMessage: "User already exists!",
    });
  }
  //   console.log(name, email, password, phone, job);
};

// User LOGIN
const loginUser = async (req, res) => {
  //   console.log("OK User login");
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    // findOne check then get all data

    if (!existingUser) {
      res.status(404).json({
        errorMessage: "User not found!",
      });
    } else {
      const vertifyPass = bcrypt.compare(password, existingUser.password);

      if (!vertifyPass) {
        res.status(400).json({
          errorMessage: "Password wrong!",
        });
      } else {
        const token = jwt.sign(
          {
            email: existingUser.email,
            id: existingUser._id,
          },
          secret_key
        );
        res.status(200).json({
          existingUser: existingUser,
          token: token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "crendital error in UserLogin",
    });
  }
};

module.exports = { registerUser, loginUser };
