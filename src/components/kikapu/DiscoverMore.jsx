import kikapu05 from "@/assets/images/kikapu05.jpeg";

const DiscoverMore = () => {
  return (
    <section className="relative h-screen-50">
      <div
        className="sticky top-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${kikapu05.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-xl p-4 mx-auto text-center bg-black bg-opacity-50 border border-black rounded-lg">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Discover how Kikapu Financial Services transforms business
              success.
            </h2>
            <p className="pt-5 text-base text-white">
              At Kikapu Financial Services, we provide premier secretarial
              solutions that enhance corporate governance, ensure compliance,
              and streamline regulatory adherence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;
