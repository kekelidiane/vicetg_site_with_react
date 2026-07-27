# VICE TOGO – Site web

Site vitrine de l'association VICE TOGO (Vie Culture et Environnement) : éducation des enfants démunis, agriculture biologique et reboisement.

## Stack

- Next.js 
- Tailwind CSS 
- lucide-react (icônes)

## Architecture

```
src/
  app/
    page.tsx        Page d'accueil 
    donation/       Page de don 
    api/contact     Relais vers l'API d'envoi d'e-mails
    api/newsletter  Relais vers l'API newsletter
  components/
    ui/           Composants génériques (Button, Input, Card...)
    vicetg/       Composants métier (Header, Hero, Footer...)
  lib/
    site.ts       Contenu éditorial centralisé (textes, liens, stats)
    api.ts        Appels du navigateur vers les routes /api
    env.ts        Variables d'environnement côté serveur
    types.ts      Types partagés
    utils.ts      cn() (clsx + tailwind-merge)
```

## Démarrage

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Backend

Le backend (envoi d'e-mails, newsletter) vit dans un dépôt séparé. Renseigner `CONTACT_API_URL` et `NEWSLETTER_API_URL` dans `.env.local` une fois déployé. Tant que ces variables sont vides, les formulaires répondent en mode démonstration.

## Màj

Textes, articles, statistiques, équipe et partenaires se modifient dans `src/lib/site.ts`, sans toucher aux composants.
