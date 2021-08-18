const kanyeQuotes = async (birthYear, name, SurprizeMe) => {
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
    count = data.stats.distribution[2].count;

    count = count + 1;
    data.stats.distribution[2].type = "kanye-quote";
    data.stats.distribution[2].count = count;
    await data.save();
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
