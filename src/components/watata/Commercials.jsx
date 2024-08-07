import { FiUsers } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";
import { SlChart } from "react-icons/sl";
import { SlDiamond } from "react-icons/sl";

const cardData = [
  {
    icon: FiUsers,
    title: "Global Wealth Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
  {
    icon: SlDiamond,
    title: "Global Wealth Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
  {
    icon: SlGlobe,
    title: "Global Wealth Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
  {
    icon: SlChart,
    title: "Global Wealth Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 bg-custorm-gray lg:px-16 xl:px-52 2xl:px-56">
      <div className="flex flex-col items-center justify-center gap-5 mx-auto md:flex-row">
        <div>
          <p className="pb-5  font-bold text-base text-dark-blue">WHY CHOOSE US</p>
          <h2 className="pb-5 text-2xl md:text-3xl font-bold">Unlocking Investment Opportunities Together</h2>
          <p className=" text-gray-500 text-base">
            Euismod venenatis sem penatibus gravida blandit ultrices nulla suscipit fringilla nullam tincidunt.
            Lacus vehicula sagittis fringilla sem.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cardData.map((card, index) => (
            <div key={index} className="p-6 bg-white shadow-lg transform transition duration-500 ease-in-out hover:translate-y-[-10px] rounded-xl">
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
