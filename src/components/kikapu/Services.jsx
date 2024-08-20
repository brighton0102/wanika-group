import Image from "next/image";
import time from "@/assets/images/time.jpeg";
import structuredFinance from "@/assets/images/structured-finance.jpeg";
import paperWork from "@/assets/images/paper-work.jpeg";
import consulting from "@/assets/images/consulting.jpeg";
import kikapu08 from "@/assets/images/kikapu08.jpeg";
import kikapu09 from "@/assets/images/kikapu09.jpeg";

const services = [
  {
    src: paperWork,
    alt: "Company Registration",
    title: "Company Registration",
    description:
      "Handling company registration processes with precision to ensure compliance with legal requirements and regulatory frameworks.",
  },
  {
    src: consulting,
    alt: "Statutory Record Maintenance",
    title: "Statutory Record Maintenance",
    description:
      "Maintaining statutory records with accuracy to meet regulatory obligations and support effective company administration.",
  },
  {
    src: time,
    alt: "Annual Return Filings",
    title: "Annual Return Filings",
    description:
      "Managing annual return filings to ensure timely and accurate submissions in line with regulatory requirements.",
  },
  {
    src: structuredFinance,
    alt: "Corporate Governance",
    title: "Corporate Governance",
    description:
      "Upholding high standards of corporate governance to ensure companies operate within legal frameworks and adhere to best practices.",
  },
  {
    src: kikapu08,
    alt: "Regulatory Adherence",
    title: "Regulatory Adherence",
    description:
      "Ensuring adherence to regulatory mandates to minimize compliance risks and support organizational success.",
  },
  {
    src: kikapu09,
    alt: "Company Secretarial Services",
    title: "Company Secretarial Services",
    description:
      "Providing comprehensive secretarial services to support organizational efficiency and compliance with corporate regulations.",
  },
];


const Services = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <h2 className="pb-10 text-2xl font-bold text-center text-dark-brown text-darkbrown md:text-3xl">OUR SERVICES</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="truncate rounded-lg card bg-pine-brown">
            <div className="relative w-full h-0 pt-[50%] overflow-hidden group">
              <Image
                src={service.src}
                alt={service.alt}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-xl font-bold text-dark-brown">{service.title}</h3>
              <p className="overflow-hidden text-base text-wrap">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
