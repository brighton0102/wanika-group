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
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-72">
        <h2 className="text-4xl font-bold text-white lg:max-w-3xl">
          We will help you unlock investment options that allow you to
          participate in the growth of your wealth.
        </h2>
      </div>
    </div>
  </section>
  )
}

export default DiscoverMore
