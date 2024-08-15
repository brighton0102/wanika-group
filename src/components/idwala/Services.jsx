import Image from "next/image";
import idwala02 from "@/assets/images/idwala02.jpg";
import idwala03 from "@/assets/images/idwala03.jpg";
import idwala04 from "@/assets/images/idwala04.jpg";
import idwala05 from "@/assets/images/idwala05.jpg";
import rob from "@/assets/images/rob.jpg";

const cardData = [
  {
    image: rob,
    alt: "project-finance",
    title: "Customized Portfolio Management",
    description: "Tailored investment strategies to meet your unique financial goals and enhance growth potential.",
  },
  {
    image: idwala02,
    alt: "investment-consulting",
    title: "Tailored Financial Planning",
    description: "Personalized plans to guide your financial journey and optimize wealth accumulation.",
  },
  {
    image: idwala03,
    alt: "international-financing",
    title: "Advanced Risk Management",
    description: "Comprehensive solutions to identify, assess, and mitigate financial risks effectively.",
  },
  {
    image: idwala04,
    alt: "residential-property",
    title: "Strategic Investment Consulting",
    description: "Expert advice to navigate global markets and make informed investment decisions.",
  },
  {
    image: idwala05,
    alt: "lending-and-financing",
    title: "Global Financing Solutions",
    description: "Connecting clients with international funding sources to support diverse investment needs.",
  },
  {
    image: rob,
    alt: "financing",
    title: "Capital Raising Services",
    description: "Expert assistance in securing capital through high-net-worth individuals and institutional investors.",
  }
];

const Services = () => {
  return (
    <section className="px-2 py-24 bg-white md:px-8 lg:px-16 lx:px-52 2xl:px-56">
      <div>
        <p className="pb-5 text-base font-bold text-center text-dark-brown">
          OUR SERVICES
        </p>
        <h2 className="pb-10 text-2xl font-bold text-center md:text-3xl">
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
              <h3 className="pb-5 text-xl font-bold">{card.title}</h3>
              <p className="pb-5 overflow-hidden text-base text-wrap">
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
