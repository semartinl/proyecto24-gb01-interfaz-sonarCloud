import React, { useState } from 'react';
import moviesServices from '../../Controller/movieController';

export default function FormDeleteMovie () {
    const [idMovie, setIdMovie] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setIdMovie(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);

        try {
            // Llamada a la función deleteMovie con el ID de la película
            const data = await moviesServices.deleteMovie(idMovie);

            // Mostrar un mensaje dependiendo de la respuesta
            if (data.success) {
                setMessage('Película eliminada exitosamente.');
            } else {
                setError('No se pudo eliminar la película.');
            }
        } catch (error) {
            console.error('Error al eliminar la película:', error);
            setError('Hubo un problema al eliminar la película.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <h3 className="text-center">Eliminar película</h3>
            <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                    <input type="hidden" name="_method" value="DELETE" />
                    <label>ID</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="idMovie"
                        min="1"
                        required
                        placeholder="idMovie 1"
                        value={idMovie}
                        onChange={handleChange}
                    />
                    <button className="btn btn-primary" type="submit" disabled={loading}>
                        {loading ? 'Eliminando...' : 'Eliminar'}
                    </button>
                </form>

                {message && <div className="alert alert-success mt-3">{message}</div>}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
        </div>
    );
};
