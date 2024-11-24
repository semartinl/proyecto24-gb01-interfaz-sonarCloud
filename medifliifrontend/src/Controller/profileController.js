import axios from 'axios';
import { constantesComunes } from '../Config/constantesComunes';

const API_URL = constantesComunes.URL_Usuarios;
const path = "profiles";

const profilesService = {
    // Crear un nuevo perfil
    addProfile: async (profile) => {
        const formData = new URLSearchParams();
    formData.append("name", profile);
    formData.append("pin", profile);
    formData.append("idUser", profile);
    formData.append("idLanguage", profile);
        const response = await axios.post(`${API_URL}${path}`, profile, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
        return response;
    },

    // Obtener todos los perfiles
    getAllProfiles: async () => {
        const response = await axios.get(`${API_URL}${path}`);
        return response.data;
    },

    // Obtener un perfil por ID
    getProfileById: async (idProfile) => {
        const response = await axios.get(`${API_URL}${path}/${idProfile}`);
        return response.data;
    },

    // Actualizar un perfil
    putProfile: async (idProfile, name, pin, idLanguage) => {
        const formData = new URLSearchParams();
        formData.append("idProfile", idProfile);
        formData.append("name", name);
        formData.append("pin", pin);
        formData.append("idLanguage", idLanguage);

        const response = await axios.put(`${API_URL}${path}`, formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        });
        return response.data;
    },

    // Eliminar un perfil
    deleteProfile: async (idProfile) => {
        const response = await axios.delete(`${API_URL}${path}/${idProfile}`);
        return response.data;
    },
    deleteProfileForm: async (idProfile) => {
        const formData = new URLSearchParams();
        formData.append("idProfile", idProfile);
        

        const response = await axios.delete(`${API_URL}${path}`, {
            data: formData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        });
        return response.data;
    }
};

export default profilesService;