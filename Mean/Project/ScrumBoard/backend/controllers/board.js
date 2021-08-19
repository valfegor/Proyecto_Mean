const Board  = require('../models/board');


//importamos moongose

const mongoose = require("mongoose");

const saveTask = async (req,res) => {

    if(!req.body.name || !req.body.description) return res.status(400).send("Incomplete data");


    const board = new Board({
        //busqueda internamente
        userId:req.user._id,
        name:req.body.name,
        description:req.body.description,
        taskStatus:"to-do",
    });

    const result = await board.save();

    if(!result) return res.status(400).send("Error cant upload the task");


    return res.status(201).send({result});

}


const listTask = async (req,res) =>{
    //requerimos a mongoose
    //esta linea lo que hace es lo siguiene se utiliza mongoose para validar es decir valida si es un formato valido de mongo , opcion en caso tal donde no se permita agregar otro middleware , es decir valida si es un usuario de mongo o es inyectado.
    //es una validacion
    const validId = mongoose.Types._ObjectId.isValid(req.user.id);
    if(!validId) return res.status(400).send("Failed the process invalid ID");

}


const updateTask = async (req,res) => {

}

//un usuario puede tener multiples tareas por lo tanto si necesitamos del eliminar , ya que esto consume en base.   
const deleteTask = async (req,res) => {

}



module.exports = {saveTask,listTask,updateTask,deleteTask};