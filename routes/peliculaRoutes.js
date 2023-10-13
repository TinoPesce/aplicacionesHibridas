const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

// Rutas de películas
router.get('/', peliculaController.getTodasLasPeliculas);
router.get('/:id', peliculaController.getPeliculaPorId);
router.post('/', peliculaController.crearNuevaPelicula);
router.put('/:id', peliculaController.actualizarPelicula);
router.delete('/:id', peliculaController.eliminarPelicula);

module.exports = router;
