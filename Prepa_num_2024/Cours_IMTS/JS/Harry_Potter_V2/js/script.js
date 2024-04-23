// On choisi la route qui renvoie tous les personnages :
const myRequestAllCharacters='https://hp-api.onrender.com/api/characters';

// on cible tout de suite la balise id 'characters-potter' où on va afficher le contenu
const mainContent=document.querySelector('#characters-potter');

// Récupération des données :
fetch(myRequestAllCharacters)
    .then(
        response=>response.json()
    )
    .then(
        data=>{
            console.log(data);
            populate(data);
        }
    )
    .catch(
        error=>console.log(error)
    );

// La fonction qui créer une div pour chaque personnage :
/**
 * 
 * @param {array} charactersList 
 */
const populate=(charactersList)=>{
    for(let character of charactersList){
        // on crée un div par personnage
        let divCharacter=document.createElement('div');
        // on l'attache dans main content
        mainContent.appendChild(divCharacter);
        // on lui ajoute la class charsheet
        divCharacter.classList.add('charsheet');
        // on lui ajoute un id, qui correspond à l'id dans le json
        divCharacter.id=character.id;

        // On insère la photo de l'acteur :
        let imgCharacter=document.createElement('img');
        divCharacter.appendChild(imgCharacter);
         // s'il n'y a pas d'image renseignée, on en affiche une par défaut
        if(character.image==''){
            imgCharacter.src='../Harry_Potter_V2/img/default-img.jpg';
        }
        else{
            imgCharacter.src=character.image;
        }
        // On affiche le nom du personnage dans un h2
        let h2Character=document.createElement('h2');
        // on l'ajoute à myDiv
        divCharacter.appendChild(h2Character);
        // on ajoute son texte
        h2Character.innerHTML=character.name;
    }
}