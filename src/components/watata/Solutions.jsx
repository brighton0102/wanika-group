import { FiUsers } from "react-icons/fi";
import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";

const solutionsData = [
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-blue" />,
    title: "Bulk Grain Importation",
    description: "Strategic sourcing and distribution of premium-grade maize, wheat, and soya from international suppliers, ensuring quality and seamless logistics.",
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-blue" />,
    title: "Bulk Mineral Exports",
    description: "Expertise in exporting coking coal, lithium, and chrome with stringent quality control and reliable delivery.",
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-blue" />,
    title: "Global Trade Solutions",
    description: "Providing essential commodities and expert trade solutions to enhance and rejuvenate supply chains worldwide.",
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-blue" />,
    title: "Quality Assurance",
    description: "Ensuring top-quality standards and compliance with safety protocols through strategic partnerships and rigorous quality control.",
  },
];

const Solutions = () => {
  return (
    <section className="px-2 py-24 bg-emarald md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div>
          <p className="pb-5 text-base font-bold text-dark-blue">WHAT WE OFFER</p>
          <h2 className="text-2xl font-bold text-dark-blue md:text-3xl">Developing Solutions for International Trade.</h2>
        </div>
        <div>
          <p className="pb-5 text-base">
            At Watata Commodities, we specialize in the procurement and distribution of essential bulk commodities. Our focus on quality and reliability ensures that we meet the growing demands of global supply chains.
          </p>
        </div>
      </div>
      <div className="grid gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {solutionsData.map((solution, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-xl transform transition duration-500 ease-in-out hover:translate-y-[-10px]">
            <div className="pb-5">
              {solution.icon}
            </div>
            <h3 className="pb-5 text-xl font-bold text-dark-blue">{solution.title}</h3>
            <p className="text-base">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
