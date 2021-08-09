//logica para registrar un rol.
//el controller es la logica de registro.
//el rol tiene que ir a registrar al modelo , a model
//vamos a importar el modelo.
//las librerias que vienen de otro desarrollador se colocan en minuscula
//si el modulo lo hice yo puedo hacerlo en mayuscula
const Role = require("../models/role");

//funcion asyncrona
const registerRole = async () => {
    
};


const listRole = async () => {

};

//Exportamos las funciones , si tenemos mas , podemos agregarla a esta lista
//esto hace una aplicacion escalable
module.exports = {registerRole, listRole};