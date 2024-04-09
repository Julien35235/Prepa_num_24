//alert('hop')

/**
* Les structures conditionnelles
 * - les oprérateurs de comparaison
 * - et /ou
 */

// Une première variable 
let a=1;

// Une deuxième 
let b=3;

// Une troisième 
let c=1;

/**
 * if (condition à verifier){
 * le code à exécuter si la condition est vérifiée
 * }
 * else{
 * du code à exécuter si la condition n'est pas vérifiée
 * }
 */

// L'opérateur d'égalité ==
if(a==b){
    console.log('a est égal à b');
}
else{
    console.log('a est différent de b');
}
// L'opérateur de non égalité !=
if(a!=b){
    console.log('a est différent de b');
}
else{
    console.log('a est égal b');
}
// L'opérateur inférieur à < 
if(a<b){
    console.log('a est inférieur à b');
}

// L'opérateur supérieur à >
if(b>a){
    console.log('b est supérieur à a');
}

// Les opérateur supérieur ou égal >=
// inférieur ou égal <=

// L'opérateur d'égalité  stricte ==
let d=1;
if(a==d){
    console.log('ça marche');
    if(a===d){
        console.log('ça marche toujours');
 } 
// L'opérateur d'égalité de valeur et de même type

} // => ne marche pas

// L'opérateur de différence stricte !==
if(a!==d){
console.log('a n\'est pas strictement égale à d'); // l'antislash \ sert à échapper le caractère '
}
//||
