//alert('hop');

/**
 * Les chaînes de caractères (string)
 * à l'issu du cours, vous êtes capable de
 * 1) reconnaître une string (typeOf())
 * 2) de faire une concaténation
 * 3) javascript fait du transtyping (change le type d'une variable)
 * 4) prompt()
 * 5) charAt()
 * 6) string.lenght
 * 7) substring()
 * 8) toLocaleUpperCase()
 * 9) indexOf()
*/

// on crée la variable prenom
let prenom='Test';
// on crée la variable nom
let nom='Test';

// Une concaténation :
let message='Bonjour '+prenom;
console.log(message);

message='Bonjour '+prenom+' '+nom;
console.log(message)

// la fonction typeof() qui donne le type d'une variable
console.log(typeof(message));

// utiliser prompt() pour demander le prénom de l'utilisateur
let prenomUtilisateur=prompt('Quel est votre prénom ?');
// même chose pour le nom
let nomUtilisateur=prompt('Votre votre nom ?');
// on affiche dans la console : 
message='Bonjour '+prenomUtilisateur+' '+nomUtilisateur;
console.log(message);

// Application : mettre la première lettre en majuscule
// 1- on va récupérer la 1ere de prenomUtilisateur
// en utilisant charAt()
let premiereLettrePrenom=prenomUtilisateur.charAt(0);
console.log(premiereLettrePrenom);

// idem avec le nom
let premiereLettreNom=nomUtilisateur.charAt(0);
console.log(premiereLettreNom);

//2- On la passe en majscule avec toLocaleUpperCase();
let premiereLettrePrenomMaj=premiereLettrePrenom.toLocaleUpperCase();
console.log(premiereLettrePrenomMaj);

let premiereLettreNomMaj=premiereLettreNom.toLocaleUpperCase();
console.log(premiereLettreNomMaj);

// Substring(là où je commene, là où je m'arrete non compris)
console.log(prenomUtilisateur.substring(1,2));

// Pour récupérer la longueur d'une chaine, on utilise 
// length
console.log(prenomUtilisateur.length);

// Pour récupérer toute la chaine sauf le premier caractère :
let suitePrenomUtilisateur=prenomUtilisateur.substring(1,prenomUtilisateur.length)
// Afficher la premiere lettre en maj puis la suite 
console.log(premiereLettrePrenomMaj+suitePrenomUtilisateur);

let suiteNomUtilisateur=nomUtilisateur.substring(1,nomUtilisateur.length);
console

/**
 * Affichez dans la console : 'Bonjour prenom nom' en ayant passé
 * la premiere lettre du prénom en maj
 * la premiere lettre du nom en maj
 */

console.log('Bonjour '+premiereLettrePrenomMaj+suitePrenomUtilisateur+''+ premiereLettreNomMaj+ suiteNomUtilisateur)

// indexOff 
// ça renvoies la position du caractère et mis en paramétres, au sein d'une chaine 
// ça sert par exemple à checker si une adresse maill est valide 

let maill='test@test.com';
console.log(maill.indexOf('@'));

// Quand le caractère n'est pas trouvé ça vou renvoies -1
maill='testtest.com';
console.log(maill.indexOf('@'))





