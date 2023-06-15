import axios from "axios";

const API_URL = "https://api-mamativa.azurewebsites.net/api/auth/";

const register = (username, email, password, phone, birth_date, profile_photo, cep, city, state, street, district) => {
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
            district: district
        }
    });
};

const login = (email, password) => {
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
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;