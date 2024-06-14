const Rating = require("../models/Rating.model");

module.exports.ratingsController = {
  getRating: async (req, res) => {
    const nums = await Rating.find();

    res.json(nums);
  },

  postRating: async (req, res) => {
    const { num, numId } = req.body;

    try {
      const nums = await Rating.create({ num, numId });
      await res.json(nums);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
};