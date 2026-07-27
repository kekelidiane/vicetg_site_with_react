import { UserRound } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { team } from "@/lib/site";

/** Équipe : les visuels et noms réels remplaceront les placeholders de lib/site.ts. */
function Team() {
  return (
    <section id="equipe" className="px-6 py-16 md:px-12 lg:px-24">
      <SectionHeading
        title="Notre équipe"
        subtitle="Des bénévoles engagés au service des enfants et de l'environnement."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
        {team.map((member, index) => (
          <Card key={`${member.role}-${index}`} className="flex flex-col items-center p-6 text-center">
            <span className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary">
              <UserRound className="size-8" aria-hidden />
            </span>
            <h3 className="font-semibold text-foreground">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export { Team };
