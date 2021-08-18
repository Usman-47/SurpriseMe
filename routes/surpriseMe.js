var express = require("express");
var router = express.Router();
var nameSum = require("../controller/name-sum");
var chuckNorrisJoke = require("../controller/chuck-norris-joke");
var kanyeQuotes = require("../controller/kanye-quote");
var SurprizeMe = require("../models/surprizeMeSchema");
var statsData = require("../controller/stats");

router.get("/", async (req, res) => {
  let stats = [];
  let result = null;
  let code = 200;
  if (req.body.type === "chuck-norris-joke") {
    let data = req.query;
    result = await chuckNorrisJoke(data.birthYear, SurprizeMe);
    console.log(result);
  } else if (req.body.type === "kanye-quote") {
    let data = req.query;
    result = await kanyeQuotes(data.birthYear, data.name, SurprizeMe);
  } else if (req.body.type === "name-sum") {
    let data = req.query;
    result = nameSum(data.name, SurprizeMe);
  } else {
  }
  return res.status(result.code).json({
    data: result,
  });
});
router.get("/stats", async (req, res) => {
  result = await statsData(SurprizeMe);
  return res.status(result.code).json({
    result,
  });
});
module.exports = router;
