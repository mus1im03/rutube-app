const { Router } = require("express");
const { ratingsController } = require('../controllers/rating.controller')

const router = Router();

router.get("/rating", ratingsController.getRating);
router.post("/rating", ratingsController.postRating);

module.exports = router;