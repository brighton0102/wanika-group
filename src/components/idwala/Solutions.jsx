import { FiUsers } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";
import { SlChart } from "react-icons/sl";
import { SlDiamond } from "react-icons/sl";

const cardData = [
  {
    icon: (
      <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Customized Portfolio Management",
    description:
      "Tailored portfolio strategies to optimize investment returns and align with your financial goals.",
  },
  {
    icon: (
      <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Tailored Financial Planning",
    description:
      "Personalized financial planning to help you navigate global markets and achieve long-term success.",
  },
  {
    icon: (
      <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Advanced Risk Management",
    description:
      "Comprehensive risk management solutions to minimize exposure and enhance financial stability.",
  },
  {
    icon: (
      <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Strategic Investment Solutions",
    description:
      "Innovative strategies for navigating global markets and maximizing investment potential.",
  },
];

const Solutions = () => {
  return (
    <section className="px-2 py-24 bg-dark-brown md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <h2 className="max-w-xl mx-auto text-2xl font-bold text-center text-white md:text-3xl">
        Comprehensive Wealth Management Solutions
      </h2>
      <div className="grid gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-5 shadow-lg bg-pine-brown rounded-xl transform transition duration-500 ease-in-out hover:translate-y-[-10px]"
          >
            <div className="pb-5">{card.icon}</div>
            <h3 className="pb-5 text-xl font-bold">{card.title}</h3>
            <p className="text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
