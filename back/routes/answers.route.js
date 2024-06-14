const { Router } = require("express");
const { answersController } = require('../controllers/answer.controller')

const router = Router();

router.get("/answer", answersController.getAnswers);
router.post("/answer", answersController.postAnswers);

module.exports = router;