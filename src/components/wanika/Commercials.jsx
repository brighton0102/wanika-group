import { SlGlobe, SlDiamond, SlChart } from "react-icons/sl";

const cardsData = [
  {
    icon: SlGlobe,
    title: "Innovation & Agility",
    description: "Wanika Group pioneers innovative financial solutions, driving growth and value creation across diverse sectors with agility and precision.",
    bgColor: "bg-custorm-gray"
  },
  {
    icon: SlDiamond,
    title: "Diverse Financial Services",
    description: "Our subsidiaries offer a comprehensive suite of services, including capital raising, asset management, structured finance, and more.",
    bgColor: "bg-custorm-gray"
  },
  {
    icon: SlChart,
    title: "Strategic Partnerships",
    description: "Built on trust and transparency, we foster long-term partnerships, delivering reliable, high-quality services that exceed client expectations.",
    bgColor: "bg-custorm-gray"
  }
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 2xl:px-56 xl:px-52">
      <div className="flex flex-col items-center gap-8 mx-auto md:flex-row">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-custorm-green md:text-3xl">
            Transforming Financial Services Across Africa
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:w-2/3">
          {cardsData.map((card, index) => (
            <div key={index} className={`p-6 transform transition duration-500 ease-in-out hover:translate-y-[-10px] rounded-lg ${card.bgColor}`}>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <card.icon className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />
              </div>
              <h3 className="pt-3 pb-3 text-xl font-bold text-custorm-green">
                {card.title}
              </h3>
              <p className="text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commercials;
