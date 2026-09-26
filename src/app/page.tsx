import Hero from "@/components/Hero";
import HeroPin from "@/components/HeroPin";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import HomeStats from "@/components/HomeStats";

export default function HomePage() {
  return (
    <>
      <HeroPin variant="home">
        <Hero />
      </HeroPin>
      <div className="relative z-10">
        <About fit />
        <HomeStats />
        <Services />
        <Clients fit />
      </div>
    </>
  );
}
