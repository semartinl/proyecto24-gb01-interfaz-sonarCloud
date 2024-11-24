import React, { useState } from 'react';
import chaptersService from '../../Controller/chapterController';

export default function UpdateChapter () {
    const [formData, setFormData] = useState({
        idChapter: '',
        title: '',
        chapterNumber: '',
        duration: '',
        urlVideo: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { idChapter, ...updatedFields } = formData;
            if (!idChapter) {
                setMessage('El ID del capítulo es obligatorio.');
                return;
            }
            await chaptersService.updateChapter(idChapter, updatedFields);
            setMessage('Capítulo actualizado exitosamente.');
            setFormData({ idChapter: '', title: '', chapterNumber: '', duration: '', urlVideo: '' });
        } catch (error) {
            setMessage('Error al actualizar el capítulo. Por favor, inténtelo de nuevo.');
            console.error(error);
        }
    };

    return (
        <div className="card">
            <h3 className="text-center">Modificar capítulo</h3>
            <div className="card-body">
                {message && <div className="alert alert-info">{message}</div>}
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_method" value="PUT" />

                    <p>Nota: Los parámetros con * son obligatorios</p>

                    <div className="form-group">
                        <label>ID*</label>
                        <input
                            type="number"
                            min="1"
                            className="form-control mb-3"
                            name="idChapter"
                            value={formData.idChapter}
                            onChange={handleChange}
                            placeholder="idChapter 1"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>¿Cuál es el título del capítulo?</label>
                        <input
                            type="text"
                            className="form-control mb-3"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>¿Cuál es el número del capítulo en la temporada?</label>
                        <input
                            type="number"
                            className="form-control mb-3"
                            name="chapterNumber"
                            value={formData.chapterNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>¿Cuál es la duración (en minutos) del capítulo?</label>
                        <input
                            type="number"
                            min="0"
                            className="form-control mb-3"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>¿Cuál es la URL del capítulo?</label>
                        <input
                            type="url"
                            className="form-control mb-3"
                            name="urlVideo"
                            value={formData.urlVideo}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="btn btn-primary" type="submit">
                        Modificar
                    </button>
                </form>
            </div>
        </div>
    );
};
