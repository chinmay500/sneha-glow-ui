import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import VenueSection from "@/components/VenueSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="grain min-h-screen bg-background">
      <HeroSection />
      <EventsSection />
      <VenueSection />
      <FooterSection />
    </div>
  );
};

export default Index;
