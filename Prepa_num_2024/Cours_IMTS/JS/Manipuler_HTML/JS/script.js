// alert('hop');
/**
 * Manipuler HTML avec JavaScript
 * 1- document.querySelector
 * 2- document.querySelectorAll
 * 3- document.createElement()
 */

// document.querySelector

/**
 * La methode querySelector() de l'interface Document
 * reourne le premier Element dans le document 
 * correspondant au séleceur - ou le groupe de selecteurs - spécifié(s),
 * ou null si aucune correspondance n'est trouée 
 */

// 1er exemple : 
console.log(document.querySelector('h1'));
// =>  nous retourne toute la balise h1 et son contenu 

// 2eme exemple : 
console.log(document.querySelector('h1').textContent);
// => nous retourne uniquement le contenu de la balise h1

// 3eme exemple : modifications du textContent
document.querySelector('h1').textContent= 'Hello word';

// 4eme exemple : selectioner avec l'id 
document.querySelector('#texte').textContent='blablablablabla blablabla';

//5eme exemple : modifier son style 
document.querySelector('h1').style.color='#F00';
document.querySelector('h1').style.display='none';

// on peut stocker le resultat de querySelector dans une variable
let myH1=document.querySelector('h1');
myH1.style.display='block';
myH1.style.textDecoration='underline';

/**
 * document.querySelectorAll
 *  document.querySelectorAll de Element renvoies une NodeList statique 
 * représentant une liste des éléments des document qui correspondent
 * au groupe de sélecteurs spécifiés
 */

let mesParagraphes=document.querySelectorAll('p');
console.log(mesParagraphes);
for(let paragraphe of mesParagraphes){
    paragraphe.textContent+=' coucou';
    paragraphe.style.fontWeight='bold';
}





