import Image from "next/image";
import medienSturmer from "@/assets/images/mediensturmer.jpg";
import { BsDot } from "react-icons/bs";
import SolutionsLinks from "@/components/solutions/SolutionsLinks";

const page = ({ fullHeight = false }) => {
  return (
    <>
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
          <p className="text-base text-white">
            Home/solutions/details/structured-finance
          </p>
          <h2 className="text-2xl text-white md:text-3xl">
            Structured Finance
          </h2>
        </div>
      </section>

      {/* solutions */}

      <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div className="grid gap-5 md:grid-cols-1 lg:grid-cols-3">
          <SolutionsLinks />
          <div className="col-span-2">
            <div className="max-w-4xl mb-2">
              <Image src={medienSturmer} alt="team" className="bg-cover" />
            </div>
            <div>
              <h2 className="p-5 my-5 text-2xl font-bold border-l-2 border-gray-400 text-custorm-green md:text-3xl">
                Value-Based Consultancy & Structured Finance
              </h2>
              <p className="text-base ">
                Mopane Consultancy Services is a registered investment advisor
                specializing in structured finance solutions for manufacturers
                and processors. We assist companies in raising capital and
                managing supply chains, especially those unable to access
                conventional banking systems. Our expertise ensures that
                businesses thrive by assessing market demand, production
                capabilities, and reliable supply chains.
              </p>
              <p className="py-5 border-b-2 border-gray-400">
                Our value-based consultancy model focuses on delivering
                tangible, measurable value through expert team collaborations
                and innovative finance solutions tailored to enhance your
                business&apos;s profitability and long-term sustainability.
              </p>

              <div className="pt-5 pb-5 border-b-2 border-gray-400">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  EXPERTISE
                </p>
                <p className="pt-5 text-base">
                  We specialize in capital raising, supply chain management,
                  risk mitigation, and financial market development for complex
                  African ecosystems.
                </p>
              </div>

              <div className="pt-5">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  INNOVATION & ADAPTABILITY
                </p>
                <p className="pt-5 text-base">
                  Our performance-based consultancy model ensures that we only
                  get compensated upon delivering measurable results. We
                  leverage fintech and 4IR technologies to drive transformative
                  changes in your business and its ecosystem.
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
