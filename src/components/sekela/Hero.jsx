import sekela20 from "@/assets/images/sekela18.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={sekela20}
        alt="Microfinance Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#fcc10b] opacity-20 z-5"></div>
      <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 md:max-w-3xl xl:max-w-5xl 2xl:max-w-5xl xl:px-52 2xl:px-56">
        <p className="pb-5 text-base font-bold text-center text-custorm-pink md:text-start">
          YOUR PARTNER IN FINANCIAL INCLUSION
        </p>
        <h1 className="pb-5 text-3xl font-bold leading-snug text-center text-white md:text-left">
          Building a Strong Financial Foundation for Your Growth
        </h1>
        <p className="pb-5 text-base text-center text-white md:text-left">
          Sekela Microfinance empowers Zimbabwe&apos;s entrepreneurs and small businesses with tailored financial solutions, fostering sustainable economic growth and financial inclusion.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            href="/companies/sekela-microfinance/about-us"
            className="px-6 py-3 text-base text-white transition-all duration-300 bg-custorm-pink hover:text-custorm-pink hover:bg-white hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;
