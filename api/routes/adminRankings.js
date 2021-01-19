const express = require('express');
const router = express.Router();

const adminRankingController = require('../controllers/adminRankings');
router.get("/get", adminRankingController.get)
router.patch("/update", adminRankingController.update)


module.exports = router;