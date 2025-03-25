# UpDev - Projet Éducatif

## Structure du projet

- `index.html` - Page d'accueil
- `css/styles.css` - Feuille de style principale
- `js/` - Contient tous les fichiers JavaScript
- `pages/` - Contient toutes les pages secondaires
    - `apprendre.html` - Liste des leçons
    - `parametres.html` - Page des paramètres
    - `quiz/` - Contient tous les quiz organisés par leçon

## Comment ajouter un nouveau quiz

1. Créez un nouveau dossier sous `pages/quiz/` (ex: lecon3/)
2. Ajoutez:
    - `index.html` (copiez la structure existante)
    - `data.js` avec vos questions/réponses
3. Ajoutez un lien dans `pages/apprendre.html`

## Dépendances

Aucune dépendance externe - HTML/CSS/JS pur