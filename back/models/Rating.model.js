const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  num: Number,
  numId: Number,
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;