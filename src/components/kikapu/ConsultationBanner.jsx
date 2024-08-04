import Image from "next/image";
import kikapu04 from "@/assets/images/kikapu04.jpeg";

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative top-0 w-full h-full">
        <Image
          src={kikapu04}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 bg-black bg-opacity-50 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
          <div className="max-w-xl">
            <h2 className="pb-5 text-4xl font-bold text-white">
              Ready to make a difference? Join our fincco project team today!
            </h2>
            <p className="text-lg text-white md:text-base">
              Egestas rutrum sollicitudin vehicula nam justo erat non
              convallis parturient purus inceptos. Per consectetuer facilisis
              lacus conubia luctus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
