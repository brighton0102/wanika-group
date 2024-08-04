import Image from "next/image";
import watata02 from "@/assets/images/watata02.jpg";

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative w-full h-full">
        <Image 
          src={watata02} 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          className="z-0" 
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center bg-[#000000] bg-opacity-25 px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
          <div className="z-20 max-w-xl">
            <h3 className="pb-5 text-4xl font-bold text-white">
              Ready to make a difference? Join our fincco project team today!
            </h3>
            <p className="text-lg text-white md:text-base">
              Egestas rutrum sollicitudin vehicula nam justo erat non convallis parturient purus inceptos. Per consectetuer facilisis lacus conubia luctus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
