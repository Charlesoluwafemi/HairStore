# Everything Hair & Co. - Next.js Ecommerce

Exact design from Naija Beauty Hair, rebranded to Everything Hair & Co.

## Features
- Hero Carousel 3 banners rotating, first is Bestseller Sale with stunning dark queen long bone straight (golden yellow sparkles)
- Product grid with images on stunning dark queens, from ₦ pricing, yellow hearts, BIG SALE badges
- Burgundy nav #5a0f2a, rose banners, minimal words like original
- Easy Sanity CMS integration
- FastAPI backend for checkout and revamp booking

## Run Frontend
```
npm install
npm run dev
# http://localhost:3000
```

## Sanity Setup
```
npm install -g @sanity/cli
sanity init --project your-project-id
# Copy schemas from sanity/schemas/ to your Sanity studio
# Upload banner images to Sanity Studio -> Banners
# Upload product images to Sanity Studio -> Products
# In lib/sanity.ts uncomment getBanners() / getProducts() fetches
```

## FastAPI Backend
```
cd backend
pip install fastapi uvicorn pydantic
uvicorn main:app --reload --port 8000
```

## How to change images (Sanity)
1. Go to localhost:3333 (Sanity Studio)
2. Banners -> Edit Bestseller Sale -> Upload new image 1920x700
3. Products -> Edit -> Upload new stunning queen image
4. No code change needed - site auto updates via imageUrl

## Colors
- Burgundy: #5a0f2a / #7a1a3a
- Gold yellow banner: #FFC93C
- Orange button: #FF8C1A
- Beige: #fdf0d5
- Dark footer: #0d0d0d, gold #d4af37
