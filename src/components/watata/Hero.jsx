import Image from "next/image";
import Link from "next/link";
import watata20 from "@/assets/images/watata20.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={watata20}
        alt="Commodities Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-5"></div>
      <div className="relative z-10 items-center px-2 pt-8 md:px-8 md:max-w-3xl lg:px-16 xl:px-52 2xl:px-56 xl:max-w-5xl 2xl:max-w-5xl">
        <p className="pb-5 text-base font-bold text-center text-white md:text-left">
          YOUR LEADING TRADE PARTNER
        </p>
        <h1 className="pb-5 text-3xl font-bold leading-snug text-center text-white md:text-left">
          Nourishing Growth Through Essential Commodities
        </h1>
        <p className="pb-5 text-center text-white md:text-base md:text-left">
          Watata Commodities specializes in the procurement and distribution of crucial bulk commodities, including maize, wheat, soya, and minerals, with a commitment to quality and reliability.
        </p>

        <div className="flex flex-col gap-5 md:flex-row">
          <Link
            href="/about-us"
            className="px-6 py-3 text-base text-center text-white transition-all duration-300 rounded-3xl hover:text-dark-blue hover:bg-white hover:scale-105 bg-dark-blue"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
