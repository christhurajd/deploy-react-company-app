
const API_URL= "https://apcs-api-hyceezatfxfhhta8.canadacentral-01.azurewebsites.net/api"
export const getDashboardStats = async () => {

  const response = await fetch(
    `${API_URL}/dashboard/stats`
  );

  if (!response.ok)
    throw new Error("Failed to fetch dashboard stats");

  return response.json();
};