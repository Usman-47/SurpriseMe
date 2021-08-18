const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surprizeMeStatsSchema = new Schema({
  stats: {
    requests: { type: Number },
    distribution: [
      {
        type: {
          type: String,
        },
        count: { type: Number },
      },
    ],
  },
});

module.exports = mongoose.model("SurprizeMeStats", surprizeMeStatsSchema);
