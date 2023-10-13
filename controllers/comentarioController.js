const mongoose = require('mongoose');
const Comentario = require('../models/comentario');


exports.getTodosLosComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.find();
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getComentarioPorId = async (req, res) => {
  try {
    const comentario = await Comentario.findById(req.params.id);
    res.json(comentario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.crearNuevoComentario = async (req, res) => {
  const comentario = new Comentario({
    texto: req.body.texto,

  });

  try {
    const nuevoComentario = await comentario.save();
    res.status(201).json(nuevoComentario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.actualizarComentario = async (req, res) => {
  try {
    const comentario = await Comentario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(comentario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.eliminarComentario = async (req, res) => {
  try {
    await Comentario.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comentario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
