const mongoose = require("mongoose");

//creamos una funcion flecha que nos ayuda a conectar a la bd.

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.BD_CONNECTION,{})    
    } catch (error) {
        
    }   
}