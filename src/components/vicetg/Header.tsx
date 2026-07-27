"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * En-tête fixe avec ScrollSpy : la section visible à l'écran (20 % minimum)
 * met son lien de menu en surbrillance.
 */
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2 },
    );

    navLinks.forEach(({ href }) => {
      const section = document.getElementById(href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) =>
    cn(
      "transition-colors hover:text-primary",
      activeSection === href.slice(1) ? "text-primary" : "text-foreground",
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-card shadow-md">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
      >
        <Link href="#accueil" onClick={() => setActiveSection("accueil")} aria-label="Retour à l'accueil">
          <Image
            src="/assets/logos/logo.png"
            alt="Logo VICE TOGO"
            width={56}
            height={56}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-6 font-medium lg:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={linkClass(href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="text-foreground lg:hidden"
        >
          {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </nav>

      {isOpen && (
        <ul id="menu-mobile" className="space-y-2 bg-card px-6 pb-4 font-medium lg:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => {
                  setActiveSection(href.slice(1));
                  setIsOpen(false);
                }}
                className={cn("block py-1", linkClass(href))}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export { Header };
