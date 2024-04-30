#Classer des températures : Demander à l'utilisateur
#d'entrer une température en degrés Celsius. Utiliser des structures
#conditionnelles pour afficher si la température est "froide", "tempérée"
#ou "chaude" (ex. : <10° pour "froide", entre 10° et 25° pour
#"tempérée", >25° pour "chaude").

# Creation de la variable temperatures
temperatures = int(input("Saissiez la temperatures: "))
#Vérifier si la temperature en degrés Celsius

if temperatures < 10:
    print("froid")

elif temperatures > 10 and temperatures <=25:
    print("temprée")
else:
    print("Chaude")


