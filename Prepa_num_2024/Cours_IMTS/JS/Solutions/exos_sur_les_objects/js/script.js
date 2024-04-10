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
// Corrgé de Pierre Castrec 
let total =0;
for(let item of inventaire){
    console.log(item.produit + ' de prix ', + item.prix + 'quantité ' + item.quantite)
    console.log(item.prix * item.quantite + 'de '+ item.produit);
    total+=item.prix * item.quantite
}

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
  //Corrgé de Pierre Castrec 
 for(let hero of heroes.members) {
    let powers = '';
    for(let power of hero.powers) {
        powers+=power + ', '
    }
    console.log('Name: ' + hero.name + ' ' + ', Identite: ' + hero.secretIdentity + ', powers: '+ powers)
}

// Pokemon Miaou 

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


 // Corrigé de Pierre Castrec 
 // pour l'exercices de Pokémon
 // Afficher le nom de l'évolution ainsi que son id
 console.log(Miaous.apiEvolutions[0].name + ', ' + Miaous.apiEvolutions[0].pokedexId);
 // Afficher le nombre d'element totale (apiResistances) du pokemon ainsi que leurs noms
 console.log(Miaous.apiResistances.length);
 for(let res of Miaous.apiResistances) {
     console.log(res.name)
 }
 // Afficher les HP du pokemon
 console.log(Miaous.stats.HP);
 // Plus compliqué
 // Afficher le nom des faiblesses du pokémon avec une boucle
 for(let res of Miaous.apiResistances) {
     if(res.damage_multiplier == 2)
         console.log(res.name)
 }
 
