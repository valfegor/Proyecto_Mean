//va a validar el id del usuario.

const User = require('../models/user');
const mongoose = require("mongoose");

//valida el json web token y toma los datos y los guarda a req.user luego hacemos una validacion del pay load y lo buscamos en la base de datos.

const user = async (req,res,next) => {
   //requerimos a mongoose
    //esta linea lo que hace es lo siguiene se utiliza mongoose para validar es decir valida si es un formato valido de mongo , opcion en caso tal donde no se permita agregar otro middleware , es decir valida si es un usuario de mongo o es inyectado.
    //es una validacion
    /*
    const validId = mongoose.Types._ObjectId.isValid(req.user.id);
    if(!validId) return res.status(400).send("Failed the process invalid ID");
    */

    const validId = mongoose.Types.ObjectId.isValid(req.user._id);
    if(!validId) return res.status(400).send("Process failed");

    const user = await User.findById(req.user._id);

    if(!user) return res.status(400).send("Authorization denied :");

    next();
}

module.exports = user
