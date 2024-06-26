const popUpProfile = document.querySelector("#popup-profile");
const popupCards = document.querySelector("#profile__add");
const profileButton= document.querySelector(".profile__add");
const btnEdit = document.querySelector(".profile__edit");
const btnCloseProfile = document.querySelector("#close-profile");
const profileNameInput = document.querySelector("#input-name");
const profileAboutInput = document.querySelector("#input-title");
const profileName = document.querySelector(".profile__info");
const profileAbout = document.querySelector(".profile__title");
const btnProfileSave = document.querySelector(".popup__button-save");
const formProfile = document.querySelector(".popup__form");
const formCards = document.querySelector ("#popup-add")
const popUpAdd = document.querySelector("#popup-add");
const btnAdd = document.querySelector(".profile__add");
const btnCloseAdd = document.querySelector("#close-add");
const template = document.querySelector(".template__elements")
const cardArea = document.querySelector(".cards");




const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function cardGenerator(name, link) {
  const card = template.cloneNode(true).content.querySelector(".cards__container");
  const cardImage = card.querySelector(".cards__place-image");
  const cardTitle = card.querySelector(".cards__text");
  const btnDelete = card.querySelector(".cards__delete");
  const btnLike = card.querySelector(".cards__like");
  btnLike.addEventListener("click", function(){
    btnLike.classList.toggle("cards__like-active");
  });
  
  btnDelete.addEventListener("click", function(){
    card.remove();
  });

  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  return card;
  }
  initialCards.forEach(function(element){
    const newCard = cardGenerator(element.name, element.link);
    cardArea.append(newCard);
  });

//open close profile profile
function openProfile() {
  popUpProfile.classList.toggle("popup__show");
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent;
}
function closeProfile() {
  popUpProfile.classList.remove("popup__show");
}

//Editar profile
function saveChanges(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  closeProfile();
}

btnEdit.addEventListener("click", openProfile);
btnCloseProfile.addEventListener("click", closeProfile);
formProfile.addEventListener("submit", saveChanges);

//open close add
function openAdd() {
  popUpAdd.classList.toggle("popup__show");
}
function closeAdd() {
  popUpAdd.classList.remove("popup__show");
}
btnAdd.addEventListener("click", openAdd);
btnCloseAdd.addEventListener("click", closeAdd);




formCards.addEventListener("submit", function (evt){
evt.preventDefault();

const inputTitle = document.querySelector("#input-img");
const inputLink = document.querySelector("#input-link");

const cardToAdd = cardGenerator(inputTitle.value , inputLink.value);
cardArea.prepend(cardToAdd);
popupCards.classList.remove("popup_show");
});