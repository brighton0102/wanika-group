import Image from "next/image";
import mopane22 from "@/assets/images/mopane22.jpg";
import mopane20 from "@/assets/images/mopane20.jpg";
import DiscoverMore from "@/components/mopane/DiscoverMore";
import { FiUsers } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";
import { SlGraph } from "react-icons/sl";
import { SlChart } from "react-icons/sl";
import { SlDiamond } from "react-icons/sl";
import { SlBriefcase } from "react-icons/sl";

export const metadata = {
  title: {
    absolute: "About - Mopane Capital",
  },
};

const valuesData = [
  {
    icon: (
      <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Capital Raising",
    description:
      "Expertise in securing funding through high-net-worth individuals and institutional investors for private equity and venture capital.",
  },
  {
    icon: (
      <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Due Diligence",
    description:
      "Thorough independent assessments and risk management to enhance our structured finance solutions.",
  },
  {
    icon: (
      <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Global Market Engagement",
    description:
      "Connecting investors with high-risk, high-return opportunities in Africa’s commodity trading, energy, and mining sectors.",
  },
  {
    icon: (
      <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Structured Finance",
    description:
      "Effective legal structuring and project selection through rigorous analysis and strategic partnerships.",
  },
  {
    icon: (
      <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Investment Opportunities",
    description:
      "Linking global investors with qualifying projects that meet high-impact investment criteria.",
  },
  {
    icon: (
      <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Impact Investing",
    description:
      "Focused on impact investing to drive sustainable growth and create value for investors and communities.",
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
          src={mopane20}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-50 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white">mopane-capital/about-us</p>
          <h3 className="text-2xl text-white md:text-3xl">About Us</h3>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-white">
        <div className="flex justify-center">
          <div className="grid items-center px-2 md:grid-cols-2 md:gap-16 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
            <div className="flex justify-center">
              <Image
                className="object-cover rounded-lg"
                src={mopane22}
                width={600}
                height={500}
                alt="Company Overview"
              />
            </div>
            <div className="md:max-w-2xl">
              <p className="pt-5 pb-5 text-lg font-bold md:pt-0 md:text-base text-custorm-green">
                WHO WE ARE
              </p>
              <h2 className="pb-5 text-2xl font-bold md:text-3xl text-custorm-green">
                Elevating Investment Opportunities with Expertise
              </h2>
              <p className="p-4 pb-5 text-base italic border-l-4 bg-custorm-gray border-custorm-green text-custorm-black">
                We specialize in capital raising and structured finance,
                connecting investors with high-impact opportunities.
              </p>
              <p className="pt-5 mb-5 text-base text-gray-500">
                Our team partners with Mopane Consultancy Services for thorough
                due diligence, risk management, and legal structuring, enhancing
                our capital raise initiatives and structured finance solutions.
              </p>
              <p className="pt-5 mb-5 text-base text-gray-500">
                We engage global markets, linking investors with high-return
                opportunities in Africa’s commodity trading, energy, and mining
                sectors through rigorous analysis and project selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <DiscoverMore />

      {/* Company Values */}
      <section className="px-2 py-24 bg-white md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div>
          <p className="pb-5 text-base font-bold text-center text-dark-brown">
            OUR VALUES
          </p>
          <h2 className="pb-10 text-2xl font-bold text-center text-dark-brown md:text-3xl">
            We Are Strategic
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="flex gap-6 p-5 border rounded shadow-lg bg-custorm-gray"
            >
              <div>{value.icon}</div>
              <div>
                <h3 className="pb-5 text-xl font-bold text-dark-brown">{value.title}</h3>
                <p className="text-base">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
