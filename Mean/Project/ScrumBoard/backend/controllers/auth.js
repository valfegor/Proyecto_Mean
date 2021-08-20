const bcrypt = require("bcrypt");

const User = require("../models/user");


//funcion con el usuario se va a logear.

//llega un json con el usuario y password

//vamos a buscar a la base de datos si ese correo ya existe.
const login = async(req,res)=>{ 
    
    //con el email que me llego voy a buscar a alguien en la base de datos. 
    let user = await User.findOne({email:req.body.email});

    if(!user)return res.status(401).send("incorrect email or password")
    
    console.log(user.dbStatus)
    if(user.dbStatus === false) return res.status(400).send('Sorry this user is not active');

    //elbcryptn os ayuda a comprar una contraseña encriptada con una normalita.

    //nos ayuda a comparar si ese 1234 se puede comprar o es igual al password.

    //necesita del password. y re quiere de la contraseña que ingresa el usuario
    const hash = await bcrypt.compare(req.body.password, user.password);
    if (!hash)
        return res
            .status("400")
            .send("invalid credentials");

    //si todo sale bien vamos a devolver un token con esos usuarios.

    try {
        const jwtToken = user.generateJWT();
        return res.status(200).send({jwtToken})
    } catch (e) {
        return res.status(400).send("login error");
    }
}   


module.exports = {login}