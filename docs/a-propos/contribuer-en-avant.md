---
autoGroup-1: Contribuer
---

# En avant !

[[toc]]

## Git

Si vous souhaitez participer à la rédactions des documentations YULPA,
vous pouvez créer un fork de ce dépôt puis par la suite proposer vos
pull-request.

### Pré-requis

1. [Node.js](https://nodejs.org/en/) v8.0+
2. Git (client de votre choix)

### Instructions

```sh
cd mon_dossier_git
git clone git@github.com:yulPa/documentations-public.git 
yarn
yarn dev
```

Soit étapes par étapes :

1. Clonez le dépôt (attention, remplacez le dépôt par celui de votre
   fork)
2. Dans le dépôt en local, éxécutez `yarn`
3. Puis éxécutez `yarn dev`
4. Vous pouvez accéder à votre instance sur
   [https://localhost:8080](https://localhost:8080)
5. Lorsque vous avez terminé vos modifications il ne vous reste plus
   qu'à effectuer un commit puis à le pousser sur votre dépôt. Vous
   pouvez ensuite effectuer une pull-request.


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
        |   dist                (ce dossier est exclu, il comprends la documentation après build)
        │   public              (pour les icones et images de base)
        │   styles              (des modifications du thème utilisé)
        │   yulpa_i18n          (les fichiers de langues)
        │   ...
        │
        a-propos                    (un dossier de guides)
        |   images                  (les images pour ce guide)
        │   README.md               (sa page d'accueil)
        |   readme-stack.md         (une page)
        |   contribuer.md           (une page)
        |   contribuer-howto.md     (une page)
        │   ...
        │
        autre-guide...
        │   README.md
        │   ...
```

## Convention de nommage

Par convention il est définit :

- partie : le guide dans son ensemble ;
- chapitres : un groupe de pages d'une partie ;
- sections : une page au sein d'un chapitre ;
- articles : une partie d'une section définit par un titre de niveau 1
  ou 2.

Ainsi, sur la page que vous consultez actuellement :

- partie : nous sommes dans la partie "a-propos"
- chapitres : "A propos", "Contribuer", "Aide et exemples"...
- sections du chapitre "Contribuer" : "Comment ?", "En avant"...
- articles de la section "Comment ?" : "Git", "Arborescence des guides
  YULPA", "Conventions de nommages", "Ajouter un guide"...

```
a-propos                                  PARTIE
  |- A propos                             CHAPITRE
  |- Contribuer                           CHAPITRE
  |  - Comment ?                          Section
  |  - En avant !                         Section
  |     - Comment ?                       Article
  |     - Git                             Article
  |     - Arborescence des guides YULPA   Article
  |     - Conventions de nommages         Article
  |     - Ajouter un guide                Article
  |          
  |- Aide et exemples                     CHAPITRE
```

Ce qui donnera dans le système de fichiers :

```
project
│   ...
└───a-propos
    │   README.md                 page accueil de la PARTIE (contenant le CHAPITRE  "A propos")
    │   contribuer.md             page CHAPITRE "Contribuer" contenant 
    |   dist                (ce dossier est exclu, il comprends la documentation après build)
    │   public              (pour les icones et images de base)
    │   styles              (des modifications du thème utilisé)
    │   yulpa_i18n          (les fichiers de langues)
    │   ...
    │
    a-propos                    (un dossier de guides)
    |   images                  (les images pour ce guide)
    │   README.md               (sa page d'accueil)
    |   readme-stack.md         (une page)
    |   contribuer.md           (une page)
    |   contribuer-howto.md     (une page)
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

Le titre principal par défaut (dans le menu de gauche appelé sideBar)
sera le nom du répertoire, transformé en "titlecase".

Pour ajouter des pages au guide, il suffit d'ajouter des fichiers `.md`
dans le répertoire précédemment créé, par exemple `comptes-emails.md`.
Les titres de ces fichiers définissent les titres des chapitres.

Les chapitres apparaissent par ordre alphabétique dans la sideBar.

Il est possible de regrouper plusieurs chapitres en un chapitre dans la
sideBar. Dans ce cas le nom de ces fichiers doivent être préfixé par le
nom du chapitre. Par exemple, voici deux chapitre avec chacun deux pages
:

```
        │   README.md               (sa page d'accueil)
        |   readme-stack.md         (un chapitre)
        |   contribuer.md           (un chapitre)
        |   contribuer-howto.md     (un autre)
```

Plus d'informations sur la page : xxxxxxx

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
        |   titre-chapitre-xxx.md   (un chapitre)
        |   titre-chapitre-xxx.md   (...)
        │   ...
```

### Le menu du haut (navbar)

Il vous faut modifier le fichier : `docs/.vuepress/yulpa_i18n/nav/fr.js`

Nous travaillons à rendre cela dynamique et à permettre
l'internationalisation.
