const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },

});

module.exports = mongoose.model('Actor', actorSchema);
