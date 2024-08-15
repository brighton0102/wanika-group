import Image from "next/image";
import Link from "next/link";
import kikapu from "@/assets/images/kikapu.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={kikapu}
        alt="Kikapu Financial Services Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-60 z-5"></div>
      <div className="relative z-10 items-center px-2 pt-8 md:px-8 md:max-w-3xl lg:px-16 xl:px-52 2xl:px-56 xl:max-w-5xl 2xl:max-w-5xl">
        <p className="pb-5 text-base font-bold text-center text-white md:text-left">
          INNOVATIVE SECRETARIAL SOLUTIONS
        </p>
        <h1 className="pb-5 text-3xl font-bold leading-snug text-center text-white md:text-left">
          Expertise in Corporate Governance and Compliance
        </h1>
        <p className="pb-5 text-base text-center text-white md:text-left">
          Kikapu Financial Services provides expert support in corporate governance, compliance, and regulatory matters. We handle company registration, record maintenance, and ensure adherence to legal standards, helping businesses thrive.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            href="/about-us"
            className="px-6 py-3 text-base text-center transition-all duration-300 bg-white rounded-3xl text-dark-brown hover:bg-dark-brown hover:text-white hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
