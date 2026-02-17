const BASE_URL = "https://apcs-api-hyceezatfxfhhta8.canadacentral-01.azurewebsites.net/api/services";

export const getServices = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createService = async (formData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: formData
  });

  return res.json();
};

export const updateService = async (id, formData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: formData
  });

  return res.json();
};

export const deleteService = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};