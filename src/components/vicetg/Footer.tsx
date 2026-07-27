import { Facebook } from "lucide-react";
import { NewsletterForm } from "@/components/vicetg/NewsletterForm";
import { siteInfo } from "@/lib/site";

function Footer() {
  return (
    <footer className="bg-primary px-6 py-10 text-primary-foreground md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-xl font-semibold text-accent">Et vous ?</h2>
          <p className="mb-6 font-bold">
            Rejoignez notre association pour qu&apos;ensemble, nous contribuions à un monde
            meilleur.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-4 text-xl font-semibold text-accent">Nous découvrir</h2>
          <ul className="space-y-2">
            <li>
              <a href="#a-propos" className="transition-colors hover:text-accent">
                À propos
              </a>
            </li>
            <li>
              <a href="#actualites" className="transition-colors hover:text-accent">
                Nos activités
              </a>
            </li>
            <li>
              <a
                href={siteInfo.whatsappShop}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Nos produits maraîchers
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-4 text-xl font-semibold text-accent">
            S&apos;abonner à notre newsletter
          </h2>
          <NewsletterForm />

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <span className="mb-2 font-semibold text-accent sm:mb-0">Suivez-nous sur</span>
            <div className="flex justify-center gap-4 sm:justify-start">
              <a
                href={siteInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook de VICE TOGO"
                className="transition-colors hover:text-accent"
              >
                <Facebook className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {siteInfo.name} {new Date().getFullYear()} | Tous droits réservés. Réalisé par{" "}
          <a
            href={siteInfo.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-primary-foreground"
          >
            {siteInfo.credit.name}
          </a>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
