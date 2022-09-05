import $ from "./jquery-selector.mjs";

export default class Dialog {
  constructor() {
    this._body = $("body");
    this._dialog = $(".dialog");

    this._setupCloseButton();
  }

  open() {
    this._body.setAttribute("data-dialog", "visibility");
  }

  _setupCloseButton() {
    this._dialog.lastElementChild.addEventListener("click", () => {
      this._body.removeAttribute("data-dialog");
    }, false);
  }
}
