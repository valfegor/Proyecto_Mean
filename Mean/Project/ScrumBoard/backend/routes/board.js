const express = require('express');

const router = express.Router();

const boardController = require('../controllers/board');

router.post("/saveTask",boardController.saveTask);

module.exports = router;