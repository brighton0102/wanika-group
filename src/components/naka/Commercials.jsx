import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const cardData = [
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Global Wealth Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit"
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Global Wealth Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit"
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Global Wealth Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit"
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Global Wealth Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit"
  },
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
      <div className="md:gap-5 md:justify-center md:items-center md:flex">
        <div>
          <p className="pb-5 text-lg font-bold md:text-base text-custorm-pink">WHY CHOOSE US</p>
          <h2 className="pb-5 text-4xl font-bold">
            Unlocking Investment Opportunities Together
          </h2>
          <p className="pt-5 pb-5 text-lg md:text-base">
            Euismod venenatis sem penatibus gravida blandit ultrices nulla suscipit fringilla nullam tincidunt. Lacus vehicula sagittis fringilla sem.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {cardData.map((card, index) => (
            <div key={index} className="p-6  transform transition duration-500 ease-in-out hover:translate-y-[-10px] shadow-lg bg-custorm-gray rounded-xl">
              <div className="pb-5">
                {card.icon}
              </div>
              <h3 className="pb-5 text-2xl font-bold">{card.title}</h3>
              <p className="text-lg text-gray-500">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commercials;

