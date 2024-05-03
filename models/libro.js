const moongose = require("mongoose")

const libroSchema = new moongose.Schema({
    nombre: {
        type: String,
        required: true
    },

    isbn: {
        type: String,
        required: true
    },
    autor: {
        type: String, 
        required: true
    }
});

module.exports = moongose.model("Libro", libroSchema);