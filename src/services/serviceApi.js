const BASE_URL = "https://apcs-api-hyceezatfxfhhta8.canadacentral-01.azurewebsites.net/api/services";

// ✅ GET ALL
export const getServices = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok)
    throw new Error("Failed to fetch services");

  return res.json();
};

// ✅ GET SINGLE  ⭐ THIS WAS MISSING
export const getService = async (id) => {

  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok)
    throw new Error("Service not found");

  return res.json();
};

// ✅ CREATE
export const createService = async (formData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: formData
  });

  if (!res.ok)
    throw new Error("Failed to create service");
};

// ✅ UPDATE
export const updateService = async (id, formData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: formData
  });

  if (!res.ok)
    throw new Error("Failed to update service");
};

// ✅ DELETE
export const deleteService = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });

  if (!res.ok)
    throw new Error("Failed to delete service");
};