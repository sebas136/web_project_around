import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._form = this.popupElement.querySelector(".popup__form");

    this._inputList = Array.from(this._form.querySelectorAll(".profile__edit"));
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.id] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
}
}