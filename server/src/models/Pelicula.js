const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    overview: { type: String, required: true },
    poster_path: { type: String, required: true }
  });

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;