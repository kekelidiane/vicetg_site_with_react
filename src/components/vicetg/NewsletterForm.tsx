"use client";

import { useState } from "react";
import { subscribeToNewsletter } from "@/lib/api";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const result = await subscribeToNewsletter(email);
    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      setErrorMessage(result.error ?? "Une erreur est survenue.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-2 flex flex-col gap-4 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Adresse e-mail
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Entrez votre adresse mail"
          autoComplete="email"
          required
          className="flex-1 rounded-lg border border-border bg-card px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="cursor-pointer rounded-lg bg-accent px-4 py-2 font-semibold text-primary transition-colors hover:bg-accent-dark disabled:opacity-50"
        >
          {status === "sending" ? "Envoi…" : "S'abonner"}
        </button>
      </form>
      <p aria-live="polite" className="min-h-5 text-sm">
        {status === "success" && <span className="text-accent">Inscription enregistrée, merci !</span>}
        {status === "error" && <span className="text-red-200">{errorMessage}</span>}
      </p>
    </div>
  );
}

export { NewsletterForm };
