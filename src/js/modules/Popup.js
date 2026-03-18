class Popup {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.openBtn = null;
    this.popupClass = ".popup-block";
    this.closeBtnClass = ".close-popup";
  }

  init() {
    if (!this.holder) return;
    this.findElements();
    this.handleEvents();
  }

  findElements() {
    this.openBtn = document.querySelector(".open-popup");
  }

  handleEvents() {
    this.openBtn.addEventListener("click", (e) => {
      e.preventDefault();

      this.openPopup();
    });

    this.holder.addEventListener("click", (e) => {
      e.preventDefault();

      const isCloseBtn = e.target.closest(".close-popup");
      const isPopup = e.target.closest(".popup-block");

      if (isCloseBtn || !isPopup) {
        this.closePopup();
      }
    });
  }

  openPopup() {
    document.body.classList.add("popup-active");
  }

  closePopup() {
    document.body.classList.remove("popup-active");
  }
}

export const popup = new Popup(".popup");
