import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, Alex_Brush } from "next/font/google";
import "./globals.css";

// Display serif: editorial, high contrast, and not the usual luxury default.
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

// Clean humanist sans for body and UI.
const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

// Script is reserved for the "Kudzie" wordmark only.
const brush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-brush",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kudzietheplanner.com"),
  title: "Kudzie The Planner | Wedding & Event Planning in Zimbabwe",
  description:
    "Committed beyond planning. Wedding planning, co-ordination, event concepts and private consultation by Kudzie The Planner in Harare, Victoria Falls and beyond.",
  openGraph: {
    title: "Kudzie The Planner | Committed Beyond Planning",
    description:
      "Wedding planning, co-ordination, event concepts and consultation in Zimbabwe.",
    type: "website",
    locale: "en_ZW",
    images: [{ url: "/hall_hd.jpg", width: 1200, height: 630, alt: "Kudzie The Planner" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${dm.variable} ${brush.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0B0414" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
