const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Pelicula');

router.get('/', async (req, res) => {
  const peliculas = await Pelicula.find();
  res.json(peliculas);
});

router.get('/:id', async (req, res) => {
  const pelicula = await Pelicula.findById(req.params.id);
  res.json(pelicula);
});

router.post('/', async (req, res) => {
  const pelicula = new Pelicula(req.body);
  await pelicula.save();
  res.json(pelicula);
});

router.put('/:id', async (req, res) => {
  const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(pelicula);
});

router.delete('/:id', async (req, res) => {
  await Pelicula.findByIdAndRemove(req.params.id);
  res.json({ message: 'Pelicula eliminada' });
});

module.exports = router;