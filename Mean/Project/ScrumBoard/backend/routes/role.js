//necesitamos express
//para manejar rutas necesitamos un servidor
const express = require("express");

const router = express.Router();

//necesitamos el controlador , el codigo a dodne va a ir una vez se use una url o una api-.
//el controlador
const RoleController = require("../controllers/role");

const Auth = require("../middleware/auth");

const validateUser = require("../middleware/ValidateUser");

const Admin = require("../middleware/admin");

//GET POST PUT DELETE
//el index genera automaticamente esto
//http://localhost:3001/api/role/registerRole
router.post("/registerRole",Auth,validateUser,Admin,RoleController.registerRole);
//http://localhost:3001/api/role/listrole
router.get("/listRole",Auth,validateUser,Admin,RoleController.listRole);

//router es el que esta guardando toda la informacion
module.exports = router;
