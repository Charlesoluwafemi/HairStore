
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);

// Product type
export type Product = {
  title: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  isSale?: boolean;
};

// Campaign type
export type Campaign = {
  id: number;
  title: string;
  bannerImage: string;
  bannerLink: string;
  products: Product[];
};

// Fetch rotating hero banners
export async function getBanners() {
  return BANNERS_FALLBACK;
}

// Fetch featured products
export async function getProducts() {
  return PRODUCTS_FALLBACK;
}

// ==========================================
// ROTATING HERO BANNERS
// ==========================================

export const BANNERS_FALLBACK = [
  {
    id: 1,
    ctaText: "Shop the Sale",
    ctaLink: "/collections/sale",
    imageUrl: "/banners/1.jpg",
  },
  {
    id: 2,
    ctaText: "Find Your Perfect Fit",
    ctaLink: "/collections/all",
    imageUrl: "/banners/2.jpg",
  },
  {
    id: 3,
    ctaText: "Shop Now",
    ctaLink: "/collections/new-arrivals",
    imageUrl: "/banners/3.webp",
  },
];

// ==========================================
// FEATURED PRODUCTS (BELOW HERO BANNER)
// ==========================================

export const PRODUCTS_FALLBACK: Product[] = [
  {
    title: 'Glueless Layered Bone Straight 5x5 Pre-Cut Closure HD Lace Wig 22"',
    imageUrl: "/products/image11.jpg",
    price: 59000,
    oldPrice: 78000,
    rating: 5,
    reviews: 149,
    isSale: true,
  },
  {
    title: "[BIG SALE] Blunt Cut Double Drawn 250% Bone Straight 13x4 HD Lace Frontal Glueless Wig",
    imageUrl: "/products/02.webp",
    price: 68000,
    oldPrice: 98000,
    rating: 5,
    reviews: 121,
    isSale: true,
  },
  {
    title: "Burgundy Straight Bob Wig - 13x4 Frontal Glueless",
    imageUrl: "/products/03.webp",
    price: 49900,
    oldPrice: 72000,
    rating: 5,
    reviews: 64,
    isSale: true,
  },
  {
    title: "Mature Boss Natural Black Egg Curly 5x5 HD Closure Minimalist Glueless Wig",
    imageUrl: "/products/image12.jpg",
    price: 68000,
    oldPrice: 95000,
    rating: 5,
    reviews: 69,
    isSale: false,
  },
  {
    title: "Glueless Deep Curly AVA - 13x4 Frontal Wig 100% Human Hair",
    imageUrl: "/products/image_20261104_153824.webp",
    price: 95000,
    oldPrice: 112000,
    rating: 5,
    reviews: 7,
    isSale: true,
  },
  {
    title: "Glueless Layered Bone Straight Wig - Super Double Drawn",
    imageUrl: "/products/image_20261104_153828.webp",
    price: 125000,
    oldPrice: 182000,
    rating: 5,
    reviews: 32,
    isSale: false,
  },
];

// ==========================================
// CAMPAIGN 1 - SHOP OUR BESTSELLERS
// ==========================================

export const CAMPAIGNS_FALLBACK: Campaign[] = [
  {
    id: 1,
    title: "SHOP OUR BESTSELLERS",
    bannerImage: "/banners/campaign-1.jpg",
    bannerLink: "/collections/all",

    products: [
      {
        title: "Luxury Bone Straight 5x5 HD Closure Wig",
        imageUrl: "/products/c1.1.jpg",
        price: 85000,
        oldPrice: 110000,
        rating: 5,
        reviews: 45,
        isSale: true,
      },
      {
        title: "250% Double Drawn Bone Straight Frontal Wig",
        imageUrl: "/products/c1.2.jpg",
        price: 95000,
        oldPrice: 125000,
        rating: 5,
        reviews: 32,
        isSale: true,
      },
      {
        title: "Glueless Burgundy Bob Human Hair Wig",
        imageUrl: "/products/c1.3.jpg",
        price: 65000,
        oldPrice: 80000,
        rating: 5,
        reviews: 28,
        isSale: true,
      },
      {
        title: "Natural Black Curly HD Closure Wig",
        imageUrl: "/products/c1.4.jpg",
        price: 78000,
        oldPrice: 95000,
        rating: 5,
        reviews: 19,
        isSale: false,
      },
    ],
  },

  // ==========================================
  // CAMPAIGN 2 - FIND YOUR PERFECT LOOK
  // ==========================================

  {
    id: 2,
    title: "FIND YOUR PERFECT LOOK",
    bannerImage: "/banners/campaign-2.jpg",
    bannerLink: "/collections/new-arrivals",

    products: [
      {
        title: "Deep Curly 13x4 HD Lace Frontal Wig",
        imageUrl: "/products/curly1.jpg",
        price: 105000,
        oldPrice: 130000,
        rating: 5,
        reviews: 24,
        isSale: true,
      },
      {
        title: "Long Layered Bone Straight Human Hair Wig",
        imageUrl: "/products/image9.jpg",
        price: 120000,
        oldPrice: 145000,
        rating: 5,
        reviews: 18,
        isSale: false,
      },
      {
        title: "Water Wave Glueless HD Lace Wig",
        imageUrl: "/products/curly3.jpg",
        price: 89000,
        oldPrice: 110000,
        rating: 5,
        reviews: 37,
        isSale: true,
      },
      {
        title: "Short Pixie Cut Human Hair Wig",
        imageUrl: "/products/image5.jpg",
        price: 58000,
        oldPrice: 75000,
        rating: 5,
        reviews: 14,
        isSale: true,
      },
    ],
  },

  // ==========================================
  // CAMPAIGN 3 - LUXURY HAIR
  // ==========================================

  {
    id: 3,
    title: "LUXURY HAIR. EFFORTLESS STYLE.",
    bannerImage: "/banners/campaign-3.jpg",
    bannerLink: "/collections/all",

    products: [
      {
        title: "13x4 HD Lace Frontal Straight Wig",
        imageUrl: "/products/image2.jpg",
        price: 115000,
        oldPrice: 140000,
        rating: 5,
        reviews: 41,
        isSale: true,
      },
      {
        title: "Natural Black Bouncy Curly Closure Wig",
        imageUrl: "/products/image7.jpg",
        price: 92000,
        oldPrice: 115000,
        rating: 5,
        reviews: 22,
        isSale: false,
      },
      {
        title: "Glueless Deep Wave 5x5 HD Lace Wig",
        imageUrl: "/products/image17.jpg",
        price: 98000,
        oldPrice: 120000,
        rating: 5,
        reviews: 16,
        isSale: true,
      },
      {
        title: "Super Double Drawn Bone Straight Wig",
        imageUrl: "/products/image4.jpg",
        price: 135000,
        oldPrice: 165000,
        rating: 5,
        reviews: 29,
        isSale: false,
      },
    ],
  },

  // ==========================================
  // CAMPAIGN 4 - YOUR NEXT FAVOURITE WIG
  // ==========================================

  {
    id: 4,
    title: "YOUR NEXT FAVOURITE WIG",
    bannerImage: "/banners/campaign-4.jpg",
    bannerLink: "/collections/sale",

    products: [
      {
        title: "Glueless Short Bob HD Lace Wig",
        imageUrl: "/products/image13.jpg",
        price: 62000,
        oldPrice: 79000,
        rating: 5,
        reviews: 35,
        isSale: true,
      },
      {
        title: "Luxury Body Wave 13x4 Frontal Wig",
        imageUrl: "/products/image14.jpg",
        price: 108000,
        oldPrice: 135000,
        rating: 5,
        reviews: 27,
        isSale: true,
      },
      {
        title: "Long Water Wave Human Hair Wig",
        imageUrl: "/products/image15.jpg",
        price: 99000,
        oldPrice: 125000,
        rating: 5,
        reviews: 21,
        isSale: false,
      },
      {
        title: "HD Lace Natural Black Straight Wig",
        imageUrl: "/products/image16.jpg",
        price: 118000,
        oldPrice: 150000,
        rating: 5,
        reviews: 31,
        isSale: true,
      },
    ],
  },
];

