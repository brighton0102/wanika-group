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
              <p className="pt-5 pb-5 text-base font-bold md:pt-0 text-custorm-green">
                WHO WE ARE
              </p>
              <h2 className="pb-5 text-2xl font-bold md:text-3xl text-custorm-black">
                Discover Innovation and Value with Wanika Group
              </h2>
              <p className="p-5 text-base italic border-l-4 bg-custorm-gray border-custorm-green text-regal-blue">
                Wanika Group is a diversified financial services conglomerate
                committed to innovation, agility, and value creation.
              </p>
              <p className="pt-5 pb-5 text-base text-gray-500">
                With seven subsidiaries specializing in capital raising, asset
                management, commodity trading, microfinance, and more, we
                deliver comprehensive solutions tailored to diverse client
                needs.
              </p>
              <p className="pb-5 text-base text-gray-500">
                The essence of &apos;Wanika,&apos; derived from the Shona word
                &apos;kuwana&apos; meaning &apos;to find,&apos; reflects our
                mission to discover and provide innovative financial solutions
                that drive growth.
              </p>
              <Link
                href="/about-us"
                className="text-base underline transition-opacity duration-200 text-custorm-green hover:opacity-75"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyIntro;
