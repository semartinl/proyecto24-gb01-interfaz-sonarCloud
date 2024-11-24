import axios from 'axios';
import { constantesComunes } from '../Config/constantesComunes';

const API_URL = constantesComunes.URLContenido;
const path = "seasons";

const seasonsService = {
    // Crear una nueva temporada
    addSeason: async (season) => {
        const formData = new URLSearchParams();
        formData.append("idSeries", season.idSeries);
        formData.append("title", season.title);
        formData.append("seasonNumber", season.seasonNumber);
        formData.append("totalChapters", season.totalChapters);
        formData.append("chapterList[]", season.chapterList);
        formData.append("character[]", season.character);
        formData.append("participant[]", season.participant);
        formData.append("trailer", season.trailer);

        const response = await axios.post(`${API_URL}${path}/addSeason`, formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return response.data;
    },

    // Obtener una temporada por ID
    getSeasonById: async (idSeason) => {
        const response = await axios.get(`${API_URL}${path}/seasonFound`, {
            params: { idSeason },
        });
        return response.data;
    },

    // Actualizar una temporada por ID
    updateSeason: async (idSeason, updatedFields) => {
        const formData = new URLSearchParams();
        formData.append("_method", "PUT");
        formData.append("idSeason", idSeason);

        if (updatedFields.idSeries) formData.append("idSeries", updatedFields.idSeries);
        if (updatedFields.title) formData.append("title", updatedFields.title);
        if (updatedFields.seasonNumber) formData.append("seasonNumber", updatedFields.seasonNumber);
        if (updatedFields.totalChapters) formData.append("totalChapters", updatedFields.totalChapters);
        if (updatedFields.chapterList) updatedFields.chapterList.forEach(chapter => formData.append("chapterList[]", chapter));
        if (updatedFields.character) updatedFields.character.forEach(char => formData.append("character[]", char));
        if (updatedFields.participant) updatedFields.participant.forEach(part => formData.append("participant[]", part));
        if (updatedFields.trailer) formData.append("trailer", updatedFields.trailer);

        const response = await axios.post(`${API_URL}${path}/updateSeason`, formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return response.data;
    },

    // Eliminar una temporada por ID
    deleteSeason: async (idSeason) => {
        const formData = new URLSearchParams();
        formData.append("_method", "DELETE");
        formData.append("idSeason", idSeason);

        const response = await axios.post(`${API_URL}${path}/deleteSeason`, formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return response.data;
    },

    // Obtener los personajes de una temporada por ID
    getSeasonCharacters: async (idSeason) => {
        const response = await axios.get(`${API_URL}${path}/characters`, {
            params: { idSeason },
        });
        return response.data;
    },

    // Obtener los participantes de una temporada por ID
    getSeasonParticipants: async (idSeason) => {
        const response = await axios.get(`${API_URL}${path}/participants`, {
            params: { idSeason },
        });
        return response.data;
    }
};

export default seasonsService;
