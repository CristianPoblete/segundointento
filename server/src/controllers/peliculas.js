const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  title: String,
  overview: String,
  poster_path: String
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;