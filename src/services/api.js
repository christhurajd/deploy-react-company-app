import axios from "axios";

const API = axios.get({
  baseURL: "https://apcs-api-hyceezatfxfhhta8.canadacentral-01.azurewebsites.net", // use REACT_APP_API_URL if CRA
});

export default API;

// const API_BASE_URL = "https://apcs-api-hyceezatfxfhhta8.canadacentral-01.azurewebsites.net";

// export default API_BASE_URL;