// Voici le json qu'on récupère quand l'api à l'adresse :
// https://api.openweathermap.org/geo/1.0/direct?q=Dinard&limit=1&appid=43cceaf558b7f341b3ac4d5ca1175c8c

const json=[
    {
        "name":"Dinard",
        "local_names":{
            "br":"Dinarzh",
            "fr":"Dinard",
            "uk":"Дінар"
        },
        "lat":48.6320379,
        "lon":-2.0580178,
        "country":"FR",
        "state":"Brittany"
    }
];

// Pour afficher les coordonnées de la ville de Dinard telles qu'elles sont dans le json :
console.log(json[0].lat);
console.log(json[0].lon);