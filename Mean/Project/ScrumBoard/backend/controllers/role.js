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
    //esto si alguno de los datos enviados es false
    if(!req.body.name||!req.body.description) return res.status(401).send("Process failed : Incomplete data");

    //validar si el rol existe o no en mongo.
    //como busco un registro o un documento en mongo
    //utilizamos una funcion asyncrona
    //la coleccion la tiene role que es el modelo
    //rol una coleccion en base de datos que se llama role.
    //coleccion .find one en los parentesis que vamos a buscar
    //(si en toda la lista , es decir viene a buscar user en la coleccion
    //request es un JSon 
    //(se va a la coleecion role , si existe , va a buscar por un parametro , name user)
    const existingRole = await Role.findOne({name: req.body.name});

    if(existingRole) return res.status(401).send("Process failer : role already exist");

    const role = new Role({
        name:req.body.name,
    })
};


const listRole = async (req,res) => {

};

//Exportamos las funciones , si tenemos mas , podemos agregarla a esta lista
//esto hace una aplicacion escalable
module.exports = {registerRole, listRole};