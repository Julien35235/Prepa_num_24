/**
 * Faire l'appel dans une fonction
 */


// le protocole
const protocol='https://';

// Le end point (l'adresse de l'API)
const endpoint='api.openweathermap.org/';

// Les routes :
// La route pour le service de geolocalisation :
const routeGeoLoc='geo/1.0/direct?';

// La clé API :
const apikey='43cceaf558b7f341b3ac4d5ca1175c8c';


// on construit une fonction qui prendra 2 parametres :
// place, pour la ville
// limit, pour le nbr de retour

/**
 * @param {string} place
 * @param {number} limit
 */

const getGeoLocFromPlaceName=(place,limit)=>{
    // on construire la requête :
    let myRequest=`${protocol}${endpoint}${routeGeoLoc}q=${place}&limit=${limit}&appid=${apikey}`;
    // le fetch
    fetch(myRequest)
        // on attend le téléchargement complet des données, puis on les transforme en json
        .then(
            reponse=>reponse.json()
        )
        // ensuite on traite les données :
        .then(
            data=>console.log(data)
        )
        // on intercepte et on traite les erreurs
        .catch(
            error=>console.log(error)
        )
}
// on appelle la fonction
getGeoLocFromPlaceName('Domagné',1);
getGeoLocFromPlaceName('Pekin',1);