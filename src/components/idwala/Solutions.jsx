import { FiUsers } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";
import { SlChart } from "react-icons/sl";
import { SlDiamond } from "react-icons/sl";

const cardData = [
  {
    icon: (
      <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Money Market Investments",
    description:
      "Secure and high-yield investment options in money markets to grow your wealth efficiently.",
  },
  {
    icon: (
      <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Equity Investments",
    description:
      "Invest in high-potential equities with expert guidance to maximize returns.",
  },
  {
    icon: (
      <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Structured Finance",
    description:
      "Innovative financial solutions tailored to meet complex funding requirements.",
  },
  {
    icon: (
      <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Infrastructure Development",
    description:
      "Comprehensive infrastructure development services to support sustainable growth.",
  },
];

const Solutions = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <h2 className="max-w-xl text-2xl mx-auto md:text-3xl font-bold text-center">
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
