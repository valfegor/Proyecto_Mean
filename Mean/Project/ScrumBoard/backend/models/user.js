//mongoose se encarga  del esquema de la base de datos
const mongoose = require("mongoose");

//invoco la construccion del schema
const userSchema = new mongoose.Schema({
name:String,
email:String,
password:String,
//nos traemos el mongoose que es la variable , mongoose maneja esquemas
//apunta a la coleccion rol
roleId:{type:mongoose.Schema.ObjectId,ref:"role"},
date:{type:Date, default:Date.now},
dbStatus:Boolean,

});