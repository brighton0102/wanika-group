import Image from "next/image";
import maize from "@/assets/images/maize.jpg";
import seeds from "@/assets/images/seeds.jpeg";
import { FiUsers } from "react-icons/fi";
import { SlDiamond, SlBriefcase, SlGraph, SlGlobe, SlChart } from "react-icons/sl";
import DiscoverMore from "@/components/watata/DiscoverMore";
import Navbar from "@/components/watata/Navbar";

export const metadata = {
  title: {
    absolute: "About - Watata Commodities"
   
  },
}

const valuesData = [
  {
    icon: SlGlobe,
    title: "Global Trade Expertise",
    description: "Leading in the procurement and distribution of bulk commodities with a global perspective, focusing on grain importation and mineral exports.",
  },
  {
    icon: SlChart,
    title: "Quality Assurance",
    description: "Strategically sourcing premium-grade commodities like maize, wheat, and soya, ensuring high quality and seamless logistics.",
  },
  {
    icon: SlBriefcase,
    title: "Professional Relationships",
    description: "Forging strong partnerships with suppliers and clients, ensuring efficient and reliable commodity distribution.",
  },
  {
    icon: FiUsers,
    title: "Customer-Centric Approach",
    description: "Catering to the growing demand for enhanced supply chains with a focus on meeting diverse client needs effectively.",
  },
  {
    icon: SlDiamond,
    title: "Commitment to Excellence",
    description: "Delivering superior-quality bulk commodities and expert trade solutions that strengthen and rejuvenate clients' operations.",
  },
  {
    icon: SlChart,
    title: "Sustainable Practices",
    description: "Prioritizing safety and regulatory compliance in the procurement and distribution of commodities like ammonium nitrate.",
  },
];
const Page = ({ fullHeight = false }) => {
  return (
    <>
      <Navbar />
      <section
        className="relative w-full overflow-hidden pt-60"
        style={{ height: fullHeight ? "100vh" : "50vh" }}
      >
        <Image
          src={maize}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white ">watata-commodities/about-us</p>
          <h2 className="text-2xl text-white md:text-3xl">About Us</h2>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24">
      <div className="flex justify-center">
        <div className="grid px-2 md:items-center md:grid-cols-2 md:gap-16 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              src={seeds}
              width={600}
              height={500}
              alt="bulk commodities"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-base font-bold md:pt-0 text-dark-blue">ABOUT US</p>
            <h2 className="pb-5 text-2xl font-bold text-dark-blue md:text-3xl">
              Leading Experts in Bulk Commodities
            </h2>
            <p className="p-4 pb-5 text-base italic border-l-4 bg-custorm-gray border-dark-blue text-custorm-black">
              Watata Commodities excels in sourcing and distributing bulk grain and minerals, meeting diverse client needs with efficiency and quality.
            </p>
            <p className="pt-5 pb-5 text-base text-gray-500">
              As a leading international trade company, we focus on bulk grain importation (maize, wheat, soya) and bulk mineral exports (coking coal, lithium, chrome). Our strategic sourcing ensures premium quality and seamless logistics for all commodities.
            </p>
            <p className="pt-5 pb-5 text-base text-gray-500">
              Named after the Chibwatatata Hot springs, our essence symbolizes vitality and renewal. We aim to nourish and grow our clients&apos; businesses with essential commodities and expert trade solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Banner */}
      <DiscoverMore />
      
      {/* Company Values */}
      <section className="px-2 py-24 bg-emarald md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div>
          <p className="pb-5 text-base font-bold text-center text-dark-blue">OUR VALUES</p>
          <h2 className="pb-10 text-2xl font-bold text-center text-dark-blue md:text-3xl">We Are Strategic</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {valuesData.map((value, index) => (
            <div key={index} className="flex gap-6 p-5 border rounded shadow-lg bg-custorm-gray">
              <div>
                <value.icon className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-blue" />
              </div>
              <div>
                <h3 className="pb-5 text-xl font-bold text-dark-blue">{value.title}</h3>
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
