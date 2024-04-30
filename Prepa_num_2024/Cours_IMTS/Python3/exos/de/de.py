#Simuler 1000 fois, le lancé d'un dé a 6 faces, combien de fois un le nombre 2 sortira t'il ?
import random

# Nombre de simulations
nombre_simulations = 1000

# Initialisation du compteur pour le nombre de fois où le dé affiche 2
nombre_deux = 0

# Simulation
for _ in range(nombre_simulations):
    # Lancer le dé
    resultat_lance = random.randint(1, 6)

    # Vérifier si le résultat est égal à 2
    if resultat_lance == 2:
        nombre_deux += 1

# Affichage du résultat
print("Nombre de fois où le nombre 2 est sorti :", nombre_deux)
