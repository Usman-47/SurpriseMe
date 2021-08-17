const kanyeQuotes = (birthYear, name) => {
  const splitName = name.split("");
  if (splitName[0] === "a" || splitName[0] === "z") {
    return {
      msg: "start with a and z",
      status: false,
      code: 400,
    };
  }
  if (birthYear > 2000) {
    var quotes = [
      "I ate a clock yesterday, it was very time-consuming.",
      "I failed math so many times at school, I can’t even count",
      "When life gives you melons, you might be dyslexic",
      "Never trust atoms; they make up everything.",
    ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    return {
      data: quote,
      status: true,
      code: 200,
    };
  } else {
    return {
      msg: "birthYear not correct",
      status: false,
      code: 400,
    };
  }
};
module.exports = kanyeQuotes;
