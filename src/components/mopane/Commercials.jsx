import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const cardData = [
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Capital Raising",
    description: "Specializing in capital raising through high net-worth individuals and institutional investors.",
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Investment Attraction",
    description: "Attracting investment with experienced technocrats across various industries.",
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Global Partnerships",
    description: "Engaging with private equity and venture capital markets in the USA, Canada, and Europe.",
  },
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Comprehensive Analysis",
    description: "Conducting rigorous analysis to identify projects for successful investment.",
  },
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <div>
          <p className="pb-5 font-bold text-base text-dark-brown">WHY CHOOSE US</p>
          <h2 className="pb-5 text-2xl md:text-3xl font-bold">
            Unlocking Investment Opportunities Together
          </h2>
          <p className="text-base text-gray-500">
            Mopane Capital Ventures leverages stakeholder expertise to co-create new enterprises and enhance existing businesses.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {cardData.map((card, index) => (
            <div key={index} className="p-6 shadow-lg bg-pine-brown rounded-xl transform transition duration-500 ease-in-out hover:translate-y-[-10px]">
              <div className="pb-5">{card.icon}</div>
              <h3 className="pb-5 text-xl font-bold">{card.title}</h3>
              <p className="text-base text-custorm-brown">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commercials;
