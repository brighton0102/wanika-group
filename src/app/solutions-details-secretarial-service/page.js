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
          <p className=" text-white text-base">
          Home/solutions/details/secretarial-service
          </p>
          <h2 className="text-2xl text-white md:text-3xl">Secretarial Service</h2>
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
              <h2 className="p-5 text-2xl md:text-3xl font-bold border-l-2 border-gray-400">
                Trading
              </h2>
              <p className="py-5 text-base">
                Swift deal execution is the cornerstone of our trading function.
                You can count on us to provide seamless entry and exit in and
                out of various securities, whether publicly or privately issued.
              </p>
              <div className="pb-10 border-b-2 border-gray-400">
                <p className="inline p-1 text-lg md:text-base rounded-2xl bg-custorm-purple">
                  FOREIGN EXCHANGE TRADING
                </p>
                <p className="pt-5 text-base">
                  Dealing in most major currencies, our foreign exchange
                  offering supports international trade.
                </p>
                <div>
                  <div className="flex items-center">
                    <BsDot className="text-3xl text-gray-500" />
                    <p className="text-base">Spot Forex Transactions</p>
                  </div>
                  <div className="flex items-center">
                    <BsDot className="text-3xl text-gray-500" />
                    <p className="text-base">Forward Exchange Contracts</p>
                  </div>
                  <div className="flex items-center">
                    <BsDot className="text-3xl text-gray-500" />
                    <p className="text-base">Currency Swaps</p>
                  </div>
                </div>
              </div>
              <div className="pt-5 pb-5 border-b-2 border-gray-400">
                <p className="inline p-1 text-lg md:text-base rounded-2xl bg-custorm-purple">
                  COMMODITIES
                </p>
                <p className="pt-3 text-base">
                  We specialize in supply chain management for local and
                  international commodity trades.
                </p>
              </div>
              <div className="pt-4 pb-5 border-b-2 border-gray-400">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  FIXED INCOME SECURITIES
                </p>
                <p className="pt-4 text-base">
                  We are market makers in a wide range of money and capital
                  market instruments, providing liquidity and improving market
                  efficiency. Main instruments traded include:
                </p>
                <div>
                  <div className="flex items-center">
                    <BsDot className="text-3xl text-gray-500" />
                    <p className="text-base">Treasury Bills/Bonds</p>
                  </div>
                  <div className="flex items-center">
                    <BsDot className="text-3xl text-gray-500" />
                    <p className="text-base">Promissory Notes</p>
                  </div>
                  <div className="flex items-center">
                    <BsDot className="text-3xl text-gray-500" />
                    <p className="text-base">Commercial Paper</p>
                  </div>
                  <div className="flex items-center">
                    <BsDot className="text-3xl text-gray-500" />
                    <p className="text-base">Municipality Bonds</p>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <p className="inline p-1 text-base rounded-2xl bg-custorm-purple">
                  FINANCIAL PRODUCTS
                </p>
                <h3 className="py-2 text-2xl font-bold">Crypto</h3>
                <p className="text-base">
                  Please reach out and tell us about your exact needs.
                </p>
                <h3 className="py-2 text-2xl font-bold">Equities</h3>
                <p className="text-base">
                  Please reach out and tell us about your exact needs.
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
