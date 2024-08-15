import Link from "next/link";
import Image from "next/image";
import pebbles from "@/assets/images/pebbles.jpg";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="flex justify-center">
        <div className="grid items-center px-2 md:grid-cols-2 md:gap-16 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="flex justify-center">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src={pebbles}
              width={600}
              height={500}
              alt="boulder"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-base font-bold md:pt-0 text-dark-brown">ABOUT US</p>
            <h2 className="pb-5 text-2xl font-bold md:text-3xl">
              Idwala Asset Management: Building Wealth with Granite-Like Strength
            </h2>
            <p className="p-4 pb-5 text-base italic border-l-4 bg-pine-brown border-dark-brown text-custorm-black">
              Inspired by the resilience of granite, we deliver tailored investment solutions and wealth management strategies.
            </p>
            <p className="pt-5 pb-5 text-base text-gray-500">
              Based in Zimbabwe, Idwala Asset Management offers customized portfolio management, financial planning, and advanced risk management. We aim to maximize returns and minimize risk through rigorous analysis and strategic decision-making.
            </p>
            <Link
              href="/companies/idwala-asset-management/about-us"
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
