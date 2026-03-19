class Popup {
  constructor(selector, options = {}) {
    this.holder = document.querySelector(selector);

    this.openBtnClass = options.openBtn || ".open-popup";
    this.popupClass = options.popup || ".popup-block";
    this.closeBtnClass = options.closeBtn || ".close-popup";
  }

  init() {
    if (!this.holder) return;
    this.findElements();
    this.handleEvents();
  }

  findElements() {
    this.openBtn = document.querySelector(this.openBtnClass);
  }

  handleEvents() {
    if (this.openBtn) {
      this.openBtn.addEventListener("click", (e) => {
        e.preventDefault();

        this.openPopup();
      });
    }

    this.holder.addEventListener("click", (e) => {
      const isCloseBtn = e.target.closest(this.closeBtnClass);
      const isPopup = e.target.closest(this.popupClass);

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
