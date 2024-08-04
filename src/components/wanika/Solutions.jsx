import { FiUsers } from "react-icons/fi";
import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import Link from "next/link";

const cardsData = [
  {
    icon: FiUsers,
    title: "Capital Raising",
    description: "Expertise in capital raising to help businesses secure the funds they need for growth.",
    link: "/solutions-details-capital-raising"
  },
  {
    icon: SlGlobe,
    title: "Asset Management",
    description: "Providing top-notch asset management services for financial growth and security.",
    link: "/solutions-details-asset-management"
  },
  {
    icon: SlChart,
    title: "Commodity Trading",
    description: "Specializing in international commodity financing, trading, and supply chain management.",
    link: "/solutions-details-commodity-trading"
  },
  {
    icon: SlDiamond,
    title: "Event Management",
    description: "Offering professional corporate events management and company secretarial services.",
    link: "/solutions-details-event-management"
  }
];

const Solutions = () => {
  return (
    <>
      <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 2xl:px-72 xl:px-52">
        <div className="items-center md:gap-5 md:grid-cols-2 md:grid">
          <div>
            <p className="pb-5 text-lg font-bold md:text-base text-custorm-green">WHAT WE OFFER</p>
            <h2 className="pb-5 text-4xl font-bold text-custorm-black">
              Developing solutions for the future.
            </h2>
          </div>
          <div>
            <p className="pb-5 text-lg text-gray-500 md:text-base">
              At Wanika Investments, we provide a range of financial services tailored to meet diverse needs. Our expertise ensures exceptional quality and reliability.
            </p>
            <Link
              href="/solutions"
              className="text-lg underline transition-all md:text-base text-custorm-green"
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
              <h3 className="pb-5 text-2xl font-bold">{card.title}</h3>
              <p className="pb-5 text-lg md:text-base">
                {card.description}
              </p>
              <Link href={card.link} className="text-lg underline md:text-base text-custorm-green">
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
