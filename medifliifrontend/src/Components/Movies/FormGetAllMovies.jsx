import React, { useState } from 'react';
import moviesServices from '../../Controller/movieController';

export default function FormGetAllMovies () {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMovies([]);

        try {
            // Llamada a la API para obtener todas las películas
            const response = moviesServices.getAllMovies();
            if (response.data && response.data.length > 0) {
                setMovies(response.data); // Asignar la lista de películas al estado
            } else {
                setError('No se encontraron películas.');
            }
        } catch (error) {
            console.error('Error al obtener las películas:', error);
            setError('Hubo un problema al obtener las películas.');
        }
    };

    return (
        <div className="card-body">
            <h3 className="text-center">Obtener todas las películas</h3>
            <form onSubmit={handleFormSubmit}>
                <button className="btn btn-primary" type="submit">Buscar</button>
            </form>

            {error && <div className="alert alert-danger mt-3">{error}</div>}

            {movies.length > 0 && (
                <div className="mt-4">
                    <h4>Lista de Películas</h4>
                    <ul className="list-group">
                        {movies.map((movie) => (
                            <li key={movie.id} className="list-group-item">
                                <strong>{movie.title}</strong><br />
                                <small><em>Duración:</em> {movie.duration} minutos</small><br />
                                <small><em>Fecha de estreno:</em> {movie.releaseDate}</small>
                                {/* Puedes agregar más detalles si lo deseas */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
