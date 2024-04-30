# Demander à l'utilisateur la valeur pour laquelle il veut la table de multiplication
nombres =int(input("Entrez un nombre pour afficher sa table de multiplication : "))

# Utiliser une boucle for pour générer la table de multiplication
for i in range(1,5433): # range(1, 54334556666667775) génère les nombres de 1 à 54334556666667775
    print(nombres, "x", i, "=", nombres * i)