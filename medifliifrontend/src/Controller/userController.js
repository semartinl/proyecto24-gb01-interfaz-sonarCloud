import axios from 'axios';
import { constComunes } from '../Config/constantesComunes';

const API_URL = constComunes.URLAPI;
const path = "users";

const usersService = {
    // Crear un nuevo usuario
    addUser: async (user) => {
        const formData = new URLSearchParams();
    formData.append("username", user);
    formData.append("email", user);
    formData.append("password", user);
        const response = await axios.post(`${API_URL}${path}`, user, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
        return response;
    },

    // Actualizar un usuario
    putProfile: async (idUser, username, email, password) => {
        const formData = new URLSearchParams();
        formData.append("idUser", idUser);
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);

        const response = await axios.put(`${API_URL}${path}`, formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        });
        return response.data;
    },

    deleteUser: async (idUser) => {
        const response = await axios.delete(`${API_URL}${path}/${idUser}`);
        return response.data;
    },

    deleteUserForm: async (idUser) => {
        const formData = new URLSearchParams();
        formData.append("idUser", idUser);
        

        const response = await axios.delete(`${API_URL}${path}`, {
            data: formData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        });
        return response.data;
    }
};

export default usersService;