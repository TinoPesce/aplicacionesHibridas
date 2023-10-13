const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    titulo: {
      type: String,
      required: true,
    },
    anio: {
      type: Number,
      required: true,
    },
    genero: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'genero', 
      required: true
    }
  });
  

module.exports = mongoose.model('Pelicula', peliculaSchema);
