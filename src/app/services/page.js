import Image from "next/image";
import medienSturmer from "@/assets/images/mediensturmer.jpg";
import Services from "@/components/wanika/Services";

const Page = ({ fullHeight = false }) => {
  return (
    <>
      <section
        className="relative w-full overflow-hidden pt-60"
        style={{ height: fullHeight ? "100vh" : "50vh" }}
      >
        <Image
          src={medienSturmer}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-70 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
          <p className="text-lg text-white md:text-base">Home/services</p>
          <h3 className="text-2xl text-white md:text-4xl">Services</h3>
        </div>
      </section>

      {/*services*/}

      <Services />

    </>
  );
};

export default Page;
