import axios from 'axios';
import { constantesComunes } from '../Config/constantesComunes';

const API_URL = constantesComunes.URLContenido;
const path = "series";

const seriesService = {
    // Crear una nueva serie
    addSeries: async (seriesData) => {
        const formData = new URLSearchParams();
        formData.append("title", seriesData.title);
        formData.append("duration", seriesData.duration);
        formData.append("urlTitlePage", seriesData.urlTitlePage);
        formData.append("releaseDate", seriesData.releaseDate);
        formData.append("synopsis", seriesData.synopsis);
        formData.append("description", seriesData.description);
        formData.append("language", seriesData.language.join(","));
        formData.append("category", seriesData.category.join(","));
        formData.append("character", seriesData.character.join(","));
        formData.append("participant", seriesData.participant.join(","));
        formData.append("seasons", seriesData.seasons.join(","));
        formData.append("trailer", seriesData.trailer);
        formData.append("isSuscription", seriesData.isSuscription);

        const response = await axios.post(`${API_URL}${path}/addSeries`, formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        return response.data;
    },

    // Obtener todas las series
    getAllSeries: async () => {
        const response = await axios.get(`${API_URL}${path}/all`);
        return response.data;
    },

    // Obtener series por título
    getSeriesByTitle: async (title) => {
        const response = await axios.get(`${API_URL}${path}/title`, {
            params: { title },
        });
        return response.data;
    },

    // Obtener serie por ID
    getSeriesById: async (idSeries) => {
        const response = await axios.get(`${API_URL}${path}/seriesFound`, {
            params: { idSeries },
        });
        return response.data;
    },

    // Obtener personajes de una serie
    getSeriesCharacters: async (idSeries) => {
        const response = await axios.get(`${API_URL}${path}/characters`, {
            params: { idSeries },
        });
        return response.data;
    },

    // Obtener participantes de una serie
    getSeriesParticipants: async (idSeries) => {
        const response = await axios.get(`${API_URL}${path}/participants`, {
            params: { idSeries },
        });
        return response.data;
    },

    // Eliminar una serie
    deleteSeries: async (idSeries) => {
        const formData = new URLSearchParams();
        formData.append('idSeries', idSeries);
        formData.append('_method', 'DELETE');

        const response = await axios.post(`${API_URL}${path}/deleteSeries`, formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        return response.data;
    },

    // Actualizar una serie
    updateSeries: async (seriesData) => {
        const formData = new URLSearchParams();
        formData.append("idSeries", seriesData.idSeries);
        formData.append("title", seriesData.title);
        formData.append("duration", seriesData.duration);
        formData.append("urlTitlePage", seriesData.urlTitlePage);
        formData.append("releaseDate", seriesData.releaseDate);
        formData.append("synopsis", seriesData.synopsis);
        formData.append("description", seriesData.description);
        formData.append("language", seriesData.language.join(","));
        formData.append("category", seriesData.category.join(","));
        formData.append("character", seriesData.character.join(","));
        formData.append("participant", seriesData.participant.join(","));
        formData.append("seasons", seriesData.seasons.join(","));
        formData.append("trailer", seriesData.trailer);
        formData.append("isSuscription", seriesData.isSuscription);
        formData.append("_method", "PUT");

        const response = await axios.post(`${API_URL}${path}/updateSeries`, formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        return response.data;
    }
};

export default seriesService;
