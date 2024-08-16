import Image from "next/image";
import wheat from "@/assets/images/wheat.jpg";

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative w-full h-full">
        <Image 
          src={wheat} 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          className="z-0" 
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center bg-[#000000] bg-opacity-25 px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="z-20 max-w-xl">
            <h3 className="pb-5 text-2xl font-bold text-white md:text-3xl">
              Elevating Global Trade with Essential Commodities
            </h3>
            <p className="text-base text-white">
              At Watata Commodities, we specialize in the procurement and distribution of bulk grain and minerals, ensuring quality and reliability in every transaction. Join us in strengthening supply chains and driving growth with our expert trade solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
