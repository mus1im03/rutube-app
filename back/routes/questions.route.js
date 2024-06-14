const { Router } = require("express");
const { questionsController } = require('../controllers/question.controller')

const router = Router();

router.get("/question", questionsController.getQuestions);
router.post("/question", questionsController.postQuestion);

module.exports = router;