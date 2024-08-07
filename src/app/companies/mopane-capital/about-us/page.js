import Image from "next/image";
import treePic from "@/assets/images/tree-pic.jpg";
import DiscoverMore from "@/components/mopane/DiscoverMore";
import { FiUsers } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";
import { SlGraph } from "react-icons/sl";
import { SlChart } from "react-icons/sl";
import { SlDiamond } from "react-icons/sl";
import { SlBriefcase } from "react-icons/sl";

const valuesData = [
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Customer-Orientedness",
    description: "Our management and staff do not only have a genuine concern for customers' well-being, but we also have empathy — the ability to imagine our clients' emotional responses to their experience with the institution.",
  },
  {
    icon: <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Professionalism",
    description: "Our team maintains a high level of professionalism in all interactions, ensuring our clients receive the best service possible.",
  },
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Teamwork",
    description: "We believe in the power of teamwork and collaboration to achieve our goals and provide exceptional service to our clients.",
  },
  {
    icon: <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Growth",
    description: "We are committed to continuous growth and improvement, both as individuals and as a company, to better serve our clients.",
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Global Perspective",
    description: "Our global perspective allows us to understand and meet the diverse needs of our clients across different regions.",
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Integrity",
    description: "We uphold the highest standards of integrity in all our actions, ensuring transparency and trust with our clients.",
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
          src={treePic}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#643c05] opacity-40 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-white text-base">mopane-capital/about-us</p>
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
                src={treePic}
                width={600}
                height={500} 
                alt="black suit"
              />
            </div>
            <div className="md:max-w-2xl">
              <p className="pt-5 pb-5 text-lg font-bold md:pt-0 md:text-base text-dark-brown">WHO WE ARE</p>
              <h2 className="pb-5 text-2xl md:text-3xl font-bold text-custorm-black">
                We are the magic behind the company’s best days.
              </h2>
              <p className="p-4 pb-5 italic border-l-4 text-base bg-pine-brown border-dark-brown text-custorm-black">
                Nulla non faucibus montes netus tristique adipiscing in augue ullamcorper ante finibus.
              </p>
              <p className="pt-5 mb-5  text-gray-500 text-base">
                Massa eu hendrerit netus facilisis cubilia montes curae imperdiet. Laoreet cubilia mattis scelerisque malesuada nulla ipsum mauris. Dui facilisis vel dictumst himenaeos cubilia fringilla congue tempus. Pellentesque nullam nascetur nibh ultricies.
              </p>
              <p className="pt-5 mb-5 text-gray-500 text-base">
                Massa eu hendrerit netus facilisis cubilia montes curae imperdiet. Laoreet cubilia mattis scelerisque malesuada nulla ipsum mauris. Dui facilisis vel dictumst himenaeos cubilia fringilla congue tempus. Pellentesque nullam nascetur nibh ultricies.
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
          <p className="pb-5  font-bold text-center text-base text-dark-brown">OUR VALUES</p>
          <h2 className="pb-10 text-2xl md:text-3xl font-bold text-center">We Are Strategic</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {valuesData.map((value, index) => (
            <div key={index} className="flex gap-6 p-5 border rounded shadow-lg bg-custorm-gray">
              <div>{value.icon}</div>
              <div>
                <h3 className="pb-5 text-xl font-bold">{value.title}</h3>
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
