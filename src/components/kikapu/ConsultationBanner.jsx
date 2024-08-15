import Image from "next/image";
import kikapu04 from "@/assets/images/kikapu04.jpeg";

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative top-0 w-full h-full">
        <Image
          src={kikapu04}
          alt="Kikapu Financial Services Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 bg-black bg-opacity-50 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-xl">
            <h2 className="pb-5 text-2xl font-bold text-white md:text-3xl">
              Elevate Your Business with Expert Secretarial Solutions
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
