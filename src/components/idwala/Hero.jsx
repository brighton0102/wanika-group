import Image from "next/image";
import Link from "next/link";
import jeremy from "@/assets/images/jeremy.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={jeremy}
        alt="Exploration Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-5"></div>
      <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 md:max-w-3xl xl:px-52 2xl:px-72 xl:wax-w-5xl 2xl:max-w-7xl">
        <p className="pb-5 text-lg font-bold text-center text-white md:text-base md:text-left">
          YOUR TRUSTED FINANCE PARTNER
        </p>
        <h1 className="pb-5 text-3xl font-bold text-center text-white md:leading-snug md:text-left md:text-5xl">
          Building and growing wealth with the strength of granite.
        </h1>
        <p className="pb-5 text-lg text-center text-white md:text-base md:text-left">
          At Idwala Asset Management, we leverage the principles of resilience and strength, akin to the black granite of Great Zimbabwe, to create sustainable wealth for our clients.
        </p>
        <div className="flex flex-col items-center md:items-start">
          <Link href="/companies/idwala-asset-management/about-us" className="px-6 py-3 text-lg text-center text-white transition-all md:text-base bg-dark-brown">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
