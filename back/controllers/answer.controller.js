const Answer = require("../models/Answer.model");

module.exports.answersController = {
  getAnswers: async (req, res) => {
    const answers = await Answer.find();

    res.json(answers);
  },

  postAnswers: async (req, res) => {
    const { answer, answerId, } = req.body;

    try {
      const answers = await Answer.create({ answer, answerId, });
      await res.json(answers);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
};