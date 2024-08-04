import Image from "next/image";
import Link from "next/link";
import springWaters from "@/assets/images/spring-waters.jpg";
import kikapu06 from "@/assets/images/kikapu06.jpeg";
import sekela from "@/assets/images/sekela02.jpg";
import treePic from "@/assets/images/tree-pic.jpg";
import eventDeco from "@/assets/images/event-deco.jpg";
import rob from "@/assets/images/rob.jpg";

const servicesData = [
  {
    src: treePic,
    alt: "consultancy",
    title: "Mopane Consultancy Services",
    description: "Specializes in co-creating new enterprises and enhancing the value creation, resilience, and long-term sustenance of existing businesses.",
    link: "/companies/mopane-consultancy"
  },
  {
    src: springWaters,
    alt: "trading",
    title: "Watata Commodities",
    description: "Renowned for international trade focusing on bulk grain importation and bulk mineral exports, with a strong emphasis on maize, wheat, soya, and ammonium nitrate.",
    link: "/companies/watata-commodities"
  },
  {
    src: kikapu06,
    alt: "capital-Raising",
    title: "Kikapu Financial Services",
    description: "Provides expert advisory, secretarial, and regulatory support for businesses, ensuring compliance and optimizing organizational efficiency.",
    link: "/companies/kikapu-finance"
  },
  {
    src: sekela,
    alt: "event-management",
    title: "Sekela Micro Finance",
    description: "A leading microfinance institution in Zimbabwe, committed to financial inclusion and driving sustainable economic growth through microloans, savings accounts, and insurance services.",
    link: "/companies/sekela-microfinance"
  },
  {
    src: rob,
    alt: "asset-management",
    title: "Idwala Asset Management",
    description: "Offers a comprehensive suite of asset management services, focusing on sustainable wealth creation, infrastructure development, and alignment with UN Sustainable Development Goals.",
    link: "/companies/idwala-asset-management"
  },
  {
    src: eventDeco,
    alt: "event-management",
    title: "Naka Event Management",
    description: "Specializes in event planning and execution, creating unforgettable experiences through meticulous planning, flawless execution, and innovative design.",
    link: "/companies/naka-event-management"
  }

];

const Services = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 2xl:px-80 xl:px-52 bg-custorm-gray">
      <div>
        <p className="pb-5 text-lg font-bold text-center md:text-base text-custorm-green">
          OUR SERVICES
        </p>
        <h2 className="pb-10 text-4xl font-bold text-center ">
          Services We Offer
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div key={index} className="truncate bg-white rounded-lg shadow-lg card">
            <div className="relative w-full h-0 pt-[50%] overflow-hidden group">
              <Image
                src={service.src}
                alt={service.alt}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-2xl font-bold">{service.title}</h3>
              <p className="pb-5 overflow-hidden text-lg md:text-base text-wrap">
                {service.description}
              </p>
              <Link href={service.link} className="text-lg underline transition-all md:text-base text-custorm-green">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
