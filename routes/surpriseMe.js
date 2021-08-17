var express = require("express");
var router = express.Router();
var nameSum = require("../controller/name-sum");
var chuckNorrisJoke = require("../controller/chuck-norris-joke");
var kanyeQuotes = require("../controller/kanye-quote");

router.get("/", (req, res) => {
  let result = null;
  let code = 200;
  if (req.body.type === "chuck-norris-joke") {
    let data = req.query;
    result = chuckNorrisJoke(data.birthYear);
    // return res.status(200).json({
    //   data: result,
    //   code: 200,
    // });
  } else if (req.body.type === "kanye-quote") {
    let data = req.query;
    result = kanyeQuotes(data.birthYear, data.name);
    // return res.status(200).json({
    //   data: result,
    //   code: 200,
    // });
  } else if (req.body.type === "name-sum") {
    let data = req.query;
    result = nameSum(data.name);
  } else {
  }
  return res.status(result.code).json({
    data: result,
  });
});
module.exports = router;
