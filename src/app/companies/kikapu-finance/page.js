import Hero from "@/components/kikapu/Hero";
import AboutUs from "@/components/kikapu/AboutUs";
import Solutions from "@/components/kikapu/Solutions";
import ConsultationBanner from "@/components/kikapu/ConsultationBanner";
import Services from "@/components/kikapu/Services";
import DiscoverMore from "@/components/kikapu/DiscoverMore";
import Commercials from "@/components/kikapu/Commercials";
import Navbar from "@/components/kikapu/Navbar";

export const metadata = {
  title: {
    absolute: "Kikapu Finance"
   
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
