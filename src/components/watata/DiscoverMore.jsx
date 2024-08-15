import watata06 from "@/assets/images/watata06.jpg";

const DiscoverMore = () => {
  return (
    <section className="relative h-screen-50">
      <div
        className="sticky top-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${watata06.src})` }}
      >
        <div className="absolute inset-0 bg-[#000000] bg-opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:max-w-xl">
            Enhance your supply chain with our expertise in bulk commodities.
          </h2>
          <p className="mt-4 text-base text-white lg:max-w-2xl">
            Watata Commodities specializes in bulk grain and mineral trading, delivering quality and efficiency to support your business growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;
