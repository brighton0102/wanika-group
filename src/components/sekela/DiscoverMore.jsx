import sekela04 from '@/assets/images/sekela04.jpg';

const DiscoverMore = () => {
  return (
    <section className="relative h-screen-50">
      <div
        className="sticky top-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${sekela04.src})` }}
      >
        <div className="absolute inset-0 bg-[#fcc10b] opacity-35"></div> {/* Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Think fresh, work faster, grow smarter, save money.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscoverMore;
