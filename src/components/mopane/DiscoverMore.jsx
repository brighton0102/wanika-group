import mopane17 from "@/assets/images/mopane17.jpg";

const DiscoverMore = () => {
  return (
    <section className="relative h-screen-50">
      <div
        className="sticky top-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${mopane17.src})` }}
      >
        <div className="absolute inset-0 bg-[#000000] opacity-25"></div>
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
          <div className="max-w-xl">
            <h3 className="pb-5 text-4xl font-bold text-white md:text-4xl">
              Ready to elevate your business? Discover more with Mopane Capital!
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscoverMore;
