import { Pelicula } from '../models/Peliculas.models';

export const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las películas' });
  }
};

export const postPelicula = async (req, res) => {
  try {
    const pelicula = new Pelicula(req.body);
    await pelicula.save();
    res.json(pelicula);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la película' });
  }
};

export const putPelicula = async (req, res) => {
  try {
    const id = req.params.id;
    const pelicula = await Pelicula.findByIdAndUpdate(id, req.body, { new: true });
    res.json(pelicula);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la película' });
  }
};

export const deletePelicula = async (req, res) => {
  try {
    const id = req.params.id;
    await Pelicula.findByIdAndRemove(id);
    res.json({ message: 'Película eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la película' });
  }
};