import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DonationChannels } from "@/components/vicetg/DonationChannels";
import { Footer } from "@/components/vicetg/Footer";

export const metadata: Metadata = {
  title: "Faire un don",
  description:
    "Soutenez VICE TOGO par Flooz, Tmoney ou virement bancaire. Chaque don est utilisé de manière transparente et responsable.",
};

export default function DonationPage() {
  return (
    <>
      <header className="bg-card shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
          <Link href="/" aria-label="Retour à l'accueil">
            <Image
              src="/assets/logos/logo.png"
              alt="Logo VICE TOGO"
              width={56}
              height={56}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>
          <h1 className="flex-1 text-center text-2xl font-bold text-foreground md:text-3xl">
            Ensemble, changeons des vies
          </h1>
          {/* Espace symétrique au logo pour garder le titre centré */}
          <div className="hidden w-14 md:block" aria-hidden />
        </div>
      </header>

      <main className="bg-card px-6 py-10 md:px-12 lg:px-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Un simple geste peut nourrir, soigner ou scolariser un enfant. Ce qui peut sembler petit
            pour vous représente énormément pour eux.
          </p>
        </div>

        <p className="mb-12 text-center text-lg font-semibold text-card-foreground">
          Même 1 000 FCFA peut nourrir un enfant pendant plusieurs jours. Faites un don maintenant
          et changez une vie.
        </p>

        <DonationChannels />

        <p className="mx-auto mt-10 max-w-xl text-center font-light text-card-foreground">
          Nous nous engageons à utiliser chaque don de manière transparente et responsable, pour un
          impact réel et durable.
        </p>
      </main>

      <Footer />
    </>
  );
}
