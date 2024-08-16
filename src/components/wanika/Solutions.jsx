import { FiUsers } from "react-icons/fi";
import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import Link from "next/link";

const cardsData = [
  {
    icon: FiUsers,
    title: "Capital Raising",
    description: "Capital raising expertise, connecting businesses with private equity and venture capital funding.",
    link: "/solutions-details-capital-raising"
  },  
  {
    icon: SlGlobe,
    title: "Micro Finance",
    description: "Focused on promoting financial inclusion through tailored microloans, savings accounts, and insurance services.",
    link: "/solutions-details-micro-finance"
  },
  
  {
    icon: SlChart,
    title: "Commodity Trading",
    description: "Leading international trade in bulk grains and minerals, ensuring quality and reliability in sourcing and distribution.",
    link: "/solutions-details-commodity-trading"
  },
  
  {
    icon: SlDiamond,
    title: "Event Management",
    description: "Creating tailored, memorable events with expert logistics, production, and marketing for a flawless experience.",
    link: "/solutions-details-event-management"
  }
  
];

const Solutions = () => {
  return (
    <>
      <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 2xl:px-56 xl:px-52">
        <div className="items-center md:gap-5 md:grid-cols-2 md:grid">
          <div>
            <p className="pb-5 text-base font-bold text-custorm-green">WHAT WE OFFER</p>
            <h2 className="pb-5 text-2xl font-bold md:text-3xl text-custorm-black">
              Developing solutions for the future.
            </h2>
          </div>
          <div>
            <p className="pb-5 text-base text-gray-500">
              At Wanika Group, we provide a range of financial services tailored to meet diverse needs. Our expertise ensures exceptional quality and reliability.
            </p>
            <Link
              href="/solutions"
              className="text-base underline transition-opacity duration-200 text-custorm-green hover:opacity-75"
            >
              Discover More
            </Link>
          </div>
        </div>
        <div className="grid gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cardsData.map((card, index) => (
            <div key={index} className="p-5 transform transition duration-500 ease-in-out hover:translate-y-[-10px] bg-white shadow-lg rounded-xl">
              <div className="pb-5">
                <card.icon className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />
              </div>
              <h3 className="pb-5 text-xl font-bold">{card.title}</h3>
              <p className="pb-5 text-base">
                {card.description}
              </p>
              <Link href={card.link} className="text-base underline transition-opacity duration-200 text-custorm-green hover:opacity-75">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Solutions;
