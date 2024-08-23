import Image from "next/image";
import medienSturmer from "@/assets/images/mediensturmer.jpg";
import ServicesComponent from "@/components/wanika/Services"; // Renamed import
import Navbar from "@/components/wanika/Navbar";

export const metadata = {
  title: {
    default: "Services",
  },
};

const AboutServices = ({ fullHeight = false }) => {
  return (
    <>
      <Navbar />
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
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white ">Home/services</p>
          <h2 className="text-2xl text-white md:text-3xl">Services</h2>
        </div>
      </section>

      {/*services*/}

      <ServicesComponent /> {/* Use renamed import */}

    </>
  );
};

export default AboutServices;
