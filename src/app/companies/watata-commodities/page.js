import Hero from "@/components/watata/Hero";
import AboutUs from "@/components/watata/AboutUs";
import Solutions from "@/components/watata/Solutions";
import ConsultationBanner from "@/components/watata/ConsultationBanner";
import Services from "@/components/watata/Services";
import DiscoverMore from "@/components/watata/DiscoverMore";
import Commercials from "@/components/watata/Commercials";
import Navbar from "@/components/watata/Navbar";

export const metadata = {
  title: {
    absolute: "Watata Commodities"
   
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
