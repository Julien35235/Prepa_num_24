//alert('j\'ai faim')

/**
 * Les boucles
 * 1) la boucle for
 */

// pour comprendre la boucle for, un petit point de notation :
//let i=0;
// pour ajouter 1 à i :
//i=i+1;
// on peut aussi l'écrire comme ça :
//i+=1;
// On peut encore l'écrire comme ça :
//i++;

// une boucle for qui va compter jusqu'à 10
for(let i=0; i<=10; i++){
    console.log(i);
}
//console.log(i); // => ça ne marche pas parce que i a été créée dans la boucle

// La boucle for pour afficher les valeurs d'un tableau
let monTableau=['rouge', 'vert', 'jaune', 'bleu', 8];

for(let i=0; i<monTableau.length;i++){
    console.log(i);
    console.log(monTableau[i]);
}


/**
 * Exercice :
 * soit un tableau etudiants[]
 * let etudiants=['adrien', 'hermine', 'kevin', 'antoine','maxime'];
 * avec une boucle, affichez dans la console tous les prénoms,
 *  avec la premiere lettre en majuscule
 * 
 * et ajoutez les dans un nouveau tableau appelé étudiantsMaj[];
 */

let etudiants=['adrien', 'hermine', 'kevin', 'antoine','maxime', 'lou'];
/*let etudiant1=etudiants[0];
etudiant1=etudiant1.charAt(0).toLocaleUpperCase() + etudiant1.substring(1,etudiant1.length);
console.log(etudiant1);*/

for(let i=0;i<etudiants.length;i++){
    let prenom=etudiants[i];
    prenom=prenom.charAt(0).toLocaleUpperCase()+prenom.substring(1,prenom.length);
    console.log(prenom);
}


/**
 * Exercice : 
 * Soit un tableau
 * let etudiants=['adrien', 'hermine', 'kevin', 'antoine','maxime', 'lou'];
 * 
 * Ecrivez une boucle pour afficher dans la console 'Bonjour adrien, hermine, etc...'
 * 
 */

let message='Bonjour';
for(let i=0;i<etudiants.length;i++){
    message+=' '+etudiants[i];
}
console.log(message);

// for of



//