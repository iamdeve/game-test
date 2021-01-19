const express = require('express');
const router = express.Router();

const userController = require('../controllers/userRankings');
router.get("/get/:id", userController.get)
router.patch("/update",  userController.update)


module.exports = router;