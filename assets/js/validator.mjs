export const isValid = (text, minLength = 1, maxLength = text.trim().length) => {
  const cleanText = text.trim();
  return !(cleanText.length < minLength || cleanText.length > maxLength);
}

export const isEmailValid = (text) => {
  if (!isValid(text)) return false;
  const regexp = /[a-z0-9.]+@[a-z]+\.[a-z]{2,3}/;
  return regexp.test(text);
}

export const isEquals = (text, textTwo) => {
  if (!isValid(text)) return false;
  return text === textTwo;
}
