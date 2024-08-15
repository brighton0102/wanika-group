import Image from "next/image";
import watata01 from "@/assets/images/watata01.jpg";
import watata02 from "@/assets/images/watata02.jpg";
import watata06 from "@/assets/images/watata06.jpg";
import watata09 from "@/assets/images/watata09.jpg";

const servicesData = [
  {
    image: watata01,
    title: "Maize Grain",
    description: "Strategic sourcing of premium-grade maize from international suppliers, ensuring stringent quality standards and seamless logistics."
  },
  {
    image: watata02,
    title: "Wheat",
    description: "Sourcing and delivering top-tier wheat from global producers, with meticulous quality control and agile distribution."
  },
  {
    image: watata09,
    title: "Soya",
    description: "Procuring and supplying diverse soya products (beans, meal, and oil) through strategic alliances with esteemed suppliers."
  },
  {
    image: watata06,
    title: "Ammonium Nitrate",
    description: "Forging strong relationships with manufacturers to ensure seamless availability of superior-quality ammonium nitrate, prioritizing safety protocols and regulatory compliance."
  },
  {
    image: watata06,
    title: "Bulk Grain Importation",
    description: "Specializing in the importation of bulk grains like maize, wheat, and soya, meeting the growing demand for efficient supply chains."
  },
  {
    image: watata09,
    title: "Bulk Mineral Exports",
    description: "Expertise in exporting bulk minerals such as coking coal, lithium, and chrome, ensuring reliable and efficient delivery to international markets."
  }
];

const Services = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div>
        <p className="pb-5 text-base font-bold text-center text-dark-blue">SERVICES WE OFFER</p>
        <h2 className="pb-10 text-2xl font-bold text-center md:text-3xl">Our Expertise in Commodities</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div key={index} className="truncate bg-white rounded-lg shadow-lg card">
            <div className="relative w-full h-0 pt-[50%]">
              <Image
                src={service.image}
                alt={service.title}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-xl font-bold">{service.title}</h3>
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
