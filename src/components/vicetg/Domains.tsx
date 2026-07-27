import Image from "next/image";
import { BookOpen, Sprout, TreePine } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { domains } from "@/lib/site";

const domainIcons = [BookOpen, Sprout, TreePine];

/** Nos actions : les trois domaines d'engagement de l'association. */
function Domains() {
  return (
    <section id="actions" className="px-6 py-16 md:px-12 lg:px-24">
      <SectionHeading
        title="Nos actions"
        subtitle="VICE TOGO agit avec un double engagement : soutenir les enfants dans leur éducation et promouvoir la préservation de notre environnement."
      />

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {domains.map((domain, index) => {
          const Icon = domainIcons[index] ?? Sprout;
          return (
            <Card key={domain.title} className="flex flex-col items-center p-8 text-center">
              <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Icon className="size-7" aria-hidden />
              </span>
              <h3 className="mb-3 inline-block border-b-4 border-accent pb-1 text-xl font-bold text-primary">
                {domain.title}
              </h3>
              <p className="leading-relaxed">{domain.description}</p>
            </Card>
          );
        })}
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/assets/agro/filles.jpg"
            alt="Bénévoles au travail dans les champs"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-primary">Notre engagement au quotidien</h3>
          <p className="leading-relaxed">
            Du soutien scolaire dans notre bibliothèque aux campagnes de reboisement, chaque action
            est menée avec les communautés locales, pour un impact réel et durable.
          </p>
          <p className="leading-relaxed">
            Nos produits maraîchers issus de l&apos;agriculture biologique financent directement nos
            programmes éducatifs et environnementaux.
          </p>
        </div>
      </div>
    </section>
  );
}

export { Domains };
