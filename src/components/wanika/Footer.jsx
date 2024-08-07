import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light-black">
      <div className="py-24 mx-auto">
        <div className="grid grid-cols-1 gap-5 px-2 text-center md:grid-cols-5 md:px-8 lg:px-16 2xl:px-56 xl:px-52">
          <div className="items-center md:max-w-80">
            <p className="pb-10 text-2xl font-bold text-white">
              iDesign Websites,
            </p>
            <p className="text-xl font-bold text-white">
              Highly customised financial solutions for your business.
            </p>
          </div>

          <div>
            <p className="pb-6 text-xl font-bold md:text-base text-custorm-green">Explore</p>
            <Link href="/about" className="block pb-4  text-white text-base hover:text-custorm-green">
              About
            </Link>
            <Link href="/solutions" className="block pb-4  text-white text-base hover:text-custorm-green">
              Solutions
            </Link>
            <Link href="/contact" className="block pb-4 text-white text-base hover:text-custorm-green">
              Contact
            </Link>
            <Link href="/services" className="block pb-4 text-white text-base hover:text-custorm-green">
              Services
            </Link>
          </div>
          <div>
            <p className="pb-6 text-xl md:text-base font-bold  text-custorm-green">
              Our Companies
            </p>
            <Link href="/mopane-capital" className="block pb-4  text-white text-base hover:text-custorm-green">
              Mopane Capital
            </Link>
            <Link href="/idwala-asset" className="block pb-5 text-white text-base hover:text-custorm-green">
              Idwala Asset
            </Link>
            <Link href="/sekela-microfinance" className="block pb-5  text-white text-base hover:text-custorm-green">
              Sekela Microfinance
            </Link>
            <Link href="/naka-events" className="block pb-5  text-white text-base hover:text-custorm-green">
              Naka Events
            </Link>
            <Link href="/watata-commodities" className="block pb-5 text-white text-base hover:text-custorm-green">
              Watata Commodities
            </Link>
          </div>
          <div>
            <p className="pb-6 text-xl font-semibold text-custorm-green md:text-base">About</p>
            <Link href="/solutions" className="block pb-4  text-white text-base hover:text-custorm-green">
              Solutions
            </Link>
            <Link href="/contact" className="block pb-4 text-white text-base hover:text-custorm-green">
              Contact
            </Link>
            <Link href="/about" className="block pb-4 text-white text-base hover:text-custorm-green">
              About
            </Link>
          </div>

          <div>
            <h3 className="pb-6 text-xl font-semibold md:text-base text-custorm-green">Contact</h3>
            <p className="pb-4  text-white text-base">71 Glenara Highland North</p>
            <p className="pb-4  text-white text-base">+263 7794 6378 2854</p>
            <p className="pb-4  text-white text-base">info@wanika.net</p>
          </div>
        </div>
      </div>

      <div className="py-10 bg-white">
        <p className=" text-center text-gray-500 text-base">
          Copyright 2024 Wanika Investment. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
