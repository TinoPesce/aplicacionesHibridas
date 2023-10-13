const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  contenido: {
    type: String,
    required: true,
  },
  peliculaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pelicula',
    required: true,
  },

});

module.exports = mongoose.model('Comentario', comentarioSchema);
