export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
    this.closeButton = this.popupElement.querySelector(".popup__close-button");
    this._handleEsClose = this._handleEsClose.bind(this);
  }
  open() {
    this.popupElement.classList.add("popup_show");
    document.addEventListener("keydown", this._handleEsClose);
  }
  close() {
    this.popupElement.classList.remove("popup_show");
    document.removeEventListener("keydown", this._handleEsClose);
  }

  _handleEsClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  handleCliclOutside(evt) {
    return evt.target.classList.contains("popup_show");
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
