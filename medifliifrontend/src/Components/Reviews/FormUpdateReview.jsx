import React, { useState } from 'react';
import reviewsService from '../../Controller/reviewController';

export default function UpdateReview () {
    const [reviewId, setReviewId] = useState('');
    const [updatedFields, setUpdatedFields] = useState({
        rating: '',
        commentary: ''
    });

    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedFields({
            ...updatedFields,
            [name]: value
        });
    };

    const handleIdChange = (e) => {
        setReviewId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await reviewsService.updateReview(reviewId, updatedFields);
            setMessage('Review actualizada exitosamente.');
            setReviewId('');
            setUpdatedFields({
                rating: '',
                commentary: ''
            });
        } catch (error) {
            setMessage('Error al actualizar la review. Intenta nuevamente.');
            console.error('Error al actualizar la review:', error);
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="text-center">Modificar Review</h5>
            </div>
            <div className="card-body">
                {message && <div className="alert alert-info">{message}</div>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="idReview">¿Qué id tiene la Review que quieres modificar?</label>
                    <input
                        type="number"
                        id="idReview"
                        name="idReview"
                        value={reviewId}
                        onChange={handleIdChange}
                        required
                        className="form-control mb-3"
                    />
                    <label>¿Quieres cambiar la valoración?</label>
                    <input
                        type="number"
                        className="form-control mb-3"
                        name="rating"
                        min="1"
                        max="10"
                        value={updatedFields.rating}
                        onChange={handleInputChange}
                    />
                    <label>¿Quieres cambiar el comentario?</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="commentary"
                        value={updatedFields.commentary}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary" type="submit">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
};
