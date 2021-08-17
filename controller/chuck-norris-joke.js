const chuckNorrisJoke = (birthYear) => {
  if (birthYear <= 2000) {
    var jokes = [
      "I ate a clock yesterday, it was very time-consuming.",
      "I failed math so many times at school, I can’t even count",
      "When life gives you melons, you might be dyslexic",
      "Never trust atoms; they make up everything.",
    ];
    var joke = jokes[Math.floor(Math.random() * jokes.length)];
    return {
      data: joke,
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
module.exports = chuckNorrisJoke;
