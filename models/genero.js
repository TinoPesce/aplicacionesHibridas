const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  generoId: {  
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genero',
  },
 
});

module.exports = mongoose.model('Genero', generoSchema);
