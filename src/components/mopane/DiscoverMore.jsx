import mopane19 from "@/assets/images/mopane19.jpg";

const DiscoverMore = () => {
  return (
    <section className="relative h-screen-50">
      <div
        className="sticky top-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${mopane19.src})` }}
      >
        <div className="absolute inset-0 bg-[#000000] opacity-25"></div>
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-xl">
            <h3 className="pb-5 text-2xl font-bold text-white md:text-3xl">
              Unlock High-Impact Opportunities with Mopane Capital Ventures
            </h3>
            <p className="text-base text-white">
              Partner with us for expert capital raising, strategic investment consulting, and structured finance solutions. Leverage our global network and rigorous research to drive your business forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscoverMore;
