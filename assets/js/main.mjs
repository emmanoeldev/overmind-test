import Form from "./form.mjs";
import Dialog from "./dialog.js";
import EmailSender from "./email-sender.js";

import "./toggle-theme.mjs";

const form = new Form();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.name;
  const email = form.email;
  const phone = form.phone;
  const password = form.password;

  const body = `Novo%20Cadastro%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0AInforma%C3%A7%C3%B5es%0A%E2%80%94%E2%80%94%E2%80%94%E2%80%94%E2%80%94%0A%0ANome%3A%20${name}%0AE-mail%3A%20${email}%0ATelefone%3A%20${phone}%0ASenha%3A%20${password}`;

  const emailSender = new EmailSender("dev.emmanoel@gmail.com", "Novo Cadastro", body);
  emailSender.send();
  new Dialog().open();
});
