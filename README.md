DISCLAIMER : Ceci est un exercice. Toute ressemblance avec des personnes existantes est purement fortuite. 
DISCLAIMER 2 : Toute amélioration de l'application est la bienvenue

# Le frigo de Rémi

Comme tous les soirs Rémi ouvre son frigo et voit les bières qu'il possède (c'est l'index "/" de l'application). Il ne sait jamais quoi choisir pour se mettre une murge. On va donc l'aider.

## Exo 1
Il préfère la bière belge mais il est perdu dans le choix :

- avoir un select pour pouvoir filtrer par pays

## Exo 2
Il aimerait pouvoir avoir une page plus détaillée pour l'aider dans son choix : /biere/:id

- créer une nouvelle page lui permettant d'afficher le détail d'une bière en cliquant sur son nom et récupérer les informations via la route d'api /api/bieres/:id pour récupérer les données
- la page devra afficher le nom, le degrée d'alcool, l'origine et la description

## Exo 3
Créer une mécanique lui permettant de sortir les bières du frigo (équivalent à un panier de site ecommerce) : 
- Un bouton "prendre cette bière" doit l'ajouter dans un composant quelque part dans la page qui fera office de panier indiquant le nombre de bières ajoutées (ex : "Mon panier (2)")
- pouvoir afficher le panier dans un page dédié : /panier

---

## Ressources API :
- listes de bières : /api/bieres
- détail d'une bières : /api/biere/:id


