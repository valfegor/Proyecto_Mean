//necesitamos express
//para manejar rutas necesitamos un servidor
const express = require('express');

const router = express.Router();

//necesitamos el controlador , el codigo a dodne va a ir una vez se use una url o una api-.
//el controlador
const RoleController = require("../controllers/role");

//GET POST PUT DELETE
//el index genera automaticamente esto
//http://localhost:3001/api/role/registerRole
router.post('/registerRole',RoleController.registerRole);
//http://localhost:3001/api/role/listrole
router.get('/listRole',RoleController.listRole);

//router es el que esta guardando toda la informacion
module.exports = router;