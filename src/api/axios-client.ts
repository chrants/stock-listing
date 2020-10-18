import axios from "axios";

const isProduction = () => process.env.NODE_ENV === "production";

const BASE_URL_DEV = "http://localhost:8080";
// When developing in production, set the base url here and
// add headers and security tokens to the axios.create();
const BASE_URL_PROD = "";

const axiosClient = () => {
    return axios.create({
        baseURL: isProduction() ? BASE_URL_PROD : BASE_URL_DEV,
    });
};

export default axiosClient();
