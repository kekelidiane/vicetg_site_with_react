import { NextResponse } from "next/server";
import { env } from "@/lib/env";

/**
 * Inscription à la newsletter, transmise à l'API configurée via NEWSLETTER_API_URL.
 * Même logique de repli que /api/contact tant que le backend n'est pas branché.
 */
export async function POST(req: Request) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Requête invalide." }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";
  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValide) {
    return NextResponse.json(
      { success: false, error: "Adresse e-mail invalide." },
      { status: 400 },
    );
  }

  if (!env.NEWSLETTER_API_URL) {
    console.warn("[newsletter] NEWSLETTER_API_URL non configurée, inscription non transmise:", email);
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch(env.NEWSLETTER_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Le service de newsletter a refusé la demande." },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[newsletter] Erreur d'appel au backend:", error);
    return NextResponse.json(
      { success: false, error: "Le service de newsletter est indisponible." },
      { status: 502 },
    );
  }
}
