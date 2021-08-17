//seguridad del login.

const jwt = require('jsonwebtoken');

//el middleware permite validar si el usuario esta autorizado o no para generar su login.


const auth = async (req, res, next) => {
    //estoy en la parte de autorization , es decir se va al authorization del header.
    let jwtToken = req.header("Authorization");

    //si no hay token.

    if(!jwtToken) return res.status(400).send("Authorization denied : No token");

}