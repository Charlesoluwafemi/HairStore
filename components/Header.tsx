
"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [promoIndex, setPromoIndex] = useState(0);

  const promoMessages = [
    "BUY. GET. GIFT.",
    "UP TO 20% DISCOUNT.",
    "YOUR NEXT LOOK STARTS HERE.",
    "LUXURY HAIR. UNBEATABLE STYLE.",
    "SHOP YOUR FAVOURITE LOOKS TODAY.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promoMessages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [promoMessages.length]);

  const mainLinks = [
    { name: "HOME", href: "/" },
    { name: "WIG ON SALE", href: "/collections/sale" },
    { name: "ALL WIGS", href: "/collections/all", dropdown: true },
    { name: "NAIJA ROYAL LACE", href: "/collections/naija-royal-lace" },
    { name: "TRACK ORDER", href: "/collections/order" },
    { name: "HAIR TOOLS", href: "/collections/hair-tools" },
  ];

  const secondaryLinks = [
    { name: "HOW TO ORDER", href: "/how-to-order" },
    { name: "BLOG", href: "/blog", dropdown: true },
  ];

  const iconClass =
    "flex items-center justify-center text-[#801b40] hover:text-[#b33b65] transition-colors";

  return (
    <header className="relative z-50 w-full bg-white">

      {/* Rotating promotional bar */}
      <div className="min-h-[42px] sm:min-h-[50px] bg-[#741b3a] px-3 py-2 flex items-center justify-center text-center overflow-hidden">
        <p
          key={promoIndex}
          className="font-[Georgia,serif] text-[10px] sm:text-[13px] lg:text-[16px] font-bold tracking-[0.06em] text-[#f5d76e] animate-promo-fade"
        >
          {promoMessages[promoIndex]}
        </p>
      </div>

      {/* Header top section */}
      <div className="relative flex h-[65px] sm:h-[75px] lg:h-[88px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Currency selector - desktop */}
        <div className="hidden lg:flex items-center">
          <select
            aria-label="Select currency"
            defaultValue="NGN"
            className="border border-gray-300 rounded-md px-2 py-2 text-sm text-gray-700 bg-white outline-none"
          >
            <option value="NGN">🇳🇬 NGN</option>
            <option value="USD">🇺🇸 USD</option>
            <option value="GBP">🇬🇧 GBP</option>
          </select>
        </div>

        {/* Mobile left icons */}
        <div className="flex lg:hidden items-center gap-3 z-10">

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={iconClass}
          >
            {menuOpen ? (
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>

          {/* Account */}
          <a href="/account" aria-label="My account" className={iconClass}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="7" r="4" />
              <path d="M4 21v-2a8 8 0 0 1 16 0v2z" />
            </svg>
          </a>
        </div>

        {/* Centered logo */}
        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#801b40] flex items-center justify-center font-bold text-[#801b40] text-sm sm:text-base">
            EH
          </div>

          <div>
            <div className="font-bold tracking-[0.12em] text-[10px] sm:text-sm lg:text-base text-[#801b40]">
              EVERYTHING HAIR
            </div>
            <div className="text-[7px] sm:text-[9px] tracking-[0.18em] text-gray-500 text-center">
              BUY WIGS. GET. GIFTS.
            </div>
          </div>
        </a>

        {/* Right icons */}
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-7 ml-auto z-10">

          {/* Desktop account */}
          <a href="/account" aria-label="My account" className={`${iconClass} hidden lg:flex`}>
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="7" r="4" />
              <path d="M4 21v-2a8 8 0 0 1 16 0v2z" />
            </svg>
          </a>

          {/* Search */}
          <a href="/search" aria-label="Search products" className={iconClass}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="10.8" cy="10.8" r="7.2" />
              <path d="m16 16 5 5" />
            </svg>
          </a>

          {/* Shopping bag */}
          <a href="/cart" aria-label="Shopping bag" className={iconClass}>
            <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8h14l1 13H4L5 8Z" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="hidden lg:block border-t border-gray-100">

        {/* Main navigation */}
        <nav className="flex items-center justify-between gap-4 px-6 xl:px-12 py-4 text-[#801b40] font-bold uppercase text-[13px] xl:text-[15px]">
          {mainLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`whitespace-nowrap hover:text-[#b33b65] transition-colors ${
                link.name === "HOME"
                  ? "underline underline-offset-4"
                  : ""
              }`}
            >
              {link.name}
              {link.dropdown && (
                <span className="ml-3 text-xs">⌄</span>
              )}
            </a>
          ))}
        </nav>

        {/* Secondary navigation */}
        <nav className="flex items-center justify-center gap-16 pb-4 text-[#801b40] font-bold uppercase text-[13px] xl:text-[15px]">
          {secondaryLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap hover:text-[#b33b65] transition-colors"
            >
              {link.name}
              {link.dropdown && (
                <span className="ml-3 text-xs">⌄</span>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile / tablet dropdown navigation */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50">

          <nav className="flex flex-col px-5 py-2">

            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b border-gray-100 text-[#801b40] font-bold text-xs tracking-widest flex items-center justify-between hover:bg-[#fdf0d5] transition-colors"
              >
                {link.name}
                {link.dropdown && <span>⌄</span>}
              </a>
            ))}

            {secondaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b border-gray-100 text-[#801b40] font-bold text-xs tracking-widest flex items-center justify-between"
              >
                {link.name}
                {link.dropdown && <span>⌄</span>}
              </a>
            ))}

            <a
              href="/account"
              onClick={() => setMenuOpen(false)}
              className="py-4 text-[#801b40] font-bold text-xs tracking-widest"
            >
              MY ACCOUNT / SIGN IN
            </a>

            <div className="py-3">
              <select
                aria-label="Select currency"
                defaultValue="NGN"
                className="border border-gray-300 rounded px-3 py-2 text-xs text-gray-700 bg-white"
              >
                <option value="NGN">🇳🇬 NGN</option>
                <option value="USD">🇺🇸 USD</option>
                <option value="GBP">🇬🇧 GBP</option>
              </select>
            </div>
          </nav>
        </div>
      )}

      {/* Promotional animation */}
      <style jsx>{`
        @keyframes promoFade {
          0% {
            opacity: 0;
            transform: translateY(7px);
          }
          15%, 80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-7px);
          }
        }

        .animate-promo-fade {
          animation: promoFade 3s ease-in-out;
        }
      `}</style>

    </header>
  );
}


