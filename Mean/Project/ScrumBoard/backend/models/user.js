//mongoose se encarga  del esquema de la base de datos
const mongoose = require("mongoose");
//libreria para la seguridad de nuestra app.
//el jsonwebtoken
const jwt = require("jsonwebtoken");

//libreria para fechas momento.

const moment = require("moment");
//se debe encriptar toda la informacion.
//invoco la construccion del schema
//el esquema ya fue creado
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  //nos traemos el mongoose que es la variable , mongoose maneja esquemas
  //apunta a la coleccion rol , es un tipo de datos que retorna un string
  roleId: { type: mongoose.Schema.ObjectId, ref: "role" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

//justo debajo del schema
//se le pasa una funcion vacia
//cuando el usuario se logee , o cuando deseemos consultar el usuario
userSchema.methods.generateJWT = function () {
  //el payload lo va a encriptar
  //this hace referencia a un tipo de variable de este archivo.
  //el this hace referencia a variables locales
  //es decir del json que envia la bd , en el payload
  return jwt.sign(
    {
      //estos datos son nuevos : que dato quiero mostrar , necesito este id , este name
      //el this hace referencia a lo local
      _id: this._id, //este valor es el object_id
      name: this.name,
      //cuando el codigo revise el JWT vea que la fecha es reciente
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

//ahora debemos exportarlo.
//va a ir todo lo que llegue a mondo y en la coleccion user va a guardar todos los datos en mongo BD
const user = mongoose.model("user", userSchema);

//siempre va el module.

module.exports = user;
