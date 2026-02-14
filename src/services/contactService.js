const API ="https://apcs-api-hyceezatfxfhhta8.canadacentral-01.azurewebsites.net/api/contact";

export async function sendContact(data) {

  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok)
    throw new Error("Failed to send message");

  return res.json();
}