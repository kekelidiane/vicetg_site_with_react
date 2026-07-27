"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/ui/section-heading";
import { sendContactMessage } from "@/lib/api";
import { siteInfo } from "@/lib/site";

const emptyForm = { nom: "", prenom: "", email: "", objet: "", message: "" };

function ContactForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const result = await sendContactMessage(formData);
    if (result.success) {
      setStatus("success");
      setFormData(emptyForm);
    } else {
      setStatus("error");
      setErrorMessage(result.error ?? "Une erreur est survenue.");
    }
  };

  return (
    <section id="contact" className="px-6 py-16 md:px-12 lg:px-24">
      <SectionHeading title="Contactez-nous" />
      <p className="mx-auto -mt-8 mb-12 max-w-3xl text-center text-lg leading-relaxed text-card-foreground md:text-xl">
        Vous avez d&apos;autres questions ?{" "}
        <a
          href={siteInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary transition-colors hover:text-accent-dark"
        >
          Écrivez-nous
        </a>{" "}
        ou envoyez-nous un mail !
      </p>

      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom"
            autoComplete="family-name"
            required
          />
          <Input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prénom(s)"
            autoComplete="given-name"
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Adresse mail"
            autoComplete="email"
            required
          />
          <Input
            type="text"
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            placeholder="Objet"
          />
        </div>

        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          rows={6}
          required
        />

        <div className="text-center">
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Envoi en cours…" : "Envoyer"}
          </Button>
        </div>

        <p aria-live="polite" className="text-center font-medium">
          {status === "success" && (
            <span className="text-primary">Votre message a été envoyé avec succès !</span>
          )}
          {status === "error" && <span className="text-red-600">{errorMessage}</span>}
        </p>
      </form>
    </section>
  );
}

export { ContactForm };
