DISCLAIMER : Ceci est un exercice. Toute ressemblance avec des personnes existantes est purement fortuite. 
DISCLAIMER 2 : Toute amélioration de l'application est la bienvenue

# Le frigo de Rémi - PARTIE 1 (déjà fait)

Comme tous les soirs Rémi ouvre son frigo et voit les bières qu'il possède (c'est l'index "/" de l'application). Il ne sait jamais quoi choisir pour se mettre une murge. On va donc l'aider.

## Exo 1
Il préfère la bière belge mais il est perdu dans le choix :

- avoir un select pour pouvoir filtrer par pays

## Exo 2
Il aimerait pouvoir avoir une page plus détaillée pour l'aider dans son choix : /biere/:id

- créer une nouvelle page lui permettant d'afficher le détail d'une bière en cliquant sur son nom et récupérer les informations via la route d'api /api/bieres/:id pour récupérer les données
- la page devra afficher le nom, le degrée d'alcool, l'origine et la description


# Le frigo de Rémi - PARTIE 2

## Exo 1

Pour s'assurer que le frigo de Rémi soit toujours opérationnel, son ami Théophile a commencé à mettre en place des tests unitaire. Il a mis un peu scotch et du fil mais le test failed et en plus il n'a pas fini de les écrire.
- Corriger le test KO
- Faire les tests pour couvrir les exos 1 et 2.

## Exo 2

Créer une mécanique permettant à Rémi de sortir les bières du frigo (équivalent à un panier de site ecommerce) : 
- Un bouton "prendre cette bière" doit l'ajouter dans un composant quelque part dans la page qui fera office de panier indiquant le nombre de bières ajoutées (ex : "Mon panier (2)")
- pouvoir afficher le panier dans un page dédié : /panier
- faire les tests associés

---

## Ressources API :
- listes de bières : /api/bieres
- détail d'une bières : /api/biere/:id


