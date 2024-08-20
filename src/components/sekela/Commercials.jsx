import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";

const cardData = [
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: "Microloans",
    description: "Tailored microloans to empower entrepreneurs and small businesses."
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: "Savings Accounts",
    description: "Flexible savings accounts to help you build a secure financial future."
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: "Insurance Services",
    description: "Comprehensive insurance services to protect your assets and investments."
  }
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 bg-custorm-pink md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="md:gap-8 md:items-center md:flex">
        <div className="w-full md:max-w-xl">
          <h2 className="pb-5 text-2xl font-bold text-custorm-yellow md:text-3xl">
          Comprehensive Financial Solutions for Growth and Empowerment
          </h2>
        </div>
        <div className="grid gap-5 md:col-span-2 sm:grid-cols-2 md:grid-cols-2">
          {cardData.map((card, index) => (
            <div key={index} className="rounded-lg p-7 transform transition duration-500 ease-in-out hover:translate-y-[-10px] bg-custorm-gray">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                {card.icon}
              </div>
              <h3 className="pt-5 pb-5 text-xl font-bold text-custorm-yellow">
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
