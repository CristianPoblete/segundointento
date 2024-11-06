import React, { useState, useEffect } from 'react';
import Pelicula from './Pelicula';

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/peliculas')
      .then(response => response.json())
      .then(data => setPeliculas(data));
  }, []);

  return (
    <div>
      <h1>Películas</h1>
      <ul>
        {peliculas.map(pelicula => (
          <li key={pelicula._id}>
            <Pelicula pelicula={pelicula} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Peliculas;