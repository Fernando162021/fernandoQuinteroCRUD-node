const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()
const app = express();
const port = 3001;
//Database Connection
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
//Obtener la conexion
const db = mongoose.connection;
//test db
db.on("Error", (error) => console.error(error))
db.once("open", () => console.log("Conexion abierta...."))
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/libros", require("./routes/libros-routes"))
app.listen(port, () => console.log("El servidor esta funcionando..."))