import Image from "next/image";
import jeremy from "@/assets/images/jeremy.jpg";

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative top-0 w-full h-full bg-center bg-cover">
        <Image
          src={jeremy}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 bg-black bg-opacity-50 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-lg">
            <h2 className="pb-5 text-2xl md:text-3xl font-bold text-white">
              Partner with Idwala Asset Management Today!
            </h2>
            <p className="text-white text-base">
              Join us in crafting sustainable wealth and making a positive impact through innovative financial solutions and dedicated service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationBanner;
