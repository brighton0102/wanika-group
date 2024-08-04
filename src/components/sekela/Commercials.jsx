import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";

const cardData = [
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: "Infrastructure Projects",
    description: "We offer long-term financing expertise to develop infrastructure projects"
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: "Investment Management",
    description: "Our investment management services ensure your investments are secure and growing"
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: "Wealth Management",
    description: "Expert wealth management services to grow and protect your wealth"
  }
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
      <div className="md:gap-8 md:items-center md:flex">
        <div className="">
          <h2 className="pb-5 text-4xl font-bold">
            Trusted Commercial Consulting & Finance Broker
          </h2>
        </div>
        <div className="grid gap-5 md:col-span-2 sm:grid-cols-2 md:grid-cols-2">
          {cardData.map((card, index) => (
            <div key={index} className="rounded-lg p-7 transform transition duration-500 ease-in-out hover:translate-y-[-10px] bg-custorm-gray">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                {card.icon}
              </div>
              <h3 className="pt-5 pb-5 text-2xl font-bold">
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
