import Image from "next/image";
import kikapu04 from "@/assets/images/kikapu04.jpeg";
import property from "@/assets/images/property.jpeg";
import projectFinance from "@/assets/images/project-finance.jpeg";
import consulting from "@/assets/images/consulting.jpeg";
import kikapu08 from "@/assets/images/kikapu08.jpeg";
import kikapu09 from "@/assets/images/kikapu09.jpeg";

const services = [
  {
    src: projectFinance,
    alt: "Project Finance",
    title: "Project Finance",
    description:
      "Expertly managing company registration, statutory record maintenance, and annual return filings to ensure compliance and operational efficiency.",
  },
  {
    src: consulting,
    alt: "Investment Consulting",
    title: "Investment Consulting",
    description:
      "Providing strategic guidance on investment opportunities to drive sustainable growth and optimize financial outcomes for your business.",
  },
  {
    src: kikapu04,
    alt: "International Financing",
    title: "International Financing",
    description:
      "Offering solutions for seamless international financial operations, ensuring regulatory adherence and smooth cross-border transactions.",
  },
  {
    src: property,
    alt: "Residential Property",
    title: "Residential Property",
    description:
      "Supporting the management and compliance aspects of residential property investments, enhancing operational efficiency and regulatory compliance.",
  },
  {
    src: kikapu08,
    alt: "Lending and Financing",
    title: "Lending and Financing",
    description:
      "Streamlining lending processes and financing solutions to meet your business needs with precision and compliance.",
  },
  {
    src: kikapu09,
    alt: "Financing and Construction",
    title: "Financing and Construction",
    description:
      "Facilitating financing solutions for construction projects, ensuring regulatory compliance and efficient management throughout the project lifecycle.",
  },
];

const Services = () => {
  return (
    <section className="px-2 py-24 bg-white md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <p className="pb-5 text-base font-bold text-center">OUR SERVICES</p>
      <h2 className="pb-10 text-2xl font-bold text-center md:text-3xl">Services We Offer</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="truncate rounded-lg card bg-pine-brown">
            <div className="relative w-full h-0 pt-[50%]">
              <Image
                src={service.src}
                alt={service.alt}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-xl font-bold">{service.title}</h3>
              <p className="overflow-hidden text-base text-wrap">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
