import naka01 from "@/assets/images/naka01.jpg";

const DiscoverMore = () => {
  return (
    <section className="relative h-screen-50">
      <div
        className="sticky top-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${naka01.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-xl">
            <h3 className="pb-5 text-2xl font-bold text-white md:text-3xl">
              Illuminate Your Event with Naka Events Management
            </h3>
            <p className="text-base text-white">
              Let Naka Events Management create an unforgettable experience for
              you. From flawless logistics to captivating production, we ensure
              every detail shines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;
