// Définition de l'URL de l'API
const myRequest = 'https://thronesapi.com/api/v2/Characters';

// Appel à l'API avec fetch
fetch(myRequest)
    .then(
        // Traitement de la réponse au format JSON
        response => response.json()
    )
    .then(
        // Utilisation des données obtenues pour afficher une liste de personnages
        data => getCharacterList(data)
    )
    .catch(
        // Gestion des erreurs
        error => console.log(error)
    );


 //Fonction pour afficher une liste de personnages aléatoire
const getCharacterList = (charactersList) => {
    // Générer un index aléatoire pour choisir un personnage aléatoire dans la liste
    let indexRandom = Math.floor(Math.random() * (charactersList.length));
    // Afficher le nom complet du personnage aléatoire dans la console
    console.log(charactersList[indexRandom].fullName);
    
    // Sélectionner le corps du document HTML
    const body = document.querySelector('body');
    // Créer un élément paragraphe pour afficher le nom du personnage
    const myP = document.createElement('p');
    // Ajouter le texte avec le nom du personnage dans le paragraphe
    myP.innerHTML = `Tu est ${charactersList[indexRandom].fullName}`;
    // Ajouter le paragraphe au corps du document
    body.appendChild(myP);
    
    // Créer un élément image pour afficher l'image du personnage
    const myImg = document.createElement('img');
    // Définir la source de l'image avec l'URL de l'image du personnage
    myImg.src = charactersList[indexRandom].imageUrl;
    // Ajouter l'image au corps du document
    body.appendChild(myImg);
} 



