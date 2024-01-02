import Header from "@/components/navigation/header";
import { Rubik_Glitch } from "next/font/google";
import Image from "next/image";

const glitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <div
        className={` relative bg-cover h-screen bg-[linear-gradient(180deg,#ffffff,#ffffff99),url('/img/brand/aa-wallpaper.webp')] bg-no-repeat bg-cover bg-center overflow-x-hidden`}
      >
        <Header />
        <main className="m-horizontal flex flex-col items-center justify-between text-center">
          <div
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full`}
          >
            <h1
              className={`${glitch.className} mb-s4 text-blue text-6xl xs:text-8xl lg:text-9xl`}
            >
              📱Content
              <br /> 📣 Ads <br />
              🪢 Community
            </h1>

            <button className="rounded-lg px-3 py-2 font-bold bg-green hover:bg-blue">
              Get Started
            </button>
          </div>
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-blue p-s2 bg-blue rounded-t-3xl w-full 2xs:w-72">
            <p
              className={`${glitch.className} text-green text-3xl md:text-8xl`}
            >
              50+
            </p>
            <p className="text-sm">
              social media accounts and businesses managed. Get in touch
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
