export default class EmailSender {
  constructor(to, subject, message) {
    this._to = to;
    this._subject = subject;
    this._message = message;
  }

  send() {
    document.location.href
      = `mailto:${this._to}?subject=${this._subject}&body=${this._message}`;
  }
}
