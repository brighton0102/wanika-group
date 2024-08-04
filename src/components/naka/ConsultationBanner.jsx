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
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 bg-black bg-opacity-50 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
          <div className="max-w-xl">
            <h3 className="pb-5 text-4xl font-bold text-white md:text-4xl">
              Ready to make a difference? Join our fincco project team today!
            </h3>
            <p className="text-lg text-white md:text-base">
              Egestas rutrum sollicitudin vehicula nam justo erat non convallis
              parturient purus inceptos. Per consectetuer facilisis lacus
              conubia luctus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
