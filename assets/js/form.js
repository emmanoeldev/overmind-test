const $form = $("form");

let isValidForm = false;

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const $name = $("#name");
  const $email = $("#email");
  const $phone = $("#phone");
  const $password = $("#password");
  const $passwordConfirmation = $("#password_confirm");

  validate($name, $email, $phone, $password, $passwordConfirmation);

  const name = $name.value;
  const email = $email.value;
  const phone = $phone.value;
  const password = $password.value;

  const body = `Novo%20Cadastro%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0AInforma%C3%A7%C3%B5es%0A%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%0A%0ANome%3A%20${name}%0AE-mail%3A%20${email}%0ATelefone%3A%20${phone}%0ASenha%3A%20${password}`;

  if (isValidForm) {
    document.location.href
      = `mailto:contato@overmind.ai?subject=Novo%20Cadastro&body=${body}`;
    openDialog();
  }
});

const validate = ($name, $email, $phone, $password, $passwordConfirmation) => {
  validateInput($name, text => isValid(text));
  validateInput($email, text => isEmailValid(text));
  validateInput($phone, text => isValid(text, 11, 11));
  validateInput($password, text => isValid(text, 8));
  validateInput($passwordConfirmation, text => isEquals(text, $password.value));
}

const validateInput = (element, callback) => {
  const elementValue = element.value;
  const parentClassList = element.parentElement.classList;
  if (!callback(elementValue)) {
    isValidForm = false;
    parentClassList.add("invalid");
    return;
  }
  isValidForm = true;
  parentClassList.remove("invalid");
}

const isValid = (text, minLength = 1, maxLength = text.trim().length) => {
  const cleanText = text.trim();
  return !(cleanText.length < minLength || cleanText.length > maxLength);
}

const isEmailValid = (text) => {
  if (!isValid(text)) return false;
  const regexp = /[a-z0-9.]+@[a-z]+\.[a-z]{2,3}/;
  return regexp.test(text);
}

const isEquals = (text, textTwo) => {
  if (!isValid(text)) return false;
  return text === textTwo;
}
