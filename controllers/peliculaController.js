const mongoose = require('mongoose');
const Pelicula = require('../models/pelicula');
const Genero = require('../models/genero');


exports.getTodasLasPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getPeliculaPorId = async (req, res) => {
    try {
      const pelicula = await Pelicula.findById(req.params.id).populate('genero');
      res.json(pelicula);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


exports.crearNuevaPelicula = async (req, res) => {
    const pelicula = new Pelicula({
      titulo: req.body.titulo,
      anio: req.body.anio,
      genero: req.body.genero 
    });
  
    try {
      const nuevaPelicula = await pelicula.save();
      res.status(201).json(nuevaPelicula);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


exports.actualizarPelicula = async (req, res) => {
  try {
    const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pelicula);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.eliminarPelicula = async (req, res) => {
  try {
    await Pelicula.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pelicula eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
