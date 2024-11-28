import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
open() {
    this.popupElement.classList.add("profile__edit");
    document.addEventListener("keydown", this._handleEsClose);
  }
  close() {
    this.popupElement.classList.remove("profile__edit");
    document.removeEventListener("keydown", this._handleEsClose);
  }

  _handleEsClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  handleCliclOutside(evt) {
    return evt.target.classList.contains("profile__edit");
  }
  setEventListeners() {
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
    this.popupElement.addEventListener("click", (evt) => {
      if (this.handleCliclOutside(evt)) {
        this.close();
      }
    });
  }
}
