import React, { useState } from 'react';
import axios from 'axios';

const AgregarPelicula = () => {
  const [titulo, setTitulo] = useState('');
  const [overview, setOverview] = useState('');
  const [poster_path, setPosterPath] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    const nuevaPelicula = {
      title: titulo,
      overview: overview,
      poster_path: poster_path,
    };

    try {
      console.log('Intentando enviar:', nuevaPelicula);
      const response = await axios.post('http://localhost:3000/api/peliculas', nuevaPelicula, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Respuesta del servidor:', response.data);
      setMessage('Película agregada con éxito');
      setTitulo('');
      setOverview('');
      setPosterPath('');
    } catch (error) {
      console.error('Error detallado:', error);
      if (error.response) {
        // El servidor respondió con un estado fuera del rango de 2xx
        console.error('Datos de la respuesta:', error.response.data);
        console.error('Estado de la respuesta:', error.response.status);
        console.error('Cabeceras de la respuesta:', error.response.headers);
        setMessage(`Error del servidor: ${error.response.status}`);
      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        console.error('No se recibió respuesta. Petición:', error.request);
        setMessage('No se recibió respuesta del servidor');
      } else {
        // Algo sucedió al configurar la petición que provocó un error
        console.error('Error de configuración:', error.message);
        setMessage('Error al configurar la petición');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-light">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Agregar Película</h2>
              {message && (
                <div className={`alert ${message.includes('éxito') ? 'alert-success' : 'alert-danger'}`}>
                  {message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="titulo" className="form-label">Título:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="overview" className="form-label">Descripción:</label>
                  <textarea
                    className="form-control"
                    id="overview"
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="poster_path" className="form-label">URL del Poster:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="poster_path"
                    value={poster_path}
                    onChange={(e) => setPosterPath(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Agregando...' : 'Agregar Película'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarPelicula;