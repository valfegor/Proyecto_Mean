const Board  = require('../models/board');

const saveTask = async (req,res) => {

    if(!req.body.name || !req.body.description) return res.status(400).send("Incomplete data");


    const board = new Board({
        userId:req.body.userId,
        name:req.body.name,
        description:req.body.description,
        taskStatus:"to-do",
    });

    const result = await board.save();

    if(!result) return res.status(400).send("Error cant upload the task");


    return res.status(201).send({result});

}

module.exports = {saveTask};