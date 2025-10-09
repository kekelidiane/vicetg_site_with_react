# Site web de l'association VICE TOGO

## Technologies

* Next js
* Tailwind CSS
* Fastapi (Python)

## Prérequis
* Node js
* Python 3.11+
* PostgreSQL


## Installation

Cloner le dépôt :

```bash
git clone https://github.com/kekelidiane/vicetg_site_with_react.git
```

### > Frontend

1. Se déplacer dans le dossier frontend :

```bash
cd frontend
```

2. Installer les dépendances :

```bash
npm install
# ou
yarn install
```

3. Lancer le projet en mode développement :

```bash
npm run dev
# ou
yarn run dev
```

Le site sera accessible sur http://localhost:3000

### > Backend

1. Se déplacer dans le dossier backend :

```bash
cd backend
```

2. Créer un environnement virtuel et :
```bash
pip install virtualenv
python -m venv my_env
#ensuite
my_env\Scripts\activate # Sur Windows
my_env\bin\activate # Sur macOS/Linux
```

3. Installer les dépendances :

```bash
pip install -r requirements.txt
```
4. Lancer le serveur

```bash
uvicorn main:app --reload
```

Le site sera accessible sur http://127.0.0.1:8000

5. Documentation :

- Swagger UI : http://127.0.0.1:8000/docs
- Redoc : http://127.0.0.1:8000/redoc


## Structure du projet

```bash
├── backend/            
│   ├── article/           # gestion des articles
│   ├── auth/              # authentification
│   ├── core/              # configuration de la base de donnee
│   ├── env/               # environnement virtuel 
│   └── requirements.txt  
│
├── frontend/ 
│   ├── public/ 
|   |   └── assets          # fichiers statiques
|   └── src/
│       ├── app/            # principal
│       └── components/     # composants React
│          └── ui/         # composants reutilisables
│   
└── README.md              
```

## Contribution ?

1. Forker le dépôt
2. Créer une branche pour vos modifications
3. Committer vos changements
4. Ouvrir une Pull Request

© 2025 VICE TOGO

#### *_ARIGATO_*