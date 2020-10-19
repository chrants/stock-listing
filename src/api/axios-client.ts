import axios from "axios";

const isProduction = () => process.env.NODE_ENV === "production";

export const API_KEY = process.env.API_KEY;

const BASE_URL_DEV = "https://www.alphavantage.co"
// When developing in production, set the base url here and
// add headers and security tokens to the axios.create();
const BASE_URL_PROD = "";

const axiosClient = () => {
    return axios.create({
        baseURL: isProduction() ? BASE_URL_PROD : BASE_URL_DEV,
    });
};

export default axiosClient();
