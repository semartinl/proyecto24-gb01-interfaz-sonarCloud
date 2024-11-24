import React, { useState } from 'react';
import moviesServices from '../../Controller/movieController';

export default function FormCreateMovie () {
    const [movieData, setMovieData] = useState({
        title: '',
        duration: '',
        urlVideo: '',
        urlTitlePage: '',
        releaseDate: '',
        synopsis: '',
        description: '',
        isSuscription: 'False',
        language: [],
        category: [],
        character: [],
        participant: [],
        trailer: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMovieData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleArrayInputChange = (e, field) => {
        const { value } = e.target;
        setMovieData(prevState => ({
            ...prevState,
            [field]: [...prevState[field], value]
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new URLSearchParams();
            formData.append("title", movieData.title);
            formData.append("duration", movieData.duration);
            formData.append("urlVideo", movieData.urlVideo);
            formData.append("urlTitlePage", movieData.urlTitlePage);
            formData.append("releaseDate", movieData.releaseDate);
            formData.append("synopsis", movieData.synopsis);
            formData.append("description", movieData.description);
            formData.append("language[]", movieData.language);
            formData.append("category[]", movieData.category);
            formData.append("character[]", movieData.character);
            formData.append("participant[]", movieData.participant);
            formData.append("trailer", movieData.trailer);
            formData.append("isSuscription", movieData.isSuscription);

            const response = await moviesServices.addMovie(formData);

            if (response.data.status === "200 OK") {
                alert('Categoría añadida con éxito');
            } else {
                alert('Error al añadir la película.');
            }
        } catch (error) {
            console.error('Error al añadir la película:', error);
            alert('Hubo un problema al añadir la película.');
        }
    };

    return (
        <div className="card">
            <h3 className="text-center">Añadir película</h3>
            <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                    <p>Nota: Los parámetros con * son obligatorios</p>

                    <span>¿Cuál es el título de la película?*</span>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="title"
                        value={movieData.title}
                        onChange={handleInputChange}
                        required
                    />
                    <br />

                    <span>¿Cuál es la duración (en minutos) de la película?*</span>
                    <input
                        type="number"
                        className="form-control mb-3"
                        name="duration"
                        value={movieData.duration}
                        onChange={handleInputChange}
                        required
                    />
                    <br />

                    <span>¿Cuál es la URL de la película?</span>
                    <input
                        type="url"
                        className="form-control mb-3"
                        name="urlVideo"
                        value={movieData.urlVideo}
                        onChange={handleInputChange}
                    />
                    <br />

                    <span>¿Cuál es la URL de la portada de la película?</span>
                    <input
                        type="url"
                        className="form-control mb-3"
                        name="urlTitlePage"
                        value={movieData.urlTitlePage}
                        onChange={handleInputChange}
                    />
                    <br />

                    <span>¿Cuál es la fecha de estreno?</span>
                    <input
                        type="date"
                        className="form-control mb-3"
                        name="releaseDate"
                        value={movieData.releaseDate}
                        onChange={handleInputChange}
                    />
                    <br />

                    <span>¿Cuál es la sinopsis de la película?</span>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="synopsis"
                        value={movieData.synopsis}
                        onChange={handleInputChange}
                    />
                    <br />

                    <span>¿Cuál es la descripción de la película?</span>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="description"
                        value={movieData.description}
                        onChange={handleInputChange}
                    />

                    <p>¿Disponible con suscripción?</p>
                    <input
                        type="radio"
                        id="yes"
                        name="isSuscription"
                        value="True"
                        checked={movieData.isSuscription === 'True'}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="yes">Sí</label><br />
                    <input
                        type="radio"
                        id="no"
                        name="isSuscription"
                        value="False"
                        checked={movieData.isSuscription === 'False'}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="no">No</label><br />

                    <p>¿Para qué idiomas está disponible?</p>
                    <input
                        type="number"
                        min="1"
                        name="language[]"
                        placeholder="idLanguage 1"
                        onBlur={(e) => handleArrayInputChange(e, 'language')}
                    />
                    <br />

                    <p>¿Qué categorías tiene asociadas?</p>
                    <input
                        type="number"
                        min="1"
                        name="category[]"
                        placeholder="idCategory 1"
                        onBlur={(e) => handleArrayInputChange(e, 'category')}
                    />
                    <br />

                    <p>¿Qué personajes principales forman parte de la película?</p>
                    <input
                        type="number"
                        min="1"
                        name="character[]"
                        placeholder="idCharacter 1"
                        onBlur={(e) => handleArrayInputChange(e, 'character')}
                    />
                    <br />

                    <p>¿Quiénes son sus intérpretes?</p>
                    <input
                        type="number"
                        min="1"
                        name="participant[]"
                        placeholder="idParticipant 1"
                        onBlur={(e) => handleArrayInputChange(e, 'participant')}
                    />
                    <br />

                    <span>¿Qué tráiler se adjunta?</span>
                    <input
                        type="number"
                        name="trailer"
                        min="1"
                        placeholder="idTrailer 1"
                        onChange={handleInputChange}
                    />
                    <br />

                    <button className="btn btn-primary" type="submit"> Añadir </button>
                </form>
            </div>
        </div>
    );
};
