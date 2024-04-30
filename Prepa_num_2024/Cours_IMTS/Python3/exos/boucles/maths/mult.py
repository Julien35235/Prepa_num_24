# Demander à l'utilisateur la valeur pour laquelle il veut la table de multiplication
nombres =int(input("Entrez un nombre pour afficher sa table de multiplication : "))

i = 1

while i <10:
    print(nombres, "x", i, "=", nombres * i)
    i +=1

