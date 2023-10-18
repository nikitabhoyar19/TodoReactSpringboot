import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const retriveTodoForUs = (username) => apiClient.get(`/users/${username}/todos`);