import Image from "next/image";
import adeolu from "@/assets/images/adeolu.jpg";
import { FiUsers } from "react-icons/fi";
import { SlDiamond, SlBriefcase, SlGraph, SlGlobe, SlChart } from "react-icons/sl";
import Link from "next/link";

const solutions = [
  {
    title: "Capital Raising",
    description: "Specializing in securing funding through high-net-worth individuals and institutional investors for private equity, venture capital, and impact investing.",
    link: "/solutions-details-capital-raising",
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />
  },
  {
    title: "Structured Finance",
    description: "Offering comprehensive structured finance solutions, including risk identification, legal structuring, and commercial partner management, to enhance financial effectiveness.",
    link: "/solutions-details-structured-finance",
    icon: <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />
  },
  {
    title: "Commodity Trading",
    description: "Expert in the procurement and distribution of bulk commodities such as maize, wheat, soya, and minerals, ensuring quality control and efficient logistics.",
    link: "/solutions-details-commodity-trading",
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />
  },
  {
    title: "Event Management",
    description: "Providing end-to-end event management services, from conceptualization and design to execution and marketing, ensuring memorable and flawlessly executed events.",
    link: "/solutions-details-event-management",
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />
  },
  {
    title: "Micro Finance",
    description: "Focused on promoting financial inclusion through tailored microloans, savings accounts, and insurance services, supporting entrepreneurs and small businesses.",
    link: "/solutions-details-micro-finance",
    icon: <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />
  },
  {
    title: "Secretarial Service",
    description: "Offering comprehensive company secretarial services including governance, compliance, and regulatory support to ensure smooth and legal business operations.",
    link: "/solutions-details-secretarial-service",
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />
  },
];

const Page = ({ fullHeight = false }) => {
  return (
    <>
      <section
        className="relative w-full overflow-hidden pt-60"
        style={{ height: fullHeight ? "100vh" : "50vh" }}
      >
        <Image
          src={adeolu}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-80 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white">Home/solutions</p>
          <h2 className="text-2xl text-white md:text-3xl">Solutions</h2>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div className="grid gap-5 md:grid-cols-2 md:items-center">
          <div>
            <p className="pb-5 text-base font-bold text-custorm-green">WHAT WE OFFER</p>
            <h2 className="text-2xl font-bold md:text-3xl bg-custorm-black">
              Developing solutions for the future.
            </h2>
          </div>
          <div>
            <p className="text-base text-gray-500">
              At Wanika Group, we provide a comprehensive suite of services designed to meet the diverse needs of our clients through innovation, professionalism, and value creation.
            </p>
          </div>
        </div>
        <div className="grid gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="p-6 transform transition duration-500 ease-in-out hover:translate-y-[-10px] bg-white shadow-lg rounded-xl">
              <div className="pb-5">
                {solution.icon}
              </div>
              <h3 className="pb-5 text-xl font-bold">{solution.title}</h3>
              <p className="pb-5 text-base">
                {solution.description}
              </p>
              <Link href={solution.link} className="text-base underline transition-opacity duration-200 text-custorm-green hover:opacity-75">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
