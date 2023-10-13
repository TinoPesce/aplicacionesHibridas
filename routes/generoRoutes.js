const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');

// Rutas de géneros
router.get('/', generoController.getTodosLosGeneros);
router.get('/:id', generoController.getGeneroPorId);
router.post('/', generoController.crearNuevoGenero);
router.put('/:id', generoController.actualizarGenero);
router.delete('/:id', generoController.eliminarGenero);

module.exports = router;
