import Image from "next/image";
import mopane27 from "@/assets/images/mopane27.jpg";
import mopane28 from "@/assets/images/mopane28.jpg";
import mopane23 from "@/assets/images/mopane23.jpg";
import mopane24 from "@/assets/images/mopane24.jpg";
import mopane25 from "@/assets/images/mopane25.jpg";
import mopane26 from "@/assets/images/mopane26.jpg";

const servicesData = [
  {
    image: mopane25,
    title: "Capital Raising",
    description: "Securing funding from high-net-worth individuals and institutional investors through private equity, venture capital, and impact investing.",
    alt: "Capital Raising"
  },
  {
    image: mopane23,
    title: "Investment Consulting",
    description: "Providing expert consulting and due diligence for capital raising, risk management, and project structuring.",
    alt: "Investment Consulting"
  },
  {
    image: mopane27,
    title: "Structured Finance",
    description: "Offering tailored financial structures and solutions for businesses to enhance their growth and investment potential.",
    alt: "Structured Finance"
  },
  {
    image: mopane28,
    title: "Risk Management",
    description: "Implementing strategies to identify and mitigate risks, ensuring robust protection and success for investments.",
    alt: "Risk Management"
  },
  {
    image: mopane26,
    title: "International Financing",
    description: "Connecting global investors with high-risk, high-return opportunities in Africa's commodity trading, energy, and mining sectors.",
    alt: "International Financing"
  },
  {
    image: mopane24,
    title: "Research & Analysis",
    description: "Employing rigorous analysis to select and vet projects, ensuring they meet investment criteria and offer sustainable returns.",
    alt: "Research & Analysis"
  }
];

const Services = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 lg:px-16 xl:px-52 2xl:px-56">
      <div>
        <p className="pb-5 text-base font-bold text-center text-dark-brown">
          OUR SERVICES
        </p>
        <h2 className="pb-10 text-2xl font-bold text-center md:text-3xl">Our Services</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div key={index} className="truncate rounded-lg shadow-lg bg-pine-brown card group">
            <div className="relative w-full h-0 pt-[50%] overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.alt}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="pb-5 text-xl font-bold">{service.title}</h3>
              <p className="pb-5 overflow-hidden text-base text-dark-brown text-wrap">
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
