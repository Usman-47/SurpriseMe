const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surprizeMeSchema = new Schema({
  stats: {
    requests: { type: Number },
    distribution: [
      {
        type: { type: String },
        count: { type: Number },
      },
    ],
  },
});

module.exports = mongoose.model("SurprizeMe", surprizeMeSchema);
