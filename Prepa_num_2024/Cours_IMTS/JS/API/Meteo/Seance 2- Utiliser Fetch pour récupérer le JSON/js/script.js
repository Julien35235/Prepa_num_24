/**
 * Utiliser fetch pour récupérer le json
 */

// la fonction fetch() prend 2 paramètres :
// 1- Une url
// 2- Un paramètre optionnel, si on utilise une autre méthode que GET

let myRequest='https://api.openweathermap.org/geo/1.0/direct?q=Dinard&limit=1&appid=43cceaf558b7f341b3ac4d5ca1175c8c';

fetch(myRequest)
    .then(
        // une fois que les données sont téléchargées, on les traite
        // 1ere chose à faire c'est les convertir en json
        reponse=>reponse.json()
    )
    .then(
        // une fois que nos données sont converties en json
        // on les affiche dans la console
        data=>{
            console.log(data);
            console.log(`lat : ${data[0].lat}`);
            console.log(`lon : ${data[0].lon}`);
        }
    )
    .catch(
        // Pour traiter les codes d'erreurs
        error=>console.log(error)
    );


    