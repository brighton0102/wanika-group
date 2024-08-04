import Image from "next/image";
import Link from "next/link";
import africanKids from "@/assets/images/african-kids.jpg";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="flex justify-center">
        <div className="grid items-center px-2 md:gap-16 md:grid-cols-2 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
          <div className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              src={africanKids}
              width={600}
              height={500}
              alt="Mopane Capital Ventures"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-lg font-bold md:pt-0 md:text-base text-dark-brown">WHO WE ARE</p>
            <h2 className="pb-5 text-4xl font-bold text-custorm-black">
              Empowering Businesses with Resilient Financial Solutions
            </h2>
            <p className="p-4 pb-5 text-lg italic border-l-4 md:text-base bg-pine-brown border-dark-brown text-custorm-black">
              At Mopane Capital, we specialize in capital raising and structured finance solutions, leveraging expertise and strategic partnerships to drive sustainable growth.
            </p>
            <p className="pt-5 pb-5 text-lg text-gray-500 md:text-base">
              Our team of experienced professionals collaborates with high net-worth individuals and institutional investors to secure funding for businesses across various sectors. We are dedicated to enhancing the value creation and resilience of enterprises through innovative financial strategies.
            </p>

            <Link
              href="/companies/mopane-capital/about-us"
              className="text-lg underline transition-all md:text-base text-dark-brown"
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
