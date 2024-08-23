import Image from "next/image";
import medienSturmer from "@/assets/images/mediensturmer.jpg";
import capitalRaise from "@/assets/images/capital-raise.jpeg";
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
          <p className="text-base text-white">
            Home/solutions/details/capital-raising
          </p>
          <h2 className="text-2xl text-white md:text-3xl">Capital Raising</h2>
        </div>
      </section>

      {/* solutions */}

      <section className="px-2 py-24 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div className="grid gap-5 md:grid-cols-1 lg:grid-cols-3">
          <SolutionsLinks />
          <div className="col-span-2">
            <div className="max-w-4xl mb-2">
              <Image src={capitalRaise} alt="capital raising" className="bg-cover" />
            </div>
            <div>
              <h2 className="p-5 my-5 text-2xl font-bold border-l-2 border-gray-400 text-custorm-green md:text-3xl">
                Mopane Capital Ventures
              </h2>
              <p className="text-base ">
                Mopane Capital Ventures (Private) Limited specializes in capital 
                raising for Wanika Group entities and external clients. We secure 
                funding through high net-worth individuals and institutional investors 
                focused on private equity, venture capital, and impact investing.
              </p>
              <p className="pt-5 text-base">
                In partnership with Mopane Consultancy Services (Private) Limited, 
                our experienced professionals conduct thorough due diligence, 
                providing:
              </p>
              <ul className="pt-5 pl-5 text-base list-disc">
                <li>Independent assessments of target ecosystems</li>
                <li>Risk identification and mitigation strategies</li>
                <li>Legal structuring with commercial partners (collateral management, 
                    insurance, cash management, and security arrangements)</li>
              </ul>
              <p className="pt-5 text-base">
                This enhances the effectiveness of our structured finance solutions 
                and capital raise initiatives.
              </p>
              <p className="pt-5 text-base">
                Mopane Capital Ventures engages prominent private equity and venture 
                capital markets in the USA, Canada, and Europe, connecting investors 
                seeking high-risk, high-return opportunities in Africa&apos;s international 
                commodity trading, energy, and mining sectors with qualifying projects 
                that meet their investment criteria. Our dedicated research teams 
                employ rigorous analysis to ensure meticulous project selection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
