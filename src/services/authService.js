import axios from "axios";

const API_URL = "https://mama-ativa-api.azurewebsites.net/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(
    username,
    email,
    password,
    phone,
    birth_date,
    profile_photo,
    cep,
    city,
    state,
    street,
    district
  ) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      phone,
      birth_date,
      profile_photo,
      address: {
        cep: parseInt(cep),
        city: city,
        state: state,
        street: street,
        district: district,
      },
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
