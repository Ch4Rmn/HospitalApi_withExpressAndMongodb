const express = require("express");
const app = express();
const port = 4004;
const db = require("./lib/db.js");
const userRouter = require("./routes/userRoute.js");
const deparmentRouter = require("./routes/deparmentRoute.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`http Method is ${req.method} and Url is ${req.url}`);
  next();
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/deparment", deparmentRouter);

app.get("/", (req, res) =>
  res.json({
    success: "success json",
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
