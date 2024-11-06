import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EliminarPeliculaPage = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [selectedPelicula, setSelectedPelicula] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/peliculas')
      .then(response => {
        setPeliculas(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleEliminarPelicula = () => {
    axios.delete(`http://localhost:8000/api/peliculas/${selectedPelicula}`)
      .then(response => {
        setPeliculas(peliculas.filter(pelicula => pelicula._id !== selectedPelicula));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSelectPelicula = (event) => {
    setSelectedPelicula(event.target.value);
  };

  return (
    <div>
      <h1>Eliminar película</h1>
      <form>
        <select value={selectedPelicula} onChange={handleSelectPelicula}>
          {peliculas.map(pelicula => (
            <option key={pelicula._id} value={pelicula._id}>
              {pelicula.title}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleEliminarPelicula}>
          Eliminar película
        </button>
      </form>
      <ul>
        {peliculas.map(pelicula => (
          <li key={pelicula._id}>
            {pelicula.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EliminarPeliculaPage;