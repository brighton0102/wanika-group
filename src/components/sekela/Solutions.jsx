import { FiUsers } from 'react-icons/fi';
import { SlGlobe, SlChart, SlDiamond } from 'react-icons/sl';
import Link from 'next/link';

const cardData = [
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: 'Microloans',
    description: 'Empowering entrepreneurs and small businesses with tailored microloans to reach their full potential.'
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: 'Savings Accounts',
    description: 'Offering flexible savings accounts to help individuals and businesses manage their finances effectively.'
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: 'Insurance Services',
    description: 'Providing comprehensive insurance solutions to safeguard businesses and individuals from financial risks.'
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />,
    title: 'Financial Education',
    description: 'Delivering financial education and guidance to promote sustainable financial management and growth.'
  }
];

const Solutions = () => {
  return (
    <section className="px-2 py-24 bg-custorm-pink md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="md:justify-between md:items-center md:flex">
        <div>
          <p className="pb-5 text-base font-bold text-custorm-yellow">OUR SOLUTIONS</p>
          <h2 className="max-w-xl text-2xl font-bold text-custorm-yellow md:text-3xl">
            Solutions to Empower Financial Growth
          </h2>
        </div>
        <div className="pt-10">
          <Link href='/companies/sekela-microfinance/about-us' className="px-6 py-3 mt-5 text-base text-white transition-all duration-300 hover:bg-custorm-pink hover:scale-105 bg-custorm-yellow">
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
            <h3 className="pb-5 text-xl font-bold text-custorm-yellow">
              {card.title}
            </h3>
            <p className="text-base text-gray-500">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
