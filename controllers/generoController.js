const mongoose = require('mongoose');
const Genero = require('../models/genero');


exports.getTodosLosGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getGeneroPorId = async (req, res) => {
  try {
    const genero = await Genero.findById(req.params.id);
    res.json(genero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.crearNuevoGenero = async (req, res) => {
  const genero = new Genero({
    nombre: req.body.nombre,
    generoId: req.body.generoId, 
  });

  try {
    const nuevoGenero = await genero.save();
    res.status(201).json(nuevoGenero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.actualizarGenero = async (req, res) => {
  try {
    const genero = await Genero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(genero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.eliminarGenero = async (req, res) => {
  try {
    await Genero.findByIdAndDelete(req.params.id);
    res.json({ message: 'Género eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

