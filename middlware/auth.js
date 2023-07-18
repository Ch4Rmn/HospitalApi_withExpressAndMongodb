const jwt = require("jsonwebtoken");
const secret_key = "userSchema";

const auth = (req, res, next) => {
  let token = req.headers.authorization;
  console.log("Middleware Token is" + token);

  try {
    if (token) {
      // 1.need to split token
      token = token.split(" ")[1];

      // create user with token
      const user = jwt.verify(token, secret_key);

      console.log("user is" + user);

      // user id create poh
      req.userId = user.id;
    } else {
      res.status(401).json({
        authMessage: "unauthorization error",
      });
    }

    next();
  } catch (error) {
    res.status(401).json({
      authMessage: error.message,
    });
  }
};

module.exports = auth;
