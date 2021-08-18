const statsData = async (SurprizeMe) => {
  let data = await SurprizeMe.findOne();
  let requests =
    data.stats.distribution[0].count +
    data.stats.distribution[1].count +
    data.stats.distribution[2].count;
  data["requests"] = 2;
  console.log(data);
  return {
    data: data.stats,
    status: true,
    code: 200,
  };
};
module.exports = statsData;
