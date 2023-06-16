import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "https://api-mamativa.azurewebsites.net/api/";

const getPublicContent = () => {
    return axios.get(API_URL + "public");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};

export default UserService;