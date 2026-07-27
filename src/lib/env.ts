/**
 * Variables d'environnement lues côté serveur uniquement.
 * Le backend (envoi d'e-mails) vivra dans un dépôt séparé :
 * renseigner CONTACT_API_URL et NEWSLETTER_API_URL une fois déployé.
 */
export const env = {
  CONTACT_API_URL: process.env.CONTACT_API_URL ?? "",
  NEWSLETTER_API_URL: process.env.NEWSLETTER_API_URL ?? "",
};
