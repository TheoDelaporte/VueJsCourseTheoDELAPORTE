# VueJsCourseTheoDELAPORTE
- Dossier vue contient la partie 2 de la vidéo avec le code qui a été fait 
- Fichier directives-methodes-events.html contient le code commenté et expliqué de la première partie
- Ce readme est une description d'ensemble de Vue.js en lien avec la vidéo et ce que j'ai pu en comprendre

# Vue.js
Qu'est-ce que vue.js ?
Vue.js est un framework pour créer des applications et des sites Web. Le framework fournit de nombreux outils pour créer des sites Web et des applications rapides et dynamiques. Vue.js est un dom virtuel. Virtual Dom crée essentiellement des applications Web JavaScript. Vue.js est un framework très léger (10k gzip). Vue.js est un framework progressif car vous pouvez l'utiliser n'importe où, vous pouvez également ajouter de l'interactivité et l'utiliser comme une sorte d'alternative à jQuery.Il est aussi flexible pour permettre de choisir les outils et autres bibliothèques qu’on veut implémenter ou on peut utiliser la vue fournit par défaut (Vue Ecosystem). 
Vue.js permet également de mettre à jour les anciennes applications page par page.
v-for : créer une boucle
v-model : Deux conditions : un champ nommé "value" qui doit émettre un événement d'entrée avec la valeur attendue.
Vue.component() : créer des composants (données, méthodes, app.component) directement dans le DOM
Méthode : gestion des incidents
v-on : écoute les événements DOM pour exécuter JavaScript lorsque ces événements se produisent.
v-if : condition
Modèle : affichage du contenu
App.mount : comme return en php, sans rien ne s'affiche
node.js
Package.json : contient des métadonnées liées au projet pour la gestion des dépendances, des scripts, des versions de projet, etc. Pour le créer, il existe deux façons d'utiliser npm depuis le terminal ou yarn init depuis le terminal.
Il y a deux dossiers un public et un src le public peut contenir tout les ressources statiques, images, css et le dossier src contient les contrôleurs, la vue
Npm start permet de lancer le framework node
 

# Démystifier les composants interne de vue.js

Le composant aura un template qui devra passer par différentes étapes avant d’apparaître dans le navigateur.
Le compilateur Vue permet de lire le modèle d’un composant et le fait passer par des étapes telles que l’analyse, l’optimisation, le codegen et crée finalement une fonction de rendu. Cette fonction de rendu est responsale de la création d’un Vnode qui est utilisé par le processus de correctif du DOM virtuel pour créer le DOM réel.
![img template](https://user-images.githubusercontent.com/62428919/156164097-6ca10626-1e90-4d95-ba32-8c9e40bfceb9.png)

Etape d’analyse : analyse les directives similaires aux éléments et rend les directives structurelles telles que v-for, v-if sous forme de paires clé-valeur. La directif v-if sera poussée dans attrsMap en tant qu’objet dynamique
Etape d’optimisation : permet de ne pas créer de nouveaux nœuds à chaque nouveau rendu mais ces nœuds seront complètement ignorés lors du processus de correction du DOM virtuel
Etape codeGen: création du rendu 
Observateur : analyse une expression, collecte les abonnées et déclenche un rappel lorsque la valeur de l’expression change pour chaque composant
![Processus de correction](https://user-images.githubusercontent.com/62428919/156164439-07dbab43-5e88-424f-b504-f5e8437feca6.png)

Processus de correction : interagit avec le DOM réel à l’aide du DOM virtuel 


