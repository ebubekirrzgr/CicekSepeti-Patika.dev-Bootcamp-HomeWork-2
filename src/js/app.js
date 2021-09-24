/* eslint-disable eqeqeq */
/* eslint-disable vars-on-top */
/* eslint-disable array-callback-return */
/* Dog and Duck js imported */
import '../scss/app.scss';
import Dog from './dog.js';
import Duck from './duck.js';

// webpack'te imp edilcek import "../css/app.css";

/* New animals were created and added to the animal list */
const animalList = [
  { animal_1: new Duck('Duffy', 84, 'images/content/duck_duffy.jpg') },
  { animal_2: new Duck('Donald', 87, 'images/content/duck_donald.jpg') },
  { animal_3: new Dog('Spike', 81, 'images/content/dog_spike.png') },
  { animal_4: new Dog('Scooby Doo', 51, 'images/content/dog_scoobydoo.png') },
  { animal_5: new Dog('Rin Tin Tin', 75, 'images/content/dog_rintintin.jpg') },
  { animal_6: new Dog('Muttley', 52, 'images/content/dog_muttley.jpg') },
  { animal_7: new Dog('Snoopy', 71, 'images/content/dog_snoopy.jpg') },
  { animal_8: new Dog('Astro', 59, 'images/content/dog_astro.png') },
  { animal_9: new Dog('Oddie', 43, 'images/content/dog_odie.jpg') },
  { animal_10: new Dog('Droopy', 78, 'images/content/dog_droopy.jpg') },
];

/* The created animals were imported to a card and sent to HTML */
const cardList = document.querySelector('.animals');

animalList.map((item, index) => {
  const animal = item[`animal_${index + 1}`];
  const cards = document.createElement('div');
  cards.className = 'animal-card';

  cardList.innerHTML += `
  <div class="animal-card"> 
  <img class="animal-img" src="${animal.image}"/>
  <div class="__info">
  <div class="animate-info"> 
    <h1>${animal.name}</h1>
    <h2>${animal.age}</h2>        
    <img class="bc" src="images/content/cake.png"> 
  </div>      
<div class="paws">  
   ${
     animal.numberOfLegs === 4
       ? ` 
   <span><img class="paw" src="images/content/paw.png"></img></span>
   <span><img class="paw" src="images/content/paw.png"></img></span>
   <span><img class="paw" src="images/content/paw.png"></img></span>
   <span><img class="paw" src="images/content/paw.png"></img></span>`
       : `<span><img class="paw" src="images/content/paw.png"></img></span>
   <span><img class="paw" src="images/content/paw.png"></img></span>`
   }
  </div>
  </div>
 </div> 
     `;
});

/* Modal closure function */

var modal = document.getElementById('dingoModal');

var closebtn = document.getElementsByClassName('close')[0];

closebtn.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
