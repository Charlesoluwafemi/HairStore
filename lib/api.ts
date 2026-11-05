export const FASTAPI_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function checkout(cart: any) {
  // FASTAPI: POST to backend for Paystack
  const res = await fetch(`${FASTAPI_URL}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cart)
  });
  return res.json();
}

export async function bookRevamp(data: { name: string; phone: string; service: string }) {
  const res = await fetch(`${FASTAPI_URL}/api/revamp-booking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}
