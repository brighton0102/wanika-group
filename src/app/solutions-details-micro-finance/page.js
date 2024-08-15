import Image from "next/image";
import medienSturmer from "@/assets/images/mediensturmer.jpg";
import mopane22 from "@/assets/images/mopane22.jpg";
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
          <p className="text-base text-white ">
            Home/solutions/details/microfinance
          </p>
          <h3 className="text-2xl text-white md:text-3xl">Microfinance</h3>
        </div>
      </section>

      {/* solutions */}

      <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
          <SolutionsLinks />
          <div className="col-span-2">
            <div className="max-w-4xl mb-2">
              <Image src={mopane22} alt="microfinance" className="bg-cover" />
            </div>
            <div>
              <h2 className="p-5 my-5 text-2xl font-bold border-l-2 border-gray-400 md:text-3xl">
                Sekela Microfinance
              </h2>
              <p className="text-base ">
                Sekela Microfinance (Private) Limited is a premier microfinance 
                institution operating in Zimbabwe&apos;s dynamic economic environment. 
                Registered with the Reserve Bank of Zimbabwe, Sekela Microfinance 
                is dedicated to promoting financial inclusion and sustainable economic growth.
              </p>
              <div className="py-5 border-b-2 border-gray-400 ">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  Financial Products
                </p>
                <p className="pt-5 text-base">
                  Sekela Microfinance offers tailored financial products including 
                  microloans, savings accounts, and insurance services, aimed at 
                  empowering entrepreneurs and small businesses to reach their full potential.
                </p>
              </div>
              <div className="pt-5 pb-5 border-b-2 border-gray-400">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  Responsible Lending
                </p>
                <p className="pt-5 text-base">
                  We distinguish ourselves through responsible lending practices, 
                  providing comprehensive financial education and guidance to ensure 
                  clients ventures are sustainable and promoting a culture of prudent 
                  financial management.
                </p>
              </div>
              <div className="pt-5 pb-5 ">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  Community Engagement
                </p>
                <p className="pt-5 text-base">
                  Sekela Microfinance engages in collaborative initiatives with local 
                  communities, NGOs, and government entities to drive holistic growth. 
                  We also focus on women&apos;s economic empowerment, offering specialized 
                  loan products and support programs to promote gender equality and 
                  inclusive economic growth.
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
