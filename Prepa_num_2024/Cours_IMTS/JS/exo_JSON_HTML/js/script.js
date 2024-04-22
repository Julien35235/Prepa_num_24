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

  /**
   * 3) Faîtes une boucle vous permettant pour chaque membres de l'équipe :
   * - de créer une balise article dans la balise section déjà présente
   * - dans cette balise article : 
   *    - mettre dans h2 le nom du hero
   *    - mettre dans une balise p son identité secrete
   *    - mettre dans un autre p, son age
   *    - mettre un 3eme p avec écrit dedans "Superpouvoirs"
   *    - mettre une liste
   *        - mettre dans cette liste un li par superpouvoir, avec le nom du pouvoir
   */
  /**
   * // Cibler la balise <section> déjà présente
let section = document.querySelector('section');

// Boucle à travers chaque membre de l'équipe
heroes.members.forEach(member => {
    // Créer une balise <article>
    let article = document.createElement('article');

    // Créer une balise <h2> pour le nom du héros
    let h2 = document.createElement('h2');
    h2.textContent = member.name;

    // Créer une balise <p> pour l'identité secrète
    let secretIdentity = document.createElement('p');
    secretIdentity.textContent = "Identité secrète : " + member.secretIdentity;

    // Créer une balise <p> pour l'âge
    let age = document.createElement('p');
    age.textContent = "Âge : " + member.age;

    // Créer une balise <p> pour "Superpouvoirs"
    let superpowersTitle = document.createElement('p');
    superpowersTitle.textContent = "Superpouvoirs";

    // Créer une balise <ul> pour la liste des superpouvoirs
    let powersList = document.createElement('ul');

    // Boucle à travers chaque superpouvoir du membre
    member.powers.forEach(power => {
        // Créer une balise <li> pour chaque superpouvoir
        let powerItem = document.createElement('li');
        powerItem.textContent = power;
        // Ajouter le superpouvoir à la liste
        powersList.appendChild(powerItem);
    });

    // Ajouter tous les éléments créés à l'article
    article.appendChild(h2);
    article.appendChild(secretIdentity);
    article.appendChild(age);
    article.appendChild(superpowersTitle);
    article.appendChild(powersList);

    // Ajouter l'article à la balise <section>
    section.appendChild(article);
});
   */

// Avec la boucle for of
// Cibler la balise <section> déjà présente
let section = document.querySelector('section');

// Boucle à travers chaque membre de l'équipe
for (let member of heroes.members){
    // Créer une balise <article>
    let article = document.createElement('article');

    // Créer une balise <h2> pour le nom du héros
    let h2 = document.createElement('h2');
    h2.textContent = member.name;

    // Créer une balise <p> pour l'identité secrète
    let secretIdentity = document.createElement('p');
    secretIdentity.textContent = "Identité secrète : " + member.secretIdentity;

    // Créer une balise <p> pour l'âge
    let age = document.createElement('p');
    age.textContent = "Âge : " + member.age;

    // Créer une balise <p> pour "Superpouvoirs"
    let superpowersTitle = document.createElement('p');
    superpowersTitle.textContent = "Superpouvoirs";

    // Créer une balise <ul> pour la liste des superpouvoirs
    let powersList = document.createElement('ul');

    // Boucle à travers chaque superpouvoir du membre
    for (let power of member.powers){
        // Créer une balise <li> pour chaque superpouvoir
        let powerItem = document.createElement('li');
        powerItem.textContent = power;
        // Ajouter le superpouvoir à la liste
        powersList.appendChild(powerItem);
    }

    // Ajouter tous les éléments créés à l'article
    article.appendChild(h2);
    article.appendChild(secretIdentity);
    article.appendChild(age);
    article.appendChild(superpowersTitle);
    article.appendChild(powersList);

    // Ajouter l'article à la balise <section>
    section.appendChild(article);
}
// Fin de la boucle

/**
* Corrigé de Pierre 
* / je définit ma section
let mySection=document.querySelector('section');
for(let hero of heroes.members){
    // je crée la balise article
    let myArticle=document.createElement('article');
    // je crée la balise h2
    let myH2=document.createElement('h2');
    // je lui mets en contenu le nom du hero
    myH2.textContent=hero.name;

    // j'ajoute le h2 dans l'article
    myArticle.appendChild(myH2);
    // j'ajoute l'article dans la section
    mySection.appendChild(myArticle);
    // je crée un p pour l'identité secrete
    let pIdentity=document.createElement('p');
    // son contenu :
    pIdentity.textContent=hero.secretIdentity;
    // je l'ajoute dans l'article
    myArticle.appendChild(pIdentity);

    // j'ajoute un p pour l'age
    let pAge=document.createElement('p');
    // son contenu
    pAge.textContent=hero.age;
    // je l'ajoute à l'article
    myArticle.appendChild(pAge);

    // je crée un p Pouvoirs
    let pPouvoirs=document.createElement('p');
    // son contenu
    pPouvoirs.textContent='Pouvoirs :';
    // je l'ajoute à article
    myArticle.appendChild(pPouvoirs);

    // je crée une balise ul
    let myUl=document.createElement('ul');
    // je l'ajoute à l'article
    myArticle.appendChild(myUl);

    for (let power of hero.powers){
        // je crée une balise li
        let myLi=document.createElement('li');
        // son contenu
        myLi.textContent=power;
        //j'ajoute la li dans l'ul
        myUl.appendChild(myLi);
    }
}
*/