const Board  = require('../models/board');

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

}


const updateTask = async (req,res) => {

}


const deleteTask = async (req,res) => {

}



module.exports = {saveTask,listTask,updateTask,deleteTask};