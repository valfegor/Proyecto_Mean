//Se van a guardar los datos del usuario.

const mongoose = require("mongoose");

//construccion de la bd board
const boardSchema = new mongoose.Schema({
    userId:{ type: mongoose.Schema.ObjectId, ref: "user" },
    name:String,
    description:String,
    taskStatus:String,
    imageUrl:String,
    date: { type: Date, default: Date.now },
});


const board = mongoose.model("board",boardSchema);

module.exports = board;