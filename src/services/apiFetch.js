const BASE_URL = "https://apcs-api-hyceezatfxfhhta8.canadacentral-01.azurewebsites.net"; 
// 🔥 Replace with your Azure API URL

export const apiFetch = async (endpoint, options = {}) => {

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  // Some DELETE endpoints return empty
  if (response.status === 204) return null;

  return response.json();
};