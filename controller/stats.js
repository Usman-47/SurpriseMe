const statsData = async (SurprizeMe) => {
  let data = await SurprizeMe.findOne();
  if (!data) {
    return {
      msg: "No stats data found",
      status: false,
      code: 400,
    };
  }
  let requests =
    data.stats.distribution[0].count +
    data.stats.distribution[1].count +
    data.stats.distribution[2].count;
  data.stats.requests = requests;
  await data.save();
  console.log(data);
  return {
    data: data.stats,
    status: true,
    code: 200,
  };
};
module.exports = statsData;
