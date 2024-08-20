import Image from "next/image";
import Link from "next/link";
import naka03 from "@/assets/images/naka03.jpg";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="flex justify-center">
        <div className="grid items-center gap-16 px-2 md:grid-cols-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="flex justify-center">
            <Image
              className="object-cover rounded-lg"
              src={naka03}
              width={600}
              height={500}
              alt="Event Management"
            />
          </div>
          <div className="md:max-w-2xl">
            <p className="pt-5 pb-5 text-base font-bold md:pt-0 text-custorm-pink">WHO WE ARE</p>
            <h2 className="pb-5 text-2xl font-bold md:text-3xl text-custorm-pink">
              Crafting Unforgettable Experiences with Precision
            </h2>
            <p className="p-4 pb-5 text-base italic border-l-4 bg-custorm-gray border-custorm-pink text-custorm-black">
              At Naka Event Management, we design and execute events that align with your vision, ensuring a seamless and unforgettable experience.
            </p>
            <p className="pt-5 mb-5 text-base text-gray-500">
              We excel in managing complex event logistics, from venue selection to audiovisual production. Our team combines creativity and technical expertise to deliver exceptional event production and marketing.
            </p>
            <p className="pt-5 mb-5 text-base text-gray-500">
              Our name, Naka, from &quot;Kunaka&quot; meaning &quot;to shine,&quot; reflects our mission to make every event shine with joy and sophistication.
            </p>
            <Link
              href="/companies/naka-event-management/about-us"
              className="text-base underline transition-opacity duration-200 hover:opacity-75 text-custorm-pink"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
