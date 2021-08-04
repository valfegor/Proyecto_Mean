const mongoose = require("mongoose");

//creamos una funcion flecha que nos ayuda a conectar a la bd.

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.BD_CONNECTION,{
            useNewUrlParser:true,
            useFindAndModify:false,
            useCreateIndex:true,
            useUnifiedTopology:true
        });
        console.log("Connection with MongoDB:OK");    
    } catch (error) {
        
    }   
}