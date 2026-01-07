import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AwarenessSection } from "@/components/home/AwarenessSection";
import { LiveCounter } from "@/components/home/LiveCounter";
import { EmergencyRequests } from "@/components/home/EmergencyRequests";
import { AvailableDonors } from "@/components/home/AvailableDonors";
import { WhyLifeDrop } from "@/components/home/WhyLifeDrop";
import { BloodInfo } from "@/components/home/BloodInfo";
import { HumanStory } from "@/components/home/HumanStory";
import { CallToAction } from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AwarenessSection />
        <LiveCounter />
        <EmergencyRequests />
        <AvailableDonors />
        <WhyLifeDrop />
        <BloodInfo />
        <HumanStory />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
