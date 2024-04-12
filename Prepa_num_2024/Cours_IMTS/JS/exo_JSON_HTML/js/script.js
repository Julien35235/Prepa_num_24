//alert('hop');
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

  // 1) Affichez dans la balise h1 la valeur de squadName 
  // 2) contenu la valeur de squadName 

  /** document.createElement('h1');
  let Myh1=document.querySelector('h1');
  Myh1.textContent=heroes.squadName;
  Myh1.appendChild('body');
*/

  // Corigé de Pierre Allée 
  // Cibler ma balise header
  let myHeader=document.querySelector('header');
  // Créer un élément h1
  let myH1=document.createElement('h1');
  // J'ajoute le contenu
  myH1.textContent=heroes.squadName;
  // j'ajoute mon h1 dans mon header
  myHeader.appendChild(myH1);

  /**
   * 2) toujours dans la balise header, ajoutez la balise p
   * avec comme contenu, la valeur de hometown plus celle formed
   */
  // Cibler la balise <header>

  // Correction de Pierre Allée
  let myPHeader=document.createElement('p');
  myPHeader.textContent=`Hometown : ${heroes.homeTown} || Formed : ${heroes.formed}`;
  myHeader.appendChild(myPHeader);