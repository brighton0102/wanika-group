import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";

const cardData = [
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded lg:text-4xl bg-dark-brown" />,
    title: "Customized Portfolio Management",
    description: "Tailored investment strategies to maximize returns and minimize risk."
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded lg:text-4xl bg-dark-brown" />,
    title: "Tailored Financial Planning",
    description: "Personalized financial plans designed to achieve your financial goals."
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded lg:text-4xl bg-dark-brown" />,
    title: "Advanced Risk Management",
    description: "Comprehensive solutions to navigate and mitigate financial risks."
  }
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="flex flex-col items-center gap-8 mx-auto md:flex-row">
        <div className="md:w-2xl">
          <h2 className="text-2xl font-bold md:text-3xl">
            Trusted Financial Solutions and Consulting
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:grid-cols-2 md:w-2/3">
          {cardData.map((card, index) => (
            <div key={index} className="rounded-lg p-7 bg-pine-brown transform transition duration-500 ease-in-out hover:translate-y-[-10px]">
              <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
                {card.icon}
              </div>
              <h3 className="pt-3 pb-3 text-xl font-bold text-dark-brown">
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
}

export default Commercials;
