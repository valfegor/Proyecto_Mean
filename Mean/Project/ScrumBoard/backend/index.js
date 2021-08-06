const express = require('express');
//libreria de express modules , nos permite crear un servidor.
//debemos tener una libreria que se encargue

const cors = require('cors');
//cors ayuda para que las pautas y las conexiones sean correctas , que todo este en orden.

//el modulo esta en ./db/db esta un archivo que se llama db
//const nombre_libreria = require("nombre_libreria");

const {dbConnection} = require('./db/db')

//requiere la libreria que instalamos dotenv para configurar todas las variables de entorno
//si no esta esta linea genera fallos a la hora de generar los archivos.

require('dotenv').config();

//todo el servidor se utiliza 
//aqui se construye el servidor express
const app = express();

//nuestro servidor va a utilizar todo lo de express , va a utilizar formato .json
//las reglas de backend seran utilizadas por cors
app.use(express.json());
app.use(cors());

//la aplicacion se conecta por medio de un puerto es decir va a escuchar el siguiente puerto.
//el servidor backend es el puerto 3001 , cuando se conecte al servidor va a enviar (el servidor esta corriendo en el puerto 3001)
app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))

//no olvidar se debe ejecutar el servidor.
dbConnection();