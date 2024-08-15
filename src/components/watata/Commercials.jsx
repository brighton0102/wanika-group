import { FiUsers } from "react-icons/fi";
import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";

const cardData = [
  {
    icon: FiUsers,
    title: "Bulk Grain Importation",
    description:
      "Strategic sourcing and distribution of premium maize, wheat, and soya, ensuring top quality and efficient logistics.",
  },
  {
    icon: SlDiamond,
    title: "Bulk Mineral Exports",
    description:
      "Expert handling and export of coking coal, lithium, and chrome with stringent quality controls.",
  },
  {
    icon: SlGlobe,
    title: "International Trade Solutions",
    description:
      "Global partnerships and seamless logistics for efficient importation and exportation of bulk commodities.",
  },
  {
    icon: SlChart,
    title: "Comprehensive Supply Chains",
    description:
      "Enhancing supply chains with reliable procurement and distribution of essential commodities, including ammonium nitrate.",
  },
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 bg-custorm-gray lg:px-16 xl:px-52 2xl:px-56">
      <div className="flex flex-col items-center justify-center gap-5 mx-auto md:flex-row">
        <div className="md:max-w-3xl md:w-full">
          <p className="pb-5 text-base font-bold text-dark-blue">
            WHY CHOOSE US
          </p>
          <h2 className="pb-5 text-2xl font-bold md:text-3xl">
            Your Partner in Bulk Commodities
          </h2>
          <p className="text-base text-gray-500">
            We excel in sourcing and distributing bulk commodities, ensuring
            quality and efficiency to meet diverse client needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg transform transition duration-500 ease-in-out hover:translate-y-[-10px] rounded-xl"
            >
              <div className="pb-5">
                <card.icon className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-blue" />
              </div>
              <h3 className="pb-5 text-xl font-bold">{card.title}</h3>
              <p className="text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commercials;
