import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "She Has Hope - Preventing Trafficking. Restoring Lives.",
  description: "She Has Hope exists to prevent girls from becoming slaves, rescue slavery victims, and rehabilitate survivors with hope.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-serif">{children}</body>
    </html>
  );
}
