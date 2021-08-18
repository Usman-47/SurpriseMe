const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surprizeMeResponseSchema = new Schema({
  type: {
    type: String,
    enum: ["kanye-quote", "name-sum", "chuck-norris-joke"],
  },
  result: { type: String },
});

module.exports = mongoose.model("SurprizeMeResponse", surprizeMeResponseSchema);
