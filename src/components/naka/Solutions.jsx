import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const solutionsData = [
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Tailored Event Planning",
    description: "We collaborate with clients to design and plan events that perfectly align with their vision and objectives."
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Comprehensive Logistics",
    description: "Expertly managing venue selection, vendor coordination, and all logistical elements for flawless execution."
  },
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Creative Event Production",
    description: "Combining creativity and technical expertise to deliver immersive environments and exceptional event production."
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Effective Marketing",
    description: "Developing targeted strategies to maximize event reach and impact through digital platforms and effective communication."
  },
];

const Solutions = () => {
  return (
    <section className="px-2 py-24 bg-custorm-pink md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div>
          <p className="pb-5 text-base font-bold text-custorm-pink">WHAT WE OFFER</p>
          <h2 className="text-2xl font-bold md:text-3xl">Creating Unforgettable Events</h2>
        </div>
        <div>
          <p className="pb-5 text-base">
            At Naka Events Management, we specialize in delivering extraordinary events by meticulously planning and executing every detail.
          </p>
        </div>
      </div>
      <div className="grid gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {solutionsData.map((solution, index) => (
          <div key={index} className="p-6 transform transition duration-500 ease-in-out hover:translate-y-[-10px] bg-white shadow-lg rounded-xl">
            <div className="pb-5">{solution.icon}</div>
            <h3 className="pb-5 text-xl font-bold text-custorm-pink">{solution.title}</h3>
            <p className="text-base">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
