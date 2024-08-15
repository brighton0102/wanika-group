import treePic from "@/assets/images/tree-pic.jpg";

const DiscoverMore = () => {
  return (
    <section className="relative h-screen-50">
      <div
        className="sticky top-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${treePic.src})` }}
      >
        <div className="absolute inset-0 bg-[#1b4336] opacity-80"></div> {/* Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 2xl:px-56 xl:px-52">
          <div className="max-w-xl p-4 mx-auto text-center bg-black bg-opacity-50 border border-black rounded-xl">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Think fresh, work faster, grow smarter, save money.
            </h2>
            <p className="pt-5 text-base text-white">
              At Wanika Group, we drive growth through relentless innovation, agility, and value creation. Discover how our financial solutions can help your business thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;
