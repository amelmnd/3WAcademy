## Énoncé

L'utilisateur saisit un montant HT et s'il le souhaite une remise, le résultat TTC s'affiche en HTML.

## Détails

* L'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
* La saisie de la remise se fait en pourcentage, un nombre à virgule donc, et elle s'applique sur le montant HT autrement il y a fraude à la TVA ;-)
* Si une remise est appliquée, il faut à la fin réafficher le pourcentage de remise
* S'il n'y a pas de remise il faut à la fin afficher "Aucune remise n'a été appliquée"
* Il faut répéter le moins de code possible, notamment **il ne faut pas répéter le calcul du montant TTC final**.