import Image from "next/image";
import Link from "next/link";
import kikapu03 from "@/assets/images/kikapu03.jpeg";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="flex justify-center">
        <div className="grid items-center px-2 md:grid-cols-2 md:gap-16 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              src={kikapu03}
              width={600}
              height={500} 
              alt="market-place"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-base font-bold text-dark-brown md:pt-0">WHO WE ARE</p>
            <h2 className="pb-5 text-2xl font-bold text-dark-brown md:text-3xl">
              Delivering Precision in Secretarial Solutions
            </h2>
            <p className="p-4 text-base italic border-l-4 bg-custorm-gray border-dark-brown text-custorm-black">
            Kikapu Financial Services is dedicated to providing top-notch secretarial solutions that drive organizational success and ensure regulatory compliance.
            </p>
            <p className="pt-5 pb-5 text-base text-gray-500">
              We provide innovative secretarial solutions, including company registration, record maintenance, and regulatory adherence. Our expertise ensures operational efficiency and compliance for Zimbabwean businesses.
            </p>
            <Link
              href="/companies/kikapu-finance/about-us"
              className="text-base underline transition-opacity duration-200 hover:opacity-75 text-dark-brown"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
