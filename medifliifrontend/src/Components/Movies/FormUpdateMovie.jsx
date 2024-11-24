import React, { useState } from 'react';
import moviesServices from '../../Controller/movieController';

export default function FormUpdateMovie () {
    const [movieData, setMovieData] = useState({
        idMovie: '',
        title: '',
        duration: '',
        urlVideo: '',
        urlTitlePage: '',
        releaseDate: '',
        synopsis: '',
        description: '',
        isSuscription: '',
        language: [],
        category: [],
        character: [],
        participant: [],
        trailer: ''
    });
    const [error, setError] = useState(''); // Estado para manejar errores
    const [successMessage, setSuccessMessage] = useState(''); // Estado para manejar mensajes de éxito

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovieData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleArrayChange = (e) => {
        const { name, value } = e.target;
        setMovieData((prevData) => {
            const updatedArray = [...prevData[name], value];
            return {
                ...prevData,
                [name]: updatedArray
            };
        });
    };

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setMovieData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        try {
            // Llamada a la función updateMovie con los datos del formulario
            const response = await moviesServices.updateMovie(movieData);
            if (response.success) {
                setSuccessMessage('Película actualizada con éxito');
            } else {
                setError('Hubo un error al actualizar la película');
            }
        } catch (error) {
            console.error('Error al actualizar la película:', error);
            setError('Hubo un problema al realizar la solicitud');
        }
    };

    return (
        <div className="card">
            <h3 className="text-center">Modificar película</h3>
            <div className="card-body">
                <form onSubmit={handleFormSubmit}>

                    <input type="hidden" name="_method" value="PUT" />

                    <p>Nota: Los parámetros con * son obligatorios</p>

                    <span>¿Cuál es el identificador de la película?*</span>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="idMovie"
                        placeholder="idMovie 1"
                        required
                        value={movieData.idMovie}
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿Cuál es el título de la película?</span>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="title"
                        value={movieData.title}
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿Cuál es la duración (en minutos) de la película?</span>
                    <input
                        type="number"
                        className="form-control mb-3"
                        name="duration"
                        value={movieData.duration}
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿Cuál es la URL de la película?</span>
                    <input
                        type="url"
                        className="form-control mb-3"
                        name="urlVideo"
                        value={movieData.urlVideo}
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿Cuál es la URL de la portada de la película?</span>
                    <input
                        type="url"
                        className="form-control mb-3"
                        name="urlTitlePage"
                        value={movieData.urlTitlePage}
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿Cuál es la fecha de estreno?</span>
                    <input
                        type="date"
                        className="form-control mb-3"
                        name="releaseDate"
                        value={movieData.releaseDate}
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿Cuál es la sinopsis de la película?</span>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="synopsis"
                        value={movieData.synopsis}
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿Cuál es la descripción de la película?</span>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="description"
                        value={movieData.description}
                        onChange={handleChange}
                    />

                    <p>¿Suscripción necesaria?</p>
                    <input
                        type="radio"
                        id="yes"
                        name="isSuscription"
                        value="True"
                        checked={movieData.isSuscription === "True"}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor="yes">Sí</label><br />
                    <input
                        type="radio"
                        id="no"
                        name="isSuscription"
                        value="False"
                        checked={movieData.isSuscription === "False"}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor="no">No</label><br />

                    <p>¿Para qué idiomas está disponible?</p>
                    <input
                        type="number"
                        min="1"
                        name="language[]"
                        placeholder="idLanguage 1"
                        onChange={handleArrayChange}
                    />
                    <br />
                    <input
                        type="number"
                        min="1"
                        name="language[]"
                        placeholder="idLanguage 2"
                        onChange={handleArrayChange}
                    />
                    <br />
                    <input
                        type="number"
                        min="1"
                        name="language[]"
                        placeholder="idLanguage 3"
                        onChange={handleArrayChange}
                    />
                    <br />

                    <p>¿Qué categorías tiene asociadas?</p>
                    <input
                        type="number"
                        min="1"
                        name="category[]"
                        placeholder="idCategory 1"
                        onChange={handleArrayChange}
                    />
                    <br />
                    <input
                        type="number"
                        min="1"
                        name="category[]"
                        placeholder="idCategory 2"
                        onChange={handleArrayChange}
                    />
                    <br />

                    <p>¿Qué personajes principales forman parte de la película?</p>
                    <input
                        type="number"
                        min="1"
                        name="character[]"
                        placeholder="idCharacter 1"
                        onChange={handleArrayChange}
                    />
                    <br />
                    <input
                        type="number"
                        min="1"
                        name="character[]"
                        placeholder="idCharacter 2"
                        onChange={handleArrayChange}
                    />
                    <br />
                    <input
                        type="number"
                        min="1"
                        name="character[]"
                        placeholder="idCharacter 3"
                        onChange={handleArrayChange}
                    />
                    <br />

                    <p>¿Quiénes son sus intérpretes?</p>
                    <input
                        type="number"
                        min="1"
                        name="participant[]"
                        placeholder="idParticipant 1"
                        onChange={handleArrayChange}
                    />
                    <br />
                    <input
                        type="number"
                        min="1"
                        name="participant[]"
                        placeholder="idParticipant 2"
                        onChange={handleArrayChange}
                    />
                    <br />
                    <input
                        type="number"
                        min="1"
                        name="participant[]"
                        placeholder="idParticipant 3"
                        onChange={handleArrayChange}
                    />
                    <br />

                    <span>¿Qué tráiler se adjunta?</span>
                    <input
                        type="number"
                        name="trailer"
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <button className="btn btn-primary" type="submit">Modificar</button>
                </form>

                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            </div>
        </div>
    );
};
