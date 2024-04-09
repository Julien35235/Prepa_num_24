//alert('hop');
/**
 * Les tableaux // array()
 * 1) création d'un tableau 
 * 2) Acceder aux données du tableau
 * 3) push() => ajoute une donnée, à la fin du tableau
 * 
 */

// Un tableau, c'est une variable qui contient plusieurs valeurs 
// on accede aux valeurs au travers de leurs postions dans le tableau 

let monTableau=['bleu','rouge','vert','jaune'];
// Pour afficher la valeur à l'index 2 :
console.log(monTableau[2]);

// push(), ajoutes une valeur à la fin du tableau 
monTableau.push('violet');
console.log(monTableau);

// pop(), supprime le dernier élément du tableau et ça le retournne 
console.log(monTableau.pop()); // ==> affiche 'violet'
console.log(monTableau);

// shift(), retourne le 1er élément du tableau et ça le supprime
console.log(monTableau.shift());
console.log(monTableau);

// unshift(), ajoute un ou des valeurs au début du tableau
monTableau.unshift('Taupe');
console.log(monTableau);

// length, retourne la longueur d'un tableau 
console.log(monTableau.length)
console.log(monTableau[monTableau.length-1]);
