import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "https://mama-ativa-api.azurewebsites.net/api/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "public");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
