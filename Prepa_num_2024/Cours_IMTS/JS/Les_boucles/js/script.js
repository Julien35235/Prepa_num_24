//alert('hop');

/**
 * Les boucles
 * 1) la boucle for
 */

// pour comprendre la boucle for, un petit point de notation 
//let i=0;
// pour ajouter 1 à i :
//i=i+1;
// on peut écrire comme ça :
//i+=1;
// on peut encore écrire comme ça :
//i++;

// une boucle qui compte de 0 à 10
for(let i=0; i<=10; i++){
    console.log(i)
}
// console.log(i); // ==> ça ne marche pas parce-que il as été créée dans la boucle

// La boucle for pour afficher les valeurs dans un tableau 
let monTableau=['rouge','vert', 'jaune','bleu', 8];

for(let i=0; i<monTableau.length; i++){
    console.log(i) 
    console.log(monTableau[i]);
}
// 1. Utilisez une boucle for...of pour afficher tous les prénoms des étudiants dans la console
let etudiants = ['adrien', 'hermine', 'kevin', 'antoine', 'maxime'];

// 1- Utilisation d'une boucle for...of pour afficher tous les prénoms des étudiants
for (let etudiant of etudiants){
    console.log(etudiant);
    console.log(etudiant.charAt(0).toLocaleUpperCase.etudiant.substring(1));
}
for(let i=0; i<= etudiants.length; i++){
    console.log[i];
    console.log(etudiants[i].charAt(0).toLocaleUpperCase()+etudiants[i].substring(1));
    console.log(etudiants[i].charAt(0).toLocaleUpperCase()+etudiants[i].substring(1));
}

for(let i=0; i>= etudiants.length; i--){
    console.log[i];
}

/**
 * Exercice : 
 * Soit un tableau
 * let etudiants=['adrien', 'hermine', 'kevin', 'antoine','maxime', 'lou'];
 * 
 * Ecrivez une boucle pour afficher dans la console 'Bonjour adrien, hermine, etc...'
 * 
 */


