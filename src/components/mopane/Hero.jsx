import Image from "next/image";
import Link from "next/link";
import mopane20 from "@/assets/images/mopane20.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={mopane20}
        alt="Exploration Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-50 z-5"></div>
      <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56 xl:max-w-5xl 2xl:max-w-5xl md:max-w-3xl">
        <p className="pb-5 text-base font-bold text-center text-dark-brown md:text-left">
          YOUR CAPITAL RAISING EXPERT
        </p>
        <h1 className="pb-5 text-3xl font-bold leading-snug text-center text-white md:text-left">
          Empowering Growth Through Strategic Capital Solutions
        </h1>
        <p className="pb-5 text-base text-center text-white md:text-left">
          At Mopane Capital Ventures, we excel in raising capital for growth, connecting investors with high-return opportunities in Africa’s dynamic sectors. 
        </p>
        <div className="flex flex-col gap-5 md:flex-row md:justify-start">
          <Link
            href="/contact-us"
            className="px-6 py-3 text-base text-center text-white transition-all duration-300 bg-dark-brown rounded-3xl hover:text-dark-brown hover:bg-white hover:scale-105"
          >
            Contact Us
          </Link>

          <Link
            href="/companies/mopane-capital/about-us"
            className="px-6 py-3 text-base text-center transition-all duration-300 bg-white rounded-3xl text-dark-brown hover:bg-dark-brown hover:text-white hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
