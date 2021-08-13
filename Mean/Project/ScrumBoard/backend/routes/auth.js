const express = require('express');

const router = express.Router();

const loginController = require('../controllers/auth');

//un login es una solicitud es un post , se envia una solicitud.

router.post("login", loginController);

module.exports = router;