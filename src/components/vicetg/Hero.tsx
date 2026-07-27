import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/lib/site";

function Hero() {
  return (
    <section id="accueil" className="px-6 pb-20 pt-28 md:px-12 md:pt-36 lg:px-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Vie <span className="text-primary">Culture</span>{" "}
            <span className="text-accent">Environnement</span>
          </h1>

          <p className="mb-4 text-lg leading-relaxed text-card-foreground">
            L&apos;Association <span className="font-semibold text-primary">VICE Togo</span> se
            consacre à soutenir les enfants les plus démunis à travers l&apos;éducation, tout en
            promouvant la consommation et l&apos;agriculture biologiques, ainsi que le reboisement.
          </p>

          <p className="mb-6 leading-relaxed text-card-foreground">
            Vous pouvez soutenir notre association en faisant un don, en devenant bénévole ou en
            partageant notre cause avec votre entourage.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/donation"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow transition-colors hover:bg-primary-dark"
            >
              Faire un don
            </Link>
            <a
              href="#contact"
              className="rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-soft"
            >
              Nous rejoindre
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/assets/agro/ujpod.jpg"
              alt={`Activités de terrain de ${siteInfo.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
