import Image from "next/image";
import mopane17 from "@/assets/images/mopane17.jpg";

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative w-full h-full">
        <Image 
          src={mopane17}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute top-0 left-0 z-0"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 bg-black bg-opacity-25 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-xl">
            <h2 className="pb-5 text-2xl md:text-3xl font-bold text-white">
              Ready to elevate your business? Partner with Mopane Capital today!
            </h2>
            <p className=" text-white text-base">
              Join us in transforming opportunities into sustainable growth. Our expert team is here to guide you through strategic financial solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationBanner;
