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

const cardData = [
  {
    icon: (
      <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Customer-Orientedness",
    description: `Massa eu hendrerit netus facilisis cubilia montes curae imperdiet
                 Laoreet cubilia mattis scelerisque malesuada nulla ipsum mauris.
                 Dui facilisis vel dictumst himenaeos cubilia fringilla congue tempus.
                 Pellentesque nullam nascetur nibh ultricies`,
  },
  {
    icon: (
      <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Customer-Orientedness",
    description: `Massa eu hendrerit netus facilisis cubilia montes curae imperdiet
                 Laoreet cubilia mattis scelerisque malesuada nulla ipsum mauris.
                 Dui facilisis vel dictumst himenaeos cubilia fringilla congue tempus.
                 Pellentesque nullam nascetur nibh ultricies`,
  },
  {
    icon: (
      <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Customer-Orientedness",
    description: `Massa eu hendrerit netus facilisis cubilia montes curae imperdiet
                 Laoreet cubilia mattis scelerisque malesuada nulla ipsum mauris.
                 Dui facilisis vel dictumst himenaeos cubilia fringilla congue tempus.
                 Pellentesque nullam nascetur nibh ultricies`,
  },
  {
    icon: (
      <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Customer-Orientedness",
    description: `Massa eu hendrerit netus facilisis cubilia montes curae imperdiet
                 Laoreet cubilia mattis scelerisque malesuada nulla ipsum mauris.
                 Dui facilisis vel dictumst himenaeos cubilia fringilla congue tempus.
                 Pellentesque nullam nascetur nibh ultricies`,
  },
  {
    icon: (
      <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Customer-Orientedness",
    description: `Massa eu hendrerit netus facilisis cubilia montes curae imperdiet
                 Laoreet cubilia mattis scelerisque malesuada nulla ipsum mauris.
                 Dui facilisis vel dictumst himenaeos cubilia fringilla congue tempus.
                 Pellentesque nullam nascetur nibh ultricies`,
  },
  {
    icon: (
      <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-dark-brown" />
    ),
    title: "Customer-Orientedness",
    description: `Massa eu hendrerit netus facilisis cubilia montes curae imperdiet
                 Laoreet cubilia mattis scelerisque malesuada nulla ipsum mauris.
                 Dui facilisis vel dictumst himenaeos cubilia fringilla congue tempus.
                 Pellentesque nullam nascetur nibh ultricies`,
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
                alt="bolder"
              />
            </div>
            <div className="md:max-w-2xl">
              <p className="pt-5 pb-5 font-bold md:pt-0 text-base text-dark-brown">
                ABOUT US
              </p>
              <h2 className="pb-5 text-2xl md:text-3xl font-bold">
                We are the magic behind the company’s best days.
              </h2>
              <p className="p-4 pb-5  italic border-l-4 text-base bg-pine-brown border-dark-brown text-custorm-black">
                Nulla non faucibus montes netus tristique adipiscing in augue
                ullamcorper ante finibus.
              </p>
              <p className="pt-5 mb-5 text-gray-500 text-base">
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
          <p className="pb-5 font-bold text-center text-base text-dark-brown">
            OUR VALUES
          </p>
          <h2 className="pb-10 text-2xl md:text-3xl font-bold text-center">
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
                <h3 className="pb-5 text-xl font-bold">{card.title}</h3>
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
