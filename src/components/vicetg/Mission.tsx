import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Counter } from "@/components/vicetg/Counter";
import { stats } from "@/lib/site";
import { cn } from "@/lib/utils";

function Mission() {
  return (
    <section id="a-propos" className="px-6 py-16 md:px-12 lg:px-24">
      <Card className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
            <Image
              src="/assets/edu/enfants.jpg"
              alt="Enfants accompagnés par l'association"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Notre mission</h2>
            <p className="leading-relaxed">
              L&apos;Association <span className="font-semibold text-primary">VICE TOGO</span> se
              consacre à soutenir les enfants les plus démunis à travers l&apos;éducation, tout en
              promouvant la consommation et l&apos;agriculture biologiques, ainsi que le reboisement.
            </p>
            <p className="leading-relaxed">
              Vous pouvez soutenir notre association en faisant un don, en devenant bénévole ou en
              partageant notre cause avec votre entourage.
            </p>
            <p className="leading-relaxed">
              Ensemble, nous pouvons offrir aux enfants une éducation de qualité, promouvoir des
              pratiques agricoles durables et préserver notre environnement pour les générations
              futures.
            </p>
          </div>
        </div>

        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-primary-soft p-6 shadow">
              <dd
                className={cn(
                  "text-4xl font-bold",
                  stat.accent ? "text-accent-dark" : "text-primary",
                )}
              >
                <Counter target={stat.value} />
              </dd>
              <dt className="mt-1 text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Card>
    </section>
  );
}

export { Mission };
