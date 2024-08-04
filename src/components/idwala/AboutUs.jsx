import Link from "next/link";
import Image from "next/image";
import pebbles from "@/assets/images/pebbles.jpg";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="flex justify-center">
        <div className="grid items-center px-2 md:grid-cols-2 md:gap-16 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
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
            <p className="pt-5 pb-5 text-lg font-bold md:pt-0 md:text-base text-dark-brown">ABOUT US</p>
            <h2 className="pb-5 text-4xl font-bold">
              Idwala Asset Management: Crafting Wealth with the Strength of Granite
            </h2>
            <p className="p-4 pb-5 text-lg italic border-l-4 md:text-base bg-pine-brown border-dark-brown text-custorm-black">
              Drawing inspiration from the black granite of Great Zimbabwe, we build enduring wealth for our clients.
            </p>
            <p className="pt-5 pb-5 text-lg text-gray-500 md:text-base">
              Idwala Asset Management is a registered company providing comprehensive investment services, including money market, equity investments, and more. We focus on sustainable wealth creation and infrastructure development.
            </p>
            <Link
              href="/companies/idwala-asset-management/about-us"
              className="text-lg underline md:text-base text-dark-brown"
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
