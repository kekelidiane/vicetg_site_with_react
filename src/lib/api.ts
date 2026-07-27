import type { ContactPayload } from "@/lib/types";

/** Appels du navigateur vers les routes internes /api */

async function postJson(url: string, body: unknown): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { success: false, error: data.error ?? "Une erreur est survenue." };
    }
    return { success: true };
  } catch {
    return { success: false, error: "Impossible de joindre le serveur." };
  }
}

export function sendContactMessage(payload: ContactPayload) {
  return postJson("/api/contact", payload);
}

export function subscribeToNewsletter(email: string) {
  return postJson("/api/newsletter", { email });
}
