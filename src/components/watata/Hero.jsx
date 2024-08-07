import Image from "next/image";
import Link from "next/link";
import watata04 from "@/assets/images/watata04.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
    <Image
      src={watata04}
      alt="Exploration Background"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="absolute z-0"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-5"></div>
    <div className="relative z-10 items-center px-2 pt-8 md:px-8 md:max-w-3xl lg:px-16 xl:px-52 2xl:px-56 xl:max-w-5xl 2xl:max-w-5xl">
      <p className="pb-5 font-bold text-center text-white text-base md:text-left">
        YOUR TRUSTED FINANCE PARTNER
      </p>
      <h1 className="pb-5 text-3xl leading-snug font-bold text-center text-white md:text-left ">
        Consulting is a long-term investment in your goal’s future.
      </h1>
      <p className="pb-5 text-center text-white md:text-base md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

      <div className="flex flex-col gap-5 md:flex-row">
      <Link
        href="/about-us"
        className="px-6 py-3 text-center text-white transition-all duration-300 text-base  rounded-3xl hover:text-dark-blue hover:bg-white hover:scale-105 bg-dark-blue"
      >
        Learn More
      </Link>
    </div>
    </div>
  </section>
  )
}

export default Hero
