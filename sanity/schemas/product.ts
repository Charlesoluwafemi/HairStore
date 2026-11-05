export default {
  name: "product",
  title: "Wig Product",
  type: "document",
  fields: [
    { name: "title", title: "Product Title - e.g. Glueless Layered Bone Straight 5x5...", type: "string" },
    { name: "price", title: "Current Price (e.g. 59000)", type: "number" },
    { name: "oldPrice", title: "Old Strikethrough Price", type: "number" },
    { name: "rating", title: "Rating 1-5 (yellow hearts)", type: "number" },
    { name: "reviews", title: "Review Count (e.g. 149)", type: "number" },
    { name: "isSale", title: "Show BIG SALE badge?", type: "boolean" },
    { name: "image", title: "Product Image - Stunning woman wearing wig (square)", type: "image", options: { hotspot: true } },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } }
  ]
};
