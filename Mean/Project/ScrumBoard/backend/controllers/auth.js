const bcrypt = require("bcrypt");

const User = require("../models/user");


//funcion con el usuario se va a logear.

//llega un json con el usuario y password

//vamos a buscar a la base de datos si ese correo ya existe.
const login = async(req,res)=>{ 
    
    //con el email que me llego voy a buscar a alguien en la base de datos. 
    let user = await User.findOne({email:req.body.email});

    if(!user)return res.status(401).send("")

}