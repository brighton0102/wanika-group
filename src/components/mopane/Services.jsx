import Image from "next/image";
import mopane13 from "@/assets/images/mopane13.jpg";
import mopane07 from "@/assets/images/mopane07.jpg";
import mopane17 from "@/assets/images/mopane17.jpg";
import mopane18 from "@/assets/images/mopane18.jpg";
import mopane16 from "@/assets/images/mopane16.jpg";

const servicesData = [
  {
    image: mopane16,
    title: "Project Finance",
    description: "Providing innovative project financing solutions to support the development of key infrastructure and business initiatives.",
    alt: "Project Finance"
  },
  {
    image: mopane17,
    title: "Investment Consulting",
    description: "Offering expert investment consulting services to help clients navigate complex financial landscapes and achieve their goals.",
    alt: "Investment Consulting"
  },
  {
    image: mopane13,
    title: "International Financing",
    description: "Facilitating international financing to connect global investors with high-potential opportunities in emerging markets.",
    alt: "International Financing"
  },
  {
    image: mopane07,
    title: "Residential Property",
    description: "Specializing in financing and development of residential properties to meet the growing housing demands.",
    alt: "Residential Property"
  },
  {
    image: mopane17,
    title: "Lending and Financing",
    description: "Providing a range of lending and financing options to support businesses in their growth and expansion efforts.",
    alt: "Lending and Financing"
  },
  {
    image: mopane18,
    title: "Financing and Construction",
    description: "Combining financing and construction expertise to deliver comprehensive solutions for building and infrastructure projects.",
    alt: "Financing and Construction"
  }
];

const Services = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-72">
      <div>
        <p className="pb-5 text-lg font-bold text-center md:text-base text-dark-brown">
          OUR SERVICES
        </p>
        <h2 className="pb-10 text-4xl font-bold text-center">Our Services</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div key={index} className="truncate rounded-lg shadow-lg bg-pine-brown card group">
            <div className="relative w-full h-0 pt-[50%] overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.alt}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-2xl font-bold">{service.title}</h3>
              <p className="pb-5 overflow-hidden text-lg text-dark-brown md:text-base text-wrap">
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

