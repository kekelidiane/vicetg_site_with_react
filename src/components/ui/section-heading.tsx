import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/** Titre de section : vert VICE TOGO, souligné jaune, sous-titre optionnel. */
function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto mb-12 max-w-3xl text-center", className)}>
      <h2 className="mb-2 inline-block border-b-4 border-accent pb-2 text-3xl font-bold text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-card-foreground md:text-xl">{subtitle}</p>
      )}
    </div>
  );
}

export { SectionHeading };
