/**
 * Construire une requête dynamique
 */
// découpons l'url ci dessous en variable :
//https://api.openweathermap.org/geo/1.0/direct?q=Dinard&limit=1&appid=43cceaf558b7f341b3ac4d5ca1175c8c

// Le protocole
let protocole='https://';

// Le end point (l'adresse de l'API)
let endpoint='api.openweathermap.org/';

// La route (le service particulier de cette API qu'on va interroger):
// une métaphore pour comprendre : 
// le end point c'est la base de données,
// la route, c'est la table.
// C'est pas tout à fait exact, mais c'est pour comprendre

let routeGeoLoc='geo/1.0/direct?';

// La clé API (mon identifiant sur cette API pour avoir le droit de l'utiliser):
const apikey='43cceaf558b7f341b3ac4d5ca1175c8c';


// Les paramètres de l'URL : Query Parameters
// La ville :
let place='q=Rennes';
// La limite (nombre de résultats à retourner)
let limit='limit=1';
// appid
const appid=`appid=${apikey}`;


// On construit l'url de la requete :
let myRequest=`${protocole}${endpoint}${routeGeoLoc}${place}&${limit}&${appid}`
console.log(myRequest);



// On peut faire notre fetch()
fetch(myRequest)
    // quand les données sont téléchargées, on le transforme en json
    .then(
        reponse=>reponse.json()
    )
    // une fois qu'elle sont en json, on les traite
    .then(
        data=>{
            console.log(data);
        }
    )
    // un catch s'il y a des erreurs renvoyées par l'api
    .catch(
        error=>console.log(error)
    );

