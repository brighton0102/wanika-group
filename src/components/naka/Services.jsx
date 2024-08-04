import Image from "next/image";
import naka04 from "@/assets/images/naka04.jpg";
import naka05 from "@/assets/images/naka05.jpg";
import eventDeco from "@/assets/images/event-deco.jpg";
import naka06 from "@/assets/images/naka06.jpg";
import naka07 from "@/assets/images/naka07.jpg";
import naka08 from "@/assets/images/naka08.jpg";

const services = [
  {
    image: naka04,
    alt: "trading",
    title: "Project Finance",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
  {
    image: naka05,
    alt: "trading",
    title: "Investment Consulting",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
  {
    image: naka06,
    alt: "trading",
    title: "International Financing",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
  {
    image: naka07,
    alt: "capital-Raising",
    title: "Residential Property",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
  {
    image: eventDeco,
    alt: "event-management",
    title: "Lending and Financing",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
  {
    image: naka08,
    alt: "secretarial-Service",
    title: "Financing and Construction",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
];

const Services = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 xl:px-52 2xl:px-72">
      <div className="">
        <p className="pb-5 text-lg font-bold text-center text-black md:text-base">OUR SERVICES</p>
        <h2 className="pb-10 text-4xl font-bold text-center">Services We Offer</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:px-16">
        {services.map((service, index) => (
          <div key={index} className="truncate bg-white rounded-lg shadow-lg card">
            <div className="relative w-full h-0 pt-[50%]">
              <Image
                src={service.image}
                alt={service.alt}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-2xl font-bold">{service.title}</h3>
              <p className="overflow-hidden text-lg md:text-base text-wrap">
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
