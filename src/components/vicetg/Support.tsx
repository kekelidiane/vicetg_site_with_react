import Link from "next/link";
import { HandHeart, Handshake, Salad } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { supportActions } from "@/lib/site";
import type { SupportAction } from "@/lib/types";

const actionIcons: Record<SupportAction["icon"], typeof HandHeart> = {
  don: HandHeart,
  produits: Salad,
  benevole: Handshake,
};

function Support() {
  return (
    <section id="soutenir" className="px-6 py-16 md:px-12 lg:px-24">
      <SectionHeading
        title="Soutenez VICE TOGO"
        subtitle="Votre soutien nous permet de continuer nos actions pour l'éducation et l'environnement."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {supportActions.map((action) => {
          const Icon = actionIcons[action.icon];
          const linkProps = action.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Card key={action.title} className="flex flex-col items-center p-8 text-center">
              <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Icon className="size-7" aria-hidden />
              </span>
              <h3 className="mb-4 inline-block border-b-4 border-accent pb-2 text-xl font-bold text-primary transition-colors hover:text-accent-dark">
                {action.external ? (
                  <a href={action.href} {...linkProps}>
                    {action.title}
                  </a>
                ) : (
                  <Link href={action.href}>{action.title}</Link>
                )}
              </h3>
              <p className="text-muted-foreground">{action.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export { Support };
