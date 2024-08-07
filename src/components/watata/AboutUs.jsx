import Image from "next/image";
import Link from "next/link";
import watata06 from "@/assets/images/watata06.jpg";

const AboutUs = () => {
  return (
    <section className="py-24">
    <div className="flex justify-center">
      <div className="grid items-center px-2 md:gap-16 md:grid-cols-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
        <div className="flex justify-center">
          <Image
            className="object-cover rounded-lg"
            src={watata06}
            width={600}
            height={500} 
            alt="market-place"
          />
        </div>
        <div className="md:max-w-2xl">
          <p className="pt-5 pb-5 font-bold md:pt-0 text-base text-dark-blue">ABOUT US</p>
          <h2 className="pb-5 text-2xl md:text-3xl font-bold">
            We are the magic behind the company’s best days.
          </h2>
          <p className="p-4 pb-5  italic border-l-4 text-base bg-custorm-gray border-dark-blue text-custorm-black">
            Nulla non faucibus montes netus tristique adipiscing in augue
            ullamcorper ante finibus.
          </p>
          <p className="pt-5 pb-5  text-gray-500 text-base ">
            Massa eu hendrerit netus facilisis cubilia montes curae
            imperdiet. Laoreet cubilia mattis scelerisque malesuada nulla
            ipsum mauris. Dui facilisis vel dictumst himenaeos cubilia
            fringilla congue tempus. Pellentesque nullam nascetur nibh
            ultricies.
          </p>
          
            <Link
              href="/companies/watata-commodities/about-us"
              className="underline transition-opacity duration-200 text-base  hover:opacity-75 text-dark-blue"
            >
              Learn More
            </Link>
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutUs
