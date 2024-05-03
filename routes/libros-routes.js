const express = require("express")
const router = express.Router()
const librosController = require("../controllers/libros-controller")

router.post("/", librosController.createLibro)
router.put("/:id", librosController.updateLibro)
router.get("/", librosController.findAllLibros)
router.get("/:isbn", librosController.findLibrobyISBN)
router.delete("/:id", librosController.deleteLibro)

module.exports = router