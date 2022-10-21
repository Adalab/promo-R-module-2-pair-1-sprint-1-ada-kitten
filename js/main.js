'use strict';


//crear la lista de gatitos en JS

const listKitten = document.querySelector('.js-list');
//constante de cada gatito

const kittenImage1 ="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName1 = 'Anastacio'.toUpperCase();
const kittenRace1 = '';
const kittenDesc1 = 'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste.  Es una maravilla acariciarle!';

const kittenImage2 ="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenName2 = 'Fiona'.toUpperCase();
const kittenRace2 = 'British Shorthair';
const kittenDesc2 = 'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste.  Es una maravilla acariciarle!';


const kittenImage3 ="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenName3 = 'Cielo'.toUpperCase();
const kittenRace3 = 'British Shorthair';
const kittenDesc3 = 'Risueño, cariñoso, le guta estar tranquilo y que nadie le moleste.  Es una maravilla acariciarle!';

//validar la raza

let html = '';

if (kittenRace1 === "") {
    html = `No se ha especificado la raza`;
  } else {
    html = kittenRace1;
  } 

const kittenOne = `<li class="card"><article> <img class="card_img" src= ${kittenImage1} alt="gatito"/> <h3 class="card_title">${kittenName1}</h3>  <h4 class="card_race">${html}</h4>  <p class="card_description">${kittenDesc1}</p></article></li>`;

if (kittenRace2 === "") {
    html = `No se ha especificado la raza`;
  } else {
    html = kittenRace2;
  } 

const kittenTwo = `<li class="card"><img class="card_img"src=${kittenImage2} alt="gatito"/><h3 class="card_title">${kittenName2}</h3><h4 class="card_race">${html}</h4><p class="card_description"> ${kittenDesc2}</p></li>`;

const kittenThree = `<li class="card"><img class="card_img"  src=${kittenImage3}  alt="gatito" /><h3 class="card_title">${kittenName3}</h3><h4 class="card_race">${kittenRace3 === "" ? "No se ha especificado la raza" : kittenRace3}</h4><p class="card_description">${kittenDesc3}</p></li>`;

// cambiamos el contenido de js-list (llamando a la constante)

listKitten.innerHTML = kittenOne + kittenTwo + kittenThree;


//búsqueda por descripción

const input_search_desc = document.querySelector('.js_in_search_desc');

/*input_search_desc.value = '';

const descrSearchText = input_search_desc.value;

if( kittenDesc1.includes(descrSearchText) ) {
    listKitten.innerHTML = kittenOne;
    }
    
    if( kittenDesc2.includes(descrSearchText) ) {
        listKitten.innerHTML = kittenTwo;
    }
    
    if( kittenDesc3.includes(descrSearchText) ) {
        listKitten.innerHTML = kittenThree;
    }*/

//Mostrar/ocultar el formulario

const formAddCat = document.querySelector('.js-new-form');
const btn = document.querySelector(".js-cross");

btn.addEventListener('click', () => {
    if (formAddCat.classList.contains("collapsed"))
    {formAddCat.classList.remove("collapsed")
    }
    else {formAddCat.classList.add("collapsed")};
});

//validar la información del formulario
const btnAdd = document.querySelector(".js-btn-add");
//const de los input
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
//mensaje de error
const labelMesageError = document.querySelector('.js-label-error');
//evento de click en añadir
btnAdd.addEventListener('click', () => {
    if ( valueDesc === "" )
