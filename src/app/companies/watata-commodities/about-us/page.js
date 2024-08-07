import Image from "next/image";
import watata04 from "@/assets/images/watata04.jpg";
import { FiUsers } from "react-icons/fi";
import { SlDiamond, SlBriefcase, SlGraph, SlGlobe, SlChart } from "react-icons/sl";
import DiscoverMore from "@/components/watata/DiscoverMore";

const valuesData = [
  {
    icon: SlChart,
    title: "Customer-Orientedness",
    description: "Our management and staff do not only have a genuine concern for customers well-being, but we also have empathy — the ability to imagine our clients emotional responses to their experience with the institution.",
  },
  {
    icon: SlBriefcase,
    title: "Professionalism",
    description: "Our team is committed to maintaining the highest standards of professionalism in all our interactions and services.",
  },
  {
    icon: FiUsers,
    title: "Teamwork",
    description: "Collaboration and teamwork are at the heart of our company culture, ensuring we achieve our goals together.",
  },
  {
    icon: SlGraph,
    title: "Innovation",
    description: "We continuously strive to innovate and improve our services to meet the changing needs of our clients.",
  },
  {
    icon: SlGlobe,
    title: "Global Reach",
    description: "Our global presence allows us to offer a wide range of services and expertise to our clients worldwide.",
  },
  {
    icon: SlDiamond,
    title: "Integrity",
    description: "We uphold the highest standards of integrity in all our actions and decisions.",
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
          src={watata04}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className=" text-white text-base">watata-commodities/about-us</p>
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
                src={watata04}
                width={600}
                height={500}
                alt="market-place"
              />
            </div>
            <div className="md:max-w-2xl">
              <p className="pt-5 pb-5 font-bold md:pt-0 text-base text-dark-blue">ABOUT US</p>
              <h2 className="pb-5 text-2xl md:text-3xl font-bold">
                We are the magic behind the company’s best days.
              </h2>
              <p className="p-4 pb-5  italic border-l-4 text-base bg-custorm-gray border-dark-blue text-custorm-black">
                Nulla non faucibus montes netus tristique adipiscing in augue ullamcorper ante finibus.
              </p>
              <p className="pt-5 pb-5 text-gray-500 text-base">
                Massa eu hendrerit netus facilisis cubilia montes curae imperdiet. Laoreet cubilia mattis
                scelerisque malesuada nulla ipsum mauris. Dui facilisis vel dictumst himenaeos cubilia fringilla
                congue tempus. Pellentesque nullam nascetur nibh ultricies.
              </p>
              <p className="pt-5 pb-5 text-gray-500 text-base">
                Massa eu hendrerit netus facilisis cubilia montes curae imperdiet. Laoreet cubilia mattis
                scelerisque malesuada nulla ipsum mauris. Dui facilisis vel dictumst himenaeos cubilia fringilla
                congue tempus. Pellentesque nullam nascetur nibh ultricies.
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
          <p className="pb-5  font-bold text-center text-base text-dark-blue">OUR VALUES</p>
          <h2 className="pb-10 text-2xl md:text-3xl font-bold text-center">We Are Strategic</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {valuesData.map((value, index) => (
            <div key={index} className="flex gap-6 p-5 border rounded shadow-lg bg-custorm-gray">
              <div>
                <value.icon className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-blue" />
              </div>
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
