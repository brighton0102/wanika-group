import { SlGlobe, SlChart, SlDiamond } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";

const services = [
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Corporate Governance",
    description: "Expertly managing company registration, statutory records, and annual filings to ensure compliance and precision in corporate governance.",
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Company Compliance",
    description: "Providing comprehensive solutions for regulatory adherence, helping businesses navigate legal frameworks and minimize compliance risks.",
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Regulatory Adherence",
    description: "Ensuring clients meet all regulatory requirements with our thorough and precise approach to company secretarial processes.",
  },
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Tailored Secretarial Support",
    description: "Delivering clarity and precision in advisory and secretarial services, supporting businesses for sustainable growth and prosperity.",
  },
];

const Commercials = () => {
  return (
    <section className="px-2 py-24 bg-dark-brown md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div className="items-center justify-center gap-5 md:flex">
        <div>
          <p className="pb-5 text-lg font-bold text-white md:text-base">WHY CHOOSE US</p>
          <h2 className="pb-5 text-2xl font-bold text-white md:text-3xl">
            Innovative Secretarial Solutions for Your Business
          </h2>
          <p className="pb-5 text-base text-white">
            Kikapu Financial Services provides leading secretarial solutions to enhance corporate governance, ensure compliance, and streamline regulatory processes. Partner with us to optimize efficiency and drive growth.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="p-6 transform transition duration-500 ease-in-out hover:translate-y-[-10px] shadow-lg bg-pine-brown rounded-xl">
              <div className="pb-5">
                {service.icon}
              </div>
              <h3 className="pb-5 text-xl font-bold text-dark-brown">{service.title}</h3>
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
