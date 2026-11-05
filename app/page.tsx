
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import ProductGrid from "../components/ProductGrid";
import CampaignSection from "../components/CampaignSection";
import WigRevampSection from "../components/WigRevampSection";
import Footer from "../components/Footer";

import {
  BANNERS_FALLBACK,
  PRODUCTS_FALLBACK,
  CAMPAIGNS_FALLBACK,
} from "../lib/sanity";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Header />

      {/* Main rotating hero */}
      <HeroCarousel banners={BANNERS_FALLBACK} />

      {/* Featured products */}
      <ProductGrid
        title="LUXURY HUMAN HAIR WIG"
        products={PRODUCTS_FALLBACK.slice(0, 4)}
      />

      {/* Wig revamp and restoration booking section */}
      <WigRevampSection />

      {/* Campaign banners and their products */}
      {CAMPAIGNS_FALLBACK.map((campaign) => (
        <CampaignSection key={campaign.id} campaign={campaign} />
      ))}

      <Footer />
    </main>
  );
}
