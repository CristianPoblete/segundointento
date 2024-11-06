import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import axios from 'axios';

const Inicio = () => {
  const { usuario } = useContext(UsuarioContext);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await axios.get('http://localhost:3000/api/peliculas');
        if (respuesta.data.length === 0) {
          // Crear películas si no hay ninguna
          const peliculasCrear = [
            { title: "Pelicula 1", overview: "Descripción de la película 1" },
            { title: "Pelicula 2", overview: "Descripción de la película 2" },
            { title: "Pelicula 3", overview: "Descripción de la película 3" },
          ];
          await axios.post('http://localhost:3000/api/peliculas', peliculasCrear);
          setPeliculas(peliculasCrear);
        } else {
          setPeliculas(respuesta.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    obtenerPeliculas();
  }, []);

  return (
    <div className="container mt-5">
      <div className="alert alert-info">
        <h2>Bienvenido a PELISPELIS {usuario.nombre}</h2>
      </div>
   
      <ul>
        {peliculas.map((pelicula, index) => (
          <li key={index}>
            <h3>{pelicula.title}</h3>
            <p>{pelicula.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inicio;