const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  morgan("combined", {
    skip: function(req, res) {
      return res.statusCode < 400;
    },
    stream: accessLogStream
  })
);

app.use("/store", require("./handler"));

app.use((req, res, next) => {
  const error = new Error("404 Not Found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    status: status,
    message: error.message
  });
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log("API is running at http://localhost:" + port);
