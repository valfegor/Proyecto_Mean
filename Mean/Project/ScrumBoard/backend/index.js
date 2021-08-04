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