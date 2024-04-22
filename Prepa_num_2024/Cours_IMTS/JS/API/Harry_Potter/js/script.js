/**
 * Consigne 1 :
 * - Affichez dans la console le json renvoyé par l'API
 * à l'adresse : https://hp-api.onrender.com/api/characters/house/gryffindor
 */

let myRequest='https://hp-api.onrender.com/api/characters/house/gryffindor';

fetch(myRequest)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Affiche le JSON dans la console
    })
    .catch(error => {
        console.error('Une erreur est produite :', error);
    });
