const express = require("express");

const router = express.Router();

const Usercontroller = require("../controllers/user");

const Auth = require("../middleware/auth");

const validateUser = require("../middleware/ValidateUser");

const Admin = require("../middleware/admin");
const { relativeTimeRounding } = require("moment");

router.post("/registerUser", Usercontroller.registerUser);

//http://localhost:3001/api/user/listUser/Peppa
router.get(
  "/listUser/:name?",
  Auth,
  validateUser,
  Admin,
  Usercontroller.listUser
);

router.post(
  "/registerAdmin",
  Auth,
  validateUser,
  Admin,
  Usercontroller.registerAdmin
);

router.put("/updateUser", Auth, validateUser, Admin, Usercontroller.updateUser);

router.put("/removeUser", Auth, validateUser, Admin, Usercontroller.deleteUser);

module.exports = router;
