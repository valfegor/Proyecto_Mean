//nos traemos la libreria
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
        //si se conecta y todo bien , va a mostrar este mensaje
        console.log("Connection with MongoDB:OK");    
    } catch (e) {
        console.log("Error Connection to MongoDB :" , e);
        //en la consola del navegador solo va a salir este mensaje
        throw new Error("Error connecting with MongoDB");
    }   
}

module.exports = {dbConnection}