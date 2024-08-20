import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";

const SolutionsLinks = () => {
  return (
    <div className="col-span-2 md:col-span-2 lg:col-span-1">
      <Link href="/solutions-details-commodity-trading">
        <div className="flex items-center justify-between p-5 mb-4 transition-colors duration-200 rounded-md cursor-pointer bg-custorm-purple hover:bg-custorm-green">
          <p className="text-lg font-bold md:text-base">Commodity Trading</p>
          <IoIosArrowRoundForward className="text-3xl bg-white rounded-md" />
        </div>
      </Link>

      <Link href="/solutions-details-structured-finance">
        <div className="flex items-center justify-between p-5 mb-4 transition-colors duration-200 rounded-md cursor-pointer bg-custorm-purple hover:bg-custorm-green">
          <p className="text-lg font-bold md:text-base">Structured Finance</p>
          <IoIosArrowRoundForward className="text-3xl bg-white rounded-md" />
        </div>
      </Link>

      <Link href="/solutions-details-micro-finance">
        <div className="flex items-center justify-between p-5 mb-4 transition-colors duration-200 rounded-md cursor-pointer bg-custorm-purple hover:bg-custorm-green">
          <p className="text-lg font-bold md:text-base">Micro Finance</p>
          <IoIosArrowRoundForward className="text-3xl bg-white rounded-md" />
        </div>
      </Link>

      <Link href="/solutions-details-capital-raising">
        <div className="flex items-center justify-between p-5 mb-4 transition-colors duration-200 rounded-md cursor-pointer bg-custorm-purple hover:bg-custorm-green">
          <p className="text-lg font-bold md:text-base">Capital Raising</p>
          <IoIosArrowRoundForward className="text-3xl bg-white rounded-md" />
        </div>
      </Link>

      <Link href="/solutions-details-event-management">
        <div className="flex items-center justify-between p-5 mb-4 transition-colors duration-200 rounded-md cursor-pointer bg-custorm-purple hover:bg-custorm-green">
          <p className="text-lg font-bold md:text-base">Event Management</p>
          <IoIosArrowRoundForward className="text-3xl bg-white rounded-md" />
        </div>
      </Link>

      <Link href="/solutions-details-secretarial-service">
        <div className="flex items-center justify-between p-5 transition-colors duration-200 rounded-md cursor-pointer bg-custorm-purple hover:bg-custorm-green">
          <p className="text-lg font-bold md:text-base">Secretarial Service</p>
          <IoIosArrowRoundForward className="text-3xl bg-white rounded-md" />
        </div>
      </Link>

      <div className="p-10 mt-4 bg-custorm-green">
        <h2 className="pb-8 text-4xl font-bold text-center text-white">
          Contact with us for any advice
        </h2>
        <div>
          <TbPhoneCall className="mx-auto text-white text-7xl" />
        </div>
        <p className="py-8 text-lg text-center text-white md:text-base">
          Need help? Talk to an expert
        </p>
        <p className="text-2xl font-bold text-center text-white">
        +263 (0)636 4222
        </p>
      </div>
    </div>
  );
};

export default SolutionsLinks;
