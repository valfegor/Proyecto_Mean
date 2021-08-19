const role = require("../models/role");

const admin = async (req, res, next) => {
  //informacion del usuario nombre etc , rol , todo eso se guarda en request.user , cuando hacemos el login al final se envia en el payload
  let role = await Role.findById(req.user.roleId);

  if (!role)
    return res.status(400).send("process failed : Sorry no role existant");

  if (role.name === "admin") next();
  else return res.status(400).send("Process failed: Unauthorized user");
};

module.exports = admin;
