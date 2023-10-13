const mongoose = require('mongoose');
const Actor = require('../models/actor');


exports.getTodosLosActores = async (req, res) => {
  try {
    const actores = await Actor.find();
    res.json(actores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getActorPorId = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    res.json(actor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.crearNuevoActor = async (req, res) => {
  const actor = new Actor({
    nombre: req.body.nombre,
    edad: req.body.edad,

  });

  try {
    const nuevoActor = await actor.save();
    res.status(201).json(nuevoActor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.actualizarActor = async (req, res) => {
  try {
    const actor = await Actor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.eliminarActor = async (req, res) => {
  try {
    await Actor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Actor eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
