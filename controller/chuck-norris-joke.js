const chuckNorrisJoke = async (birthYear, SurprizeMe) => {
  if (birthYear <= 2000) {
    var jokes = [
      "I ate a clock yesterday, it was very time-consuming.",
      "I failed math so many times at school, I can’t even count",
      "When life gives you melons, you might be dyslexic",
      "Never trust atoms; they make up everything.",
    ];
    var joke = jokes[Math.floor(Math.random() * jokes.length)];
    let data = await SurprizeMe.findOne();

    if (!data) {
      let newData = new SurprizeMe({
        stats: {
          reaquest: 0,
          distribution: [
            { type: "", count: 0 },
            { type: "", count: 0 },
            { type: "", count: 0 },
          ],
        },
      });
      await newData.save();
    }
    count = data.stats.distribution[0].count;

    count = count + 1;
    data.stats.distribution[0].type = "chuck-norris-joke";
    data.stats.distribution[0].count = count;
    await data.save();

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
