import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const solutionsData = [
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Capital Raising",
    description: "Securing funding through high-net-worth individuals and institutional investors for high-growth opportunities in Africa’s key sectors.",
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Private Equity & Venture Capital",
    description: "Connecting investors with high-risk, high-return opportunities in Africa's commodity trading, energy, and mining sectors.",
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Structured Finance",
    description: "Delivering tailored financial structures and solutions in collaboration with Mopane Consultancy Services to enhance capital raise initiatives.",
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Risk Management",
    description: "Providing thorough due diligence, risk identification, and mitigation strategies for effective investment protection.",
  },
];

const Solutions = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <h2 className="max-w-lg mx-auto text-2xl font-bold text-center md:text-3xl">
        Driving Financial Growth and Stability
      </h2>
      <div className="grid gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {solutionsData.map((solution, index) => (
          <div key={index} className="p-5 shadow-lg bg-pine-brown rounded-xl transform transition duration-500 ease-in-out hover:translate-y-[-10px]">
            <div className="pb-5">{solution.icon}</div>
            <h3 className="pb-5 text-xl font-bold">{solution.title}</h3>
            <p className="text-base text-custorm-brown">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
