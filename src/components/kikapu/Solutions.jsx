import { SlGlobe } from "react-icons/sl";
import { SlChart } from "react-icons/sl";
import { SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const cardData = [
  {
    icon: (
      <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Corporate Governance",
    description:
      "Expertly handling company registration, statutory record maintenance, and annual return filings with precision.",
  },
  {
    icon: (
      <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Compliance & Regulatory Adherence",
    description:
      "Ensuring clients operate within legal frameworks and regulatory mandates to maintain the highest standards of governance.",
  },
  {
    icon: (
      <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Streamlined Secretarial Processes",
    description:
      "Optimizing operational efficiency and minimizing compliance risks to support sustainable growth.",
  },
  {
    icon: (
      <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Expert Advisory",
    description:
      "Providing clarity and precision in advisory, secretarial, and regulatory support, ensuring organizational success.",
  },
];

const Solutions = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <p className="pb-5 text-base font-bold text-dark-brown">
            WHAT WE OFFER
          </p>
          <h2 className="text-2xl font-bold md:text-3xl">
            Delivering precision and clarity in secretarial services.
          </h2>
        </div>
        <div>
          <p className="pb-5 text-base">
            At Kikapu Financial Services, we specialize in corporate governance, compliance, and regulatory adherence. Our expertise ensures that your business operates smoothly and within legal frameworks, promoting organizational success and sustainable growth.
          </p>
        </div>
      </div>
      <div className="grid gap-5 md:pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <div key={index} className="p-6 transform transition duration-500 ease-in-out hover:translate-y-[-10px] shadow-lg bg-pine-brown rounded-xl">
            <div className="pb-5">{card.icon}</div>
            <h3 className="pb-5 text-xl font-bold">{card.title}</h3>
            <p className="text-base text-custorm-brown">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
