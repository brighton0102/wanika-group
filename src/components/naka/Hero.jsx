import Image from "next/image";
import Link from "next/link";
import eventDeco from "@/assets/images/event-deco.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
    <Image
      src={eventDeco}
      alt="Exploration Background"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="absolute z-0"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-[#643c05] opacity-40 z-5"></div>
    <div className="relative z-10 items-center px-4 pt-8 md:px-8 lg:px-16 md:max-w-3xl xl:px-52 2xl:px-72 xl:max-w-5xl 2xl:max-w-7xl">
      <p className="pb-5 text-lg font-bold text-center text-white md:text-base md:text-left">
        YOUR TRUSTED FINANCE PARTNER
      </p>
      <h1 className="pb-5 text-3xl font-bold text-center text-white md:text-left md:text-5xl">
        Consulting is a long-term investment in your goal’s future.
      </h1>
      <p className="pb-5 text-lg text-center text-white md:text-base md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="flex flex-col gap-5 md:flex-row">
        <Link
          href="/contact-us"
          className="px-6 py-3 text-lg text-center text-white transition-all md:text-base bg-custorm-pink rounded-3xl"
        >
          Contact Us
        </Link>

        <Link
          href="/companies/naka-event-management/about-us"
          className="px-6 py-3 text-lg text-center bg-white border md:text-base rounded-3xl text-custorm-pink"
        >
          {" "}
          Learn More
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Hero
