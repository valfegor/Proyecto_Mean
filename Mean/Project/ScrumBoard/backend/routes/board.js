const express = require('express');

const router = express.Router();

const boardController = require('../controllers/board');

const Auth = require('../middleware/auth');

const validateUser = require('../middleware/ValidateUser');

router.post("/saveTask",Auth,validateUser,boardController.saveTask);

module.exports = router;