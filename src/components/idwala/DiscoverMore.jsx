import pebbles from "@/assets/images/pebbles.jpg";

const DiscoverMore = () => {
  return (
    <section className="relative h-screen-50">
      <div
        className="sticky top-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${pebbles.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-xl p-4 mx-auto text-center bg-black bg-opacity-50 border border-black rounded-lg">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Build Wealth with Strength and Resilience
            </h2>
            <p className="pt-5 mb-5 text-base text-white">
              Partner with IDWALA Asset Management to navigate global markets with confidence. Our tailored investment solutions and personalized wealth management strategies are designed to achieve your financial objectives with excellence and integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscoverMore;
