import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Raw UX — Project Gallery",
  description:
    "Design. AI. Product. Leadership. 20 years of product design work by Raja.",
  openGraph: {
    title: "Raw UX — Project Gallery",
    description:
      "Design. AI. Product. Leadership. 20 years of product design work by Raja.",
    url: "https://rawux.vercel.app",
    siteName: "Raw UX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
