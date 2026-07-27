export interface NavLink {
  href: string;
  label: string;
}

export interface Article {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
}

export interface SupportAction {
  icon: "don" | "produits" | "benevole";
  title: string;
  href: string;
  external?: boolean;
  description: string;
}

export interface Domain {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface Partner {
  name: string;
  description: string;
}

export interface Stat {
  label: string;
  value: number;
  accent?: boolean;
}

export interface DonationChannel {
  name: string;
  detail: string;
  href: string;
  image: string;
  note: string;
}

export interface ContactPayload {
  nom: string;
  prenom: string;
  email: string;
  objet?: string;
  message: string;
}
