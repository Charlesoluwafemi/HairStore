
"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "234XXXXXXXXXX"; // Replace with your business WhatsApp number

const services = [
  {
    icon: "✨",
    name: "Wig Revamping",
    price: "FROM ₦15,000",
    description: "Deep wash, conditioning, restyling and curl definition to bring your wig back to life.",
  },
  {
    icon: "🎨",
    name: "Coloring & Highlights",
    price: "FROM ₦25,000",
    description: "Refresh your look with professional coloring, highlights and custom shades.",
  },
  {
    icon: "💆🏽‍♀️",
    name: "Treatment & Repair",
    price: "FROM ₦12,000",
    description: "Help restore dry, tangled and damaged wigs with nourishing treatments and repair.",
  },
];

export default function WigRevampSection() {
  const [service, setService] = useState("Wig Revamping");

  function handleBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const date = String(formData.get("date") || "");
    const condition = String(formData.get("condition") || "");

    const message = [
      "Hello Everything Hair & Co.! I'd like to book a wig revamp service.",
      "",
      `Full Name: ${name}`,
      `WhatsApp Phone: ${phone}`,
      `Service: ${service}`,
      `Preferred Date: ${date}`,
      `Wig Length / Condition: ${condition || "Not specified"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="wig-revamp"
      className="w-full overflow-hidden bg-[#fdf5ec] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT: INTRODUCTION AND SERVICES */}
        <div className="bg-[#5a0f2a] px-5 py-12 text-white sm:px-10 lg:px-12 lg:py-16 xl:px-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5d76e]">
              Everything Hair & Co. Revamp Studio
            </span>

            <h2 className="mt-7 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.91] tracking-[-0.045em]">
              Bring Your
              <br />
              <span className="italic text-[#f5d76e]">Old Wig Back</span>
              <br />
              To Life
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Don't just replace your favourite wig. Give it a new life.
              Our revamp services help restore, refresh and transform your
              wigs so they look beautiful and feel fabulous again.
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setService(item.name)}
                className={`rounded-[24px] border p-6 text-left transition duration-300 ${
                  service === item.name
                    ? "border-[#f5d76e] bg-[#741b3a]"
                    : "border-white/15 bg-white/[0.06] hover:border-[#f5d76e]/60"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdf5ec] text-2xl">
                  {item.icon}
                </span>

                <h3 className="mt-7 font-serif text-xl font-semibold leading-snug text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs font-semibold tracking-[0.12em] text-[#f5d76e]">
                  {item.price}
                </p>

                <p className="mt-4 text-sm leading-6 text-white/65">
                  {item.description}
                </p>

                <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#f5d76e]">
                  {service === item.name ? "Selected ✓" : "Select service →"}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-7 text-xs leading-6 text-white/50">
            Final pricing depends on wig length, texture and condition.
            Our team will confirm your quote before any work begins.
          </p>
        </div>

        {/* RIGHT: BOOKING FORM */}
        <div className="bg-[#fffaf6] px-5 py-10 sm:px-10 lg:px-10 lg:py-14 xl:px-12">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#741b3a]">
              Book a Revamp
            </span>

            <span className="rounded-full bg-[#f5d76e]/35 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a0f2a] sm:text-xs">
              Booking Open
            </span>
          </div>

          <h3 className="mt-4 font-serif text-3xl text-[#5a0f2a] sm:text-4xl">
            Schedule Your Revamp
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Tell us about your wig and choose a preferred date. We'll contact
            you on WhatsApp to confirm your booking.
          </p>

          <form onSubmit={handleBooking} className="mt-9 space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5a0f2a]">
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="h-14 w-full rounded-full border border-[#eadfd5] bg-white px-5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#741b3a]"
                />
              </label>

              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5a0f2a]">
                  WhatsApp Phone
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+234 80..."
                  className="h-14 w-full rounded-full border border-[#eadfd5] bg-white px-5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#741b3a]"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5a0f2a]">
                Service Type
              </span>
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="h-14 w-full rounded-full border border-[#eadfd5] bg-white px-5 text-sm text-gray-900 outline-none focus:border-[#741b3a]"
              >
                {services.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5a0f2a]">
                  Preferred Date
                </span>
                <input
                  type="date"
                  name="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="h-14 w-full min-w-0 rounded-full border border-[#eadfd5] bg-white px-5 text-sm text-gray-900 outline-none focus:border-[#741b3a]"
                />
              </label>

              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#5a0f2a]">
                  Wig Length / Condition
                </span>
                <input
                  type="text"
                  name="condition"
                  placeholder="e.g. 18 inch, shedding"
                  className="h-14 w-full min-w-0 rounded-full border border-[#eadfd5] bg-white px-5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#741b3a]"
                />
              </label>
            </div>

            <button
              type="submit"
              className="flex min-h-16 w-full items-center justify-center rounded-full bg-[#5a0f2a] px-5 text-center text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#741b3a] sm:text-sm"
            >
              Confirm Booking on WhatsApp
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-6 text-gray-500">
            No payment required to submit a booking request. We'll contact
            you on WhatsApp to discuss pricing and collection or dispatch
            arrangements.
          </p>
        </div>
      </div>

      {/* FLOATING WHATSAPP CONTACT */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hello Everything Hair & Co.! I'd like to enquire about your wig revamp services."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl transition hover:scale-110 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      >
        ☎
      </a>
    </section>
  );
}
