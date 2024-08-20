import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const cardData = [
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Capital Raising",
    description: "Securing funding through high net-worth individuals and institutional investors for diverse ventures.",
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Investment Consulting",
    description: "Partnering with Mopane Consultancy Services to provide independent assessments and risk mitigation.",
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Global Market Engagement",
    description: "Connecting investors with high-risk, high-return opportunities in commodity trading, energy, and mining sectors.",
  },
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Rigorous Research",
    description: "Employing thorough research and analysis to ensure meticulous project selection and success.",
  },
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 bg-dark-brown md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <div>
          <p className="pb-5 text-base font-bold text-white">WHY CHOOSE US</p>
          <h2 className="pb-5 text-2xl font-bold text-white md:text-3xl">
            Unlock High-Impact Investment Opportunities
          </h2>
          <p className="text-base text-white">
            Mopane Capital Ventures specializes in capital raising and structured finance, connecting investors with high-return opportunities and providing comprehensive due diligence.
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
