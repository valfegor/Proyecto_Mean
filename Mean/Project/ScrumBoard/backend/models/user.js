//mongoose se encarga  del esquema de la base de datos
const mongoose = require("mongoose");

//invoco la construccion del schema
//el esquema ya fue creado
const userSchema = new mongoose.Schema({
name:String,
email:String,
password:String,
//nos traemos el mongoose que es la variable , mongoose maneja esquemas
//apunta a la coleccion rol , es un tipo de datos que retorna un string
roleId:{type:mongoose.Schema.ObjectId,ref:"role"},
date:{type:Date, default:Date.now},
dbStatus:Boolean,

});

//ahora debemos exportarlo.
//va a ir todo lo que llegue a mondo y en la coleccion user va a guardar todos los datos en mongo BD
const user = mongoose.model("user",userSchema);

//siempre va el module.

module.exports=user;