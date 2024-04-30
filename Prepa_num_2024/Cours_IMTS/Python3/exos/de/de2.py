# Je lance 1000x 2 dé de six faces, combien de fois un total égal a 2 sortira t'il
import random

# Initialisation du compteur
total_deux = 0

nombres_lancements = 1000

# Simulation des lancers de dés

for _ in range(nombres_lancements):
    # Lancer deux dés
    de1 = random.randint(1,6)
    de2 = random.randint(1, 6)

    # Vérifier si la somme est égale à 2

    if de1 + de2 ==2:
        total_deux +=1

# Afficher le résultat
print("Le total 2 est sorti", total_deux, "fois sur", nombres_lancements, "lancers")
