import Image from "next/image";
import Link from "next/link";
import springWaters from "@/assets/images/spring-waters.jpg";
import kikapu06 from "@/assets/images/kikapu06.jpeg";
import sekela from "@/assets/images/sekela02.jpg";
import treePic from "@/assets/images/tree-pic.jpg";
import eventDeco from "@/assets/images/event-deco.jpg";
import rob from "@/assets/images/rob.jpg";

const servicesData = [
  {
    "src": treePic,
    "alt": "consultancy",
    "title": "Mopane Consultancy Services",
    "description": "Experts in structured finance and value-based consultancy, co-creating tailored solutions to enhance business resilience and long-term sustainability.",
    "link": "/companies/mopane-consultancy"
  },
  
  {
    "src": springWaters,
    "alt": "trading",
    "title": "Watata Commodities",
    "description": "Leaders in international trade, specializing in bulk grain imports and mineral exports, including maize, wheat, soya, coking coal, lithium, and chrome.",
    "link": "/companies/watata-commodities"
  },
  
  {
    "src": kikapu06,
    "alt": "capital-Raising",
    "title": "Kikapu Financial Services",
    "description": "Leading provider of secretarial services, ensuring corporate compliance, governance, and efficient company administration.",
    "link": "/companies/kikapu-finance"
  },
  
  {
    "src": sekela,
    "alt": "microfinance",
    "title": "Sekela Microfinance",
    "description": "Empowering Zimbabwe's unbanked with microloans, savings, and insurance, driving financial inclusion and sustainable growth.",
    "link": "/companies/sekela-microfinance"
  },
  
  {
    "src": rob,
    "alt": "asset-management",
    "title": "Idwala Asset Management",
    "description": "Boutique asset management firm offering tailored investment solutions and wealth management strategies to help clients achieve financial success.",
    "link": "/companies/idwala-asset-management"
  },
  
  {
    "src": eventDeco,
    "alt": "event-management",
    "title": "Naka Event Management",
    "description": "Experts in event planning and production, crafting unforgettable experiences through meticulous design, flawless execution, and innovative promotion.",
    "link": "/companies/naka-event-management"
  }
  

];

const Services = () => {
  return (
    <section className="px-2 py-24 md:px-8 lg:px-16 2xl:px-56 xl:px-52 bg-custorm-gray">
      <div>
        <p className="pb-5 text-base font-bold text-center text-custorm-green">
          OUR SERVICES
        </p>
        <h2 className="pb-10 text-2xl font-bold text-center md:text-3xl ">
          Services We Offer
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div key={index} className="truncate bg-white rounded-lg shadow-lg card">
            <div className="relative w-full h-0 pt-[50%] overflow-hidden group">
              <Image
                src={service.src}
                alt={service.alt}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-xl font-bold">{service.title}</h3>
              <p className="pb-5 overflow-hidden text-base text-wrap">
                {service.description}
              </p>
              <Link href={service.link} className="text-base underline transition-opacity duration-200 text-custorm-green hover:opacity-75">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
