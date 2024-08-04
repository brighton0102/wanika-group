import Image from "next/image";
import adeolu from "@/assets/images/adeolu.jpg";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";

const solutions = [
  {
    title: "Capital Raising",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
    link: "/solutions-details-capital-raising",
  },
  {
    title: "Structured Finance",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
    link: "/solutions-details-structured-finance",
  },
  {
    title: "Commodity Trading",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
    link: "/solutions-details-commodity-trading",
  },
  {
    title: "Event Management",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
    link: "/solutions-details-event-management",
  },
  {
    title: "Mergers & Acquisitions",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
    link: "/solutions-details-mergers-acquisitions",
  },
  {
    title: "Business Consulting",
    description: "Nunc pede neque etiam tincidunt posuere ut porttitor leo at mattis suscipit",
    link: "/solutions-details-business-consulting",
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
          src={adeolu}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-80 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
          <p className="text-lg text-white md:text-base">Home/solutions</p>
          <h1 className="text-2xl text-white md:text-4xl">Solutions</h1>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-72">
        <div className="grid gap-5 md:grid-cols-2 md:items-center">
          <div>
            <p className="pb-5 text-lg font-bold md:text-base text-custorm-green">WHAT WE OFFER</p>
            <h2 className="text-4xl font-bold bg-custorm-black">
              Developing solutions for the future.
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-500 md:text-base">
              Lacus fusce senectus facilisi accumsan vulputate tempus. Eleifend
              suscipit ad posuere velit pede blandit praesent curae eget libero.
              Sollicitudin consectetur elementum id tortor massa lacinia metus
              tempus.
            </p>
          </div>
        </div>
        <div className="grid gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="p-6  transform transition duration-500 ease-in-out hover:translate-y-[-10px]  bg-white shadow-lg rounded-xl">
              <div className="pb-5">
                <FiUsers className="p-2 text-5xl text-white rounded md:text-4xl bg-custorm-green" />
              </div>
              <h3 className="pb-5 text-2xl font-bold">{solution.title}</h3>
              <p className="pb-5 text-lg md:text-base">
                {solution.description}
              </p>
              <Link href={solution.link} className="text-lg underline md:text-base text-custorm-green">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
