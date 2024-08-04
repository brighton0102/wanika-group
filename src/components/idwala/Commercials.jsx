import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";

const cardData = [
  {
    icon: <SlDiamond className="p-2 text-4xl text-white rounded lg:text-4xl bg-dark-brown" />,
    title: "Infrastructure Projects",
    description: "We offer long-term financing expertise to develop infrastructure projects."
  },
  {
    icon: <SlChart className="p-2 text-4xl text-white rounded lg:text-4xl bg-dark-brown" />,
    title: "Investment Consulting",
    description: "We offer long-term financing expertise to develop infrastructure projects."
  },
  {
    icon: <SlGlobe className="p-2 text-4xl text-white rounded lg:text-4xl bg-dark-brown" />,
    title: "Global Trade",
    description: "We offer long-term financing expertise to develop infrastructure projects."
  }
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
      <div className="flex flex-col items-center gap-8 mx-auto md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold md:text-4xl">
            Trusted Commercial Consulting & Finance Broker
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:grid-cols-2 md:w-2/3">
          {cardData.map((card, index) => (
            <div key={index} className="rounded-lg p-7 bg-pine-brown transform transition duration-500 ease-in-out hover:translate-y-[-10px]">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                {card.icon}
              </div>
              <h3 className="pt-3 pb-3 text-2xl font-bold text-dark-brown">
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
}

export default Commercials;
