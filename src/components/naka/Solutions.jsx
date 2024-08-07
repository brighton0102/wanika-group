import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const solutionsData = [
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Global Wealth Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "International Financing",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Investment Consulting",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Residential Property",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
  },
];

const Solutions = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div>
          <p className="pb-5 font-bold text-base text-custorm-pink">WHAT WE OFFER</p>
          <h2 className="md:text-3xl text-2xl font-bold">Developing solutions for the future.</h2>
        </div>
        <div>
          <p className="pb-5 text-base">
            Lacus fusce senectus facilisi accumsan vulputate tempus. Eleifend
            suscipit ad posuere velit pede blandit praesent curae eget libero.
            Sollicitudin consectetur elementum id tortor massa lacinia metus
            tempus.
          </p>
        </div>
      </div>
      <div className="grid gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {solutionsData.map((solution, index) => (
          <div key={index} className="p-6  transform transition duration-500 ease-in-out hover:translate-y-[-10px] bg-white shadow-lg rounded-xl">
            <div className="pb-5">{solution.icon}</div>
            <h3 className="pb-5 text-xl font-bold">{solution.title}</h3>
            <p className="text-base">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
