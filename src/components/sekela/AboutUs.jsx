import sekela from "@/assets/images/sekela02.jpg";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="flex justify-center">
        <div className="grid items-center px-2 md:gap-16 md:grid-cols-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="flex justify-center">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src={sekela}
              alt="Sekela Microfinance"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-base font-bold md:pt-0 text-custorm-yellow">WHO WE ARE</p>
            <h2 className="pb-5 text-2xl font-bold md:text-3xl">
              Empowering Financial Inclusion and Growth
            </h2>
            <p className="p-4 pb-5 text-base italic border-l-2 bg-custorm-gray border-custorm-yellow text-regal-blue">
              Sekela Microfinance: Building strong foundations for Africa&apos;s dreams.
            </p>
            <p className="pt-5 pb-5 text-base text-gray-500">
              Sekela Microfinance is a premier institution in Zimbabwe, committed to promoting financial inclusion and sustainable growth. We offer tailored microloans, savings, and insurance services to empower entrepreneurs and small businesses. Our focus on responsible lending and financial education helps clients build a strong foundation for their ventures.
            </p>
            <Link
              href="/companies/sekela-microfinance/about-us"
              className="text-base underline transition-opacity duration-200 hover:opacity-75 text-custorm-yellow"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
