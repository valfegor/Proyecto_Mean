const express = require("express");

const router = express.Router();

const boardController = require("../controllers/board");

const Auth = require("../middleware/auth");

const validateUser = require("../middleware/ValidateUser");
//post envio de datos , get consulta trae la informacion , put envia datos pero para actualizar , delete para eliminar.
router.post("/saveTask", Auth, validateUser, boardController.saveTask);
router.get("/listTask", Auth, validateUser, boardController.listTask);
router.put("/updateTask", Auth, validateUser, boardController.updateTask);
router.delete(
  "/removeTask/:_id",
  Auth,
  validateUser,
  boardController.deleteTask
);

module.exports = router;
