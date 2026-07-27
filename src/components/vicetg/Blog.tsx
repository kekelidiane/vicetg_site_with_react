import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { articles } from "@/lib/site";

function Blog() {
  return (
    <section id="actualites" className="px-6 py-16 md:px-12 lg:px-24">
      <SectionHeading
        title="Nos actualités"
        subtitle="Découvrez nos activités scolaires, environnementales et de sensibilisation."
      />

      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.slug} className="flex flex-col overflow-hidden hover:shadow-xl">
            <div className="relative h-56 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-2 text-xl font-semibold text-primary">{article.title}</h3>
              <p className="mb-3 text-sm text-accent-dark">
                <time>{article.date}</time> par <span className="text-primary">{article.author}</span>
              </p>
              <p className="flex-grow">{article.excerpt}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export { Blog };
