
import type { Product } from "../lib/sanity";

export default function ProductGrid({
  products,
  title,
}: {
  products: Product[];
  title?: string;
}) {
  return (
    <section className="w-full bg-white px-3 sm:px-5 md:px-10 py-5 md:py-8">

      {title && (
        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.12em] text-[#5a0f2a] px-4 pt-3 pb-7">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-7 sm:gap-x-5 md:gap-x-7 md:gap-y-10">
        {products.map((product, index) => (
          <article
            key={`${product.title}-${index}`}
            className="group min-w-0"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#f8f5f3]">
              <img
                src={product.imageUrl}
                alt={product.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {product.isSale && (
                <span className="absolute top-2 left-2 bg-[#5a0f2a] text-white text-[10px] sm:text-xs font-semibold px-2 py-1">
                  BIG SALE
                </span>
              )}
            </div>

            <div className="pt-3">
              <h3 className="text-[13px] sm:text-sm md:text-base font-medium leading-snug text-gray-900 line-clamp-2 min-h-[38px]">
                {product.title}
              </h3>

              <div className="flex items-center gap-1 mt-1 text-xs sm:text-sm">
                <span className="text-yellow-500">
                  {"★".repeat(Math.min(5, Math.max(0, product.rating)))}
                </span>
                <span className="text-gray-500">
                  ({product.reviews})
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-[#7a1a3a] font-bold text-sm sm:text-base md:text-lg">
                  ₦{product.price.toLocaleString("en-NG")}
                </span>

                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-xs sm:text-sm">
                    ₦{product.oldPrice.toLocaleString("en-NG")}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
