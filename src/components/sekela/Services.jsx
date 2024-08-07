import Image from "next/image";
import smile02 from "@/assets/images/smile02.jpg";
import sekela02 from "@/assets/images/sekela02.jpg";
import sekela05 from "@/assets/images/sekela05.jpg";
import sekela06 from "@/assets/images/sekela06.jpg";
import sekela07 from "@/assets/images/sekela07.jpg";
import sekela03 from "@/assets/images/sekela03.jpg";

const cardData = [
  {
    src: smile02,
    alt: "trading",
    title: "Project Finance",
    description:
      "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
  {
    src: sekela02,
    alt: "trading",
    title: "Investment Consulting",
    description:
      "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
  {
    src: sekela03,
    alt: "trading",
    title: "International Financing",
    description:
      "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
  {
    src: sekela07,
    alt: "capital-Raising",
    title: "Residential Property",
    description:
      "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
  {
    src: sekela05,
    alt: "event-management",
    title: "Lending and Financing",
    description:
      "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
  {
    src: sekela06,
    alt: "secretarial-Service",
    title: "Financing and Construction",
    description:
      "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing.",
  },
];

const Services = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="">
        <p className="pb-5 font-bold text-center text-base text-custorm-yellow">
          OUR SERVICES
        </p>
        <h2 className="pb-10 text-2xl md:text-3xl font-bold text-center">
          Services we offer
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="truncate rounded-lg card bg-custorm-gray"
          >
            <div className="relative w-full h-0 pt-[50%] overflow-hidden group">
              <Image
                src={card.src}
                alt={card.alt}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-xl font-bold">{card.title}</h3>
              <p className="overflow-hidden text-base text-wrap">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
