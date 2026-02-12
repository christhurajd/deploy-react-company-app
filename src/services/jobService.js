const API_URL = "https://apcs-api-hyceezatfxfhhta8.canadacentral-01.azurewebsites.net/api/jobs";

// HANDLE RESPONSE
async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "API Error");
  }
  return response.json();
}

// GET ALL JOBS
export async function getJobs() {
  const response = await fetch(API_URL);
  return handleResponse(response);
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