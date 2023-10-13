const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

// Rutas de comentarios
router.get('/', comentarioController.getTodosLosComentarios);
router.get('/:id', comentarioController.getComentarioPorId);
router.post('/', comentarioController.crearNuevoComentario);
router.put('/:id', comentarioController.actualizarComentario);
router.delete('/:id', comentarioController.eliminarComentario);

module.exports = router;
