import Image from "next/image";
import medienSturmer from "@/assets/images/mediensturmer.jpg";
import projectFinance from "@/assets/images/project-finance.jpeg";
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
              <Image src={projectFinance} alt="kikapu" className="bg-cover" />
            </div>
            <div>
              <h2 className="p-5 my-5 text-2xl font-bold border-l-2 border-gray-400 md:text-3xl">
                Kikapu Financial Services
              </h2>
              <p className="pb-5 text-base">
                Kikapu Financial Services is a premier provider of innovative
                secretarial solutions, expertly catering to Zimbabwean businesses. 
                We specialize in corporate governance, company compliance, and 
                regulatory adherence, ensuring clients operate within legal frameworks.
              </p>
              <p className="text-base ">
                Our expert team handles company registration, statutory record maintenance, 
                and annual return filings with precision. We help businesses streamline 
                secretarial processes, optimize efficiency, and minimize compliance risks 
                for sustainable growth.
              </p>
              <p className="pt-5 text-base ">
                Like the Kikapu basket, we sift through complexities to provide clarity and 
                precision in advisory, secretarial, and regulatory support, solidifying 
                your company&apos;s foundation for success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
