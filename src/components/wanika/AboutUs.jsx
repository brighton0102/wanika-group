import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/images/hero.webp";

const CompanyIntro = () => {
  return (
    <>
      {/* About Us */}
      <section className="py-24">
        <div className="flex justify-center">
          <div className="items-center px-2 md:gap-16 md:grid-cols-2 md:grid md:px-8 lg:px-16 2xl:px-72 xl:px-52">
            <div className="flex justify-center">
              <Image
                className="object-cover rounded-lg"
                src={hero}
                width={600}
                height={500} 
                alt="Wanika Investments"
              />
            </div>
            <div className="md:max-w-2xl">
              <p className="pt-5 pb-5 text-lg font-bold md:pt-0 md:text-base text-custorm-green">
                WHO WE ARE
              </p>
              <h2 className="pb-5 text-4xl font-bold text-custorm-black">
                Exploration and Discovery in African Financial Solutions
              </h2>
              <p className="p-5 text-lg italic border-l-4 md:text-base border-custorm-green text-regal-blue">
                Wanika Investments drives growth through relentless innovation, agility, and value creation, offering trusted and professional financial solutions.
              </p>
              <p className="pt-5 pb-5 text-lg text-gray-500 md:text-base ">
                Our group of companies specializes in capital raising, structured finance, asset management, international commodity financing, microfinance, company secretarial services, and corporate events management.
              </p>
              <Link
                href="/about-us"
                className="text-lg underline transition-all md:text-base text-custorm-green"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyIntro;
