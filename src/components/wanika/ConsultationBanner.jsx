import Image from "next/image";
import christina from "@/assets/images/christina.jpg";

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative top-0 w-full h-full">
        <Image
          src={christina}
          alt="Christina"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 bg-black bg-opacity-50 md:px-8 lg:px-16 2xl:px-56 xl:px-52">
          <div className="max-w-xl">
            <h2 className="pb-5 text-2xl font-bold text-white md:text-3xl">
              Ready to achieve your financial goals? Partner with us today!
            </h2>
            <p className=" text-white text-base">
              At Wanika Investments, we specialize in capital raising to help businesses secure the funds they need for growth. Join our project team and make a difference in the financial landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
