
import Hero from "@/components/idwala/Hero";
import AboutUs from "@/components/idwala/AboutUs";
import Solutions from "@/components/idwala/Solutions";
import ConsultationBanner from "@/components/idwala/ConsultationBanner";
import Services from "@/components/idwala/Services";
import DiscoverMore from "@/components/idwala/DiscoverMore";
import Commercials from "@/components/idwala/Commercials";
import Navbar from "@/components/idwala/Navbar";


export const metadata = {
  title: {
    absolute: "Idwala Asset Management"
   
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
