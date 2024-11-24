import axios from 'axios';
import { constantesComunes } from '../Config/constantesComunes';

const API_URL = constantesComunes.URLContenido;
const path = "movies";

const moviesService = {
  // Crear una nueva película
  addMovie: async (movieData) => {
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

    const response = await axios.post(`${API_URL}${path}/addMovie`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data;
  },

  // Obtener todas las películas
  getAllMovies: async () => {
    const response = await axios.get(`${API_URL}${path}/all`);
    return response.data;
  },

  // Obtener una película por ID
  getMovieById: async (idMovie) => {
    const response = await axios.get(`${API_URL}${path}/movieFound`, {
      params: { idMovie },
    });
    return response.data;
  },

  // Obtener películas por título
  getMovieByTitle: async (title) => {
    const response = await axios.get(`${API_URL}${path}/title`, {
      params: { title },
    });
    return response.data;
  },

  // Obtener películas por fecha de lanzamiento
  getMovieByReleaseDate: async (releaseDate) => {
    const response = await axios.get(`${API_URL}${path}/release`, {
      params: { releaseDate },
    });
    return response.data;
  },

  // Obtener personajes de una película
  getMovieCharacters: async (idMovie) => {
    const response = await axios.get(`${API_URL}${path}/characters`, {
      params: { idMovie },
    });
    return response.data;
  },

  // Obtener participantes de una película
  getMovieParticipants: async (idMovie) => {
    const response = await axios.get(`${API_URL}${path}/participants`, {
      params: { idMovie },
    });
    return response.data;
  },

  // Actualizar información de una película
  updateMovie: async (movieData) => {
    const formData = new URLSearchParams();
    formData.append("_method", "PUT");
    formData.append("idMovie", movieData.idMovie);
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

    const response = await axios.post(`${API_URL}${path}/updateMovie`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data;
  },

  // Eliminar una película
  deleteMovie: async (idMovie) => {
    const formData = new URLSearchParams();
    formData.append("_method", "DELETE");
    formData.append("idMovie", idMovie);

    const response = await axios.post(`${API_URL}${path}/deleteMovie`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data;
  },
};

export default moviesService;
