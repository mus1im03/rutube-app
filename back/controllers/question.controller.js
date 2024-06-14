const Question = require("../models/Question.model");

module.exports.questionsController = {
  getQuestions: async (req, res) => {
    const questions = await Question.find();

    res.json(questions);
  },

  postQuestion: async (req, res) => {
    const { question, questionId } = req.body;

    try {
      const questions = await Question.create({ question, questionId });
      await res.json(questions);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
};