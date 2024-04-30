# Demander à l'utilisateur la valeur pour laquelle il veut la table de multiplication
nombres =int(input("Entrez un nombre pour afficher sa table de multiplication : "))

# Utiliser une boucle for pour générer la table de multiplication
for i in range(1,10): # range(1, 11) génère les nombres de 1 à 10
    print(nombres, "x", i, "=", nombres * i)