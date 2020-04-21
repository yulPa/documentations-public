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
project/
│   .git/
│   .github/
│   .gitignore
│   README.md                   (page accueil dépôt GIT)
│   nodes_modules/
│   packages.json
│   yarn.lock  
│
└───docs
    │   README.md               (page accueil des guides)
    └───.vuepress               (gestion VuePress)
        │   components/         (pour les composants additionnels)
        |   dist/               (ce dossier est exclu, il comprends la documentation après build)
        │   public/             (pour les icones et images de base)
        │   styles/             (des modifications du thème utilisé)
        │   yulpa_i18n/         (les fichiers de langues)
        │   ...
        │
        a-propos                (un dossier de guides)
        |   images/             (les images pour ce guide)
        │   README.md           (sa page d'accueil)
        autre-guide...
        │   README.md
        │   ...
```

## Conventions

### Convention de nommage

Par convention il est définit :

- partie : le guide dans son ensemble ;
- chapitre : un groupe de pages d'une *partie* ;
- section : une page au sein d'un *chapitre* ;
- article : une partie d'une *section* définit par un titre de niveau 2
  ;
- paragraphe : une partie d'un *article* définit par un titre de niveau
  3 ou 4.

!!! info Information
Les titres de niveau 3 et 4 ne sont pas présent
dans le menu latéral.

Les titres de niveau 4 ne sont pas présent dans les tables des matières
en début de *section*.
!!!

Ainsi, sur la page que vous consultez actuellement :

- partie : nous sommes dans la *partie* "a-propos"
- chapitres : "A propos", "Contribuer", "Aide et exemples"...
- sections du *chapitre* "Contribuer" : "Comment ?", "En avant !"...
- articles de la *section* "En avant !" : "Git", "Arborescence des
  guides YULPA", "Conventions", "Ajouter un guide", "Les menus"...

Le menu sera :

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
  |     - Les menus                       Article
  |     - ...                             Article
  |          
  |- Aide et exemples                     CHAPITRE
```

### Convention d'arborescence

Le dossier **doit** porter pour nom, le nom de votre *partie*.

Le premier fichier est **obligatoirement** le fichier `README.md

Chaque *section* **est** un fichier.

Tous les fichiers *section* d'un même *chapitre* **sont préfixés** du
nom du *chapitre*.

Un fichier **peut comporter** autant d'*articles* que vous le voulez.
Nous déconseillons cependant des pages trop longues pour le lecteur.

Les images d'une *partie* sont stockées dans un sous-dossier `images`.

Ce qui donnera dans le système de fichiers :

```
project/
│   ...
└───a-propos/
    |   images/                   les images de cette PARTIE
    │   README.md                 page accueil de la PARTIE (contenant le CHAPITRE  "A propos")
    │   contribuer.md             page CHAPITRE "Contribuer" contenant la section "Comment ?"
    │   contribuer-en-avant.md    page CHAPITRE "Contribuer" contenant la section "En avant !" et ses parties
    │   ...
```

## Ajouter un guide

Pour ajouter un guide, il suffit d'ajouter un répertoire dans le dossier
/docs (ce dernier se trouve à la racine du dépôt). Ce répertoire doit
contenir un fichier `README.md`.

!!! tip cp -R
On est sympa, vous pouvez simplement copier-coller le
dossier `yulpa-modele` qui contient le nécessaire pour une *partie*
complète.
Vous pouvez consulter le modèle ici : [http://localhost:8080/yulpa-modele/](http://localhost:8080/yulpa-modele/)
!!!

### Créer une section

!!! warning Attention
Cela ne s'applique pas aux fichiers `README.md`
!!!

Comme nous venons de le voir, une *section* est un fichier. Si vous
souhaitez que plusieurs *sections* soient regroupées en un *chapitre*
vous **devez** indiquer cela en début de fichier :

```
---
autoGroup-1: Contribuer
---
```

Tous les fichiers ne contenant pas cela seront considérés comme faisant
partie de la *section* de base à la suite du `README.md`

Il est **préférable** d'utiliser un `permalink` dans chaque fichier de
*section* afin d'obtenir des URLs propres et stables même en cas de
modifications, par exemple pour
`hebergements-mutualises/0-comptes-emails.md` :

```
---
permalink: /hebergements-mutualises/comptes-emails
---
```

Si le fichier porte exactement le même nom que le permalink, cela n'est
bien entendu pas nécessaire. Par exemple si le fichier se nomme
`comptes-emails.md`.

## Les menus

### Le menu du haut : navbar

Normalement vous n'avez pas à le modifier. Toutefois si besoin, il vous
faut modifier le fichier : `docs/.vuepress/yulpa_i18n/nav/fr.js`

Nous travaillons à rendre cela dynamique et à permettre
l'internationalisation.

### Le menu de gauche : sideBar

La `sideBar` sera automatiquement générée à partir du nom de votre
dossier et des noms des fichiers.

Comme nous l'avons dit, le *chapitre* prendra pour nom ce qui est
indiqué en tête de fichier avec le mot clé `autoGroup`.

Cependant le premier *chapitre* formé automatiquement grâce au fichier
`README.md` et aux fichiers sans `autoGroup` vont avoir comme *chapitre*
un nom généré automatiquement avec le nom du dossier de notre *partie*.

Le mappage *nom-du-dossier* -> *nom du chapitre* est effectué en
`titlecase`. Ainsi :

- iWal devient I Wal
- hebergements-mutualises devient Hebergements Mutualises
- hebergementsMutualises devient Hebergements Mutualises

Comme vous pouvez le voir cela ne correspond pas forcément à tous les
cas de figures. Si vous avez besoin de modifier cela, il faut effectuer
un mappage dans le fichier `docs/.vuepress/yulpa_i18n/sideBar/fr.js`

```
module.exports =
    {
        "iWal": "🎉 iWal 🎉",
        "hebergements-mutualises": "Hébergements mutualisés",
    }
```

Nous travaillons à rendre cela dynamique et à permettre
l'internationalisation.

Les *chapitres* et *sections* apparaissent par ordre alphabétique dans
la `sideBar`.

Si vous souhaitez modifier l'ordre, bien que peu conseillé, il faura
alors mettre une numérotation.

Les *sections* prennent pour nom ce qui est définit en titre de niveau 1 au début du fichier.

## Tables des matières

Si vous souhaitez une table des matières, il suffit d'indiquer à tout
moment :

```
[[toc]]
```

