import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // use REACT_APP_API_URL if CRA
});

export default API;