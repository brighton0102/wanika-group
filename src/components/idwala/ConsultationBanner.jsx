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
            <h2 className="pb-5 text-2xl font-bold text-white md:text-3xl">
              Build Wealth with Idwala Asset Management
            </h2>
            <p className="text-base text-white">
              Partner with us for personalized investment solutions and expert wealth management. Strengthen your financial future with our disciplined approach and proven strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationBanner;
