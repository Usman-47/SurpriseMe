function str_split(string, split_length) {
  if (split_length == null) {
    split_length = 1;
  }
  if (string == null || split_length < 1) {
    return false;
  }
  string += "";
  var chunks = [],
    pos = 0,
    len = string.length;
  while (pos < len) {
    chunks.push(string.slice(pos, (pos += split_length)));
  }

  return chunks;
}

const nameSum = async (name, SurprizeMeStats, SurprizeMeResponse) => {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var splitted_string = str_split(name);
  const splitName = name.split("");
  if (splitName[0] === "q") {
    return {
      msg: "start with q ",
      status: false,
      code: 400,
    };
  }
  var nameCount = 0;
  for (i = 0; i < splitted_string.length; i++) {
    var letterPosition = alphabet.indexOf(splitted_string[i]) + 1;
    nameCount = nameCount + letterPosition;
  }
  resData = {
    nameCount,
    type: "name-sum",
  };
  let resDb = new SurprizeMeResponse({
    type: resData.type,
    result: resData.nameCount,
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
  count = data.stats.distribution[1].count;

  count = count + 1;
  data.stats.distribution[1].type = "name-sum";
  data.stats.distribution[1].count = count;
  await data.save();
  return {
    data: resData,
    status: true,
    code: 200,
  };
};

module.exports = nameSum;
