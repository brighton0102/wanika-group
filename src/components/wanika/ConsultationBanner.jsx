import Image from "next/image";
import wanikaLeaf from "@/assets/images/wanika-leaf.jpeg";

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative top-0 w-full h-full">
        <Image
          src={wanikaLeaf}
          alt="Wanika Group"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 bg-black bg-opacity-50 md:px-8 lg:px-16 2xl:px-56 xl:px-52">
          <div className="max-w-xl">
            <h2 className="pb-5 text-2xl font-bold text-white md:text-3xl">
              Discover Financial Solutions with Wanika Group
            </h2>
            <p className="text-base text-white">
              Wanika Group is committed to innovation, transparency, and value creation. Partner with us to unlock financial growth through our comprehensive suite of services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;

