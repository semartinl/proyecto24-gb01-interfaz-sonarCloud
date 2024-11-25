import React, { useState } from 'react';
import seasonsService from '../../Controller/seasonController';

export default function UpdateSeasonForm () {
    const [idSeason, setIdSeason] = useState('');
    const [idSeries, setIdSeries] = useState('');
    const [title, setTitle] = useState('');
    const [seasonNumber, setSeasonNumber] = useState('');
    const [totalChapters, setTotalChapters] = useState('');
    const [chapterList, setChapterList] = useState([]);
    const [trailer, setTrailer] = useState('');
    const [message, setMessage] = useState('');

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "idSeason") setIdSeason(value);
        if (name === "idSeries") setIdSeries(value);
        if (name === "title") setTitle(value);
        if (name === "seasonNumber") setSeasonNumber(value);
        if (name === "totalChapters") setTotalChapters(value);
        if (name === "trailer") setTrailer(value);
    };

    const handleChapterChange = (e, index) => {
        const newChapterList = [...chapterList];
        newChapterList[index] = e.target.value;
        setChapterList(newChapterList);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedFields = {
            idSeries,
            title,
            seasonNumber,
            totalChapters,
            chapterList,
            trailer
        };

        try {
            const data = await seasonsService.updateSeason(idSeason, updatedFields);
            setMessage('Temporada actualizada correctamente');
        } catch (err) {
            setMessage('Hubo un error al actualizar la temporada');
        }
    };

    return (
        <div className="card">
            <h3 className="text-center">Modificar temporada</h3>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_method" value="PUT" />
                    <label>ID</label>
                    <p>Nota: Los parámetros con * son obligatorios</p>

                    <span>ID*</span>
                    <input
                        type="text"
                        className="form-control mb-3"
                        required
                        name="idSeason"
                        value={idSeason}
                        placeholder="idSeason 1"
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿A qué serie pertenece?</span>
                    <input
                        type="number"
                        name="idSeries"
                        value={idSeries}
                        placeholder="idSeries 1"
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿Cuál es el título de la temporada?</span>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿Cuál es el número de la temporada en la serie?</span>
                    <input
                        type="number"
                        min="0"
                        className="form-control mb-3"
                        name="seasonNumber"
                        value={seasonNumber}
                        onChange={handleChange}
                    />
                    <br />

                    <span>¿Cuántos capítulos tiene la temporada?</span>
                    <input
                        type="number"
                        min="0"
                        className="form-control mb-3"
                        name="totalChapters"
                        value={totalChapters}
                        onChange={handleChange}
                    />

                    <p>¿Cuáles son los capítulos de la temporada?</p>
                    {Array.from({ length: totalChapters }).map((_, index) => (
                        <input
                            key={index}
                            type="number"
                            min="1"
                            name="chapterList[]"
                            placeholder={`idChapter ${index + 1}`}
                            value={chapterList[index] || ''}
                            onChange={(e) => handleChapterChange(e, index)}
                        />
                    ))}
                    <br />

                    <span>¿Qué tráiler se adjunta?</span>
                    <input
                        type="number"
                        min="1"
                        name="trailer"
                        placeholder="idTrailer 1"
                        value={trailer}
                        onChange={handleChange}
                    />
                    <br />

                    <button className="btn btn-primary" type="submit">Modificar</button>
                </form>

                {message && <div className="alert mt-3">{message}</div>}
            </div>
        </div>
    );
};
