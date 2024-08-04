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
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-80">
        <div class="max-w-3xl bg-black bg-opacity-50 border border-black rounded-lg p-4 mx-auto text-center">
          <h3 class="font-bold text-4xl text-white md:text-4xl">
            Think fresh, work faster, grow smarter, save money.
          </h3>
          <p class="text-white pt-5 md:text-base text-lg">
            Venenatis mi tellus vestibulum aliquam facilisis himenaeos ex
            pharetra netus neque senectus. Ipsum velit est et tortor potenti
            vehicula neque.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DiscoverMore
