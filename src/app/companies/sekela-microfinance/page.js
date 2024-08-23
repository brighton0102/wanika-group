import Hero from "@/components/sekela/Hero";
import AboutUs from "@/components/sekela/AboutUs";
import Solutions from "@/components/sekela/Solutions";
import ConsultationBanner from "@/components/sekela/ConsultationBanner";
import Services from "@/components/sekela/Services";
import DiscoverMore from "@/components/sekela/DiscoverMore";
import Commercials from "@/components/sekela/Commercials";
import Navbar from "@/components/sekela/Navbar";

export const metadata = {
  title: {
    absolute: "Sekela Micro Finance"
   
  },
}


const page = () => {
  return (
    <>
      <Navbar />
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
