# Xerorama

## Description du projet

Xerorama est un site permettant de mettre en relation des tuteurs et des apprenants

## Installation

1/ Installer Node.js, Next et Git <br />
suivre ce tutoriel [ici](https://nextjs.org/docs)

2/ Récupérer le code source (sur votre machine) <br />
git clone https://github.com/IssaDia/Xerorama.git

3/ Installer et créer un compte Contentful <br />
suivre ce tutoriel [ici](https://www.contentful.com/r/knowledgebase/gatsbyjs-and-contentful-in-five-minutes/)

5/ Renommer le fichier .env.exemple en .env et compléter le fichier avec vos identifiants <br />

6/ Accéder à l'application <br />

Une fois le dépôt cloné, accédez à la ligne de commande directement par le terminal ou en ouvrant le terminal dans votre éditeur de code. Vous devriez vous retrouver dans le dossier 'root' (celui où vous pouvez trouver les fichiers **package.json** et **package-lock.json**). Une fois là, installez toutes les dépendances (plugins) que le projet utilise. Pour ce faire, lancez **npm install** et soyez prêt à attendre quelques minutes. Enfin, lancez **gatsby develop** puis allez dans votre navigateur web de choix et ouvrez l’url localhost:8000. Vous devriez y voir une version de travail du projet.

### Travailler sur le code

Notez que cette partie suppose que vous avez une compréhension de base de la terminologie git. Si vous ne l’avez pas encore fait, c’est le moment de lire :).

### Conditions préalables

Le code sur lequel vous allez travailler est écrit en React (un framework JavaScript) et en utilisant Gatsby un framework surcouche de React qui facilite la création de sites web (ou d’applications de bureau) qui fonctionnent. Assurez-vous de lire rapidement la documentation pour vous familiariser avec les deux cadres. Mais ne vous inquiétez pas trop de tout lire. Il suffit de plonger dans le code et apprendre en faisant. Vous ne pouvez rien casser et même si vous l’avez fait, il est facile d’annuler l’erreur.

### Changement de code

Idéalement, vous ne voudrez pas travailler sur la branche **master**. Créez plutôt une branche et travaillez dessus. Ici, l'interface GitHub pourra vous aider à nouveau. Le nom que vous donnez à cette branche n’est pas très important, mais habituellement il aide à lui donner un nom avec ce que vous prévoyez de faire par ex. 'add-sidebar' (ainsi appelé 'feature branch').

Quand vous êtes sur cette branche, vous pouvez jouer avec le code autant que vous voulez. Ne vous inquiétez pas de casser des choses. Lancez la commande **npm run checks** avant de faire un commit qui vous avertira si vous avez cassé des choses. Lorsque vous faites des commits, essayez de les garder aussi petits que possible. Les changements d’une ligne sont des commits valides ! Si vous utilisez 'and' dans un message de validation, le commit est probablement trop gros.

Et n’oubliez pas de pousser sur GitHub de temps en temps. Vous ne voulez pas que votre code se perde si votre machine est hors service

### Création d’un PR

Si vous pensez en avoir fini avec la fonction sur laquelle vous travaillez, vous voudrez créer **un pull request** (PR). Cela vous permettra de fusionner les modifications dans la branche master. Allez dans le dépôt sur GitHub, allez dans Pull Requests et le site Web devrait vous guider dans le processus.

## Features

- **page d'accueil** - page d'accueil classique de blog comprenant une introduction au contenu du blog, une présentation de l'auteur principal et un widget comprenant les derniers articles parus
- **choix d'un théme** - page comprenant une liste des différents thémes abordés dans le blog
- **choix d'un articles** - page comprenant une liste des articles selon le théme choisi
- **affichage d'un article** - page comprenant un article avec la possibilité de choisir un article précédent ou suivant dans le même théme
- **fonction recherche** - possibilité de faire une recherche d'une liste d'articles qui comportent le mot recherché par l'intérmédiiare de la barre de recherche
- **formulaire de contact** - possibilité d'envoi d'un message par l'utilisateur que l'on reçoit dans la boîte mail parametrée au préalable

## Credits

projet supervisé par [Rayed Benbrahim](https://www.linkedin.com/in/rayedbenbrahim/)
