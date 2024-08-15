import Image from "next/image";
import naka04 from "@/assets/images/naka04.jpg";
import naka05 from "@/assets/images/naka05.jpg";
import eventDeco from "@/assets/images/event-deco.jpg";
import naka06 from "@/assets/images/naka06.jpg";
import naka07 from "@/assets/images/naka07.jpg";
import naka08 from "@/assets/images/naka08.jpg";

const services = [
  {
    image: naka04,
    alt: "logistics",
    title: "Logistics and Operations",
    description: "Expert management of event logistics including venue selection, vendor coordination, audiovisual production, and transportation for flawless execution.",
  },
  {
    image: naka05,
    alt: "production",
    title: "Event Production and Execution",
    description: "Combining creativity with technical expertise to deliver immersive event environments through staging, lighting, sound design, and multimedia integration.",
  },
  {
    image: naka06,
    alt: "marketing",
    title: "Event Marketing and Promotion",
    description: "Developing targeted strategies and leveraging digital platforms to maximize event reach, generate buzz, and attract attendees.",
  },
  {
    image: naka07,
    alt: "tailored-approach",
    title: "Tailored Event Design",
    description: "Collaborating with clients to conceptualize and design events that align with their vision, ensuring a unique and unforgettable experience.",
  },
  {
    image: eventDeco,
    alt: "seamless-execution",
    title: "Seamless Event Execution",
    description: "Meticulous planning and execution to ensure every aspect of the event is handled with precision, creating a smooth and successful event.",
  },
  {
    image: naka08,
    alt: "extraordinary-events",
    title: "Creating Extraordinary Experiences",
    description: "Committed to surpassing expectations and delivering events that shine brightly, bringing joy and vibrancy to every occasion.",
  },
];

const Services = () => {
  return (
    <section className="px-2 py-24 bg-custorm-gray md:px-8 xl:px-52 2xl:px-56">
      <div className="">
        <p className="pb-5 text-base font-bold text-center text-black">OUR SERVICES</p>
        <h2 className="pb-10 text-2xl font-bold text-center md:text-3xl">Services We Offer</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:px-16">
        {services.map((service, index) => (
          <div key={index} className="truncate bg-white rounded-lg shadow-lg card">
            <div className="relative w-full h-0 pt-[50%]">
              <Image
                src={service.image}
                alt={service.alt}
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
