import { SlGlobe, SlDiamond, SlChart } from "react-icons/sl";

const cardsData = [
  {
    icon: SlGlobe,
    title: "Innovative Financial Solutions",
    description: "We leverage our extensive expertise to provide cutting-edge financial solutions that drive growth and value creation across diverse sectors.",
    bgColor: "bg-custorm-gray"
  },
  {
    icon: SlDiamond,
    title: "Comprehensive Business Services",
    description: "Our group companies deliver a wide range of services, including capital raising, asset management, and structured finance, tailored to meet the needs of our clients.",
    bgColor: "bg-wild-sand"
  },
  {
    icon: SlChart,
    title: "Strategic Financial Insights",
    description: "We offer in-depth financial analysis and consulting to help businesses make informed decisions and achieve their strategic objectives.",
    bgColor: "bg-wild-sand"
  }
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 2xl:px-72 xl:px-52">
      <div className="flex flex-col items-center gap-8 mx-auto md:flex-row">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold md:text-4xl">
            Transforming Financial Services Across Africa
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:w-2/3">
          {cardsData.map((card, index) => (
            <div key={index} className={`p-6 transform transition duration-500 ease-in-out hover:translate-y-[-10px] rounded-lg ${card.bgColor}`}>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <card.icon className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />
              </div>
              <h3 className="pt-3 pb-3 text-2xl font-bold md:text-xl text-custorm-green">
                {card.title}
              </h3>
              <p className="text-lg md:text-base">
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
