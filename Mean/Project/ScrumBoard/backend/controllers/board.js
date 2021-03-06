const Board  = require('../models/board');


//importamos moongose

const mongoose = require("mongoose");
//manipula los ficheros que tengamos
const fs = require("fs");

//necesitamos obtener bien la ruta para extraer la imagen
const path = require("path");

const moment = require("moment");

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
    
    const board = await Board.find({userId:req.user._id});
    if(!board || board.length  === 0) return res.status(400).send("Process failed:No tasks");
    return res.status(200).send({board});

}

const saveTaskimg = async (req, res) => {

}

const updateTask = async (req,res) => {
if(!req.body._id || !req.body.name || !req.body.taskStatus ||!req.body.description) return res.status(400).send("Process failed:Incomplete data");


let board = await Board.findByIdAndUpdate(req.body._id,{
    userId:req.user._id,
    name:req.body.name,
    description:req.body.description,
    taskStatus:req.body.taskStatus,
});

if(!board) return res.status(400).send("process failed : task not found");

return res.status(200).send({board});

}



//un usuario puede tener multiples tareas por lo tanto si necesitamos del eliminar , ya que esto consume en base.   
const deleteTask = async (req,res) => {
    //por el id viene acompañado a la url // el id que se envia por parametro se elimina
    const validId = mongoose.Types.ObjectId.isValid(req.params._id);
    if(!validId) return res.status(400).send("Process failed men")
const board = await Board.findByIdAndDelete(req.params._id);

if(!board || board.length  === 0) return res.status(400).send("Process failed:Task not found")

return res.status(200).send("Task deleted");
}



module.exports = {saveTask,listTask,updateTask,deleteTask,saveTaskimg};