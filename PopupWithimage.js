import Popup from "./Popup.js";
export default class PopupWithimage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.imageElement = this.popupElement.querySelector(".popup__fullImg");
    this.titleElement = this.popupElement.querySelector(".popup__footer");
  }
  open(name, link) {
    super.open();
    this.titleElement.textContent = name;
    this.imageElement.src = link;
  }
}
