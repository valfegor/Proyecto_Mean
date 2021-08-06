//importamos la libreria el modulo de moongose , esto nos ayuda con todo lo de mong
//nos ayuda a crear el esquema de la base de datos
const mongoose = require("mongoose");

//vamos a crear el esquema o diagrama del rol.
//moongose tiene una libreria interna que se llama esquema
//queremos que se guarde un JSON
//creamos las reglas de que es lo que quiero guardar
const roleSchema = new mongoose.Schema({
  name: string,
  description: string,
  //por defecto guarda la fecha del sistema , es la fecha del sistema del servidor de mongo
  date: { type: Date, default: Date.now },
  bdStatus: boolean,
});

//cuando lleguen los datos va a ir a mongo a hacer el registro
//lo guarda en la coleccion rol 
const role = mongoose.model('role',roleSchema)

module.exports = role;