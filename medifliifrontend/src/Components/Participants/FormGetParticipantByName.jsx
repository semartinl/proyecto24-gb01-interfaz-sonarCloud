import React, { useState } from 'react';
import participantsService from '../../Controller/participantController';

export default function FormGetParticipantByName () {
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault(); // Evitar la recarga de la página
    if (!name.trim()) {
      setError('Por favor, ingresa un nombre.');
      return;
    }

    try {
      const response = await participantsService.getParticipantByName(name);
      if (response && response.length > 0) {
        setParticipants(response);
        setError('');
      } else {
        setParticipants([]);
        setError('No se encontraron participantes con ese nombre.');
      }
    } catch (err) {
      setError('Error al buscar participantes. Por favor, inténtalo de nuevo más tarde.');
      setParticipants([]);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-center">Obtener participantes por nombre</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSearch}>
          <label>Nombre</label>
          <input
            type="text"
            className="form-control mb-3"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button className="btn btn-primary" type="submit">
            Buscar
          </button>
        </form>

        {/* Mostrar lista de participantes */}
        {participants.length > 0 && (
          <div className="mt-3">
            <h5>Resultados de la búsqueda:</h5>
            <ul className="list-group">
              {participants.map((participant) => (
                <li key={participant.idParticipant} className="list-group-item">
                  <strong>ID:</strong> {participant.idParticipant},
                  <strong> Nombre:</strong> {participant.name},
                  <strong> Apellidos:</strong> {participant.surname || 'No especificado'},
                  <strong> Edad:</strong> {participant.age},
                  <strong> Nacionalidad:</strong> {participant.nationality || 'No especificada'}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mostrar error si ocurre */}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
};
