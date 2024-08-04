import Image from "next/image";
import idwala02 from "@/assets/images/idwala02.jpg";
import idwala03 from "@/assets/images/idwala03.jpg";
import idwala04 from "@/assets/images/idwala04.jpg";
import idwala05 from "@/assets/images/idwala05.jpg";
import rob from "@/assets/images/rob.jpg";

const cardData = [
  {
    image: rob,
    alt: "trading",
    title: "Project Finance",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  },
  {
    image: idwala02,
    alt: "trading",
    title: "Investment consulting",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  },
  {
    image: idwala03,
    alt: "trading",
    title: "International financing",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  },
  {
    image: idwala04,
    alt: "capital-Raising",
    title: "Residential property",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  },
  {
    image: idwala05,
    alt: "event-management",
    title: "Lending and financing",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  },
  {
    image: rob,
    alt: "secretarial-Service",
    title: "Financing",
    description: "Felis ligula pulvinar quam a mattis vitae litora. Feugiat praesent si felis lobortis magna et consectetur convallis ultricies adipiscing."
  }
];

const Services = () => {
  return (
    <section className="px-2 py-24 bg-white md:px-8 lg:px-16 lx:px-52 2xl:px-72">
      <div>
        <p className="pb-5 text-lg font-bold text-center md:text-base text-dark-brown">
          OUR SERVICES
        </p>
        <h2 className="pb-10 text-4xl font-bold text-center">
          Services We Offer
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4">
        {cardData.map((card, index) => (
          <div key={index} className="truncate rounded-lg shadow-lg card bg-custorm-gray">
            <div className="relative w-full h-0 pt-[50%]">
              <Image
                src={card.image}
                alt={card.alt}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-2xl font-bold">{card.title}</h3>
              <p className="pb-5 overflow-hidden text-lg md:text-base text-wrap">
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
