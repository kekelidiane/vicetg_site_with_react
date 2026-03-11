'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

const sections = ["home", "about", "donate", "blog", "contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); //Stocke la section actuellement active

  // ScrollSpy
  useEffect(() => {                                           //Quand 60% d’une section est visible, elle devient active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2, // si 20% de la section est visible, lien/section active
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>  //gestion du style
    activeSection === id
      ? "text-green-600"
      : "text-gray-800 hover:text-green-600";

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#home" onClick={() => setActiveSection("home")}> {/*Même avant le scroll → le lien devient actif */}
          <Image
            src="/assets/logos/logo.png"
            alt="Logo"
            width={56}
            height={56}
            className="h-10 md:h-12 lg:h-14 w-auto"
          />
        </a>

        {/* Menu normal ordi */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#home" className={linkClass("home")}>Accueil</a></li>
          <li><a href="#about" className={linkClass("about")}>À propos</a></li>
          <li><a href="#donate" className={linkClass("donate")}>Nous soutenir</a></li>
          <li><a href="#blog" className={linkClass("blog")}>Actualités</a></li>
          <li><a href="#contact" className={linkClass("contact")}>Nous contacter</a></li>
        </ul>

        {/* bouton menu pour le mobile */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl md:hidden text-gray-800">
            {isOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-2 font-medium">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => {
                  setActiveSection(id);
                  setIsOpen(false);
                }}
                className={`block ${linkClass(id)}`}
              >
                {id === "home" && "Accueil"}
                {id === "about" && "À propos"}
                {id === "donate" && "Nous soutenir"}
                {id === "blog" && "Actualités"}
                {id === "contact" && "Nous contacter"}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;