const chuckNorrisJoke = async (
  birthYear,
  SurprizeMeStats,
  SurprizeMeResponse
) => {
  if (birthYear <= 2000) {
    var jokes = [
      "I ate a clock yesterday, it was very time-consuming.",
      "I failed math so many times at school, I can’t even count",
      "When life gives you melons, you might be dyslexic",
      "Never trust atoms; they make up everything.",
    ];
    var joke = jokes[Math.floor(Math.random() * jokes.length)];
    resData = {
      joke,
      type: "chuck-norris-joke",
    };
    let resDb = new SurprizeMeResponse({
      type: resData.type,
      result: resData.joke,
    });
    await resDb.save();
    let data = await SurprizeMeStats.findOne();

    if (!data) {
      let newData = new SurprizeMeStats({
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
      data: resData,
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
