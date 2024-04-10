// Un objet 
let stagiaire={
    prenom:'admin',
    nom:'Test',
    age:35
};
console.log(stagiaire.prenom+ ' '+stagiaire.nom+' '+stagiaire.age);

let listesStagiaire=[
{
    prenom:'Root',
    nom:'Dupont',
    age:45
},
{
    prenom:'Adminstrateur',
    nom:'Duchaines',
    age:25
},
{
    prenom:'Michou',
    nom:'Dupont',
    age:15
}

];
/**
 * Exercices ecrivez une boucle 
 * pour récupérer tous les prénoms qui sont dans le tableau
 * listeStagiaire
 */

for(let i=0;i<listesStagiaire.length;i++){
    console.log(listesStagiaire[i].prenom);
}

for(let personn of listesStagiaire){
    console.log(personn.prenom);
}

let inventaire = [
    {
        produit: "pommes",
        prix: 2.50,
        quantite: 50
    },
    {
        produit: "bananes",
        prix: 1.80,
        quantite: 30
    },
    {
        produit: "oranges",
        prix: 3.00,
        quantite: 40
    }
];


// Voici un inventaire de produit, afficher les détails de chaque produit
//for(produits of inventaire){
   // console.log(nom);
//}
//let prixTotal=0;
//for(let i=0;i<prixTotal.length;i++){
//console.log(prixTotal[i].quantite);
//}

// Corrgé de Pierre Castrec 
let total =0;
for(let item of inventaire){
    console.log(item.produit + ' de prix ', + item.prix + 'quantité ' + item.quantite)
    console.log(item.prix * item.quantite + 'de '+ item.produit);
    total+=item.prix * item.quantite
}
console.log(total);
/**
 * Corrections de l'exo 2
 */

const librairie = {
    "nom": "Bibliothèque municipale",
    "adresse": "123 Rue de la Bibliothèque, Ville",
    "livres": [
        {
            "titre": "Le Seigneur des Anneaux",
            "auteur": "J.R.R. Tolkien",
            "annee_publication": 1954,
            "genre": "Fantasy",
            "disponible": true
        },
        {
            "titre": "Harry Potter à l'école des sorciers",
            "auteur": "J.K. Rowling",
            "annee_publication": 1997,
            "genre": "Fantasy",
            "disponible": false
        },
        {
            "titre": "1984",
            "auteur": "George Orwell",
            "annee_publication": 1949,
            "genre": "Dystopie",
            "disponible": true
        }
    ]
}

//for(let livres of librairie.livres) {
  //  console.log(livres.disponible);
//}

let nbLivresDisponibles = 0;
for(let livres of librairie.livres) {
    console.log(livres.disponible);
    if(livres.disponible && livres.genre == "Fantasy"){
    nbLivresDisponibles++
    }
}
console.log('Nombres de livres disponibles :' + nbLivresDisponibles);
// Changements de la disponibilité de Harry Potter 
librairie.livres[1].disponible = true
console.log(librairie.livres[1]);

// Ajout d'une propriété pays 
librairie.pays = 'France'
console.log(librairie);

librairie.villes ='Bordeaux'
console.log(librairie);

/**
 * Exercices 3 
 */
const heroes = {
    "squadName" : "Super Hero Squad",
    "homeTown" : "Metro City",
    "formed" : 2016,
    "secretBase" : "Super tower",
    "active" : true,
    "members" : [
      {
        "name" : "Molecule Man",
        "age" : 29,
        "secretIdentity" : "Dan Jukes",
        "powers" : [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name" : "Madame Uppercut",
        "age" : 39,
        "secretIdentity" : "Jane Wilson",
        "powers" : [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name" : "Eternal Flame",
        "age" : 1000000,
        "secretIdentity" : "Unknown",
        "powers" : [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
// Pour chaque super heros afficher son nom, son identité secrete et la liste de ses pouvoirs
for(details of heroes.members){
    listPower= details.powers
    console.log(details.name+' '+details.age+' '+details.secretIdentity+' '+details.powers+' ');
}

/**
   * Pokemon Miaous
   */
const Miaous = {
    "id": 52,
    "pokedexId": 52,
    "name": "Miaouss",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    "slug": "Miaouss",
    "stats": {
      "HP": 40,
      "attack": 45,
      "defense": 35,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 90
    },
    "apiTypes": [
      {
        "name": "Normal",
        "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
      }
    ],
    "apiGeneration": 1,
    "apiResistances": [
      {
        "name": "Normal",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Combat",
        "damage_multiplier": 2,
        "damage_relation": "vulnerable"
      },
      {
        "name": "Vol",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Poison",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Sol",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Roche",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Insecte",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Spectre",
        "damage_multiplier": 0,
        "damage_relation": "immune"
      },
      {
        "name": "Acier",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Feu",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Eau",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Plante",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Électrik",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Psy",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Glace",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Dragon",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Ténèbres",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      },
      {
        "name": "Fée",
        "damage_multiplier": 1,
        "damage_relation": "neutral"
      }
    ],
    "resistanceModifyingAbilitiesForApi": [],
    "apiEvolutions": [
      {
        "name": "Persian",
        "pokedexId": 53
      },
      {
        "name": "Berserkatt",
        "pokedexId": 863
      }
    ],
    "apiPreEvolution": "none",
    "apiResistancesWithAbilities": []
  }
  console.log(Miaous);
// // Afficher le nom de l'évolution ainsi que son id
console.log("Nom de l'évolution:", Miaous.apiEvolutions[1].name);
console.log("ID de l'évolution:", Miaous.apiEvolutions[1].id);

// Afficher le nombre de resistance du pokemon ainsi que leurs noms 
console.log("Nombre de resistance:", Miaous.apiResistances[1].name);
// Afficher les HP du pokemonconsole.log("HP:", Miaous.apiEvolutions[1].hp);
console.log("HP:", Miaous.apiEvolutions[1].hp);

console.log("Nombre de résistances:", Miaous.apiResistances.length);
console.log("Résistances du Pokémon:");

for (let i = 0; i < Miaous.apiResistances.length; i++) {
    console.log("- " + Miaous.apiResistances[i].name);
}
for(let i = 0; i < Miaous.apiEvolutions.name; i++){
    console.log("+ " + Miaous.apiEvolutions[i].name);
}

// Afficher le nombre de résistances du Pokémon
console.log("Nombre de résistances:", Miaous.apiResistances.length);
console.log("Résistances du Pokémon:");

// Afficher les noms des résistances à l'aide d'une boucle for...of
for (const resistance of Miaous.apiResistances) {
    console.log("- " + resistance.name);
}

// Afficher les noms des évolutions à l'aide d'une boucle for...of
console.log("Évolutions du Pokémon:");
for (const evolution of Miaous.apiEvolutions) {
    console.log("+ " + evolution.name);
}