import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const cardData = [
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Tailored Event Planning",
    description: "Collaborating with clients to design events that align with their vision, ensuring a seamless and unforgettable experience."
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Logistics & Operations",
    description: "Expert management of venue selection, vendor coordination, and logistics for flawless execution."
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Event Production",
    description: "Combining creativity with technical expertise to deliver exceptional event production and immersive environments."
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Marketing & Promotion",
    description: "Developing strategies and leveraging digital platforms to maximize event reach and attract attendees."
  },
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="md:gap-5 md:justify-center md:items-center md:flex">
        <div>
          <p className="pb-5 text-base font-bold text-custorm-pink">WHY CHOOSE US</p>
          <h2 className="pb-5 text-2xl font-bold md:text-3xl">
            Elevating Events with Precision and Creativity
          </h2>
          <p className="pt-5 pb-5 text-base">
            Naka Events Management brings unparalleled expertise in event planning, logistics, production, and promotion. We tailor each event to shine brightly and leave a lasting impression.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {cardData.map((card, index) => (
            <div key={index} className="p-6 transform transition duration-500 ease-in-out hover:translate-y-[-10px] shadow-lg bg-custorm-gray rounded-xl">
              <div className="pb-5">
                {card.icon}
              </div>
              <h3 className="pb-5 text-xl font-bold">{card.title}</h3>
              <p className="text-base text-gray-500">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commercials;
