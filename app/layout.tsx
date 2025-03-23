import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buildcraft construction company",
  description:
    "Buildcraft construction company is a construction company that specializes in building houses, offices, and other structures.",
  keywords: "construction, building, houses, offices, structures",
  authors: [
    {
      name: "Buildcraft construction company",
      url: "https://buildcraft.gelapps.online",
    },
  ],
  creator: "Buildcraft construction company",
  publisher: "Buildcraft construction company",
  robots: "index, follow",
  openGraph: {
    title: "Buildcraft construction company",
    description:
      "Buildcraft construction company is a construction company that specializes in building houses, offices, and other structures.",
    url: "https://buildcraft.gelapps.online",
    siteName: "Buildcraft construction company",
    images: [
      {
        url: "https://buildcraft.gelapps.online/images/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
