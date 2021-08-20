const express = require("express");

const router = express.Router();

const Usercontroller = require("../controllers/user");

const Auth = require("../middleware/auth");

const validateUser = require("../middleware/ValidateUser");

const admin = require("../middleware/admin");

router.post("/registerUser", Usercontroller.registerUser);

//http://localhost:3001/api/user/listUser/Peppa
router.get("/listUser/:name?", Auth, validateUser, Usercontroller.listUser);


module.exports = router;
