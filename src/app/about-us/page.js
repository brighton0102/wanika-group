import Image from "next/image";
import adeolu from "@/assets/images/adeolu.jpg";
import hero from "@/assets/images/hero.webp";
import { FiUsers } from "react-icons/fi";
import { SlDiamond, SlBriefcase, SlGraph, SlGlobe, SlChart } from "react-icons/sl";
import DiscoverMore from "@/components/wanika/DiscoverMore";

export const metadata = {
  title: {
    default: "About",
   
  },
 
};
const values = [
  {
    icon: <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Customer-Orientedness",
    description: "Our management and staff do not only have a genuine concern for customers well-being, but we also have empathy — the ability to imagine our clients emotional responses to their experience with the institution."
  },
  {
    icon: <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Professionalism",
    description: "We maintain the highest standards of professionalism, ensuring that our actions align with our values and principles."
  },
  {
    icon: <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Teamwork",
    description: "Collaboration and teamwork are at the heart of our operations, driving us to achieve more together."
  },
  {
    icon: <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Growth",
    description: "We are committed to continuous growth and development, both as a company and as individuals."
  },
  {
    icon: <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Global Perspective",
    description: "Our global perspective allows us to understand and cater to the diverse needs of our clients worldwide."
  },
  {
    icon: <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, setting high standards and constantly pushing the boundaries of what is possible."
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
          src={adeolu}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-80 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className=" text-white text-base">Home/about-us</p>
          <h2 className="text-2xl text-white md:text-3xl ">About Us</h2>
        </div>
      </section>

      {/*About Us*/}

      <section className="py-24">
        <div className="flex justify-center">
          <div className="grid items-center px-2 md:grid-cols-2 md:gap-16 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
            <div className="flex justify-center">
              <Image
                className="object-cover rounded-lg"
                src={hero}
                width={600}
                height={500}
                alt="market-place"
              />
            </div>
            <div className="md:max-w-2xl">
              <p className="pt-5 pb-5 text-lg font-bold md:pt-0 text-custorm-green md:text-base">WHO WE ARE</p>
              <h2 className="pb-5 text-3xl font-bold">
                We are the magic behind the company’s best days.
              </h2>
              <p className="p-4 pb-5 italic border-l-4 text-base border-custorm-green text-regal-blue bg-custorm-gray">
                Nulla non faucibus montes netus tristique adipiscing in augue
                ullamcorper ante finibus.
              </p>
              <p className="pt-5 pb-5  text-gray-500 text-base">
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
          <p className="pb-5  font-bold text-center text-custorm-green text-base">
            OUR VALUES
          </p>
          <h2 className="pb-10 text-2xl md:text-3xl font-bold text-center ">We Are Strategic</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {values.map((value, index) => (
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
