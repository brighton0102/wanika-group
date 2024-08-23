import Image from "next/image";
import medienSturmer from "@/assets/images/mediensturmer.jpg";
import naka06 from "@/assets/images/naka01.jpg";
import SolutionsLinks from "@/components/solutions/SolutionsLinks";
import Navbar from "@/components/wanika/Navbar";

const page = ({ fullHeight = false }) => {
  return (
    <>
      <Navbar />
      <section
        className="relative w-full overflow-hidden pt-60"
        style={{ height: fullHeight ? "100vh" : "50vh" }}
      >
        <Image
          src={medienSturmer}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-70 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white ">
            Home/solutions/details/event-management
          </p>
          <h3 className="text-2xl text-white md:text-3xl">Event Management</h3>
        </div>
      </section>

      {/* solutions */}

      <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
          <SolutionsLinks />
          <div className="col-span-2">
            <div className="max-w-4xl mb-2">
              <Image src={naka06} alt="event management" className="bg-cover" />
            </div>
            <div>
              <h2 className="p-5 my-5 text-2xl font-bold border-l-2 border-gray-400 text-custorm-green md:text-3xl">
                Naka Events Management
              </h2>
              <p className="text-base ">
                Naka Event Management recognizes that each event is unique and 
                requires a tailored approach. Our creative team collaborates with 
                clients to design and plan events that align with their vision, 
                ensuring seamless execution and an unforgettable experience.
              </p>
              <div className="py-5 border-b-2 border-gray-400 ">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  Logistics and Operations
                </p>
                <p className="pt-5 text-base">
                  We excel in managing complex event logistics, from venue selection 
                  to vendor management and audiovisual production. Our team ensures 
                  flawless execution with meticulous attention to detail and strategic planning.
                </p>
              </div>
              <div className="pt-5 pb-5 border-b-2 border-gray-400">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  Event Production and Execution
                </p>
                <p className="pt-5 text-base">
                  Combining creativity and technical expertise, we deliver exceptional 
                  event production, creating immersive environments through staging, 
                  lighting, sound design, and multimedia integration.
                </p>
              </div>
              <div className="pt-5 ">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  Event Marketing and Promotion
                </p>
                <p className="pt-5 text-base">
                  We offer comprehensive marketing and promotion services to maximize 
                  event reach and impact. Our team develops targeted strategies and leverages 
                  digital platforms to generate buzz and attract attendees.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
