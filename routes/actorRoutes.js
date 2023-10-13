const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

// Rutas de actores
router.get('/', actorController.getTodosLosActores);
router.get('/:id', actorController.getActorPorId);
router.post('/', actorController.crearNuevoActor);
router.put('/:id', actorController.actualizarActor);
router.delete('/:id', actorController.eliminarActor);

module.exports = router;
