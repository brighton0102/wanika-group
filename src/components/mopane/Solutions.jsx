import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const solutionsData = [
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Capital Raising",
    description: "Specializing in securing funding for businesses of all sizes through strategic partnerships and expert financial solutions.",
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Private Equity",
    description: "Connecting high net-worth individuals and institutional investors with high-growth investment opportunities.",
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Structured Finance",
    description: "Providing innovative and tailored financial structures to meet the unique needs of each business.",
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Risk Management",
    description: "Implementing comprehensive risk identification and mitigation strategies to protect investments and ensure success.",
  },
];

const Solutions = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-72">
      <h2 className="max-w-xl mx-auto text-4xl font-bold text-center">
        Driving Financial Growth and Stability
      </h2>
      <div className="grid gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {solutionsData.map((solution, index) => (
          <div key={index} className="p-5 shadow-lg bg-pine-brown rounded-xl transform transition duration-500 ease-in-out hover:translate-y-[-10px]">
            <div className="pb-5">{solution.icon}</div>
            <h3 className="pb-5 text-2xl font-bold md:text-2xl">{solution.title}</h3>
            <p className="text-lg md:text-base text-custorm-brown">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
