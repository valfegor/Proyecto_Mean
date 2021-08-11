const express = require('express');

const router = express.Router();

const Usercontroller = require("../controllers/user");

router.post('/registerUser',Usercontroller.registerUser);

//http://localhost:3001/api/user/listUser/Peppa
router.get('/listUser/:name?',Usercontroller.listUser);

module.exports = router;