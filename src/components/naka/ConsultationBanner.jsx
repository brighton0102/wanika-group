import Image from "next/image";
import naka02 from "@/assets/images/naka02.jpg";

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative w-full h-full">
        <Image
          src={naka02}
          alt="Consultation Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 bg-black bg-opacity-50 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-lg">
            <h3 className="pb-5 text-2xl font-bold text-white md:text-3xl">
              Make Your Event Shine with Naka Events Management
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
