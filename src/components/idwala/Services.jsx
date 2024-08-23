import Image from "next/image";
import tailoredPlan from "@/assets/images/tailored-plan.jpeg";
import riskManagement from "@/assets/images/risk-management.jpeg";
import capitalRaise from "@/assets/images/capital-raise.jpeg";
import strategicPlan from "@/assets/images/strategic-plan.jpeg";
import globalFinance from "@/assets/images/global-finance.jpeg";
import internationalFinancing from "@/assets/images/international-financing.jpeg";

const cardData = [
  {
    image: internationalFinancing,
    alt: "project-finance",
    title: "Customized Portfolio Management",
    description: "Tailored investment strategies to meet your unique financial goals and enhance growth potential.",
  },
  {
    image: tailoredPlan,
    alt: "investment-consulting",
    title: "Tailored Financial Planning",
    description: "Personalized plans to guide your financial journey and optimize wealth accumulation.",
  },
  {
    image: riskManagement,
    alt: "international-financing",
    title: "Advanced Risk Management",
    description: "Comprehensive solutions to identify, assess, and mitigate financial risks effectively.",
  },
  {
    image: strategicPlan,
    alt: "residential-property",
    title: "Strategic Investment Consulting",
    description: "Expert advice to navigate global markets and make informed investment decisions.",
  },
  {
    image: globalFinance,
    alt: "lending-and-financing",
    title: "Global Financing Solutions",
    description: "Connecting clients with international funding sources to support diverse investment needs.",
  },
  {
    image: capitalRaise,
    alt: "financing",
    title: "Capital Raising Services",
    description: "Expert assistance in securing capital through high-net-worth individuals and institutional investors.",
  }
];

const Services = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 lx:px-52 2xl:px-56">
      <div>
        <h2 className="pb-10 text-2xl font-bold text-center text-dark-brown md:text-3xl">
          OUR SERVICES
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4">
        {cardData.map((card, index) => (
          <div key={index} className="truncate bg-white rounded-lg shadow-lg card">
            <div className="relative w-full h-0 pt-[50%] overflow-hidden group">
              <Image
                src={card.image}
                alt={card.alt}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-xl font-bold text-dark-brown">{card.title}</h3>
              <p className="pb-5 overflow-hidden text-base text-black text-wrap">
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
