import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ace and August",
  description: "📱Content • 📣 Ads • 🪢 Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-w-screen relative min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
