import Hero from "@/components/naka/Hero";
import AboutUs from "@/components/naka/AboutUs";
import Solutions from "@/components/naka/Solutions";
import ConsultationBanner from "@/components/naka/ConsultationBanner";
import Services from "@/components/naka/Services";
import DiscoverMore from "@/components/naka/DiscoverMore";
import Commercials from "@/components/naka/Commercials";


export const metadata = {
  title: {
    absolute: "Naka Event Management"
   
  },
}


const page = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Solutions />
      <ConsultationBanner />
      <Services />
      <DiscoverMore />
      <Commercials />
    </>
  );
};

export default page;
