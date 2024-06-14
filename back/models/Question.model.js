const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: String,
  questionId: Number,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;