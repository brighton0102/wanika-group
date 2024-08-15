import Image from "next/image";
import Link from "next/link";
import eventDeco from "@/assets/images/event-deco.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={eventDeco}
        alt="Event Management Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#643c05] opacity-40 z-5"></div>
      <div className="relative z-10 items-center px-4 pt-8 md:px-8 lg:px-16 md:max-w-3xl xl:px-52 2xl:px-56 xl:max-w-5xl 2xl:max-w-5xl">
        <p className="pb-5 text-base font-bold text-center text-white md:text-left">
          YOUR EVENT&apos;S RADIANT PARTNER
        </p>
        <h1 className="pb-5 text-3xl font-bold leading-snug text-center text-white md:text-left">
          Crafting Unforgettable Experiences with Precision and Creativity
        </h1>
        <p className="pb-5 text-base text-center text-white md:text-left">
          At Naka Event Management, we specialize in creating events that shine brightly and exceed expectations. 
        </p>
        <div className="flex flex-col gap-5 md:flex-row">
          <Link
            href="/contact-us"
            className="px-6 py-3 text-base text-center text-white transition-all duration-300 bg-custorm-pink rounded-3xl hover:bg-white hover:text-custorm-pink hover:scale-105"
          >
            Contact Us
          </Link>

          <Link
            href="/companies/naka-event-management/about-us"
            className="px-6 py-3 text-base text-center transition-all duration-300 bg-white rounded-3xl text-custorm-pink hover:bg-custorm-pink hover:text-white hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
