//seguridad del login.

const jwt = require('jsonwebtoken');

//el middleware permite validar si el usuario esta autorizado o no para generar su login.


const auth = async (req, res, next) => {
    //estoy en la parte de autorization , es decir se va al authorization del header.
    let jwtToken = req.header("Authorization");

    //si no hay token.

    if(!jwtToken) return res.status(400).send("Authorization denied : No token");

    //Es una funcion o metodo del string es decir separa , aqui necesito separar el token , y separo por espacio (bearer token TOKEN);
    //devuelve un array es decir genera un array de la siguiente manera Bearer ,  token , token en una posicion del array se guarda sin el espacio si tiene espacio 
    //si en la posicion 1 no hay ningun token
    jwtToken.split(" ")[1];

    if(!jwtToken) return res.status(400).send("Authorization denied : No token");
}