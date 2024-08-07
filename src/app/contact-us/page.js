

import Image from "next/image";
import adeolu from "@/assets/images/adeolu.jpg";
import ContactForm from "./ContactForm";

export default function ContactPage({ fullHeight = false }) {
  
 
  return (
    <>
      <section
        className="relative w-full overflow-hidden pt-60"
        style={{ height: fullHeight ? "100vh" : "50vh" }}
      >
        <Image
          src={adeolu}
          alt="Exploration Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-80 z-5"></div>
        <div className="relative z-10 flex flex-col px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <p className="text-lg text-white md:text-base">Home/contact-us</p>
          <h2 className="text-2xl text-white md:text-3xl">Contact Us</h2>
        </div>
      </section>

      <section className="max-w-2xl px-4 py-24 mx-auto ">
        <h2 className="pt-5 pb-5 text-lg font-bold md:pt-0 md:text-base text-custorm-green">SEND US A MESSAGE</h2>
        <ContactForm />
      </section>
    </>
  );
}
