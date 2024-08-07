import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const services = [
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Global Wealth Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Exclusive Investment Solutions",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Worldwide Financial Planning",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Personalized Advisory Services",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="items-center justify-center gap-5 md:flex">
        <div>
          <p className="pb-5 text-lg font-bold md:text-base text-dark-brown">WHY CHOOSE US</p>
          <h2 className="pb-5 text-2xl md:text-3xl font-bold ">
            Unlocking Investment Opportunities Together
          </h2>
          <p className="pb-5 text-base">
            Euismod venenatis sem penatibus gravida blandit ultrices nulla
            suscipit fringilla nullam tincidunt. Lacus vehicula sagittis
            fringilla sem.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="p-6 transform transition duration-500 ease-in-out hover:translate-y-[-10px] shadow-lg bg-pine-brown rounded-xl">
              <div className="pb-5">
                {service.icon}
              </div>
              <h3 className="pb-5 text-xl font-bold">{service.title}</h3>
              <p className="text-base text-custorm-brown">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commercials;
