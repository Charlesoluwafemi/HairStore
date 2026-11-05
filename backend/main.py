from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Everything Hair & Co. API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CheckoutRequest(BaseModel):
    cart: list
    email: str
    phone: str

class RevampBooking(BaseModel):
    name: str
    phone: str
    service: str

@app.get("/")
def root():
    return {"message": "Everything Hair & Co. FastAPI running"}

@app.get("/api/products")
def get_products():
    # In production, fetch from Sanity or DB
    return {"message": "Fetch from Sanity"}

@app.post("/api/checkout")
def checkout(req: CheckoutRequest):
    # TODO: Integrate Paystack
    # paystack_url = create_paystack_payment(req)
    return {"success": True, "paystack_url": "https://paystack.com/pay/xxx", "cart": req.cart}

@app.post("/api/revamp-booking")
def book_revamp(req: RevampBooking):
    # TODO: Save to DB + send WhatsApp
    return {"success": True, "message": f"Booked {req.service} for {req.name}", "whatsapp_link": f"https://wa.me/2340000000000?text=Hi, I want {req.service}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
