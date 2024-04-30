#Écrire un programme qui demande à l'utilisateur d'entrer une année et
#utilise des structures conditionnelles pour déterminer si l'année est
#bissextile. Une année est bissextile si elle est divisible par 4, mais
#pas par 100, ou si elle est divisible par 400. Afficher si l'année est
#bissextile ou non.

# Creation de la variable annees
annee= int(input("Saissiez une année : "))
#Vérifier si l'année est bissextile en utilisant des structures conditionnelles
if (annee % 4 == 0 and annee % 100 != 0) or (annee % 400 == 0):
    print(annee, "est une année bissextile.")
else:
        print(annee, "n'est pas une année bissextile")


