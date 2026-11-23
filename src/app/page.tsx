import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities";
import { Contacts } from "@/components/sections/Contacts";
import { Documents } from "@/components/sections/Documents";
import { Food } from "@/components/sections/Food";
import { Gallery } from "@/components/sections/Gallery";
import { Groups } from "@/components/sections/Groups";
import { Hero } from "@/components/sections/Hero";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function HomePage() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Groups />
        <Food />
        <Activities />
        <Gallery />
        <Documents />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </LanguageProvider>
  );
}
