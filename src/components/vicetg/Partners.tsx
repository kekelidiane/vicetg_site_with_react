import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { partners } from "@/lib/site";

function Partners() {
  return (
    <section id="partenaires" className="px-6 py-16 md:px-12 lg:px-24">
      <SectionHeading
        title="Nos partenaires"
        subtitle="Ils nous accompagnent dans nos actions sur le terrain."
      />

      <div className="mx-auto flex max-w-4xl flex-wrap items-stretch justify-center gap-8">
        <Card className="flex w-64 flex-col items-center p-6 text-center">
          <div className="relative mb-4 h-20 w-40">
            <Image
              src="/assets/logos/logo_addil.png"
              alt="Logo ADDIL"
              fill
              className="object-contain"
              sizes="160px"
            />
          </div>
          <h3 className="font-semibold text-foreground">{partners[0].name}</h3>
          <p className="text-sm text-muted-foreground">{partners[0].description}</p>
        </Card>

        <Card className="flex w-64 flex-col items-center justify-center p-6 text-center">
          <h3 className="text-xl font-bold text-primary">{partners[1].name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{partners[1].description}</p>
        </Card>
      </div>
    </section>
  );
}

export { Partners };
