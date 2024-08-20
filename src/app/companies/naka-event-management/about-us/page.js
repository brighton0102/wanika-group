import Image from "next/image";
import eventDeco from "@/assets/images/event-deco.jpg";
import naka03 from "@/assets/images/naka03.jpg";
import { FiUsers } from "react-icons/fi";
import { SlDiamond, SlBriefcase, SlGraph, SlGlobe, SlChart } from "react-icons/sl";
import DiscoverMore from "@/components/naka/DiscoverMore";

export const metadata = {
  title: {
    absolute: "About - Naka Event Management"
   
  },
}


const companyValuesData = [
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Tailored Event Solutions",
    description: "We offer personalized event planning that aligns with your vision, ensuring every detail is meticulously crafted for an unforgettable experience."
  },
  {
    icon: <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Seamless Execution",
    description: "Our expertise in logistics ensures flawless execution, managing venue selection, vendor coordination, and all operational details with precision."
  },
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Innovative Production",
    description: "We combine creativity and technical expertise to deliver exceptional event production, creating immersive environments through advanced staging and multimedia."
  },
  {
    icon: <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Effective Marketing",
    description: "Our comprehensive marketing strategies maximize event reach and impact, using targeted campaigns and digital platforms to generate buzz and attract attendees."
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Client Satisfaction",
    description: "We are dedicated to delivering extraordinary events that exceed expectations, with a commitment to excellence in planning, execution, and customer service."
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-pink" />,
    title: "Radiance and Elegance",
    description: "Inspired by the name 'Naka,' meaning 'to shine,' we create events that bring joy and splendor, illuminating every moment with refinement and sophistication."
  }
];
const Page = ({ fullHeight = false }) => {
  return (
    <>
      <section
        className="relative w-full overflow-hidden pt-60"
        style={{ height: fullHeight ? "100vh" : "50vh" }}
      >
        <Image
          src={eventDeco}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#643c05] opacity-40 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white ">naka-event-management/about-us</p>
          <h2 className="text-2xl text-white md:text-3xl">About Us</h2>
        </div>
      </section>

      {/* About Us */}

      <section className="py-24 bg-white">
      <div className="flex justify-center">
        <div className="grid px-2 md:items-center md:grid-cols-2 md:gap-16 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              src={naka03}
              width={600}
              height={500}
              alt="event planning"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-base font-bold md:pt-0 text-custorm-pink">WHO WE ARE</p>
            <h3 className="pb-5 text-2xl font-bold text-custorm-pink md:text-3xl text-custorm-black">
              Crafting Unforgettable Events with Precision and Creativity
            </h3>
            <p className="p-4 pb-5 text-base italic border-l-4 bg-custorm-gray border-custorm-pink text-custorm-black">
              At Naka Events Management, we tailor every event to align with your vision, ensuring a seamless and memorable experience.
            </p>
            <p className="pt-5 text-base text-gray-500">
              Our expert team excels in managing complex logistics, from venue selection to vendor coordination, ensuring flawless execution of your event.
            </p>
            <p className="pt-5 mb-5 text-base text-gray-500">
              Combining creativity with technical expertise, we deliver exceptional event production, creating immersive environments through innovative staging and multimedia integration.
            </p>
           
          </div>
        </div>
      </div>
    </section>

      {/* Banner */}

      <DiscoverMore />

      {/* Company Values */}
      
      <section className="px-2 py-24 bg-custorm-pink md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div>
          <p className="pb-5 text-lg font-bold text-center md:text-base text-custorm-black">OUR VALUES</p>
          <h2 className="pb-10 text-2xl font-bold text-center text-custorm-black md:text-3xl">We Are Strategic</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {companyValuesData.map((value, index) => (
            <div key={index} className="flex gap-6 p-5 bg-white border rounded shadow-lg">
              <div>
                {value.icon}
              </div>
              <div>
                <h3 className="pb-5 text-xl font-bold text-custorm-pink">{value.title}</h3>
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
