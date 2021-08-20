//controlador del usuario.
//recordemos que usuario tiene almacenados diferentes metodos como el
const User = require("../models/user");
const Role = require("../models/role");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(401).send("incomplete data");

  let existingUser = await User.findOne({ email: req.body.email });

  if (existingUser)
    return res.status(401).send("Process:failed already one email");

  let hash = await bcrypt.hash(req.body.password, 10);

  let role = await Role.findOne({ name: "admin" });

  if (!role)
    return res.status(401).send("Process failed : No role Was Assigned");

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    roleId: role._id,
    dbStatus: true,
  });

  let result = await user.save();

  if (!result) return res.status(401).send("Please try again");

  //aqui si se aplica el try catch

  try {
    let jwt = user.generateJWT();
    return res.status(200).send({ jwt });
  } catch (e) {
    return res.status(400).send("fallo al registrar los usuarios");
  }
};

const listUser = async (req, res) => {
  //el parametro el filtro por el cual va a buscar esto esta en rutas
  //el param tiene los parametros que tiene en la url , es lo qeu viene pegado a la url
  //expresion regular un nombre o algo parecido o un vacio
  //Expresion regular
  //populate
  let user = await User.find({ name: new RegExp(req.params["name"], "i") })
    .populate("roleId")
    .exec();

  if (!user || user.length === 0)
    return res.status(401).send("No hay usuarios");

  return res.status(200).send({ user });
};

const registerAdmin = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.roleId
  )
    return res.status(401).send("incomplete data");

  //validar si el id es correcto

  let valiId = await mongoose.Types.ObjectId.isValid(req.body.roleId);

  if (!valiId) return res.status(400).send("Invalid token");

  let existingUser = await User.findOne({ email: req.body.email });

  if (existingUser)
    return res.status(401).send("Process:failed already one email");

  let hash = await bcrypt.hash(req.body.password, 10);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    roleId: req.body.roleId,
    dbStatus: true,
  });

  let result = await user.save();

  if (!result) return res.status(401).send("Please try again");

  //aqui si se aplica el try catch

  try {
    let jwt = user.generateJWT();
    return res.status(200).send({ jwt });
  } catch (e) {
    return res.status(400).send("fallo al registrar los usuarios");
  }
};

const updateUser = async (req, res) => {
    if (
        !req.body._id   ||
        !req.body.name ||
        !req.body.email ||
        !req.body.roleId 
        
      )return res.status(400).send("Sorry");

      let pass = "";
        

        if(req.body.password){
            //si en el formulario viene el password es decir el usuario quiere editar
            //entonces se sobre escribe la contraseña
        pass = await bcrypt.hash(req.body.password,10);
        }else{
            let userFind = await User.findOne({email:req.body.email});
            pass = userFind.password
        }

      

      //modelo.

      let user  = await User.findByIdAndUpdate(req.body._id,{
          name:req.body.name,
          email:req.body.email,
          password:pass,
          roleId:req.body.roleId,
      })


      if(!user) return res.status(400).send("error editing the user");

      return res.status(200).send({user});
};

const deleteUser = async (req, res) => {
    //en el body envio el id del producto interno
    if(!req.body._id) return res.status(400).send("Incomplete data");
    //al usuario lo buscamos por el id
    const user = await User.findByIdAndUpdate(req.body._id,{
        dbStatus:false,

    });
    //acutalizamos y guardamos
    if(!user) return res.status(400).send("Sorry try again");

    return res.status(200).send({ user });
};

module.exports = {
  registerUser,
  listUser,
  registerAdmin,
  updateUser,
  deleteUser,
};
