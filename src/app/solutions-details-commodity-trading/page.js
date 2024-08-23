import Image from "next/image";
import maize from "@/assets/images/maize.jpg";
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
          src={maize}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-70 z-5"></div>
        <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-base text-white ">
            Home/solutions/details/commodity-trading
          </p>
          <h2 className="text-2xl text-white md:text-3xl">Commodity Trading</h2>
        </div>
      </section>

      {/* solutions */}

      <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div className="grid gap-5 md:grid-cols-1 lg:grid-cols-3">
          <SolutionsLinks />
          <div className="col-span-2">
            <div className="max-w-4xl mb-2">
              <Image src={maize} alt="commodity trading" className="bg-cover" />
            </div>
            <div>
              <h2 className="p-5 my-5 text-2xl font-bold border-l-2 border-gray-400 text-custorm-green md:text-3xl">
                Watata Commodities
              </h2>
              <p className="text-base ">
                Watata Commodities (Private) Limited is a leading international trade 
                company specializing in the procurement and distribution of bulk 
                commodities crucial to national economies. We focus on both importation 
                and exportation of essential goods including:
              </p>
              <ul className="pl-5 text-base list-disc">
                <li><strong>Bulk Grain Importation:</strong> Maize, wheat, and soya.</li>
                <li><strong>Bulk Mineral Exports:</strong> Coking coal, lithium, and chrome.</li>
              </ul>
              <div className="py-5 border-b-2 border-gray-400">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  MAIZE GRAIN
                </p>
                <p className="pt-5 text-base">
                  We strategically source premium-grade maize from international 
                  suppliers, ensuring stringent quality standards and seamless logistics.
                </p>
              </div>
              <div className="py-5 border-b-2 border-gray-400">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  WHEAT
                </p>
                <p className="pt-5 text-base">
                  We source and deliver top-tier wheat from global producers, with 
                  meticulous quality control and agile distribution.
                </p>
              </div>
              <div className="py-5 border-b-2 border-gray-400">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  SOYA
                </p>
                <p className="pt-5 text-base">
                  We procure and supply diverse soya products (beans, meal, and oil) 
                  through strategic alliances with esteemed suppliers.
                </p>
              </div>
              <div className="py-5 border-b-2 border-gray-400">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  AMMONIUM NITRATE
                </p>
                <p className="pt-5 text-base">
                  We forge strong relationships with manufacturers to ensure seamless 
                  availability of superior-quality ammonium nitrate, prioritizing safety 
                  protocols and regulatory compliance.
                </p>
              </div>
              <div className="pt-5">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  BULK COMMODITIES
                </p>
                <p className="pt-5 text-base">
                  As a prominent player in international commodities, we excel in 
                  sourcing and delivering bulk commodities, meeting the diverse needs 
                  of our clients.
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
