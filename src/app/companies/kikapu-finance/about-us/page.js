import Image from "next/image";
import kikapu from "@/assets/images/kikapu.jpg";
import kikapu03 from "@/assets/images/kikapu03.jpeg";
import { FiUsers } from "react-icons/fi";
import { SlDiamond, SlBriefcase, SlGraph, SlGlobe, SlChart } from "react-icons/sl";
import DiscoverMore from "@/components/kikapu/DiscoverMore";

const values = [
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Customer-Orientedness",
    description: "Our management and staff do not only have a genuine concern for customers well-being, but we also have empathy — the ability to imagine our clients emotional responses to their experience with the institution."
  },
  {
    icon: <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Professionalism",
    description: "We maintain a high standard of professionalism in our work, ensuring that we provide the best services and uphold our company’s reputation."
  },
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Teamwork",
    description: "Collaboration and teamwork are at the core of our operations. We believe in working together to achieve common goals."
  },
  {
    icon: <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Innovation",
    description: "We are committed to continuous improvement and innovation, constantly seeking new ways to meet our clients' needs."
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Global Reach",
    description: "Our global presence allows us to serve clients from different parts of the world, providing them with tailored financial solutions."
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from customer service to financial solutions, ensuring the highest quality standards."
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
          <p className="text-white text-base">kikapu-finance/about-us</p>
          <h3 className="text-2xl text-white md:text-3xl">About Us</h3>
        </div>
      </section>

      {/*About Us*/}
      <section className="py-24">
        <div className="flex justify-center">
          <div className="grid px-2 md:items-center md:gap-16 md:grid-cols-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
            <div className="flex justify-center">
              <Image
                className="object-cover rounded-lg"
                src={kikapu03}
                width={600}
                height={500}
                alt="market-place"
              />
            </div>
            <div className="md:max-w-2xl">
              <p className="pt-5 pb-5 text-lg font-bold md:pt-0 md:text-base text-dark-brown">WHO WE ARE</p>
              <h3 className="pb-5 text-2xl md:text-3xl font-bold">
                We are the magic behind the company’s best days.
              </h3>
              <p className="p-4  italic border-l-4 text-base bg-pine-brown border-dark-brown text-regal-blue">
                Nulla non faucibus montes netus tristique adipiscing in augue
                ullamcorper ante finibus.
              </p>
              <p className="pt-5 pb-5 text-gray-500 text-base">
                Massa eu hendrerit netus facilisis cubilia montes curae
                imperdiet. Laoreet cubilia mattis scelerisque malesuada nulla
                ipsum mauris. Dui facilisis vel dictumst himenaeos cubilia
                fringilla congue tempus. Pellentesque nullam nascetur nibh
                ultricies.
              </p>
              <p className="pt-5 pb-5 text-gray-500 text-base">
                Massa eu hendrerit netus facilisis cubilia montes curae
                imperdiet. Laoreet cubilia mattis scelerisque malesuada nulla
                ipsum mauris. Dui facilisis vel dictumst himenaeos cubilia
                fringilla congue tempus. Pellentesque nullam nascetur nibh
                ultricies.
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
          <p className="pb-5 text-lg font-bold text-center md:text-base text-dark-brown">OUR VALUES</p>
          <h2 className="pb-10 text-2xl md:text-3xl font-bold text-center">We Are Strategic</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {values.map((value, index) => (
            <div key={index} className="flex gap-6 p-5 border rounded shadow-lg bg-custorm-gray">
              <div>
                {value.icon}
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

export default page;
