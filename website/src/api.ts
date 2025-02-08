const API_URL = "https://backend-cons-production.up.railway.app/send-email";
export default async function sendEmail (email: string, message: string, name: string, m2: number, tel:string) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, message, name, m2, tel }),
  });
  return response.json();
};