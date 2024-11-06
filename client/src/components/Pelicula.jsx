import React from 'react';

const Pelicula = ({ pelicula }) => {
  return (
    <div>
      <h2>{pelicula.title}</h2>
      <p>{pelicula.overview}</p>
      <img src={pelicula.poster_path} alt={pelicula.title} />
    </div>
  );
};

export default Pelicula;