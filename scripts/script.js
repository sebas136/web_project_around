
const main = document.querySelector("#main");
const editButton = main.querySelector(".profile__edit-button");
const editProfile = main.querySelector(".popup");
const closeButton = editProfile.querySelector(".popup__close");

function popupProfileToggle() {
  editProfile.classList.toggle("popup__opened");
  inputName.value = profileName.textContent;
  inputDescription.value = profileAbout.textContent;
  
}

function popupToggleNewCard() {

}

closeButton.addEventListener("click", popupProfileToggle);
editButton.addEventListener("click", popupProfileToggle);

const profileName = main.querySelector(".profile__name");
const profileAbout = main.querySelector(".profile__about");
const inputName = editProfile.querySelector(".popup__input_name");
const inputDescription = editProfile.querySelector(".popup__input_about");
const submitButton = editProfile.querySelector(".popup__submit");
const formProfile = editProfile.querySelector('form');

function changeForm(event) {
  event.preventDefault();
  const nameValue = inputName.value;
  const descriptionValue = inputDescription.value;
  const profileNameText = profileName.textContent;
  const profileAboutText = profileAbout.textContent;
  
}

formProfile.addEventListener("submit", changeForm);

submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputDescription.value;
  popupProfileToggle();
});
