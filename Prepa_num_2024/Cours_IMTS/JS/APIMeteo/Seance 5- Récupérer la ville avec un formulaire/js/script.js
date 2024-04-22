/**
 * Récupérer la ville avec un formulaire,
 * Passer la ville en parametre de la fonction
 * qui envoie la requete à l'API
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

// on construit une fonction qui prendra 2 parametre :
// place, pour la ville
// limit, pour le nbr de retour

const getGeoLocFromPlaceName=(place,limit)=>{
    // on construit le début de la requete
    let myRequest=`${protocol}${endpoint}${routeGeoLoc}`;
    // on y ajoute le parametre place
    let qPlace=`q=${place}`;
    myRequest+=qPlace;
    // puis le parametre limit
    let qLimit=`&limit=${limit}`;
    myRequest+=qLimit;
    // puis l'apikey
    let qAPI=`&appid=${apikey}`;
    myRequest+=qAPI;

    fetch(myRequest)
        .then(
            response=>response.json()
        )
        .then(
            data=>console.log(data)
        )
        .catch(
            error=>console.log(error)
        );
}

// Le traitement du formulaire :
// 1) Récupérer l'ensemble de notre formulaire
const myForm=document.forms.cityForm;
// 2) Traiter l'événement submit
myForm.addEventListener('submit',(e)=>{
    // On empêche le comportement par défaut qui recharge la page
    e.preventDefault();
    // On récupère le contenu du champs city
    let place=myForm.city.value;
    // on vérifie qu'il n'est pas vide
    if(place!=''){
        // s'il n'est pas vide, on appelle la fonction getGeoLoc... en le mettant en paramètre
        getGeoLocFromPlaceName(place,1);
    }
});
