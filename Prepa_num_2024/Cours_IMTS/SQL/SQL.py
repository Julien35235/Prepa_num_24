import sqlite3

# Liste des noms de bases de données
databases = ['Bibliotheque', 'Business', 'Concours', 'Drole', 'Entreprises', 'RESTAURANTS']

# Boucle while pour parcourir chaque base de données
index = 0
while index < len(databases):
    database_name = databases[index]
    print(f"\n-- Base de données '{database_name}' --")
    
    # Connexion à la base de données
    conn = sqlite3.connect(f'{database_name.lower()}.db')
    c = conn.cursor()

    # Requêtes SQL spécifiques à la base de données actuelle
    if database_name == 'Bibliotheque':
        c.execute("SELECT * FROM Livres")
        livres = c.fetchall()
        print("Livres disponibles:")
        for livre in livres:
            print(livre)
    else:
        # Exemple de requête générique pour les autres bases de données
        c.execute("SELECT * FROM TableNom WHERE condition=?", (valeur,))
        resultats = c.fetchall()
        print("Résultats:")
        for resultat in resultats:
            print(resultat)

    # Fermeture de la connexion
    conn.close()
    
    # Passage à la base de données suivante
    index += 1

