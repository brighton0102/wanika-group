import { FiUsers } from 'react-icons/fi';
import { SlGlobe, SlChart, SlDiamond } from 'react-icons/sl';
import Link from 'next/link';

const cardData = [
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: 'Global Wealth Management',
    description: 'Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit'
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: 'Global Wealth Management',
    description: 'Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit'
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: 'Global Wealth Management',
    description: 'Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit'
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: 'Global Wealth Management',
    description: 'Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit'
  }
];

const Solutions = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-72">
      <div className="md:justify-between md:items-center md:flex">
        <div>
          <p className="pb-5 text-lg font-bold md:text-base text-custorm-yellow">OUR SOLUTIONS</p>
          <h2 className="max-w-xl text-4xl font-bold">
            Solutions that we offer
          </h2>
        </div>
        <div className="pt-10">
          <Link href='/companies/sekela-microfinance/about-us' className="px-6 py-3 mt-5 text-white transition-all md:text-base bg-custorm-yellow">
            Discover More
          </Link>
        </div>
      </div>

      <div className="grid gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <div key={index} className="p-6 bg-white shadow-lg transform transition duration-500 ease-in-out hover:translate-y-[-10px] rounded-xl">
            <div className="pb-5">
              {card.icon}
            </div>
            <h3 className="pb-5 text-2xl font-bold">
              {card.title}
            </h3>
            <p className="text-lg text-gray-500 md:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
