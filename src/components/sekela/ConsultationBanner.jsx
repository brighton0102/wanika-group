import Image from 'next/image';
import sekela01 from '@/assets/images/sekela01.jpg';

const ConsultationBanner = () => {
  return (
    <section className="relative h-screen-50">
      <div className="relative w-full h-full">
        <Image
          src={sekela01}
          alt="Sekela"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 z-10 bg-[#fcc10b] opacity-30"></div>
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-2 md:px-8 lg:px-16 xl:px-52 2xl:px-56">
          <div className="max-w-3xl">
            <h2 className="pb-5 text-2xl md:text-3xl font-bold text-white">
              Ready to make a difference? Join our fincco project team today!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
