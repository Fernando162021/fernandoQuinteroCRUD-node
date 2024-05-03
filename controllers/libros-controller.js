const Libro = require("../models/libro");

//CRUD
//Create
function createLibro(req, res) {
    console.log("Creando un libro...");
    console.log(req.body);
    let libro = new Libro({
        nombre: req.body.nombre,
        isbn: req.body.isbn,
        autor: req.body.autor,
    });
    libro.save().then(result => { 
        console.log(result) 
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result,
        })
    })

    
}

function updateLibro(req, res) {

    console.log("Actualizando libro...");
    const libroId = req.params.id; // id de de la tarea a actualizar
    const newLibro = req.body;
    // Body call
    Libro.findByIdAndUpdate(libroId, newLibro, { new: true }).then((result) => {
        
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    })
    .catch( (error) => {
        console.log("Error:",error)
        if (error) {
            return res.status(400).json({
                error: true,
                message: "Error updating",
                code: 0
            });
        }
    });
}


function findAllLibros(req, res) {
    console.log("Obteniendo todos los libros...");
    console.log(req.body);

    Libro.find().then( (result) => {
        
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Cliente error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    })
    .catch( (error) => {
        console.log("Error:",error);
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
    });
}


function deleteLibro(req, res) {
    console.log("Eliminando un libro...");
    const libroId = req.params.id;
   

    Libro.deleteOne({ _id: libroId }).then( (result) => {
       console.log("result delete:",result)
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Cliente error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    })
    .catch( (error) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
    });
}

function findLibrobyISBN(req, res) {
    console.log("Obteniendo el libro por isbn...");
    const libro = req.params.isbn
    console.log(req.body);

    Libro.find({isbn : libro}).then( (result) => {
        
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Cliente error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    })
    .catch( (error) => {
        console.log("Error:",error);
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
    });
}

module.exports = {
    createLibro,
    updateLibro,
    findAllLibros,
    deleteLibro,
    findLibrobyISBN
}