![Build and Deploy](https://github.com/yulPa/documentations-public/workflows/Build%20and%20Deploy/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Documentations YULPA avec VuePress

Ce dépôt contient plusieurs guides rédigés par YULPA ainsi que le code
utilisé pour fournir un site web présentant ces guides.

Ces guides sont à destinations des clients YULPA (ils peuvent parfois
être utile même chez un autre prestataire).

Il utilise le gestionnaire open-source
[VuePress](https://vuepress.vuejs.org/).

## Contribuer ?

Si vous souhaitez découvrir un peu plus
[VuePress](https://vuepress.vuejs.org/).  
Sa documentaiton complète : [Guide](https://vuepress.vuejs.org/guide/).


### Configuration

Si vous souhaitez participer à la rédactions des documentations YULPA,
vous pouvez créer un fork de ce dépôt puis par la suite proposer vos
pull-request.

#### Pré-requis

1. [Node.js](https://nodejs.org/en/) v8.0+
2. Git (client de votre choix)

#### Instructions

```sh
cd mon_dossier_git
git clone git@github.com:yulPa/documentations-public.git 
yarn
yarn dev
```

Soit étapes par étapes :

1. Clonez le dépôt (attention, remplacez le dépôt par celui de votre
   fork)
2. Dans le dépôt en local, éxécutez `yarn` ou `npm install`
3. Puis éxécutez `yarn dev` ou `npm run dev`
4. Vous pouvez accéder à votre instance sur
   [https://localhost:8080](https://localhost:8080)
5. Lorsque vous avez terminé vos modifications il ne vous reste plus
   qu'à effectuer un commit puis à le pousser sur votre dépôt. Vous
   pouvez ensuite effectuer une pull-request.


# Quelques tips

Une partie est inspirée du fonctionnement
[des guides Etalab](https://github.com/etalab/guides.etalab.gouv.fr),
merci à eux :)

## Arborescence des guides YULPA

Votre dépôt local Git sera ainsi :

```
project
│   .git
│   .github
│   .gitignore
│   README.md                   (page accueil dépôt GIT)
│   nodes_modules
│   packages.json
│   yarn.lock  
│
└───docs
    │   README.md               (page accueil des guides)
    └───.vuepress               (gestion VuePress)
        │   components          (pour les composants additionnels)
        │   public              (pour les icones et images de base)
        │   theme               (le thème YULPA)
        │   yulpa_i18n          (les fichiers de langues)
        │   ...
        │
        hebergements-mutualises     (un dossier de guides)
        |   images                  (les images pour ce guide)
        │   README.md               (sa page d'accueil)
        |   0-comptes-emails.md     (un chapitre)
        |   0-alias-emails.md       (un autre)
        │   ...
        │
        autre-guide...
        │   README.md
        │   ...
```

## Ajouter un guide

Pour ajouter un guide, il suffit d'ajouter un répertoire dans le dossier
/docs (ce dernier se trouve à la racine du dépôt). Ce répertoire doit
contenir un fichier `README.md`.

Pour ajouter des chapitres au guide, il suffit d'ajouter des fichiers
`.md` dans le répertoire précédemment créé, par exemple
`0-comptes-emails.md`. Les titres de ces fichiers définissent les titres
des chapitres.

Les chapitres apparaissent par ordre alphabétique dans les menus de
navigation. Il est donc conseillé de préfixer le nom de fichier de
chaque chapitre par son numéro, par exemple `0-comptes-emails.md`,
`1-alias-emails.md`...

La page d'accueil et les menus de navigation sont générés
automatiquement.

Il est recommandé d'utiliser un `permalink` dans chaque fichier de
chapitre afin d'obtenir des URLs propres et stables même en cas de
re-numérotation de chapitres, par exemple pour
`hebergements-mutualises/0-comptes-emails.md` :

```
---
permalink: /hebergements-mutualises/comptes-emails
---
```

Par convention, les images des guides sont stockées dans un répertoire
`images` dans le répertoire de chaque guide.

Vous devez donc avoir cette arborescence :

```
project
└───docs
    └───.vuepress
        |
        les-dossiers-de-guides-existants
        ...
        votre-dossier-de-guide
        |   images                  (les images de votre guide)
        │   README.md               (sa page d'accueil)
        |   0-titre-chapitre-xxx.md    (un chapitre)
        |   1-titre-chapitre-xxx.md    (...)
        │   ...
```


### Le menu de gauche (sidebar)

Ce menu est généré automatiquement à partir de ce qui est dans votre
dossier.  
Cependant le titre global (du dossier) n'est pas encore généré
automatiquement. Il vous faut modifier le fichier :
`docs/.vuepress/yulpa_i18n/sidebarTitles/fr.js`

Nous travaillons à rendre cela dynamique et à permettre
l'internationalisation.

### Le menu du haut (navbar)

Il vous faut modifier le fichier : `docs/.vuepress/yulpa_i18n/nav/fr.js`

Nous travaillons à rendre cela dynamique et à permettre
l'internationalisation.


# Licence

Le contenu de ce dépôt est publié sous
[licence MIT](https://opensource.org/licenses/MIT).

2020, YULPA
