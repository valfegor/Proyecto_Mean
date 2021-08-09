//logica para registrar un rol.
//el controller es la logica de registro.
//el rol tiene que ir a registrar al modelo , a model
//vamos a importar el modelo.
//las librerias que vienen de otro desarrollador se colocan en minuscula
//si el modulo lo hice yo puedo hacerlo en mayuscula
const Role = require("../models/role");

//funcion asyncrona
//requiere de un request y un response
//request , response es lo que va a devolver
const registerRole = async (req,res) => {
    //el cuerpo del json , el request trae la url de la apli , parametros ,cors,body (el json)
    if(!req.body.name||)
};


const listRole = async (req,res) => {

};

//Exportamos las funciones , si tenemos mas , podemos agregarla a esta lista
//esto hace una aplicacion escalable
module.exports = {registerRole, listRole};