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
      <body className={`${inter.className} relative bg-cover min-h-screen`}>
        <div className="bg-[linear-gradient(180deg,#00000054,#00000054),url('/img/brand/aa-wallpaper.png')] absolute inset-0 bg-cover bg-center"></div>

        {/* <div className="absolute inset-0 bg-white opacity-90"></div> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
