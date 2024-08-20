import Image from "next/image";
import kikapu from "@/assets/images/kikapu.jpg";
import kikapu03 from "@/assets/images/kikapu03.jpeg";
import { FiUsers } from "react-icons/fi";
import { SlDiamond, SlBriefcase, SlGraph, SlGlobe, SlChart } from "react-icons/sl";
import DiscoverMore from "@/components/kikapu/DiscoverMore";

export const metadata = {
  title: {
    absolute: "About - Kikapu Finance"
   
  },
}

const values = [
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Expertise in Corporate Governance",
    description: "We provide unparalleled expertise in corporate governance, ensuring your business adheres to legal frameworks and regulatory mandates."
  },
  {
    icon: <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Commitment to Compliance",
    description: "Our meticulous approach to company compliance helps businesses minimize risks and maintain operational efficiency."
  },
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Client-Centric Solutions",
    description: "We understand the unique needs of Zimbabwean businesses and tailor our services to optimize growth and success."
  },
  {
    icon: <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Streamlined Processes",
    description: "Our expertise in company administration and statutory requirements ensures streamlined processes and effective management."
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Precision and Clarity",
    description: "Just as the Swahili basket sifts and refines, we provide clarity and precision in our advisory and secretarial services."
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Leadership in Secretarial Services",
    description: "We lead the industry in providing comprehensive secretarial solutions, leveraging our extensive experience and knowledge."
  },
];

const page = ({ fullHeight = false }) => {
  return (
    <>
      <section
        className="relative w-full overflow-hidden pt-60"
        style={{ height: fullHeight ? "100vh" : "50vh" }}
      >
        <Image
          src={kikapu}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-60 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white">kikapu-finance/about-us</p>
          <h3 className="text-2xl text-white md:text-3xl">About Us</h3>
        </div>
      </section>

      {/*About Us*/}
      <section className="py-24 bg-white">
      <div className="flex justify-center">
        <div className="grid px-2 md:items-center md:gap-16 md:grid-cols-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              src={kikapu03}
              width={600}
              height={500}
              alt="Company Overview"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-lg font-bold md:pt-0 md:text-base text-dark-brown">WHO WE ARE</p>
            <h3 className="pb-5 text-2xl font-bold md:text-3xl">
              Premier Provider of Innovative Secretarial Solutions
            </h3>
            <p className="p-4 text-base italic border-l-4 bg-custorm-gray border-dark-brown text-custorm-black">
              Kikapu Financial Services offers top-tier secretarial solutions for Zimbabwean businesses, focusing on corporate governance, compliance, and regulatory adherence.
            </p>
            <p className="pt-5 pb-5 text-base text-gray-500">
              Our expert team excels in company administration, including registration, record maintenance, and annual filings. We uphold the highest standards to ensure your business operates within legal frameworks and regulatory mandates.
            </p>
            <p className="pt-5 pb-5 text-base text-gray-500">
              The name Kikapu, inspired by the Swahili term for a traditional basket used for sorting grains, symbolizes our commitment to providing clarity and precision in our advisory and secretarial services.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/*Banner*/}
      <DiscoverMore />

      {/*Company Values*/}
      <section className="px-2 py-24 bg-dark-brown md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div>
          <p className="pb-5 text-lg font-bold text-center text-white md:text-base">OUR VALUES</p>
          <h2 className="pb-10 text-2xl font-bold text-center text-white md:text-3xl">We Are Strategic</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {values.map((value, index) => (
            <div key={index} className="flex gap-6 p-5 border rounded shadow-lg bg-pine-brown">
              <div>
                {value.icon}
              </div>
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

export default page;
