const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  answer: String,
  answerId: Number,
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;