const express = require('express');
const router = express.Router();
const rankController = require('../controllers/ranks');
router.get("/getAll", rankController.getAll)
router.post("/add", rankController.add)
router.get("/getAllData", rankController.getAllData)
router.delete("/delete/:id", rankController.delete)
router.patch("/update/:id", rankController.update)
router.patch("/changeRank", rankController.changeRank)



module.exports = router;