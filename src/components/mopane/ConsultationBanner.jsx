import Image from "next/image";
import mopane22 from "@/assets/images/mopane22.jpg";

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative w-full h-full">
        <Image 
          src={mopane22}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute top-0 left-0 z-0"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 bg-black bg-opacity-25 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-xl">
            <h2 className="pb-5 text-2xl font-bold text-white md:text-3xl">
              Unlock High-Impact Investments with Mopane Capital
            </h2>
            <p className="text-base text-white">
              Partner with us to access tailored capital raising and structured finance solutions. Our expert team connects you with top investors and ensures meticulous project selection for sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationBanner;
