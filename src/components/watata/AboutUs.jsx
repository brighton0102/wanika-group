import Image from "next/image";
import Link from "next/link";
import seeds from "@/assets/images/seeds.jpeg";

const AboutUs = () => {
  return (
    <section className="py-24">
      <div className="flex justify-center">
        <div className="grid items-center px-2 md:gap-16 md:grid-cols-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              src={seeds}
              width={600}
              height={500}
              alt="Commodities Market"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-base font-bold md:pt-0 text-dark-blue">ABOUT US</p>
            <h2 className="pb-5 text-2xl font-bold md:text-3xl">
              Vital Trade Solutions for a Growing World
            </h2>
            <p className="p-4 pb-5 text-base italic border-l-4 bg-custorm-gray border-dark-blue text-custorm-black">
              Watata Commodities excels in the procurement and distribution of essential bulk commodities, enhancing supply chains globally.
            </p>
            <p className="pt-5 pb-5 text-base text-gray-500">
              As a leading international trade company, we focus on bulk grain importation (maize, wheat, soya) and mineral exports (coking coal, lithium, chrome). Our strategic sourcing and strong partnerships ensure high-quality products and reliable delivery.
            </p>
            <Link
              href="/companies/watata-commodities/about-us"
              className="text-base underline transition-opacity duration-200 hover:opacity-75 text-dark-blue"
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
