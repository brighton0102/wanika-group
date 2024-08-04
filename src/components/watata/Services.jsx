import Image from "next/image";
import watata02 from "@/assets/images/watata02.jpg";
import watata01 from "@/assets/images/watata01.jpg";
import watata06 from "@/assets/images/watata06.jpg";
import watata09 from "@/assets/images/watata09.jpg";

const servicesData = [
  {
    image: watata01,
    title: "Project Finance",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  },
  {
    image: watata02,
    title: "Investment Consulting",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  },
  {
    image: watata09,
    title: "International Financing",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  },
  {
    image: watata06,
    title: "Residential Property",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  },
  {
    image: watata06,
    title: "Lending and Financing",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  },
  {
    image: watata09,
    title: "Financing and Construction",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  }
];

const Services = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-72">
      <div>
        <p className="pb-5 text-lg font-bold text-center md:text-base text-dark-blue">SERVICES WE OFFER</p>
        <h2 className="pb-10 text-4xl font-bold text-center">Our Services</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div key={index} className="truncate bg-white rounded-lg shadow-lg card">
            <div className="relative w-full h-0 pt-[50%]">
              <Image
                src={service.image}
                alt={service.title}
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
