import { Header } from "@/components/vicetg/Header";
import { Hero } from "@/components/vicetg/Hero";
import { Mission } from "@/components/vicetg/Mission";
import { Domains } from "@/components/vicetg/Domains";
import { Support } from "@/components/vicetg/Support";
import { Blog } from "@/components/vicetg/Blog";
import { Team } from "@/components/vicetg/Team";
import { Partners } from "@/components/vicetg/Partners";
import { ContactForm } from "@/components/vicetg/ContactForm";
import { Footer } from "@/components/vicetg/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Domains />
        <Support />
        <Blog />
        <Team />
        <Partners />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
