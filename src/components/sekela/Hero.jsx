import smile from "@/assets/images/smile.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
    <Image
      src={smile}
      alt="Exploration Background"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="absolute z-0"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-[#fcc10b] opacity-30 z-5"></div>
    <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl xl:px-52 2xl:px-72">
    <p className="pb-5 text-lg font-bold text-center text-white md:text-base md:text-start">
        YOUR TRUSTED FINANCE PARTNER
      </p>
      <h1 className="pb-5 text-3xl font-bold text-center text-white md:text-left md:text-5xl ">
        Consulting is a long-term investment in your goal’s future.
      </h1>
      <p className="pb-5 text-lg text-center text-white md:text-base md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

      <div className="flex justify-center md:justify-start">
      <Link
        href="/companies/sekela-microfinance/about-us"
        className="px-6 py-3 text-lg bg-white md:text-base text-custorm-pink"
      >
        Learn More
        </Link>
        </div>
    </div>
  </section>
  )
}

export default Hero
