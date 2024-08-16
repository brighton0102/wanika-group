import Image from "next/image";
import smile02 from "@/assets/images/smile02.jpg";
import sekela02 from "@/assets/images/sekela02.jpg";
import sekela05 from "@/assets/images/sekela05.jpg";
import sekela06 from "@/assets/images/sekela06.jpg";
import sekela07 from "@/assets/images/sekela07.jpg";
import sekela03 from "@/assets/images/sekela03.jpg";

const cardData = [
  {
    src: sekela02,
    alt: "microloans",
    title: "Microloans",
    description:
      "Empowering entrepreneurs and small businesses with tailored microloans to promote financial inclusion and sustainable growth.",
  },
  {
    src: sekela03,
    alt: "savings-accounts",
    title: "Savings Accounts",
    description:
      "Offering customized savings solutions designed to help individuals and businesses achieve financial stability and growth.",
  },
  {
    src: smile02,
    alt: "insurance-services",
    title: "Insurance Services",
    description:
      "Providing comprehensive insurance products to ensure clients' financial security and peace of mind.",
  },
  {
    src: sekela05,
    alt: "financial-education",
    title: "Financial Education",
    description:
      "Delivering financial education and guidance to foster responsible lending practices and ensure sustainable ventures.",
  },
  {
    src: sekela06,
    alt: "community-engagement",
    title: "Community Engagement",
    description:
      "Engaging with local communities and NGOs to drive holistic socio-economic development through collaborative initiatives.",
  },
  {
    src: sekela07,
    alt: "womens-empowerment",
    title: "Women's Empowerment",
    description:
      "Specialized loan products and support programs aimed at promoting gender equality and inclusive economic growth.",
  },
];

const Services = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="">
        <h2 className="pb-10 text-2xl font-bold text-center text-custorm-yellow md:text-3xl">
          OUR SERVICES
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
