
const main = document.querySelector("#main");
const editButton = main.querySelector(".profile__edit-button");
const editProfile = main.querySelector(".popup");
const closeButton = editProfile.querySelector(".popup__close");

function popupToggle() {
  editProfile.classList.toggle("popup__opened");
  inputName.value = profileName.textContent;
  inputDescription.value = profileAbout.textContent;
  submitButton.disabled = true;
}

closeButton.addEventListener("click", popupToggle);
editButton.addEventListener("click", popupToggle);

const profileName = main.querySelector(".profile__name");
const profileAbout = main.querySelector(".profile__about");
const inputName = editProfile.querySelector(".popup__input_name");
const inputDescription = editProfile.querySelector(".popup__input_about");
const submitButton = editProfile.querySelector(".popup__submit");

function changeForm() {
  const nameValue = inputName.value;
  const descriptionValue = inputDescription.value;
  const profileNameText = profileName.textContent;
  const profileAboutText = profileAbout.textContent;
  const isAnyInputEmpty = nameValue === "" || descriptionValue === "";
  const hasChanged = nameValue !== profileNameText || descriptionValue !== profileAboutText;
  submitButton.disabled = !(hasChanged && !isAnyInputEmpty);
}

editProfile.addEventListener("input", changeForm);

submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputDescription.value;
  popupToggle();
});
