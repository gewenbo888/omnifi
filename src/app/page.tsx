import { LangProvider } from "@/components/LangContext";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Thesis } from "@/components/Thesis";
import { PeriodicTable } from "@/components/PeriodicTable";
import { Equivalence } from "@/components/Equivalence";
import { Pull } from "@/components/Pull";
import { Timeline } from "@/components/Timeline";
import { Laws } from "@/components/Laws";
import { Builder } from "@/components/Builder";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <LangProvider>
      <NavBar />
      <main className="relative">
        <Hero />
        <Ticker />
        <Thesis />
        <PeriodicTable />
        <Equivalence />
        <Pull />
        <Timeline />
        <Laws />
        <Builder />
        <FAQ />
        <Footer />
      </main>
    </LangProvider>
  );
}
