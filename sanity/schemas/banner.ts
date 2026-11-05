export default {
  name: "banner",
  title: "Hero Banner",
  type: "document",
  fields: [
    { name: "title", title: "Banner Title - e.g. Bestseller Sale", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    { name: "ctaText", title: "Button Text - e.g. shop now", type: "string" },
    { name: "ctaLink", title: "Button Link", type: "string" },
    { name: "image", title: "Banner Image - Upload your stunning queen 1920x700", type: "image", options: { hotspot: true } },
    { name: "order", title: "Order (1 = first)", type: "number" }
  ]
};
