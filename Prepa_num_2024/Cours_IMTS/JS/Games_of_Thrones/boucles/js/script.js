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

// Fonction pour afficher une liste de personnages aléatoire avec images
const getCharacterList = (charactersList) => {
    // Sélectionner le corps du document HTML
    const body = document.querySelector('body');

    // Boucle pour afficher plusieurs images
    for (let i = 0; i < charactersList.length; i++) {
        // Créer un élément image pour afficher l'image du personnage
        const myImg = document.createElement('img');
        // Définir la source de l'image avec l'URL de l'image du personnage
        myImg.src = charactersList[i].imageUrl;
        // Ajouter une classe pour un style éventuel
        myImg.classList.add('character-image');
        // Ajouter l'image au corps du document
        body.appendChild(myImg);
    }
}