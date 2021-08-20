const express = require("express");

const router = express.Router();

const boardController = require("../controllers/board");

const Auth = require("../middleware/auth");

const validateUser = require("../middleware/ValidateUser");

const Upload = require("../middleware/file");


//multiparty nos permite manipular los archivis.

const multiparty = require("connect-multiparty");
//todo lo que me brinda lo guardo en una variable
const mult = multiparty();
//post envio de datos , get consulta trae la informacion , put envia datos pero para actualizar , delete para eliminar.
router.post("/saveTask", Auth, validateUser, boardController.saveTask);
router.post("/saveTaskImg",mult,Upload, Auth, validateUser, boardController.saveTaskimg);
router.get("/listTask", Auth, validateUser, boardController.listTask);
router.put("/updateTask", Auth, validateUser, boardController.updateTask);
router.delete(
  "/removeTask/:_id",
  Auth,
  validateUser,
  boardController.deleteTask
);

module.exports = router;
