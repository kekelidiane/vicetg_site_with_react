import type {
  Article,
  Domain,
  DonationChannel,
  NavLink,
  Partner,
  Stat,
  SupportAction,
  TeamMember,
} from "@/lib/types";

/** Contenu éditorial du site, centralisé pour faciliter les mises à jour. */

export const siteInfo = {
  name: "VICE TOGO",
  fullName: "Vie Culture Environnement Togo",
  description:
    "L'Association VICE Togo se consacre à soutenir les enfants les plus démunis à travers l'éducation, tout en promouvant la consommation et l'agriculture biologiques, ainsi que le reboisement.",
  whatsapp: "http://wa.me/22892731790",
  whatsappCommunity: "https://chat.whatsapp.com/LkQbb334DgpABbeciFspW1",
  whatsappShop: "http://wa.me/22892590009",
  facebook: "https://www.facebook.com/vicetogo",
  credit: { name: "@karuidesu", href: "https://linktr.ee/karuidesu" },
};

export const navLinks: NavLink[] = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#actions", label: "Nos actions" },
  { href: "#soutenir", label: "Nous soutenir" },
  { href: "#actualites", label: "Actualités" },
  { href: "#equipe", label: "Équipe" },
  { href: "#contact", label: "Contact" },
];

export const stats: Stat[] = [
  { label: "Enfants accompagnés", value: 52 },
  { label: "Donateurs", value: 2, accent: true },
  { label: "Volontaires", value: 24 },
];

export const domains: Domain[] = [
  {
    title: "Éducation",
    description:
      "Soutien scolaire aux enfants défavorisés au sein de notre bibliothèque, pour les aider à acquérir les compétences et connaissances nécessaires.",
  },
  {
    title: "Agriculture durable",
    description:
      "Promotion des pratiques agricoles durables et biologiques pour protéger l'environnement, assurer une alimentation saine et renforcer les moyens de subsistance des communautés.",
  },
  {
    title: "Reboisement",
    description:
      "Plantation d'arbres et restauration des écosystèmes forestiers pour lutter contre la déforestation et favoriser la biodiversité.",
  },
];

export const supportActions: SupportAction[] = [
  {
    icon: "don",
    title: "Faire un don",
    href: "/donation",
    description:
      "Soutenez notre cause en contribuant financièrement pour l'avenir des enfants et la planète.",
  },
  {
    icon: "produits",
    title: "Acheter nos produits",
    href: siteInfo.whatsappShop,
    external: true,
    description:
      "Achetez nos légumes et produits issus de l'agriculture bio, cultivés durablement, et soutenez nos actions.",
  },
  {
    icon: "benevole",
    title: "Devenir bénévole",
    href: siteInfo.whatsappCommunity,
    external: true,
    description:
      "Rejoignez notre communauté WhatsApp, notre équipe de bénévoles engagés pour participer activement à nos projets.",
  },
];

export const articles: Article[] = [
  {
    title: "Nos récoltes de cette saison",
    slug: "recoltes-2023",
    date: "20 juin 2023",
    author: "Diane",
    excerpt: "Investir dans notre association peut transformer des vies.",
    image: "/assets/agro/choux.jpg",
  },
  {
    title: "Atelier d'éducation écologique",
    slug: "atelier-ecologique",
    date: "15 mai 2023",
    author: "Marc",
    excerpt:
      "Sensibiliser les jeunes à la protection de l'environnement dès le plus jeune âge.",
    image: "/assets/sensib/sensib.jpg",
  },
  {
    title: "Projet de reboisement communautaire",
    slug: "reboisement-communautaire",
    date: "10 avril 2023",
    author: "Claire",
    excerpt:
      "Des centaines d'arbres plantés grâce à la mobilisation locale et aux bénévoles.",
    image: "/assets/agro/champ.jpg",
  },
];

/* Placeholders à remplacer par les vrais membres et partenaires. */
export const team: TeamMember[] = [
  { name: "Membre fondateur", role: "Président(e)" },
  { name: "Membre du bureau", role: "Secrétaire général(e)" },
  { name: "Membre du bureau", role: "Trésorier(ère)" },
  { name: "Coordinateur terrain", role: "Responsable des programmes" },
];

export const partners: Partner[] = [
  { name: "ADDIL", description: "Partenaire de développement local" },
  { name: "COOPEC", description: "Partenaire financier" },
];

export const donationChannels: DonationChannel[] = [
  {
    name: "Flooz (Moov Money)",
    detail: "+228 96 28 50 94",
    href: "tel:+22896285094",
    image: "/assets/logos/Moov_money.jpeg",
    note: "Envoyez votre don via Flooz",
  },
  {
    name: "Tmoney (Mixx by Yas)",
    detail: "+228 92 73 17 90",
    href: "tel:+22892731790",
    image: "/assets/logos/Mixx_by_Yas.jpg",
    note: "Envoyez votre don via Tmoney",
  },
  {
    name: "Virement bancaire",
    detail: "Voir le RIB",
    href: "/assets/docs/rib_coopec.pdf",
    image: "/assets/logos/transactions-bank.jpg",
    note: "Effectuez un virement bancaire sécurisé",
  },
];
