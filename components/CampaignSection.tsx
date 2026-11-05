
import type { Campaign } from "../lib/sanity";
import ProductGrid from "./ProductGrid";

export default function CampaignSection({
  campaign,
}: {
  campaign: Campaign;
}) {
  return (
    <section className="w-full bg-white">
      <a
        href={campaign.bannerLink}
        className="block w-full overflow-hidden"
        aria-label={campaign.title}
      >
        <img
          src={campaign.bannerImage}
          alt={campaign.title}
          loading="lazy"
          className="block w-full h-auto"
        />
      </a>

      {campaign.title && (
        <h2 className="px-4 pt-7 pb-2 text-center text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.12em] text-[#5a0f2a]">
          {campaign.title}
        </h2>
      )}

      <ProductGrid products={campaign.products} />
    </section>
  );
}
