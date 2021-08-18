var express = require("express");
var router = express.Router();
var nameSum = require("../controller/name-sum");
var chuckNorrisJoke = require("../controller/chuck-norris-joke");
var kanyeQuotes = require("../controller/kanye-quote");
var SurprizeMeStats = require("../models/surprizeMeStatsSchema");
var SurprizeMeResponse = require("../models/surprizeMeResponseSchema");
var statsData = require("../controller/stats");

router.get("/surprise", async (req, res) => {
  console.log(req.query);
  if (!req.query.name || !req.query.birth_year) {
    return res.status(400).json({
      msg: "name and birth_year are required",
      status: false,
      code: 400,
    });
  }
  let result = null;
  if (req.body.type === "chuck-norris-joke") {
    let data = req.query;
    result = await chuckNorrisJoke(
      data.birth_year,
      SurprizeMeStats,
      SurprizeMeResponse
    );
    console.log(result);
  } else if (req.body.type === "kanye-quote") {
    let data = req.query;
    result = await kanyeQuotes(
      data.birth_year,
      data.name,
      SurprizeMeStats,
      SurprizeMeResponse
    );
  } else if (req.body.type === "name-sum") {
    let data = req.query;
    result = await nameSum(data.name, SurprizeMeStats, SurprizeMeResponse);
  } else {
  }
  return res.status(result.code).json({
    data: result,
  });
});
router.get("/stats", async (req, res) => {
  result = await statsData(SurprizeMeStats);
  return res.status(result.code).json({
    result,
  });
});
module.exports = router;
