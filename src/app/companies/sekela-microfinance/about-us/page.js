import Image from "next/image";
import smile from "@/assets/images/smile.jpg";
import { FiUsers } from "react-icons/fi";
import { SlDiamond } from "react-icons/sl";
import { SlBriefcase } from "react-icons/sl";
import { SlGraph } from "react-icons/sl";
import { SlGlobe } from "react-icons/sl";
import { SlChart } from "react-icons/sl";
import sekela from "@/assets/images/sekela02.jpg";
import DiscoverMore from "@/components/sekela/DiscoverMore";

const cardData = [
  {
    icon: (
      <SlChart className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />
    ),
    title: "Financial Inclusion",
    description: `Dedicated to promoting financial inclusion, we offer tailored financial products like microloans, savings accounts, and insurance services to empower unbanked and underprivileged segments.`,
  },
  {
    icon: (
      <SlBriefcase className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />
    ),
    title: "Empowering Entrepreneurs",
    description: `We provide comprehensive financial education and guidance to ensure our clients' ventures are sustainable, fostering a culture of prudent financial management.`,
  },
  {
    icon: (
      <SlGraph className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />
    ),
    title: "Holistic Growth",
    description: `Engaging in collaborative initiatives with local communities, NGOs, and government entities to drive socio-economic development and holistic growth.`,
  },
  {
    icon: (
      <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />
    ),
    title: "Women’s Economic Empowerment",
    description: `Offering specialized loan products and support programs to promote gender equality and inclusive economic growth.`,
  },
  {
    icon: (
      <SlGlobe className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />
    ),
    title: "Responsible Lending",
    description: `Committed to responsible lending practices that ensure our clients' ventures are sustainable and successful.`,
  },
  {
    icon: (
      <SlDiamond className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-yellow" />
    ),
    title: "Strong Foundation",
    description: `"Sekela" means "foundation" in Zulu, symbolizing our role in providing the essential base for Africa's ambitious dreams to grow and flourish.`,
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
          src={smile}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#fcc10b] opacity-30 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white">
            sekela-microfinance/about-us
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
          src={sekela}
          alt="Sekela Microfinance"
        />
      </div>
      <div className="md:max-w-2xl">
        <p className="pt-5 pb-5 text-base font-bold md:pt-0 text-custorm-yellow">
          WHO WE ARE
        </p>
        <h2 className="pb-5 text-2xl font-bold md:text-3xl">
          Empowering Dreams with Financial Inclusion and Growth
        </h2>
        <p className="p-4 pb-5 text-base italic border-l-2 bg-custorm-gray border-custorm-yellow text-regal-blue">
          &quot;Sekela,&quot; meaning &quot;foundation&quot; in Zulu, symbolizes our commitment to providing a strong base for Africa’s ambitious dreams.
        </p>
        <p className="pt-5 text-base text-gray-500">
          Sekela Microfinance (Private) Limited is a leading microfinance institution in Zimbabwe, registered with the Reserve Bank of Zimbabwe. We are dedicated to promoting financial inclusion and sustainable economic growth by offering tailored financial products such as microloans, savings accounts, and insurance services.
        </p>
        <p className="pt-5 text-base text-gray-500">
          Our focus is on serving unbanked and underprivileged segments, providing responsible lending practices, and comprehensive financial education. We collaborate with local communities, NGOs, and government entities to drive holistic growth and empower entrepreneurs and small businesses.
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
          <p className="pb-5 text-base font-bold text-center text-custorm-yellow">
            OUR VALUES
          </p>
          <h2 className="pb-10 text-2xl font-bold text-center md:text-3xl">
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
