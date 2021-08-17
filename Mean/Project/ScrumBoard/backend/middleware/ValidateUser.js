//va a validar el id del usuario.

const User = require('../models/user');

//valida el json web token y toma los datos y los guarda a req.user luego hacemos una validacion del pay load y lo buscamos en la base de datos.

const user = async (req,res,next) => {
    const user = await User.findById(req.user._id);

    if(!user) return res.status(400).send("Authorization denied :");

    next();
}

module.exports = user
