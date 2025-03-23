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
      url: "https://construction-landing,vercel.app",
    },
  ],
  creator: "Buildcraft construction company",
  publisher: "Buildcraft construction company",
  robots: "index, follow",
  openGraph: {
    title: "Buildcraft construction company",
    description:
      "Buildcraft construction company is a construction company that specializes in building houses, offices, and other structures.",
    url: "https://construction-landing,vercel.app",
    siteName: "Buildcraft construction company",
    images: [
      {
        url: "https://construction-landing,vercel.app/images/og.png",
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
