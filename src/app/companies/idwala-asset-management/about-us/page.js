import Image from "next/image";
import jeremy from "@/assets/images/jeremy.jpg";
import pebbles from "@/assets/images/pebbles.jpg";
import { FiUsers } from "react-icons/fi";
import { SlDiamond } from "react-icons/sl";
import { SlBriefcase } from "react-icons/sl";
import { SlGraph } from "react-icons/sl";
import { SlGlobe } from "react-icons/sl";
import { SlChart } from "react-icons/sl";
import DiscoverMore from "@/components/idwala/DiscoverMore";

export const metadata = {
  title: {
    absolute: "About - Idwala Asset Management"
   
  },
}

const cardData = [
  {
    icon: (
      <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Customized Portfolio Management",
    description: "Tailored investment solutions designed to achieve your financial goals through disciplined strategies and expert management.",
  },
  {
    icon: (
      <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Tailored Financial Planning",
    description: "Personalized financial strategies crafted to meet your specific needs and objectives with precision and care.",
  },
  {
    icon: (
      <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Advanced Risk Management",
    description: "Comprehensive solutions to manage and mitigate risks, ensuring stability and growth for your investments.",
  },
  {
    icon: (
      <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Rigorous Research & Analysis",
    description: "In-depth research and strategic analysis to maximize returns and navigate global financial markets effectively.",
  },
  {
    icon: (
      <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Global Market Expertise",
    description: "Expert guidance to help you confidently navigate international financial markets with transparency and integrity.",
  },
  {
    icon: (
      <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Commitment to Excellence",
    description: "A relentless focus on client satisfaction and financial success, built on a foundation of innovation and resilience.",
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
          src={jeremy}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-lg text-white md:text-base">
            idwala-asset-management/about-us
          </p>
          <h2 className="text-2xl text-white md:text-3xl">About Us</h2>
        </div>
      </section>

      {/*About Us*/}

      <section className="py-24 bg-white">
      <div className="flex justify-center">
        <div className="grid px-2 md:items-center md:grid-cols-2 md:gap-16 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="flex justify-center">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src={pebbles}
              width={600}
              height={500}
              alt="Granite Symbolism"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-base font-bold md:pt-0 text-dark-brown">
              ABOUT US
            </p>
            <h2 className="pb-5 text-2xl font-bold text-dark-brown md:text-3xl">
              Crafting Robust Financial Solutions with Precision
            </h2>
            <p className="p-4 pb-5 text-base italic border-l-4 bg-custorm-gray border-dark-brown text-custorm-black">
              At Idwala Asset Management, we build solid financial foundations with expertise and integrity.
            </p>
            <p className="pt-5 mb-5 text-base text-gray-500">
              Based in Zimbabwe&apos;s financial hub, we offer customized portfolio management, tailored financial planning, and advanced risk management solutions. Our disciplined approach ensures that we maximize returns and minimize risk, empowering clients to achieve their financial goals with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
      {/*Banner*/}
      <DiscoverMore />

      {/*Company Values*/}

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
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex gap-6 p-5 border rounded shadow-lg bg-custorm-gray"
            >
              <div>{card.icon}</div>
              <div>
                <h3 className="pb-5 text-xl font-bold text-dark-brown">{card.title}</h3>
                <p className="text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
