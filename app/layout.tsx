import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everything Hair & Co. - Luxury Human Hair Wigs",
  description: "Revamp. Restyle. Rewig. Every hair. Every strand.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=UnifrakturMaguntia&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
