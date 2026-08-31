import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const title = "Yusuf Residency — 2 & 3 BHK Homes in Tandalja, Vadodara";
const description =
  "Yusuf Residency by Surti Developer: thoughtfully planned 2 & 3 BHK apartments on the 30 m Sun Pharma Road, Tandalja, Vadodara. Explore floor plans, amenities, specifications, construction progress and location.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yusuf-residency.example"),
  title,
  description,
  keywords: [
    "Yusuf Residency",
    "Surti Developer",
    "2 BHK Tandalja",
    "3 BHK Vadodara",
    "flats near Sun Pharma Road",
    "Tandalja apartments",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Yusuf Residency" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og.jpg"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-ink flex flex-col">{children}</body>
    </html>
  );
}
