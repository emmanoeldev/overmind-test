const $toggleThemeCheckbox
  = $(".toggle-theme > input[type=checkbox]");

$toggleThemeCheckbox.addEventListener('change', function () {
  if (this.checked) {
    setTheme("theme.css");
    return;
  }
  setTheme("light");
})

const setTheme = (themeName) => {
  applyTransition()
  document.documentElement.setAttribute('data-theme', themeName);
}

const applyTransition = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
  }, 500)
}
