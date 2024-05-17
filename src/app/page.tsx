import { AboutSection } from "@/components/about/AboutSection";
import HomeSection from "@/components/home/HomeSection";
import Header from "@/components/layout/Header";
import ServicesSection from "@/components/services/ServicesSection";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <main className="flex pl-12 min-h-screen flex-col items-center justify-between">
      <Header />
      <HomeSection/>
      <AboutSection/>
      <Team/>
      <ServicesSection/>
    </main>
  );
}
