import Image from "next/image";
import Link from "next/link";
import kikapu03 from "@/assets/images/kikapu03.jpeg";

const AboutUs = () => {
  return (
    <section className="py-24">
    <div className="flex justify-center">
      <div className="grid items-center px-2 md:grid-cols-2 md:gap-16 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
        <div className="flex justify-center">
          <Image
            className="object-cover rounded-lg"
            src={kikapu03}
            width={600}
            height={500} 
            alt="market-place"
          />
        </div>
        <div className="md:max-w-2xl">
          <p className="pt-5 pb-5 text-lg font-bold md:pt-0 md:text-base text-dark-brown">WHO WE ARE</p>
          <h2 className="pb-5 text-4xl font-bold">
            We are the magic behind the company’s best days.
          </h2>
          <p className="p-4 text-lg italic border-l-4 md:text-base bg-pine-brown border-dark-brown text-regal-blue">
            Nulla non faucibus montes netus tristique adipiscing in augue
            ullamcorper ante finibus.
          </p>
          <p className="pt-5 pb-5 text-lg text-gray-500 md:text-base">
            Massa eu hendrerit netus facilisis cubilia montes curae
            imperdiet. Laoreet cubilia mattis scelerisque malesuada nulla
            ipsum mauris. Dui facilisis vel dictumst himenaeos cubilia
            fringilla congue tempus. Pellentesque nullam nascetur nibh
            ultricies.
          </p>
          <Link
            href="/companies/kikapu-finance/about-us"
            className="text-lg underline md:text-base text-dark-brown"
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
