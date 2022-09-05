import {isEmailValid, isEquals, isValid} from "./validator.mjs";
import $ from "./jquery-selector.mjs";

class Form {
  constructor() {
    this._valid = false;
    this._form = $("form");
    this._name = $("#name");
    this._email = $("#email");
    this._phone = $("#phone");
    this._password = $("#password");
    this._passwordConfirmation = $("#password_confirm");
  }

  _validate() {
    this._validateInputs(this._name, text => isValid(text));
    this._validateInputs(this._email, text => isEmailValid(text));
    this._validateInputs(this._phone, text => isValid(text, 11, 11));
    this._validateInputs(this._password, text => isValid(text, 8));
    this._validateInputs(this._passwordConfirmation, text => isEquals(text, this._password.value));
  }

  _validateInputs(element, callback) {
    const elementValue = element.value;
    const parentClassList = element.parentElement.classList;
    if (!callback(elementValue)) {
      this._valid = false;
      parentClassList.add("invalid");
      return;
    }
    this._valid = true;
    parentClassList.remove("invalid");
  }

  addEventListener(event, listener) {
    this._form.addEventListener(event, (e) => {
      e.preventDefault();
      this._validate();
      if (this._valid) {
        listener(e);
      }
    });
  }

  get name() {
    return this._name.value;
  }

  get email() {
    return this._email.value;
  }

  get phone() {
    return this._phone.value;
  }

  get password() {
    return this._password.value;
  }
}

export default Form;
