import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/images/hero.webp";

const CompanyIntro = () => {
  return (
    <>
      {/* About Us */}
      <section className="py-24">
        <div className="flex justify-center">
          <div className="items-center px-2 md:gap-16 md:grid-cols-2 md:grid md:px-8 lg:px-16 2xl:px-56 xl:px-52">
            <div className="flex justify-center">
              <Image
                className="object-cover rounded-lg"
                src={hero}
                width={600}
                height={500} 
                alt="Wanika Group"
              />
            </div>
            <div className="md:max-w-2xl">
              <p className="pt-5 pb-5 font-bold md:pt-0 text-base text-custorm-green">
                WHO WE ARE
              </p>
              <h2 className="pb-5 text-2xl md:text-3xl font-bold text-custorm-black">
                A Comprehensive Suite of Financial Services
              </h2>
              <p className="p-5 italic border-l-4 text-base border-custorm-green text-regal-blue">
                Wanika Group comprises seven subsidiary companies offering diverse financial services.
              </p>
              <p className="pt-5 pb-5 text-gray-500 text-base">
                From capital raising and structured finance to asset management and microfinance, our subsidiaries are committed to delivering excellence.
              </p>
              <Link
                href="/about-us"
                className="underline transition-opacity duration-200 text-base text-custorm-green hover:opacity-75"
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
