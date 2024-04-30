def verifier_entier():
    nombre = input("Entrez un nombre entier : ")
    if nombre.isdigit():
        print("Le nombre", nombre, "est un entier.")
    else:
        print("Erreur : Veuillez entrer un nombre entier valide.")

verifier_entier()




