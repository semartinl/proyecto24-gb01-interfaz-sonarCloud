import React, { useState } from 'react';
import reviewsService from '../../Controller/reviewController';

export default function FormCreateReview () {
    const [review, setReview] = useState({
        idProfile: '',
        idContent: '',
        rating: '',
        commentary: ''
    });

    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReview({
            ...review,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await reviewsService.addReview(review);
            setMessage('Review añadida exitosamente.');
            setReview({
                idProfile: '',
                idContent: '',
                rating: '',
                commentary: ''
            });
        } catch (error) {
            setMessage('Error al añadir la review. Intenta nuevamente.');
            console.error('Error al añadir la review:', error);
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="text-center">Insertar Review</h5>
            </div>
            <div className="card-body">
                {message && <div className="alert alert-info">{message}</div>}
                <form onSubmit={handleSubmit}>
                    <label>¿Desde qué perfil estás creando la Review?</label>
                    <input
                        type="number"
                        className="form-control mb-3"
                        name="idProfile"
                        value={review.idProfile}
                        onChange={handleInputChange}
                        required
                    />
                    <label>¿De qué contenido quieres hacer la Review?</label>
                    <input
                        type="number"
                        className="form-control mb-3"
                        name="idContent"
                        value={review.idContent}
                        onChange={handleInputChange}
                        required
                    />
                    <label>¿Qué valoración le pones?</label>
                    <input
                        type="number"
                        className="form-control mb-3"
                        name="rating"
                        min="1"
                        max="10"
                        value={review.rating}
                        onChange={handleInputChange}
                        required
                    />
                    <label>¿Quieres añadir un comentario?</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="commentary"
                        value={review.commentary}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary" type="submit">
                        Añadir
                    </button>
                </form>
            </div>
        </div>
    );
};
