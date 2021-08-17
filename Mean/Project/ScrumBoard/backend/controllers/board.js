const Board  = require('../models/board');

const saveTask = async (req,res) => {

    if(!req.body.name || !req.body.description) return res.status(400).send("Incomplete data");

}

module.exports = {saveTask};