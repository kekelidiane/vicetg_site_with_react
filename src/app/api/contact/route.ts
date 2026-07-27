import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import type { ContactPayload } from "@/lib/types";

/**
 * Reçoit le formulaire de contact et le transmet à l'API d'envoi d'e-mails
 * (backend séparé, configuré via CONTACT_API_URL).
 * Tant que l'API n'est pas branchée, la soumission est acceptée et journalisée
 * côté serveur pour ne pas bloquer la démo du site.
 */
export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Requête invalide." }, { status: 400 });
  }

  const { nom, prenom, email, message } = body;
  if (!nom?.trim() || !prenom?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, error: "Tous les champs obligatoires doivent être remplis." },
      { status: 400 },
    );
  }

  if (!env.CONTACT_API_URL) {
    console.warn("[contact] CONTACT_API_URL non configurée, message non transmis:", { nom, prenom, email });
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch(env.CONTACT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Le service d'envoi d'e-mails a refusé la demande." },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Erreur d'appel au backend:", error);
    return NextResponse.json(
      { success: false, error: "Le service d'envoi d'e-mails est indisponible." },
      { status: 502 },
    );
  }
}
