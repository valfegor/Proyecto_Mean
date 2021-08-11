//controlador del usuario.

const User = require("../models/user");
const Role = require("../models/role")
const bcrypt = require("bcrypt");


const registerUser = async (req,res) => {

    if(!req.body.name || !req.body.email || !req.body.password) return res.status(401).send("incomplete data");

    let existingUser = await User.findOne({email:req.body.email});

    if(existingUser) return res.status(401).send("Process:failed already one email")

    let hash = await bcrypt.hash(req.body.password,10);

    let role = await Role.findOne({name:"user"});

    if(!role) return res.status(401).send("Process failed : No role Was Assigned");


    let user = new User({
            name:req.body.name,
            email:req.body.email,
            password:hash,
            roleId:role._id,
    });




}


const listUser = async (req,res) => {

}


module.exports = {registerUser,listUser}