const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const uri = "mongodb://127.0.0.1/surprizeMe";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var surpriseMe = require("./routes/surpriseMe");

app.use("/api", surpriseMe);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
