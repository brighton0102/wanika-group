import AboutUs from "@/components/wanika/AboutUs";
import Services from "@/components/wanika/Services";
import Commercials from "@/components/wanika/Commercials";
import Solutions from "@/components/wanika/Solutions";
import DiscoverMore from "@/components/wanika/DiscoverMore";
import ConsultationBanner from "@/components/wanika/ConsultationBanner";
import "./globals.css";
import Hero from "@/components/wanika/Hero";
import Navbar from "@/components/wanika/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <Navbar />
      <Hero />
      <AboutUs />
      <Solutions />
      <DiscoverMore />
      <Services />
      <ConsultationBanner />
      <Commercials />
    </div>
  );
}
