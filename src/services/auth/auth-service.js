import axios from "axios";
import {HOST} from "../../commons/hosts";

const API_URL = HOST.backend_api + "/auth/";

class AuthService {
    login(username, password) {
        return axios.post(API_URL + "signin", {
            username,
            password
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, password) {
        return axios.post(API_URL + "signup", {
            username,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();