const API_URL = "https://apcs-api-hyceezatfxfhhta8.canadacentral-01.azurewebsites.net/api/jobs";


export async function applyJob(formData) {

  const res = await fetch(`${API_URL}/apply`, {
    method: "POST",
    body: formData
  });

  if (!res.ok)
    throw new Error("Application failed");
}


// HANDLE RESPONSE
async function handleResponse(response) {

  if (!response.ok) {
    throw new Error("API Error");
  }

  // ⭐ IMPORTANT FIX
  if (response.status === 204) {
    return null;
  }

  const text = await response.text();

  return text ? JSON.parse(text) : null;
}

// GET ALL JOBS
// export async function getJobs() {
//   const response = await fetch(API_URL);
//   return handleResponse(response);
// }

export async function getJobs(params) {

 const query = new URLSearchParams(params);

 const res = await fetch(`${API_URL}?${query}`);
return handleResponse(res);
 //return res.json();
}

// GET JOB BY ID
export async function getJobById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return handleResponse(response);
}

// CREATE JOB
export async function createJob(job) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  return handleResponse(response);
}

// UPDATE JOB
export async function updateJob(id, job) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  return handleResponse(response);
}

// DELETE JOB
export async function deleteJob(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Delete failed");
  }
}