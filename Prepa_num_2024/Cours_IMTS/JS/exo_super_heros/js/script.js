let myRequest=('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
fetch(myRequest)
    .then(
        // une fois que les données sont téléchargées, on les converti en json
      reponse=>reponse.json()
    )
    .then(
        // puis on les traite
        heroes=>{
          // 1) ajoutez dans la balise header, une balise h1 avec comme
          // contenu la valeur de squadName
          // Cibler ma balise header
          let myHeader=document.querySelector('header');
          // Créer un element h1
          let myH1=document.createElement('h1');
          // J'ajoute le contenu
          myH1.textContent=heroes.squadName;
          // j'ajoute mon h1 dans mon header
          myHeader.appendChild(myH1);


          /**
           * 2) toujours dans le header, ajoutez une balise p
           * avec comme contenu, la valeur de hometown plus celle formed
           * 
           */
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

          // je définis ma section
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
      }
  )
  .catch(
      // on intercepte les erreurs
      error=>console.log(error)
  );